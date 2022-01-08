import { Request, Response } from "express";

import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoriesController {
  private listCategoryUseCase: ListCategoryUseCase;

  constructor(listCategoryUseCase: ListCategoryUseCase) {
    this.listCategoryUseCase = listCategoryUseCase;
  }

  handle(request: Request, response: Response): Response {
    const allCategories = this.listCategoryUseCase.execute();
    return response.json(allCategories);
  }
}

export { ListCategoriesController };
