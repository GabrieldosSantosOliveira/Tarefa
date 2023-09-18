import { FindAllWithFilterPasswordUseCaseImpl } from "@/data/use-cases/FindAllWithFilterPasswordUseCaseImpl";

import { MakeFindAllWithFilterPasswordRepository } from "../../infra/database/repositories/MakeFindAllWithFilterPasswordRepository";

export const MakeFindAllWithFilterPasswordUseCase = () => new FindAllWithFilterPasswordUseCaseImpl(MakeFindAllWithFilterPasswordRepository())
