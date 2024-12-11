/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      closeUI(...__args: never[]): any;

      createList(...__args: never[]): any;

      playAnim(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.ISExtAnimListDebugUI {}
}
