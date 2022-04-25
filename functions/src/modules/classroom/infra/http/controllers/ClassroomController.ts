import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateClassroomService from "../../../services/CreateClassroomService";

export default class ClassroomController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { knowledgeArea, description, title } = req.body;

        const createClassroomService = container.resolve(CreateClassroomService);

        const classroom = await createClassroomService.execute({
            knowledgeArea, description, title
        });

        return res.status(201).json(classroom);
    }
}