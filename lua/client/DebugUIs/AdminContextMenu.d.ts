/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    export abstract class AdminContextMenu {
      static [id: string]: any;

      /** @noSelf */
      static doMenu: (player: any, context: any, worldobjects: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDebugBlood: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDebugColor: (playerObj: any, vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnDoorLock: (worldobjects: any, door: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnGetDoorKey: (worldobjects: any, door: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onHordeManager: (square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMakeNoise: (square: any, playerObj: any, radius: any, volume: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnRemoveAllZombiesClient: (zombie: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveItemTool: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSetDoorKeyID: (worldobjects: any, door: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSetDoorKeyIDBuilding: (worldobjects: any, door: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSetDoorKeyIDRandom: (worldobjects: any, door: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSpawnVehicle: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTeleportUI: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTriggerThunderUI: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static setForceLockDoor: (worldobjects: any, door: any, player: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.AdminContextMenu {}
}
