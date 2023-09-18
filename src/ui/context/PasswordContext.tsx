import { Storage } from '@/data/protocols/storage/Storage';
import {
  createContext,
  ReactNode,
  FC,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  startTransition,
} from 'react';
interface IPasswordContext {
  hasLowerCase: boolean;
  hasUpperCase: boolean;
  hasNumbers: boolean;
  hasSymbols: boolean;
  lengthPassword: number;
  setSettings: Dispatch<SetStateAction<Settings>>;
}
export const PasswordContext = createContext<IPasswordContext>(
  {} as IPasswordContext,
);
interface PasswordProviderProps {
  children: ReactNode;
  storage: Storage;
}
export type Settings = Omit<IPasswordContext, 'setSettings'>;

export const PasswordProvider: FC<PasswordProviderProps> = ({
  children,
  storage,
}) => {
  const [settings, setSettings] = useState<Settings>({} as Settings);

  useEffect(() => {
    async function loadStorageData() {
      const settingsStorage = await storage.getItem<Settings>(
        '@password-generator:settings',
      );
      if (!settingsStorage) {
        const defaultSettings: Settings = {
          hasLowerCase: true,
          hasNumbers: true,
          hasSymbols: true,
          hasUpperCase: true,
          lengthPassword: 60,
        };
        await storage.setItem('@password-generator:settings', defaultSettings);
        setSettings(defaultSettings);
      } else {
        setSettings(settingsStorage);
      }
    }
    loadStorageData();
  }, []);

  useEffect(() => {
    async function setDefaultSettings() {
      await storage.setItem('@password-generator:settings', settings);
    }
    startTransition(() => {
      setDefaultSettings();
    });
  }, [settings]);
  return (
    <PasswordContext.Provider
      value={{
        ...settings,
        setSettings,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};
