const { Router } = require("express");
const pool = require("../src/db.js");
const {
  getAllRequest,
  createUser,
  getRequest,
  deleteUser,
  updateUser
} = require("../controllers/system.controller.js");

const router = Router();

router.get("/", getAllRequest);
router.get("/:id", getRequest);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
