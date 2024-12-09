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

      center(...__args: never[]): any;

      display(...__args: never[]): any;

      fillMenu(...__args: never[]): any;

      getWeapon(...__args: never[]): any;

      /** @noSelf */
      static checkKey: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static checkWeapon: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static getBestLBButtonAction: (buttonPrompt: any, ...__args: never[]) => any;

      /** @noSelf */
      static getBestRBButtonAction: (buttonPrompt: any, ...__args: never[]) => any;

      /** @noSelf */
      static onJoypadButtonReleased: (buttonPrompt: any, button: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyReleased: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyRepeat: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRepeatRBumper: (buttonPrompt: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISFirearmRadialMenu {}
}
