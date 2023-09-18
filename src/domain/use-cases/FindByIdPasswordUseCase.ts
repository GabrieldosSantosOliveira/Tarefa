import { PasswordUiModel } from "../entities/PasswordUiModel";

export interface FindByIdPasswordUseCase {
  execute(id: string): Promise<PasswordUiModel | null>
}
