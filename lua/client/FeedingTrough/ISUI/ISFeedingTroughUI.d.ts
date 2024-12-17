/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.FeedingTrough.ISUI {
    /** @customConstructor ISFeedingTroughUI:new */
    export class ISFeedingTroughUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      chr: any;

      item: any;

      playerNum: any;

      refreshNeeded: any;

      constructor(x: any, y: any, width: any, height: any, trough: any, player: any);

      create(...__args: never[]): any;
    }
  }
  export namespace lua.client.FeedingTrough.ISUI.ISFeedingTroughUI {}
}
