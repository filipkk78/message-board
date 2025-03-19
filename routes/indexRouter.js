const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
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
indexRouter.get("/new", (req, res) => res.render("form"));
indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
