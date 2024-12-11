/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor ModMoreInfo:new */
    export class ModMoreInfo extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      javaObject: any;

      mainPanel: any;

      moreInfo: any;

      constructor(x: any, y: any, width: any, height: any);

      create(desc: any, ...__args: never[]): any;

      instantiate(...__args: never[]): any;

      /** @noSelf */
      static onOptionMouseDown: (button: any, x: any, y: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.ModMoreInfo {}
}
