import { SavePasswordUseCaseImpl } from "@/data/use-cases/SavePasswordUseCase";

import { MakeSavePasswordRepository } from "../../infra/database/repositories/MakeSavePasswordRepository";

export const MakeSavePasswordUseCase = () => new SavePasswordUseCaseImpl(MakeSavePasswordRepository())
