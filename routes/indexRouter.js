const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const { Router } = require("express");
const express = require("express");

const indexRouter = Router();
indexRouter.use(express.urlencoded({ extended: true }));

indexRouter.get("/", (req, res) => res.render("index", { messages: messages }));
indexRouter.get("/messages/:messageId", (req, res) => {
  const { messageId } = req.params;
  const message = messages[messageId - 1];
  if (!message) {
    res.send("Message with this id hasn't been found");
  } else {
    res.render("details", { msg: message });
  }
  return;
});
indexRouter.get("/new", (req, res) => res.render("form"));
indexRouter.post("/new", (req, res) => {
  messages.push({
    id: messages.length + 1,
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
