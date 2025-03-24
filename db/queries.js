const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageById(desiredId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [
    desiredId,
  ]);
  return rows[0];
}

async function addMessage(author, content) {
  await pool.query(
    "INSERT INTO messages (author, content) VALUES (($1), ($2))",
    [author, content]
  );
  return;
}

module.exports = {
  getAllMessages,
  getMessageById,
  addMessage,
};
