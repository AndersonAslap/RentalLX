import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationControlle = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationControlle.handle);

export { specificationsRoutes };
