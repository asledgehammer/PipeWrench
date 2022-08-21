/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISFirearmRadialMenu:new */
    export class ISFirearmRadialMenu extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      playerNum: any;

      constructor(character: any);

      center: (() => any) | any;

      display: (() => any) | any;

      fillMenu: (() => any) | any;

      getWeapon: (() => any) | any;

      /** @noSelf */
      static checkKey: (key: any) => any;

      /** @noSelf */
      static checkWeapon: (playerObj: any) => any;

      /** @noSelf */
      static getBestLBButtonAction: (buttonPrompt: any) => any;

      /** @noSelf */
      static getBestRBButtonAction: (buttonPrompt: any) => any;

      /** @noSelf */
      static onJoypadButtonReleased: (buttonPrompt: any, button: any) => any;

      /** @noSelf */
      static onKeyPressed: (key: any) => any;

      /** @noSelf */
      static onKeyReleased: (key: any) => any;

      /** @noSelf */
      static onKeyRepeat: (key: any) => any;

      /** @noSelf */
      static onRepeatRBumper: (buttonPrompt: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISFirearmRadialMenu {}
}
