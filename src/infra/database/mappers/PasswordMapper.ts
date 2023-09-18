import { PasswordUiModel } from "@/domain/entities/PasswordUiModel";

import { PasswordDto } from "../dtos/PasswordDto";

export class PasswordMapper {
  static toDomain(realmPasswordDto: PasswordDto): PasswordUiModel {
    return {
      application: realmPasswordDto.application,
      createdAt: realmPasswordDto.createdAt,
      id: realmPasswordDto._id,
      identifier: realmPasswordDto.identifier,
      password: realmPasswordDto.password
    }
  }
  static toRealm(passwordDto: PasswordUiModel): PasswordDto {
    return {
      _id: passwordDto.id,
      application: passwordDto.application,
      createdAt: passwordDto.createdAt,
      identifier: passwordDto.identifier,
      password: passwordDto.password
    }
  }
}
