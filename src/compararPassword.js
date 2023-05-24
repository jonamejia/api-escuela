// Importamos paquete
const bcrypt = require("bcryptjs");
// Este hash debe venir de tu base de datos, por ejemplo

const palabraSecretaHasheada =
  "$2a$10$aaO7/CEBZVczm/crK5KtC.fr7VK69LAuMmGeqT9nma0bT1wj30Pp2";
const palabraSecretaProporcionadaPorUsuario = "5250";
// Recuerda. Los argumentos son: texto plano, encriptada, y callback
const comparar = () => {
  bcrypt.compare(
    palabraSecretaProporcionadaPorUsuario,
    palabraSecretaHasheada,
    (err, coinciden) => {
      if (err) {
        console.log("Error comprobando:", err);
      } else {
        console.log("¿La contraseña coincide?: " + coinciden);
      }
    }
  );
};
export default comparar;