import { container } from "tsyringe";

import { IClassroomRepository, } from "../../modules/classroom/repositories/IClassroomRepository";
import ClassroomRepository from "../../modules/classroom/infra/firebase/repositories/ClassroomRepository";

container.registerSingleton<IClassroomRepository>(
    "ClassroomRepository",
    ClassroomRepository
);