import { getRealm } from '@databases/realm';
import { createContext, ReactNode, FC, useEffect } from 'react';

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
  useEffect(() => {
    console.log('PasswordProvider');
    async function loadStorageData() {
      const realm = await getRealm();
      realm.objects('Password');
    }
    loadStorageData();
  }, []);
  return (
    <PasswordContext.Provider
      value={{
        hasLowerCase: false,
        hasNumbers: true,
        hasSymbols: true,
        hasUpperCase: true,
        lengthPassword: 10,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};
