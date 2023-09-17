import Realm from 'realm';

import { PasswordSchema } from "./schemas/PasswordSchema";

export class RealmService {
  private static _value: null | Realm

  static async getInstance() {
    if (this._value === null) {
      this._value = await Realm.open({
        path: 'app-password',
        schema: [PasswordSchema],
      });
    }
    return this._value
  }
}
