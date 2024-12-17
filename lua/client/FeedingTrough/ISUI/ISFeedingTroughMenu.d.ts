/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.FeedingTrough.ISUI {
    export abstract class ISFeedingTroughMenu {
      static [id: string]: any;

      /** @noSelf */
      static isValidAnimalFeed: (item: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddFoodDebug: (playerObj: any, isoObject: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddWater: (playerObj: any, luaObject: any, waterItem: any, all: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddWaterDebug: (playerObj: any, isoObject: any, ...__args: never[]) => any;

      /** @noSelf */
      static onEmptyWater: (playerObj: any, isoObject: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnFillWorldObjectContextMenu: (
        player: any,
        context: any,
        worldobjects: any,
        test: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onInfo: (trough: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveFoodDebug: (playerObj: any, isoObject: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.FeedingTrough.ISUI.ISFeedingTroughMenu {}
}
