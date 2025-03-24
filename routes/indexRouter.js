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
const { getMessages } = require("../controllers/getMessages.js");
const { searchMessages } = require("../controllers/searchMessages.js");

const indexRouter = Router();
indexRouter.use(express.urlencoded({ extended: true }));

indexRouter.get("/", getMessages);
indexRouter.get("/messages/:messageId", searchMessages);
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
