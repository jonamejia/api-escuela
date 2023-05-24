const pool = require("../src/db");

const getAllRequest = async (req, res, next) => {
  //Obtener todos los datos de una tabla
  try {
    const result = await pool.query("SELECT * FROM login");
    res.json(result.rows)
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  //insertar datos a una tabla
  try {
    console.log(req.body);
    const { primerNombre, segundoNombre, primerApellido, segundoApellido } = req.body;
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

module.exports = {
  getAllRequest,
  createUser,
  getRequest,
  deleteUser,
  updateUser,
};
