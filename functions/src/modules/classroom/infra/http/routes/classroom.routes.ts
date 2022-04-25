import { Router } from "express";
import ClassroomController from "../controllers/ClassroomController";

const classroomRoutes = Router();
const classroomController = new ClassroomController();

classroomRoutes.post("/", classroomController.create);

export default classroomRoutes;