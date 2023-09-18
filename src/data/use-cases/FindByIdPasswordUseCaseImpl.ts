import { PasswordUiModel } from "@/domain/entities/PasswordUiModel";
import { FindByIdPasswordRepository } from "@/domain/repositories/FindByIdPasswordRepository";
import { FindByIdPasswordUseCase } from "@/domain/use-cases/FindByIdPasswordUseCase";


export class FindByIdPasswordUseCaseImpl implements FindByIdPasswordUseCase {
  constructor(private readonly findByIdPasswordRepository: FindByIdPasswordRepository) { }
  async execute(id: string): Promise<PasswordUiModel | null> {
    return await this.findByIdPasswordRepository.execute(id)
  }
}
