import { FindByIdPasswordUseCaseImpl } from "@/data/use-cases/FindByIdPasswordUseCaseImpl";

import { MakeFindByIdPasswordRepository } from "../../infra/database/repositories/MakeFindByIdPasswordRepository";

export const MakeFindByIdPasswordUseCase = () => new FindByIdPasswordUseCaseImpl(MakeFindByIdPasswordRepository())
