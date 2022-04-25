import { inject, injectable } from "tsyringe";
import Classroom from "../infra/firebase/entities/Classroom";
import { IClassroomRepository } from "../repositories/IClassroomRepository";

interface IRequest {
    knowledgeArea: string;
    description: string;
    title: string;
}

@injectable()
class CreateClassroomService {
    constructor(@inject("ClassroomRepository")
    private classroomRepository: IClassroomRepository) {

    }

    public async execute({
        knowledgeArea, description, title
    }: IRequest): Promise<Classroom> {
        const classroom = await this.classroomRepository.create({ knowledgeArea, description, title });

        return classroom;
    }
}

export default CreateClassroomService;