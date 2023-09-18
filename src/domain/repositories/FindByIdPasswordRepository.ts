import { PasswordUiModel } from "../entities/PasswordUiModel";

export interface FindByIdPasswordRepository {
  execute(id: string): Promise<PasswordUiModel | null>
}
