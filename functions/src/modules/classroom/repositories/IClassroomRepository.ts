import { ICreateClassroomDTO } from "../dtos/ICreateClassroomDTO";
import Classroom from "../infra/firebase/entities/Classroom";

interface IClassroomRepository {
    create({ knowledgeArea, description, title }: ICreateClassroomDTO): Promise<Classroom>;
}

export { IClassroomRepository }