const express = require("express");
const router = express.Router();
const Todont = require("../models/models");
const amqp = require("amqplib");

router.post("/todont", async (req, res) => {
  const todont = req.body;

  res.status(200).json({ message: "Post Passed on to Queue" });

  try {
    const connection = await amqp.connect("amqp://user:password@rabbitmq:5672");
    const channel = await connection.createChannel();

    const queue = "todont_queue";

    await channel.assertQueue(queue, { durable: false });

    channel.sendToQueue(queue, Buffer.from(JSON.stringify(todont)));

    console.log("Todont sent to queue successfully!");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/todont", async (req, res) => {
  try {
    const todonts = await Todont.find({});

    res.status(200).json(todonts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/todont", async (req, res) => {
  try {
    const todont = await Todont.findByIdAndUpdate(
      req.body.id,
      { done: true },
      { new: true }
    );

    res.status(200).json(todont);
    console.log("Todont updated successfully!");
  } catch {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
