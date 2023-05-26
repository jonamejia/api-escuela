const { Router } = require("express");
const pool = require("../src/db.js");

const {
  getAllRequest,
  createUser,
  getRequest,
  deleteUser,
  updateUser,
  obtenerDatosAlumno,
  insertarAlumnos
} = require("../controllers/system.controller.js");

const router = Router();

router.get("/usuario", getAllRequest);
router.get("/usuario/:id", getRequest);
router.post("/usuario", createUser);
router.delete("/usuario/:id", deleteUser);
router.put("/usuario/:id", updateUser);


//Alumnos
router.get("/alumno", obtenerDatosAlumno);
router.post("/alumno", insertarAlumnos);

module.exports = router;
