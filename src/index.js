import express from "express";
import { Server as HttpServer } from "http";
import { Server as IOServer } from "socket.io";

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);


app.use(express.static("public"));

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ************** desarrollo del chat con websocker *************

const mensajes = [
  { author: "Bruno Pérez", text: "¡Hola! Bienvenid@" },

];
;


io.on("connection", async (socket) => {
  console.log(`Nuevo cliente conectado ${socket.id}`);

  /* envío los mensajes al cliente que se conectó*/
  socket.emit('mensajes', mensajes);

  /* escucho los mensajes enviados por el cliente */
  socket.on('nuevoMensaje', mensaje =>{
      mensajes.push(mensaje)
      io.sockets.emit('mensajes', mensajes);
  })

})






const server = httpServer.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
server.on("error", (error) => {
  console.error(`Error en el servidor ${error}`);
});