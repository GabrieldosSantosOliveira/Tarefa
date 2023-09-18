import { PasswordUiModel } from "../entities/PasswordUiModel";

export interface FindAllPasswordUseCase {
  execute(): Promise<PasswordUiModel[]>
}
