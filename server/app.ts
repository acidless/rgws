import express from "express";
import projectsRouter from "./routes/projectRoutes";
import technologiesRouter from "./routes/technologyRoutes";
import handlerError from "./utils/errorHandler";
import messageRoutes from "./routes/messageRoutes";
import createRateLimiter from "./utils/rateLimiter";

/*====================*/

const server = express();
server.use(express.json());
server.use(createRateLimiter({ maxQueries: 20, time: 1000 * 60, methods: ["PUT", "POST", "PATCH", "DELETE"] }));

/*====================*/

const API = express.Router();

server.use("/api", API);

API.use("/messages", messageRoutes);
API.use("/projects", projectsRouter);
API.use("/technologies", technologiesRouter);

server.use(handlerError);

/*====================*/

export default server;
