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

      canRack: ((chr: any) => any) | any;

      canReload: ((chr: any) => any) | any;

      fireShot: (() => any) | any;

      getReloadText: (() => any) | any;

      getReloadTime: (() => any) | any;

      isChainReloading: (() => any) | any;

      isLoaded: (() => any) | any;

      isReloadValid: ((char: any, square: any, difficulty: any) => any) | any;

      printItemDetails: ((item: any) => any) | any;

      printReloadableDetails: (() => any) | any;

      reloadPerform: ((char: any, square: any, difficulty: any) => any) | any;

      reloadStart: ((char: any, square: any, difficulty: any) => any) | any;

      setupReloadable: ((item: any, v: any) => any) | any;

      syncItemToReloadable: ((item: any) => any) | any;

      syncReloadableToItem: ((item: any) => any) | any;
    }
  }
  export namespace lua.shared.Reloading.ISReloadable {}
}
