const pool = require("../src/db");

/*Metodos solo para lo que es login  */
const getAllRequest = async (req, res, next) => {
  //Obtener todos los datos de una tabla
  try {
    const result = await pool.query("SELECT * FROM login");
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  //insertar datos a una tabla
  try {
    console.log(req.body);
    const { primerNombre, segundoNombre, primerApellido, segundoApellido } =
      req.body;
    const result = await pool.query(
      "INSERT INTO usuario(primernombre, segundonombre, primerapellido, segundoapellido) VALUES ($1,$2,$3,$4)",
      [primerNombre, segundoNombre, primerApellido, segundoApellido]
    );
  } catch (error) {
    next(error);
  }
};

const getRequest = async (req, res, next) => {
  //obtener un usuario en especifico
  try {
    const { id } = req.params;
    const result = await pool.query("select * from login where id = $1", [id]);
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query("delete from login where id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "usuario no encontrado",
      });
    }

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { usuario, pass } = req.body;
    const result = await pool.query(
      "update login set usuario = $1, pass = $2 where id = $3",
      [usuario, pass, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "usuario no encontrado",
      });
    }
  } catch (error) {
    next(error);
  }
};
/*Metodos solo para lo que es login  */

/*Metodos solo para alumnos */
const obtenerDatosAlumno = async (req, res, next) => {
  try {
    const data = await pool.query("SELECT * FROM alumno");
    res.json(data.rows);
  } catch (error) {
    next(error);
  }
};

const insertarAlumnos = async (req, res, next) => {
  try {
    const { nombre_alumno, apellido_alumno, fecha_nacimiento, direccion } =
      req.body;
    console.log(nombre_alumno, apellido_alumno, fecha_nacimiento, direccion);

    const data = await pool.query(
      "INSERT INTO alumno(nombre_alumno, apellido_alumno, fecha_nacimiento, direccion) values ($1,$2,$3,$4)",
      [nombre_alumno, apellido_alumno, fecha_nacimiento, direccion]
    );
    res.json();
  } catch (error) {
    next(error);
  }
};

const eliminarAlumno = async (req, res, next) => {
  try {
    const { alumno_id } = req.params;
    const eliminar = await pool.query(
      "DELETE FROM alumno where alumno_id = $1",
      [alumno_id]
    );
    console.log(eliminar.json());
  } catch (error) {
    next(error);
  }
};

const obtenerAlumno = async (req, res, next) => {
  //obtener un usuario en especifico
  try {
    const { alumno_id } = req.params;
    const actualizar = await pool.query(
      "SELECT * FROM alumno WHERE alumno_id = $1",
      [alumno_id]
    );
    res.json(actualizar.rows[0]);
  } catch (error) {
    next(error);
  }
};

const actualizarAlumno = async (req, res, next) => {
  try {
    const { alumno_id } = req.params;
    const { nombre_alumno, apellido_alumno, fecha_nacimiento, direccion } =
      req.body;
    const actualizar = await pool.query(
      "UPDATE alumno SET nombre_alumno = $2, apellido_alumno = $3, fecha_nacimiento = $4, direccion = $5 WHERE alumno_id = $1",
      [alumno_id, nombre_alumno, apellido_alumno, fecha_nacimiento, direccion]
    );
    res.json();
  } catch (error) {
    next(error);
  }
};

//Maestros
const obtenerMaestroDatos = async (req, res, next) => {
  try {
    const data = await pool.query("SELECT * FROM maestros");
    res.json(data.rows);
  } catch (error) {
    next(error);
    console.log("Error al obetener maestros");
  }
};

const insertarMaestro = async (req, res, next) => {
  try {
    const { nombre_maestro, apellido_maestro, especialidad } = req.body;
    const data = await pool.query(
      "INSERT INTO maestros (nombre_maestro, apellido_maestro, especialidad)  VALUES ($1, $2,$3)",
      [nombre_maestro, apellido_maestro, especialidad]
    );

    res.json();
  } catch (error) {
    next(error);
  }
};

const eliminarMaestro = async (req, res, next) => {
  try {
    const { maestro_id } = req.params;
    const eliminar = await pool.query(
      "DELETE FROM maestros where maestro_id = $1",
      [maestro_id]
    );
  } catch (error) {
    next(error);
  }
};

const obtenerMaestro = async (req, res, next) => {
  //obtener un usuario en especifico
  try {
    const { maestro_id } = req.params;
    const actualizar = await pool.query(
      "SELECT * FROM maestros WHERE maestro_id = $1",
      [maestro_id]
    );
    res.json(actualizar.rows);
  } catch (error) {
    next(error);
  }
};

const actualizarMaestro = async (req, res, next) => {
  try {
    const { maestro_id } = req.params;
    const { nombre_maestro, apellido_maestro, especialidad } = req.body;
    const actualizar = await pool.query(
      "UPDATE maestros SET nombre_maestro= $2, apellido_maestro = $3, especialidad = $4 WHERE maestro_id = $1",
      [maestro_id, nombre_maestro, apellido_maestro, especialidad]
    );
    res.json();
  } catch (error) {
    next(error);
  }
};

const obtenerAlumnoMateria = async (req, res, next) => {
  try {
    console.log("Hola mundo!!");
    const resultado = await pool.query(
      "SELECT * FROM alumno JOIN alumno_materia  ON alumno.alumno_id = alumno_materia.alumno_id JOIN curso  ON curso.curso_id = alumno_materia.curso_id"
    );
    res.json(resultado.rows);
  } catch (error) {
    console.log("Error");
  }
};

//Horario
const obtenerHorario = async (req, res, next) => {
  try {
    const resultado = await pool.query("SELECT * FROM horario");
    res.json(resultado.rows);
  } catch (error) {
    console.log("Error al obtener los horarios");
  }
};

const obtenerCursos = async (req, res, next) => {
  try {
    const resultado = await pool.query("SELECT * FROM curso");
    res.json(resultado.rows);
  } catch (error) {
    next(error);
  }
};

const insertarMateria = async (req, res, next) => {
  try {
    const {alumno_id, curso_id} = req.body;
    const peticion = await pool.query("INSERT INTO alumno_materia (alumno_id, curso_id) VALUES ($1, $2)",[alumno_id, curso_id]);
    res.json(); 
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllRequest,
  createUser,
  getRequest,
  deleteUser,
  updateUser,
  obtenerDatosAlumno,
  insertarAlumnos,
  eliminarAlumno,
  obtenerAlumno,
  actualizarAlumno,
  obtenerMaestroDatos,
  obtenerMaestro,
  insertarMaestro,
  eliminarMaestro,
  actualizarMaestro,
  obtenerHorario,
  obtenerCursos,
  obtenerAlumnoMateria,
  insertarMateria
};
