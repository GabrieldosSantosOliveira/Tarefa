import { GenerateUUID } from "@/domain/gateways/uuid/GenerateUUID";
import { randomUUID } from "expo-crypto";

export class GenerateUUIDExpoCrypto implements GenerateUUID {
  async randomUUID(): Promise<string> {
    return randomUUID()
  }
}
