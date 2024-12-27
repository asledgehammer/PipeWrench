/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.FeedingTrough {
    /** @customConstructor SFeedingTroughGlobalObject:new */
    export class SFeedingTroughGlobalObject extends lua.server.Map.SGlobalObject {
      [id: string]: any;
      static [id: string]: any;

      feedAmount: any;

      linkedX: any;

      linkedY: any;

      maxFeed: any;

      maxWater: any;

      water: any;

      constructor(luaSystem: any, globalObject: any);

      addFeed(type: any, feedAmount: any, ...__args: never[]): any;

      addObject(def: any, north: any, slave: any, ...__args: never[]): any;

      addWater(amount: any, ...__args: never[]): any;

      emptyWater(...__args: never[]): any;

      getObject(...__args: never[]): any;

      getSquare2Pos(square: any, north: any, ...__args: never[]): any;

      getSquare2PosReverse(square: any, north: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.FeedingTrough.SFeedingTroughGlobalObject {}
}
