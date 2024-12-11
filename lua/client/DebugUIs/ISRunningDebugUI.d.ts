/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor ISRunningDebugUI:new */
    export class ISRunningDebugUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      chr: any;

      moveWithMouse: any;

      playerNum: any;

      previousSq: any;

      restoreEnd: any;

      start: any;

      startedTrip: any;

      startingEndurance: any;

      startTimer: any;

      stopTimer: any;

      totalDist: any;

      totalDistance: any;

      totalEndurance: any;

      constructor(x: any, y: any, character: any);

      restoreEndurance(...__args: never[]): any;

      startTrip(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.ISRunningDebugUI {}
}
