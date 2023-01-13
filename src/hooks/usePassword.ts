import { PasswordContext } from '@context/PasswordContext';
import { useContext } from 'react';
export const usePassword = () => useContext(PasswordContext);
