import "reflect-metadata";
import "dotenv/config"

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import "express-async-errors";

import * as functions from "firebase-functions";
import AppError from "../../errors/AppError";
import routes from "./routes";

import "../../container";

const app = express();

//app.use(rateLimiter);
app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message,
        });
    }

    return res.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});

export default functions.https.onRequest(app);