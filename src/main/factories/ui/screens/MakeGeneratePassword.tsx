import { GeneratePasswordScreen } from '@/ui/screens/GeneratePassword/GeneratePassword';

import { MakeSavePasswordUseCase } from '../../data/use-cases/MakeSavePasswordUseCase';

export const MakeGeneratePassword = () => {
  return (
    <GeneratePasswordScreen savePasswordUseCase={MakeSavePasswordUseCase()} />
  );
};
