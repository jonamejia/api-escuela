// Importamos paquete
const bcrypt = require("bcryptjs");
// Primero vamos a hashear la contraseña
const password = "5250";
// Entre más rondas, mejor protección, pero más consumo de recursos. 10 está bien
const rondasDeSal = 10;

const hashing = () => {
  bcrypt.hash(password, rondasDeSal, (err, encriptada) => {
    if (err) {
      console.log("Error hasheando:", err);
    } else {
      console.log("Y hasheada es: " + encriptada);
    }
  });
};

export default hashing;