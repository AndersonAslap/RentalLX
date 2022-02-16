"use strict";

var _CategoriesRepositoryInMemory = require("@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory");

var _CreateCategoryUseCase = require("@modules/cars/useCases/createCategory/CreateCategoryUseCase");

var _AppError = require("@shared/errors/AppError");

let category;
describe("Create Category", () => {
  let createCategoryUseCase;
  let categoriesRepositoryInMemory;
  beforeEach(() => {
    categoriesRepositoryInMemory = new _CategoriesRepositoryInMemory.CategoriesRepositoryInMemory();
    createCategoryUseCase = new _CreateCategoryUseCase.CreateCategoryUseCase(categoriesRepositoryInMemory);
    category = {
      name: "Category Test",
      description: "Category description Test"
    };
  });
  it("should be able to create a new category", async () => {
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description
    });
    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);
    expect(categoryCreated).toHaveProperty("id");
  });
  it("should be able to create a new category with name exists", async () => {
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description
    });
    await expect(createCategoryUseCase.execute({
      name: category.name,
      description: category.description
    })).rejects.toEqual(new _AppError.AppError("Category already exists!"));
  });
});