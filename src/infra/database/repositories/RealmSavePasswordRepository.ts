import { GenerateUUID } from "@/domain/gateways/uuid/GenerateUUID";
import { SavePasswordDto, SavePasswordRepository } from "@/domain/repositories/SavePasswordRepository";

import { PasswordDto } from "../dtos/PasswordDto";
import { getRealm } from "../realm";

export class RealmSavePasswordRepository implements SavePasswordRepository {
  constructor(private readonly generateUUID: GenerateUUID) { }
  async create(data: SavePasswordDto): Promise<void> {
    const uuid = await this.generateUUID.randomUUID()
    const realm = await getRealm()
    realm.write(() => {
      realm.create<PasswordDto>('Password', {
        _id: uuid,
        application: data.application,
        identifier: data.identifier,
        createdAt: new Date(),
        password: data.password,
      });
    });
  }
}
