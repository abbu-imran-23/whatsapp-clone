import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes.js"

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/auth", AuthRoutes);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT}`);
})

