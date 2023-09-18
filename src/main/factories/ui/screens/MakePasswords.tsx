import { Passwords } from '@/ui/screens/Passwords/Passwords';

import { MakeFindAllPasswordUseCase } from '../../data/use-cases/MakeFindAllPasswordUseCase';
import { MakeFindAllWithFilterPasswordUseCase } from '../../data/use-cases/MakeFindAllWithFilterPasswordUseCase';

export const MakePasswords = () => {
  return (
    <Passwords
      findAllWithFilterPasswordUseCase={MakeFindAllWithFilterPasswordUseCase()}
      findAllPasswordUseCase={MakeFindAllPasswordUseCase()}
    />
  );
};
