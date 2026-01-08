import database from "../../../../infra/database.js";

function statusHandler(req, res) {
  res.status(200).json({ status: "ok" });
}

export default statusHandler;
