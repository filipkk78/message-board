const db = require("../db/queries");

async function submitMessage(req, res) {
  db.addMessage(req.body.messageUser, req.body.messageText);
  res.redirect("/");
}

module.exports = { submitMessage };
