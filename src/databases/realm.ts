import Realm from 'realm';

import { PasswordSchema } from './schemas/PasswordSchema';

export const getRealm = async () =>
  await Realm.open({
    path: 'app-password',
    schema: [PasswordSchema],
  });
