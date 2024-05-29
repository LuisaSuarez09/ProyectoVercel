/* ---------------------------- Exporta el app.js --------------------------- */
/* ----------- El app de aqui en importar es el nombre de se puso en la app.js ---------- */
import app from "./src/app.js"

app.listen(app.get("port"))

console.log("Server on port", app.get("port"))