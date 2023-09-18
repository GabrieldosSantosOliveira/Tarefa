import { PasswordUiModel } from "@/domain/entities/PasswordUiModel";
import { FindAllWithFilterPasswordRepository } from "@/domain/repositories/FindAllWithFilterPasswordRepository";

import { PasswordDto } from "../dtos/PasswordDto";
import { PasswordMapper } from "../mappers/PasswordMapper";
import { getRealm } from "../realm";

export class RealmFindAllWithFilterPasswordRepository implements FindAllWithFilterPasswordRepository {
  async execute(searchBy: string): Promise<PasswordUiModel[]> {
    const realm = await getRealm();
    const rawPassword = realm
      .objects<PasswordDto>('Password')
      .filtered(`application CONTAINS[c] "${searchBy}"`).filter((password) => password);
    return rawPassword.map(PasswordMapper.toDomain)
  }
}
