import AsyncStorage from '@react-native-async-storage/async-storage';
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
}
export type Settings = Omit<IPasswordContext, 'setSettings'>;

export const PasswordProvider: FC<PasswordProviderProps> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>({} as Settings);

  useEffect(() => {
    async function loadStorageData() {
      try {
        const settingsStorage = await AsyncStorage.getItem(
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
          await AsyncStorage.setItem(
            '@password-generator:settings',
            JSON.stringify(defaultSettings),
          );
          setSettings(defaultSettings);
        } else {
          setSettings(JSON.parse(settingsStorage));
        }
      } catch (err) {
        console.log(err);
      }
    }
    loadStorageData();
  }, []);

  useEffect(() => {
    async function setDefaultSettings() {
      try {
        await AsyncStorage.setItem(
          '@password-generator:settings',
          JSON.stringify(settings),
        );
      } catch (err) {
        console.log(err);
      }
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
