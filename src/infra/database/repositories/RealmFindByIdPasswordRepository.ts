import { PasswordUiModel } from "@/domain/entities/PasswordUiModel";
import { FindByIdPasswordRepository } from "@/domain/repositories/FindByIdPasswordRepository";

import { PasswordDto } from "../dtos/PasswordDto";
import { PasswordMapper } from "../mappers/PasswordMapper";
import { getRealm } from "../realm";

export class RealmFindByIdPasswordRepository implements FindByIdPasswordRepository {
  async execute(id: string): Promise<PasswordUiModel | null> {
    const realm = await getRealm()
    const rawPassword = realm.objectForPrimaryKey<PasswordDto>(
      'Password',
      id,
    );
    if (!rawPassword) {
      return null
    }
    return PasswordMapper.toDomain(rawPassword)
  }
}
