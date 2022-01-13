import { getRepository, Repository } from "typeorm";

import {
  ISpecificationsRepository,
  ICreateSpecificationsDTO,
} from "@modules/cars/repositories/ISpecificationsRepository";

import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Repository<Specification>;

  constructor() {
    this.specifications = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationsDTO): Promise<void> {
    const specification = this.specifications.create({
      name,
      description,
    });

    await this.specifications.save(specification);
  }

  async list(): Promise<Specification[]> {
    const specifications = await this.specifications.find();
    return specifications;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.specifications.findOne({ name });
    return specification;
  }
}

export { SpecificationsRepository };
