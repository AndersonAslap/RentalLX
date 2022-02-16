"use strict";

var _dayjs = _interopRequireDefault(require("dayjs"));

var _CarsRepositoryInMemory = require("../../../cars/repositories/in-memory/CarsRepositoryInMemory");

var _RentalsRepositoryInMemory = require("../../repositories/in-memory/RentalsRepositoryInMemory");

var _DayjsDateProvider = require("../../../../shared/container/providers/DateProvider/implemetations/DayjsDateProvider");

var _AppError = require("../../../../shared/errors/AppError");

var _CreateRentalUseCase = require("./CreateRentalUseCase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let rentalRepositoryInMemory;
let createRentalUseCase;
let dateProvider;
let carsRepositoryInMemory;
let car;
describe("Create Rental", () => {
  const dayAdd24Hours = (0, _dayjs.default)().add(1, "day").toDate();
  beforeEach(async () => {
    rentalRepositoryInMemory = new _RentalsRepositoryInMemory.RentalsRepositoryInMemory();
    carsRepositoryInMemory = new _CarsRepositoryInMemory.CarsRepositoryInMemory();
    dateProvider = new _DayjsDateProvider.DayjsDateProvider();
    createRentalUseCase = new _CreateRentalUseCase.CreateRentalUseCase(rentalRepositoryInMemory, dateProvider, carsRepositoryInMemory);
    car = await carsRepositoryInMemory.create({
      name: "Carro test",
      description: "Carro de corrida",
      license_plate: "license2022",
      daily_rate: 100,
      fine_amount: 40,
      category_id: "categoryId",
      brand: "brand"
    });
  });
  it("should be able to create a new rental for user", async () => {
    const rental = await createRentalUseCase.execute({
      user_id: "1",
      car_id: car.id,
      expected_return_date: dayAdd24Hours
    });
    expect(rental).toHaveProperty("id");
  });
  it("should be able to create a new rental if there is another open to the same user", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "1",
        car_id: car.id,
        expected_return_date: dayAdd24Hours
      });
      await createRentalUseCase.execute({
        user_id: "1",
        car_id: "3",
        expected_return_date: dayAdd24Hours
      });
    }).rejects.toBeInstanceOf(_AppError.AppError);
  });
  it("should be able to create a new rental if there is another open to the same car", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "1",
        car_id: car.id,
        expected_return_date: dayAdd24Hours
      });
      await createRentalUseCase.execute({
        user_id: "2",
        car_id: car.id,
        expected_return_date: dayAdd24Hours
      });
    }).rejects.toBeInstanceOf(_AppError.AppError);
  });
  it("should be able to create a new rental with invalid return time", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "1",
        car_id: car.id,
        expected_return_date: (0, _dayjs.default)().toDate()
      });
    }).rejects.toBeInstanceOf(_AppError.AppError);
  });
});