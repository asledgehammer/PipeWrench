/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor ISExtAnimListDebugUI:new */
    export class ISExtAnimListDebugUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      chr: any;

      closeBtn: any;

      combo: any;

      extList: any;

      moveWithMouse: any;

      playerNum: any;

      start: any;

      constructor(x: any, y: any, character: any);

      closeUI: (() => any) | any;

      createList: (() => any) | any;

      playAnim: (() => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.ISExtAnimListDebugUI {}
}
