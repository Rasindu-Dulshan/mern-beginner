import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import notesRoutes from "./routes/notesRoutes.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const Port = process.env.PORT || 5001;

// middlewares
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // this middleware will parse the JSON bodies: req.body

//coustom middleware
// app.use((req, res, next) => {
//     console.log(req.url, req.method);
//     next();
// });
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(Port, () => console.log("Server is running on port 5001"));
});
