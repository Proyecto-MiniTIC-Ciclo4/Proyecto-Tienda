const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product")
//const carRoute = require("./routes/car")
//const compraRoute = require("./routes/compra")


const app = express();
const port = process.env.PORT || 3100 ;


app.use(express.json());
app.use("/api",productRoute);
//app.use("/api", carRoute);
//app.use("/api",compraRoute);

//Rutas

app.get("/",(req,res)=>{
    res.send("Coneccion exitosa")
})

//Conexion a DB mongo
mongoose
.connect("mongodb+srv://admin:clave123@tiendainfomratica.yrx2ggw.mongodb.net/Tienda?retryWrites=true&w=majority")
.then(()=>console.log("Conectado a la base de datos mongo"))
.catch((error)=>console.error(error))


//Llamado al servidor
app.listen(port,()=> console.log("Aplicacion funcionando en el puerto: ", port))

