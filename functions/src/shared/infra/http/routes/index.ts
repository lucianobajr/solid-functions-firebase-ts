import { Router } from "express";
import classroomRoutes from "../../../../modules/classroom/infra/http/routes/classroom.routes";

const routes = Router();

routes.use("/classroom",classroomRoutes)

export default routes;