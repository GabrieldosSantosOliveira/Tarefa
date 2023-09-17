import { RealmSavePasswordRepository } from "@/infra/database/repositories/RealmSavePasswordRepository";

import { MakeGenerateUUID } from "../../gateways/uuid/MakeGenerateUUID";

export const MakeSavePasswordRepository = () => new RealmSavePasswordRepository(MakeGenerateUUID())
