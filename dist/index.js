"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const socketPort = 8080;
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true,
    },
});
io.on("connection", (socket) => {
    console.log("Connected on socket port", socketPort, "\n");
    socket.on("chat", (arg) => {
        // if (Object.keys(arg).length != 0) {
        socket.broadcast.emit("chat", arg);
        console.log(arg);
        // }
    });
    // console.log(socket);
});
httpServer.listen(socketPort, () => console.log("this is running on " + socketPort));
