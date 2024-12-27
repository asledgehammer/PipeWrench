/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.ISUI {
    export abstract class ISVehiclePartMenu {
      static [id: string]: any;

      /** @noSelf */
      static doAddFuelMenu: (playerObj: any, part: any, context: any, ...__args: never[]) => any;

      /** @noSelf */
      static doSiphonFuelMenu: (playerObj: any, part: any, context: any, ...__args: never[]) => any;

      /** @noSelf */
      static equipRequiredItems: (playerObj: any, part: any, tbl: any, ...__args: never[]) => any;

      /** @noSelf */
      static getGasCanNotEmpty: (playerObj: any, typeToItem: any, ...__args: never[]) => any;

      /** @noSelf */
      static getGasCanNotFull: (playerObj: any, typeToItem: any, ...__args: never[]) => any;

      /** @noSelf */
      static getNearbyFuelPump: (vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAddFuelNew: (
        worldobjects: any,
        part: any,
        fuelContainerList: any,
        fuelContainer: any,
        player: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onAddGasoline: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDebugFill: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDeflateTire: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDeviceOptions: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onInflateTire: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onInstallPart: (playerObj: any, part: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static onLockDoor: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onLockDoors: (playerObj: any, vehicle: any, lock: any, ...__args: never[]) => any;

      /** @noSelf */
      static onOpenCloseWindow: (playerObj: any, part: any, open: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPumpGasoline: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPumpGasolinePathFail: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSmashWindow: (playerObj: any, part: any, open: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTakeFuelNew: (
        worldobjects: any,
        part: any,
        fuelContainerList: any,
        fuelContainer: any,
        player: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onTakeGasoline: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onUninstallPart: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static onUnlockDoor: (playerObj: any, part: any, ...__args: never[]) => any;

      /** @noSelf */
      static toPlayerInventory: (playerObj: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static toPlayerInventoryTag: (playerObj: any, tag: any, ...__args: never[]) => any;

      /** @noSelf */
      static transferRequiredItems: (playerObj: any, part: any, tbl: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehiclePartMenu {}
}
