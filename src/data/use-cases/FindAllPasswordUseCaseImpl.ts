import { PasswordUiModel } from "@/domain/entities/PasswordUiModel";
import { FindAllPasswordRepository } from "@/domain/repositories/FindAllPasswordRepository";
import { FindAllPasswordUseCase } from "@/domain/use-cases/FindAllPasswordUseCase";

export class FindAllPasswordUseCaseImpl implements FindAllPasswordUseCase {
  constructor(private readonly findAllPasswordRepository: FindAllPasswordRepository) { }
  async execute(): Promise<PasswordUiModel[]> {
    return this.findAllPasswordRepository.execute()
  }
}
