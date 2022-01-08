import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";

const specificationsRouter = Router();

specificationsRouter.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

export { specificationsRouter };
