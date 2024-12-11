/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISUIEmoteConfig:new */
    export class ISUIEmoteConfig extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      addNewEmoteBtn: any;

      categoryCB: any;

      categoryLbl: any;

      chr: any;

      emoteCB: any;

      emoteLbl: any;

      moveWithMouse: any;

      playerNum: any;

      remoteEmoteBtn: any;

      saveBtn: any;

      constructor(x: any, y: any, character: any);

      readFile(...__args: never[]): any;

      selectCategory(combo: any, ...__args: never[]): any;

      writeToFile(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISUIEmoteConfig {}
}
