import { ClipBoard } from '@/data/protocols/clipboard/ClipBoard';
import { ExpoClipBoardAdapter } from '@/infra/clipboard/ExpoClipBoardAdapter';
import { createContext, ReactNode, FC } from 'react';
interface IClipBoardContext {
  clipboard: ClipBoard;
}
export const ClipBoardContext = createContext<IClipBoardContext>(
  {} as IClipBoardContext,
);
interface ClipBoardProviderProps {
  children: ReactNode;
}

export const ClipBoardProvider: FC<ClipBoardProviderProps> = ({ children }) => {
  const clipboard = new ExpoClipBoardAdapter();
  return (
    <ClipBoardContext.Provider value={{ clipboard }}>
      {children}
    </ClipBoardContext.Provider>
  );
};
