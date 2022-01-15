import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./listAvailableCarsUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let listCarsUseCase: ListAvailableCarsUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    carsRepositoryInMemory.create({
      name: "Carro 1",
      description: "Carro de corrida",
      daily_rate: 100,
      license_plate: "ABDC-2002",
      fine_amount: 60,
      brand: "Audi",
      category_id: "aef7347e-2273-4657-a9e5-6276172065bf",
    });

    carsRepositoryInMemory.create({
      name: "Carro 2",
      description: "Carro de corrida",
      daily_rate: 100,
      license_plate: "ABDE-2002",
      fine_amount: 60,
      brand: "Audi",
      category_id: "aef7347e-2273-4657-a9e5-6276172065bf",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toHaveLength(2);
  });

  it("should be bale to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Carro 3",
      description: "Carro de corrida",
      daily_rate: 100,
      license_plate: "ABDF-2002",
      fine_amount: 60,
      brand: "Camaro",
      category_id: "aef7347e-2273-4657-a9e5-6276172065bf",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Camaro",
    });

    expect(cars).toEqual([car]);
  });

  it("should be bale to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Carro 4",
      description: "Carro de corrida",
      daily_rate: 100,
      license_plate: "ABDG-2002",
      fine_amount: 60,
      brand: "Camaro",
      category_id: "aef7347e-2273-4657-a9e5-6276172065bf",
    });

    const cars = await listCarsUseCase.execute({
      name: "Carro 4",
    });

    expect(cars).toEqual([car]);
  });

  it("should be bale to list all available cars by category_id", async () => {
    carsRepositoryInMemory.create({
      name: "Carro 4",
      description: "Carro de corrida",
      daily_rate: 100,
      license_plate: "ABDG-2002",
      fine_amount: 60,
      brand: "Camaro",
      category_id: "aef7347e-2273-4657-a9e5-6276172065bf",
    });

    const cars = await listCarsUseCase.execute({
      category_id: "aef7347e-2273-4657-a9e5-6276172065bf",
    });

    expect(cars).toHaveLength(1);
  });
});
