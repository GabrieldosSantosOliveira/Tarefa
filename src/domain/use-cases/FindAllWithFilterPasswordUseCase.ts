import { PasswordUiModel } from "../entities/PasswordUiModel";

export interface FindAllWithFilterPasswordUseCase {
  execute(searchBy: string): Promise<PasswordUiModel[]>
}
