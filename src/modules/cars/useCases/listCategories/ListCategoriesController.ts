import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoryUseCase } from "@modules/cars/useCases/listCategories/ListCategoryUseCase";

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoryUseCase = container.resolve(ListCategoryUseCase);

    const allCategories = await listCategoryUseCase.execute();

    return response.json(allCategories);
  }
}

export { ListCategoriesController };
