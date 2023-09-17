import { PasswordContext } from '@/ui/context/PasswordContext';
import { useContext } from 'react';
export const usePassword = () => useContext(PasswordContext);
