import { useColorMode, IColorModeContextProps } from 'native-base';
import { useEffect } from 'react';
import { createContext, ReactNode, FC } from 'react';
import { useColorScheme } from 'react-native';
type ThemeContext = IColorModeContextProps;
export const ThemeContext = createContext({} as ThemeContext);
interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const colorMode = useColorScheme();
  const { setColorMode, ...rest } = useColorMode();
  useEffect(() => {
    setColorMode(colorMode);
  }, [colorMode, setColorMode]);
  return (
    <ThemeContext.Provider value={{ setColorMode, ...rest }}>
      {children}
    </ThemeContext.Provider>
  );
};
