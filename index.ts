import express, { Express } from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const app: Express = express();
const httpServer = createServer(app);
const socketPort: number = 8080;
const io: Server = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket: Socket) => {
  console.log("Connected on socket port", socketPort, "\n");
  socket.on("chat", (arg) => {
    // if (Object.keys(arg).length != 0) {
    socket.broadcast.emit("chat", arg);
    console.log(arg);
    // }
  });
  // console.log(socket);
});

httpServer.listen(socketPort, () =>
  console.log("this is running on " + socketPort)
);
