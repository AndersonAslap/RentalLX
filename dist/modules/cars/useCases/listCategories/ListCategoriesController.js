"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListCategoriesController = void 0;

var _tsyringe = require("tsyringe");

var _ListCategoryUseCase = require("@modules/cars/useCases/listCategories/ListCategoryUseCase");

class ListCategoriesController {
  async handle(request, response) {
    const listCategoryUseCase = _tsyringe.container.resolve(_ListCategoryUseCase.ListCategoryUseCase);

    const allCategories = await listCategoryUseCase.execute();
    return response.json(allCategories);
  }

}

exports.ListCategoriesController = ListCategoriesController;