import { useContext } from 'react';
import { ThemeContext } from 'src/context/ThemeContext';
export const useTheme = () => useContext(ThemeContext);
