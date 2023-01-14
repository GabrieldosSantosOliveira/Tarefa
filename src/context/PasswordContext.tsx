import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, ReactNode, FC, useEffect, useState } from 'react';
interface IPasswordContext {
  lengthPassword: number;
  hasLowerCase: boolean;
  hasUpperCase: boolean;
  hasNumbers: boolean;
  hasSymbols: boolean;
}
export const PasswordContext = createContext<IPasswordContext>(
  {} as IPasswordContext,
);
interface PasswordProviderProps {
  children: ReactNode;
}
export const PasswordProvider: FC<PasswordProviderProps> = ({ children }) => {
  type Settings = IPasswordContext;
  const [settings, setSettings] = useState<Settings>();

  useEffect(() => {
    async function loadStorageData() {
      try {
        const settingsStorage = await AsyncStorage.getItem(
          '@password-generator:settings',
        );
        const settings = JSON.parse(settingsStorage);
        if (!settings) {
          const defaultSettings: Settings = {
            hasLowerCase: false,
            hasNumbers: true,
            hasSymbols: true,
            hasUpperCase: true,
            lengthPassword: 10,
          };
          await AsyncStorage.setItem(
            '@password-generator:settings',
            JSON.stringify(defaultSettings),
          );
          setSettings(defaultSettings);
        } else {
          setSettings(settings);
        }
      } catch (err) {
        console.log(err);
      }
    }
    loadStorageData();
  }, []);
  return (
    <PasswordContext.Provider value={settings}>
      {children}
    </PasswordContext.Provider>
  );
};
