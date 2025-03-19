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

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.render("index", { messages: messages }));
indexRouter.get("/new", (req, res) => res.render("form"));

module.exports = indexRouter;
