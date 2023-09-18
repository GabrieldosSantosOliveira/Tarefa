import { PasswordUiModel } from "../entities/PasswordUiModel";

export interface FindAllPasswordRepository {
  execute(): Promise<PasswordUiModel[]>
}
