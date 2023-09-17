import { GenerateUUID } from "@/domain/gateways/uuid/GenerateUUID";
import { SavePasswordDto, SavePasswordRepository } from "@/domain/repositories/SavePasswordRepository";

import { PasswordDto } from "../dtos/PasswordDto";
import { RealmService } from "../RealmService";

export class RealmSavePasswordRepository implements SavePasswordRepository {
  constructor(private readonly generateUUID: GenerateUUID) { }
  async create(data: SavePasswordDto): Promise<void> {
    const uuid = await this.generateUUID.randomUUID()
    const realm = await RealmService.getInstance()
    realm.write(() => {
      realm.create<PasswordDto>('Password', {
        _id: uuid,
        application: data.application,
        identifier: data.identifier,
        created_at: new Date(),
        password: data.password,
      });
    });
  }
}
