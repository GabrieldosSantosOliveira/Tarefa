import { RealmFindAllPasswordRepository } from "@/infra/database/repositories/RealmFindAllPasswordRepository";

export const MakeFindAllPasswordRepository = () => new RealmFindAllPasswordRepository()
