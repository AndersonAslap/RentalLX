"use strict";

var _CarsRepositoryInMemory = require("../../repositories/in-memory/CarsRepositoryInMemory");

var _SpecificationsRepositoryInMemory = require("../../repositories/in-memory/SpecificationsRepositoryInMemory");

var _AppError = require("../../../../shared/errors/AppError");

var _CreateCarSpecificationUseCase = require("./CreateCarSpecificationUseCase");

let carsRepositoryInMemory;
let createCarSpecificationUseCase;
let specificationsRepositoryInMemory;
describe("Create Cas Specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new _CarsRepositoryInMemory.CarsRepositoryInMemory();
    specificationsRepositoryInMemory = new _SpecificationsRepositoryInMemory.SpecificationsRepositoryInMemory();
    createCarSpecificationUseCase = new _CreateCarSpecificationUseCase.CreateCarSpecificationUseCase(carsRepositoryInMemory, specificationsRepositoryInMemory);
  });
  it("should be able to add a new specification to a now-existent car", async () => {
    expect(async () => {
      const car_id = "1234";
      const specifications_id = ["546234"];
      await createCarSpecificationUseCase.execute({
        car_id,
        specifications_id
      });
    }).rejects.toBeInstanceOf(_AppError.AppError);
  });
  it("should be able to add a new specification to the car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "brand",
      category_id: "category"
    });
    const specification = await specificationsRepositoryInMemory.create({
      name: "Test",
      description: "Test"
    });
    const specifications_id = [specification.id];
    const carsSpecifations = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id
    });
    expect(carsSpecifations).toHaveProperty("specifications");
    expect(carsSpecifations.specifications.length).toBe(1);
  });
});