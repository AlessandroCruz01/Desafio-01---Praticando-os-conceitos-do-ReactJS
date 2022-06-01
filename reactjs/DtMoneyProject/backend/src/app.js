import express from "express";
import { db } from "../config/connectDb.js";
import routes from "./routes/index.js";
import cors from "cors";

db.on("error", console.log.bind(console, "Error in connection"));
db.once("open", () => {
	console.log("Conectado ao Db");
});

export const app = express();
app.use(express.json());
app.use(cors());
routes(app);
