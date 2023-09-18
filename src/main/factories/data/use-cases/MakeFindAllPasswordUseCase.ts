import { FindAllPasswordUseCaseImpl } from "@/data/use-cases/FindAllPasswordUseCaseImpl";

import { MakeFindAllPasswordRepository } from "../../infra/database/repositories/MakeFindAllPasswordRepository";

export const MakeFindAllPasswordUseCase = () => new FindAllPasswordUseCaseImpl(MakeFindAllPasswordRepository())
