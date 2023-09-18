import { PasswordUiModel } from "@/domain/entities/PasswordUiModel";
import { FindAllPasswordRepository } from "@/domain/repositories/FindAllPasswordRepository";

import { PasswordMapper } from "../mappers/PasswordMapper";
import { getRealm } from "../realm";
import { PasswordDto as RealmPasswordDto } from './../dtos/PasswordDto'
export class RealmFindAllPasswordRepository implements FindAllPasswordRepository {
  async execute(): Promise<PasswordUiModel[]> {
    const realm = await getRealm();
    const rawPassword = realm.objects<RealmPasswordDto>('Password').filter((password) => password);
    return rawPassword.map(PasswordMapper.toDomain)
  }
}
