import { Storage } from "@/data/protocols/storage/Storage";
import { MMKV } from "react-native-mmkv";
const storage = new MMKV()
export class StorageAdapter implements Storage {
  async setItem<T>(key: string, item: T): Promise<void> {
    storage.set(key, JSON.stringify(item))
  }
  async getItem<T>(key: string): Promise<T | null> {
    const item = storage.getString(key)
    if (!item) {
      return null
    }
    return JSON.parse(item)
  }
  async removeItem(key: string): Promise<void> {
    storage.delete(key)
  }
}
