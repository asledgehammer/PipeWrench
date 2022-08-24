/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor LoginScreen:new */
    export class LoginScreen extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      backButton: any;

      failed: any;

      javaObject: any;

      passwordEntry: any;

      passwordLabel: any;

      playButton: any;

      puchMeth: any;

      purchMethod: any;

      success: any;

      userName: any;

      userNameEntry: any;

      constructor(x: any, y: any, width: any, height: any);

      addCombo:
        | ((x: any, y: any, w: any, h: any, name: any, options: any, selected: any, target: any, onchange: any) => any)
        | any;

      create: (() => any) | any;

      instantiate: (() => any) | any;

      onChange: ((box: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.LoginScreen {
    /** @noSelf */
    export const deleteLoginScreen: () => any;
  }
}
