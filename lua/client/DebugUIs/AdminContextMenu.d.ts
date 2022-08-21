/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    export abstract class AdminContextMenu {
      static [id: string]: any;

      /** @noSelf */
      static doMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static onDebugBlood: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static onDebugColor: (playerObj: any, vehicle: any) => any;

      /** @noSelf */
      static OnDoorLock: (worldobjects: any, door: any) => any;

      /** @noSelf */
      static OnGetDoorKey: (worldobjects: any, door: any, player: any) => any;

      /** @noSelf */
      static onHordeManager: (square: any, player: any) => any;

      /** @noSelf */
      static onMakeNoise: (square: any, playerObj: any, radius: any, volume: any) => any;

      /** @noSelf */
      static OnRemoveAllZombiesClient: (zombie: any) => any;

      /** @noSelf */
      static onRemoveItemTool: (playerObj: any) => any;

      /** @noSelf */
      static OnSetDoorKeyID: (worldobjects: any, door: any) => any;

      /** @noSelf */
      static OnSetDoorKeyIDBuilding: (worldobjects: any, door: any) => any;

      /** @noSelf */
      static OnSetDoorKeyIDRandom: (worldobjects: any, door: any) => any;

      /** @noSelf */
      static onSpawnVehicle: (playerObj: any) => any;

      /** @noSelf */
      static onTeleportUI: (playerObj: any) => any;

      /** @noSelf */
      static onTriggerThunderUI: (playerObj: any) => any;

      /** @noSelf */
      static setForceLockDoor: (worldobjects: any, door: any, player: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.AdminContextMenu {}
}
