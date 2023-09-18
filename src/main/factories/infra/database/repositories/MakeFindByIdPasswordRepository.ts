import { RealmFindByIdPasswordRepository } from "@/infra/database/repositories/RealmFindByIdPasswordRepository";

export const MakeFindByIdPasswordRepository = () => new RealmFindByIdPasswordRepository()
