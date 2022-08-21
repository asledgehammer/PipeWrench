/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor ModMoreInfo:new */
    export class ModMoreInfo extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      javaObject: any;

      mainPanel: any;

      moreInfo: any;

      constructor(x: any, y: any, width: any, height: any);

      create: ((desc: any) => any) | any;

      instantiate: (() => any) | any;

      /** @noSelf */
      static onOptionMouseDown: (button: any, x: any, y: any) => any;
    }
  }
  export namespace lua.client.OptionScreens.ModMoreInfo {}
}
