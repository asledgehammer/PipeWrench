/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    export abstract class DebugContextMenu {
      static [id: string]: any;

      /** @noSelf */
      static addRBDebugMenu: (context: any, building: any, ...__args: never[]) => any;

      /** @noSelf */
      static addRVSDebugMenu: (context: any, square: any, ...__args: never[]) => any;

      /** @noSelf */
      static addRZSDebugMenu: (context: any, square: any, ...__args: never[]) => any;

      /** @noSelf */
      static do3DItem: (...__args: never[]) => any;

      /** @noSelf */
      static doCheatMenu: (context: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static doDebugCorpseMenu: (player: any, context: any, worldobjects: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static doDebugMenu: (player: any, context: any, worldobjects: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static doDebugObjectMenu: (player: any, context: any, worldobjects: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static doDebugZombieMenu: (player: any, context: any, worldobjects: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static doRandomizedBuilding: (building: any, RBdef: any, ...__args: never[]) => any;

      /** @noSelf */
      static doRandomizedVehicleStory: (square: any, rvs: any, ...__args: never[]) => any;

      /** @noSelf */
      static doRandomizedZoneStory: (square: any, rzs: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAttachedItems: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnBBQSetFuel: (obj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnBBQZeroFuel: (obj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnBendFence: (worldobjects: any, fence: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnBreakFence: (worldobjects: any, fence: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnCampfireSetFuel: (obj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnCampfireZeroFuel: (obj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheat: (player: any, cheat: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnDeadBodyRemove: (body: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnDeadBodyToggleCrawling: (body: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnDeadBodyToggleFakeDead: (body: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDebugInterpolationUI: (square: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDebugPlayerInterpolationUI: (square: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnDoorLock: (worldobjects: any, door: any, ...__args: never[]) => any;

      /** @noSelf */
      static onExtList: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnFireplaceSetFuel: (obj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnFireplaceZeroFuel: (obj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGenerateLootUI: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnGeneratorSetFuel: (obj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnGetBuildingKey: (worldobjects: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnGetDoorKey: (worldobjects: any, door: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onHordeManager: (square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMakeNoise: (square: any, playerObj: any, radius: any, volume: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnMannequinCreateItem: (script: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnMannequinSetScript: (obj: any, script: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnMetalDrumSetWater: (obj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnMetalDrumZeroWater: (obj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnRainBarrelSetWater: (obj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnRainBarrelZeroWater: (obj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnReanimateCorpse: (body: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnRemoveAllZombies: (zombie: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnRemoveAllZombiesClient: (zombie: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveItemTool: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRemoveVehicles: (zone: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRunningUI: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSelectedZombieKnockDown: (hitFromBehind: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSelectedZombieToggleCanCrawlUnderVehicle: (...__args: never[]) => any;

      /** @noSelf */
      static OnSelectedZombieToggleCanWalk: (...__args: never[]) => any;

      /** @noSelf */
      static OnSelectedZombieToggleCrawling: (...__args: never[]) => any;

      /** @noSelf */
      static OnSelectedZombieToggleFakeDead: (...__args: never[]) => any;

      /** @noSelf */
      static OnSelectedZombieToggleUseless: (...__args: never[]) => any;

      /** @noSelf */
      static OnSelectedZombieWalk: (square: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSelectZombie: (zombie: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSetAlarm: (def: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSetCompost: (worldobjects: any, obj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSetDoorKeyID: (worldobjects: any, door: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSetDoorKeyIDBuilding: (worldobjects: any, door: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSetDoorKeyIDRandom: (worldobjects: any, door: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSetZombieOnFire: (zombie: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSpawnPoints: (square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSpawnSurvivorHorde: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSpawnVehicle: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTeleportUI: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTeleportValid: (button: any, x: any, y: any, z: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTick: (...__args: never[]) => any;

      /** @noSelf */
      static onTilesPicker: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnUnbendFence: (worldobjects: any, fence: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnWindowGlassRemoved: (worldobjects: any, window: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnWindowLock: (worldobjects: any, window: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnWindowPermLock: (worldobjects: any, window: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnWindowSmash: (worldobjects: any, window: any, ...__args: never[]) => any;

      /** @noSelf */
      static pickSquare: (x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static setForceLockDoor: (worldobjects: any, door: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static stagger: (player: any, stag: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugContextMenu {}
}
