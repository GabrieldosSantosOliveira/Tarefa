import { PasswordUiModel } from "@/domain/entities/PasswordUiModel";
import { FindAllWithFilterPasswordRepository } from "@/domain/repositories/FindAllWithFilterPasswordRepository";
import { FindAllWithFilterPasswordUseCase } from "@/domain/use-cases/FindAllWithFilterPasswordUseCase";

export class FindAllWithFilterPasswordUseCaseImpl implements FindAllWithFilterPasswordUseCase {
  constructor(private readonly findAllWithFilterPasswordRepository: FindAllWithFilterPasswordRepository) { }
  async execute(searchBy: string): Promise<PasswordUiModel[]> {
    return await this.findAllWithFilterPasswordRepository.execute(searchBy)
  }
}
