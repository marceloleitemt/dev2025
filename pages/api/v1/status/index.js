import database from "../../../../infra/database.js";

async function statusHandler(req, res) {
  const result = await database.query("SELECT 1 + 1 AS result;");
  console.log("Database query result:", result.rows[0]);
  res.status(200).json({ status: "ok" });
}

export default statusHandler;
