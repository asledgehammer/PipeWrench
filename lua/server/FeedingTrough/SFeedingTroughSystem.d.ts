/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.FeedingTrough {
    /** @customConstructor SFeedingTroughSystem:new */
    export class SFeedingTroughSystem extends lua.server.Map.SGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      constructor();

      addTrough(grid: any, def: any, north: any, slave: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.FeedingTrough.SFeedingTroughSystem {}
}
