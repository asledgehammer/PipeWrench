/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Reloading {
    /** @customConstructor ISReloadable:new */
    export class ISReloadable extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      ammoType: any;

      clickSound: any;

      currentCapacity: any;

      ejectSound: any;

      insertSound: any;

      loadStyle: any;

      maxCapacity: any;

      moduleName: any;

      rackSound: any;

      rackTime: any;

      reloadClass: any;

      reloadTime: any;

      type: any;

      constructor();

      canRack(chr: any, ...__args: never[]): any;

      canReload(chr: any, ...__args: never[]): any;

      fireShot(...__args: never[]): any;

      getReloadText(...__args: never[]): any;

      getReloadTime(...__args: never[]): any;

      isChainReloading(...__args: never[]): any;

      isLoaded(...__args: never[]): any;

      isReloadValid(char: any, square: any, difficulty: any, ...__args: never[]): any;

      printItemDetails(item: any, ...__args: never[]): any;

      printReloadableDetails(...__args: never[]): any;

      reloadPerform(char: any, square: any, difficulty: any, ...__args: never[]): any;

      reloadStart(char: any, square: any, difficulty: any, ...__args: never[]): any;

      setupReloadable(item: any, v: any, ...__args: never[]): any;

      syncItemToReloadable(item: any, ...__args: never[]): any;

      syncReloadableToItem(item: any, ...__args: never[]): any;
    }
  }
  export namespace lua.shared.Reloading.ISReloadable {}
}
