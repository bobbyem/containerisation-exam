const amqp = require("amqplib");
const Todont = require("../models/models");

async function connectWithRetry() {
  let retries = 5;
  while (retries) {
    try {
      const connection = await amqp.connect(
        "amqp://user:password@rabbitmq:5672"
      );
      console.log("Connected to RabbitMQ");
      return connection;
    } catch (error) {
      console.error("Failed to connect to RabbitMQ, retrying...", error);
      retries -= 1;
      await new Promise((res) => setTimeout(res, 5000)); // Wait 5 seconds before retrying
    }
  }
  throw new Error("Could not connect to RabbitMQ");
}

async function consume() {
  try {
    const connection = await connectWithRetry();
    const channel = await connection.createChannel();

    const queue = "todont_queue";

    await channel.assertQueue(queue, { durable: false });

    channel.consume(queue, async (msg) => {
      const todont = JSON.parse(msg.content.toString());
      console.log("Received todont", todont);

      const newTodont = new Todont({
        title: todont.title,
        done: false,
      });

      await newTodont.save();

      console.log("Todont saved", newTodont);

      channel.ack(msg);
    });
  } catch (error) {
    console.error("Failed to consume message", error);
  }
}

module.exports = consume;
