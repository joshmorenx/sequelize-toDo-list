import Task from "../models/Task";
import { Request, Response } from "express";

export default function CreateFirstTask(req: Request, res: Response) {
    try {
        Task.create({ title: "Mi primera tarea", description: "Mi primera tarea" }).then((task) => {
            res.send(task);
        });
    } catch (error) {
        console.log(error);
    }
}