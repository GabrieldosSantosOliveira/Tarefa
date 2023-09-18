import { PasswordDetails } from '@/ui/screens/PasswordDetails/PasswordDetails';

import { MakeFindByIdPasswordUseCase } from '../../data/use-cases/MakeFindByIdPasswordUseCase';

export const MakePasswordDetails = () => {
  return (
    <PasswordDetails findByIdPasswordUseCase={MakeFindByIdPasswordUseCase()} />
  );
};
