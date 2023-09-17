export interface Storage {
  setItem<T>(key: string, item: T): Promise<void>
  getItem<T>(key: string): Promise<T | null>
  removeItem(key: string): Promise<void>
}
