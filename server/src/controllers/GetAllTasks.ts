import Task from "../models/Task";
import { Request, Response } from "express";
import sequelize from "../config/database";

export default function GetAllTasks(req: Request, res: Response) {
    try {
        Task.findAll().then((tasks) => {
            res.send(tasks);
        });
    } catch (error) {
        console.log(error);
    }
}