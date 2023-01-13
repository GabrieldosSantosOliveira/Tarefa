import { NavigatorScreenParams } from '@react-navigation/native';
interface RootStackParamList {
  options: undefined;
}
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      Stack: NavigatorScreenParams<RootStackParamList>;
    }
  }
}
