import { RealmFindAllWithFilterPasswordRepository } from "@/infra/database/repositories/RealmFindAllWithFilterPasswordRepository";

export const MakeFindAllWithFilterPasswordRepository = () => new RealmFindAllWithFilterPasswordRepository()
