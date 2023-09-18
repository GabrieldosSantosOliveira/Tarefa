import { ClipBoard } from "@/data/protocols/clipboard/ClipBoard";
import * as ExpoClipboard from 'expo-clipboard';
export class ExpoClipBoardAdapter implements ClipBoard {
  async setString(value: string): Promise<void> {
    await ExpoClipboard.setStringAsync(value)
  }
}
