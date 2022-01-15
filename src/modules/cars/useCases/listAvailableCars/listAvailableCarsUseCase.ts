import { inject, injectable } from "tsyringe";

import { IListCarsDTO } from "@modules/cars/dtos/IListCarsDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

@injectable()
class ListAvailableCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({ brand, name, category_id }: IListCarsDTO): Promise<Car[]> {
    const carsAvailable = await this.carsRepository.findAvailable({
      brand,
      name,
      category_id,
    });
    return carsAvailable;
  }
}

export { ListAvailableCarsUseCase };
