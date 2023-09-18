import { PasswordUiModel } from "../entities/PasswordUiModel";

export interface FindAllWithFilterPasswordRepository {
  execute(searchBy: string): Promise<PasswordUiModel[]>
}
