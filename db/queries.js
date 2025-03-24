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

module.exports = {
  getAllMessages,
  getMessageById,
};
