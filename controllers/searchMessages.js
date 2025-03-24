const db = require("../db/queries");

async function searchMessages(req, res) {
  const { messageId } = req.params;
  const message = await db.getMessageById(messageId);
  if (!message) {
    res.send("Message with this id hasn't been found");
  } else {
    res.render("details", { msg: message });
  }
  return;
}

module.exports = { searchMessages };
