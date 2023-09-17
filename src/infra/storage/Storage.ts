import { Storage } from "@/data/protocols/storage/Storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class StorageAdapter implements Storage {
  async setItem<T>(key: string, item: T): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(item))
  }
  async getItem<T>(key: string): Promise<T | null> {
    const item = await AsyncStorage.getItem(key)
    if (!item) {
      return null
    }
    return JSON.parse(item)
  }
  async removeItem(key: string): Promise<void> {
    await AsyncStorage.removeItem(key)
  }
}
