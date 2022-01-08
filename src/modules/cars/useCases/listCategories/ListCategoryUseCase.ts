import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repositories/CategoriesRepository";

class ListCategoryUseCase {
  private categoriesRepository: CategoriesRepository;

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export { ListCategoryUseCase };
