const pool = require("../database"); 

async function getInventoryById(invId) {
  const sql = `SELECT * FROM inventory WHERE inv_id = $1`;
  const data = await pool.query(sql, [invId]);
  return data.rows[0];
}

module.exports = { getInventoryById };
