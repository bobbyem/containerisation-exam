const amqp = require("amqplib");
const Todont = require("../models/models");

async function consume() {
  try {
    const connection = await amqp.connect("amqp://user:password@rabbitmq:5672");
    const channel = await connection.createChannel();

    const queue = "todont_queue";

    await channel.assertQueue(queue, { durable: false });

    channel.consume(queue, async (msg) => {
      const todont = JSON.parse(msg.content.toString());
      console.log("Recieved todont", todont);

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
