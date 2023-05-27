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

//Usuarios || Login
router.get("/login", getAllRequest);
router.get("/login:id", getRequest);
router.post("/login", createUser);
router.delete("/login/:id", deleteUser);
router.put("/login/:id", updateUser);


//Alumnos
router.get("/alumno", obtenerDatosAlumno);
router.post("/alumno", insertarAlumnos);



//Cursos
// router.get("/curso", obtenerCursos);
// router.post("/curso", insertarCurso);

module.exports = router;
