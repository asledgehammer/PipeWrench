/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor WelcomeMessageUI:new */
    export class WelcomeMessageUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      changeLabel: any;

      refreshNeeded: any;

      rich: any;

      screenshot: any;

      titleLabel: any;

      constructor(x: any, y: any, width: any, height: any);

      create(...__args: never[]): any;
    }

    export abstract class WelcomeMessageB42 {
      static [id: string]: any;

      /** @noSelf */
      static doMsg: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.WelcomeMessageB42 {}
}
