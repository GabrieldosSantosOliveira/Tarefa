import { SavePasswordRepository } from "@/domain/repositories/SavePasswordRepository";
import { SavePasswordDto, SavePasswordUseCase } from "@/domain/use-cases/SavePasswordUseCase";

export class SavePasswordUseCaseImpl implements SavePasswordUseCase {
  constructor(private readonly savePasswordRepository: SavePasswordRepository) { }
  async execute(data: SavePasswordDto): Promise<void> {
    await this.savePasswordRepository.create(data)
  }
}
