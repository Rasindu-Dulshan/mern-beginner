import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const Port = process.env.PORT || 5001;
connectDB();

// middlewares
app.use(express.json()); // this middleware will parse the JSON bodies: req.body

//coustom middleware
// app.use((req, res, next) => {
//     console.log(req.url, req.method);
//     next();
// });

app.use("/api/notes", notesRoutes);

app.listen(Port, () => console.log("Server is running on port 5001"));
