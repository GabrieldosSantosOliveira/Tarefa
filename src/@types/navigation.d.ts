export interface Routes {
  home: undefined;
  passwords: undefined;
  passwordDetails: { id: string };
}
export declare global {
  namespace ReactNavigation {
    interface RootParamList extends Routes { }
  }
}
