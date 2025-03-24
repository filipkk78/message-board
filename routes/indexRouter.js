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
const { renderForm } = require("../controllers/renderForm.js");
const { submitMessage } = require("../controllers/submitMessage.js");
const { render } = require("ejs");

const indexRouter = Router();
indexRouter.use(express.urlencoded({ extended: true }));

indexRouter.get("/", getMessages);
indexRouter.get("/messages/:messageId", searchMessages);
indexRouter.get("/new", renderForm);
indexRouter.post("/new", submitMessage);

module.exports = indexRouter;
