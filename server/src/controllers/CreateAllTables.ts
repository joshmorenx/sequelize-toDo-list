import User from "../models/User";
import Task from "../models/Task";
import { Request, Response } from "express";

export default function CreateAllTables(req: Request, res: Response) {
    try {
        User.sync();
        Task.sync();
        res.status(200).json({ response: 'All tables created' })    
    } catch (error) {
        console.log(error);
    }
}
