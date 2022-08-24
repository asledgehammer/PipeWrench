/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.ISUI {
    export abstract class ISVehiclePartMenu {
      static [id: string]: any;

      /** @noSelf */
      static doAddFuelMenu: (playerObj: any, part: any, context: any) => any;

      /** @noSelf */
      static doSiphonFuelMenu: (playerObj: any, part: any, context: any) => any;

      /** @noSelf */
      static equipRequiredItems: (playerObj: any, part: any, tbl: any) => any;

      /** @noSelf */
      static getGasCanNotEmpty: (playerObj: any, typeToItem: any) => any;

      /** @noSelf */
      static getGasCanNotFull: (playerObj: any, typeToItem: any) => any;

      /** @noSelf */
      static getNearbyFuelPump: (vehicle: any) => any;

      /** @noSelf */
      static onAddFuelNew: (
        worldobjects: any,
        part: any,
        fuelContainerList: any,
        fuelContainer: any,
        player: any
      ) => any;

      /** @noSelf */
      static onAddGasoline: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onDebugFill: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onDeflateTire: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onDeviceOptions: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onInflateTire: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onInstallPart: (playerObj: any, part: any, item: any) => any;

      /** @noSelf */
      static onLockDoor: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onLockDoors: (playerObj: any, vehicle: any, lock: any) => any;

      /** @noSelf */
      static onOpenCloseWindow: (playerObj: any, part: any, open: any) => any;

      /** @noSelf */
      static onPumpGasoline: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onPumpGasolinePathFail: (playerObj: any) => any;

      /** @noSelf */
      static onSmashWindow: (playerObj: any, part: any, open: any) => any;

      /** @noSelf */
      static onTakeFuelNew: (
        worldobjects: any,
        part: any,
        fuelContainerList: any,
        fuelContainer: any,
        player: any
      ) => any;

      /** @noSelf */
      static onTakeGasoline: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onUninstallPart: (playerObj: any, part: any) => any;

      /** @noSelf */
      static onUnlockDoor: (playerObj: any, part: any) => any;

      /** @noSelf */
      static toPlayerInventory: (playerObj: any, item: any) => any;

      /** @noSelf */
      static transferRequiredItems: (playerObj: any, part: any, tbl: any) => any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehiclePartMenu {}
}
