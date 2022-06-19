import Realm from "realm";

import { CardSchema } from "./schemas/CardSchema";

export const GetRealm = async () =>
  await Realm.open({
    path: "rn",
    schema: [CardSchema],
  });
