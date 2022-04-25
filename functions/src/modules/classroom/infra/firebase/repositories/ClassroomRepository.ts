import { ICreateClassroomDTO } from "modules/classroom/dtos/ICreateClassroomDTO";
import { IClassroomRepository } from "modules/classroom/repositories/IClassroomRepository";
import Classroom from "../entities/Classroom";

import { db } from "../../../../../shared/infra/firebase"

class ClassroomRepository implements IClassroomRepository {
    private classroomReference: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;

    constructor() {
        this.classroomReference = db.collection("classroom");
    }

    public async create({ knowledgeArea, description, title }: ICreateClassroomDTO): Promise<Classroom> {
        const newClassroom: Classroom = { knowledgeArea, description, title }

        await this.classroomReference.add(newClassroom)

        return newClassroom;
    }
}

export default ClassroomRepository;