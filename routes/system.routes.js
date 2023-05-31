const { Router } = require("express");
const pool = require("../src/db.js");

const {
  getAllRequest,
  createUser,
  getRequest,
  deleteUser,
  updateUser,
  obtenerDatosAlumno,
  insertarAlumnos,
  eliminarAlumno,
  actualizarAlumno,
  obtenerAlumno,
  obtenerMaestroDatos,
  insertarMaestro,
  eliminarMaestro,
  obtenerMaestro,
  actualizarMaestro,
  obtenerHorario,
  obtenerCursos,
  obtenerAlumnoMateria,
  insertarMateria
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
router.get("/alumno/:alumno_id", obtenerAlumno);
router.put("/alumno/:alumno_id", actualizarAlumno);
router.post("/alumno", insertarAlumnos);
router.delete("/alumno/:alumno_id", eliminarAlumno);

//Maestros
router.get("/maestro", obtenerMaestroDatos);
router.get("/maestro/:maestro_id", obtenerMaestro);
router.put("/maestro/:maestro_id", actualizarMaestro);
router.post("/maestro", insertarMaestro);
router.delete("/maestro/:maestro_id", eliminarMaestro);

//Horarios
router.get("/horario", obtenerHorario);

//Cursos
router.get("/cursos", obtenerCursos);
router.get("/cursos/alumno", obtenerAlumnoMateria);
router.post("/cursos", insertarMateria)


//Cursos
// router.get("/curso", obtenerCursos);
// router.post("/curso", insertarCurso);

module.exports = router;
