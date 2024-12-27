/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.FeedingTrough {
    /** @customConstructor CFeedingTroughSystem:new */
    export class CFeedingTroughSystem extends lua.client.Map.CGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      constructor();
    }
  }
  export namespace lua.client.FeedingTrough.CFeedingTroughSystem {}
}
