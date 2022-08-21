/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      readFile: (() => any) | any;

      selectCategory: ((combo: any) => any) | any;

      writeToFile: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISUIEmoteConfig {}
}
