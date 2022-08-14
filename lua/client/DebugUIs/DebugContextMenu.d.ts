/*
 * MIT License
 *
 * Copyright (c) 2022 JabDoesThings
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**  @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs {
    export abstract class DebugContextMenu {
      static [id: string]: any;

      /** @noSelf */
      static addRBDebugMenu: (context: any, building: any) => any;

      /** @noSelf */
      static addRVSDebugMenu: (context: any, square: any) => any;

      /** @noSelf */
      static addRZSDebugMenu: (context: any, square: any) => any;

      /** @noSelf */
      static do3DItem: () => any;

      /** @noSelf */
      static doCheatMenu: (context: any, playerObj: any) => any;

      /** @noSelf */
      static doDebugCorpseMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static doDebugMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static doDebugObjectMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static doDebugZombieMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static doRandomizedBuilding: (building: any, RBdef: any) => any;

      /** @noSelf */
      static doRandomizedVehicleStory: (square: any, rvs: any) => any;

      /** @noSelf */
      static doRandomizedZoneStory: (square: any, rzs: any) => any;

      /** @noSelf */
      static onAttachedItems: (playerObj: any) => any;

      /** @noSelf */
      static OnBBQSetFuel: (obj: any) => any;

      /** @noSelf */
      static OnBBQZeroFuel: (obj: any) => any;

      /** @noSelf */
      static OnBendFence: (worldobjects: any, fence: any) => any;

      /** @noSelf */
      static OnBreakFence: (worldobjects: any, fence: any) => any;

      /** @noSelf */
      static OnCampfireSetFuel: (obj: any) => any;

      /** @noSelf */
      static OnCampfireZeroFuel: (obj: any) => any;

      /** @noSelf */
      static onCheat: (player: any, cheat: any) => any;

      /** @noSelf */
      static OnDeadBodyRemove: (body: any) => any;

      /** @noSelf */
      static OnDeadBodyToggleCrawling: (body: any) => any;

      /** @noSelf */
      static OnDeadBodyToggleFakeDead: (body: any) => any;

      /** @noSelf */
      static onDebugInterpolationUI: (square: any) => any;

      /** @noSelf */
      static onDebugPlayerInterpolationUI: (square: any) => any;

      /** @noSelf */
      static OnDoorLock: (worldobjects: any, door: any) => any;

      /** @noSelf */
      static onExtList: (playerObj: any) => any;

      /** @noSelf */
      static OnFireplaceSetFuel: (obj: any) => any;

      /** @noSelf */
      static OnFireplaceZeroFuel: (obj: any) => any;

      /** @noSelf */
      static onGenerateLootUI: (playerObj: any) => any;

      /** @noSelf */
      static OnGeneratorSetFuel: (obj: any) => any;

      /** @noSelf */
      static OnGetBuildingKey: (worldobjects: any, player: any) => any;

      /** @noSelf */
      static OnGetDoorKey: (worldobjects: any, door: any, player: any) => any;

      /** @noSelf */
      static onHordeManager: (square: any, player: any) => any;

      /** @noSelf */
      static onMakeNoise: (square: any, playerObj: any, radius: any, volume: any) => any;

      /** @noSelf */
      static OnMannequinCreateItem: (script: any) => any;

      /** @noSelf */
      static OnMannequinSetScript: (obj: any, script: any) => any;

      /** @noSelf */
      static OnMetalDrumSetWater: (obj: any) => any;

      /** @noSelf */
      static OnMetalDrumZeroWater: (obj: any) => any;

      /** @noSelf */
      static OnRainBarrelSetWater: (obj: any) => any;

      /** @noSelf */
      static OnRainBarrelZeroWater: (obj: any) => any;

      /** @noSelf */
      static OnReanimateCorpse: (body: any) => any;

      /** @noSelf */
      static OnRemoveAllZombies: (zombie: any) => any;

      /** @noSelf */
      static OnRemoveAllZombiesClient: (zombie: any) => any;

      /** @noSelf */
      static onRemoveItemTool: (playerObj: any) => any;

      /** @noSelf */
      static onRemoveVehicles: (zone: any) => any;

      /** @noSelf */
      static onRunningUI: (playerObj: any) => any;

      /** @noSelf */
      static OnSelectedZombieKnockDown: (hitFromBehind: any) => any;

      /** @noSelf */
      static OnSelectedZombieToggleCanCrawlUnderVehicle: () => any;

      /** @noSelf */
      static OnSelectedZombieToggleCanWalk: () => any;

      /** @noSelf */
      static OnSelectedZombieToggleCrawling: () => any;

      /** @noSelf */
      static OnSelectedZombieToggleFakeDead: () => any;

      /** @noSelf */
      static OnSelectedZombieToggleUseless: () => any;

      /** @noSelf */
      static OnSelectedZombieWalk: (square: any) => any;

      /** @noSelf */
      static OnSelectZombie: (zombie: any) => any;

      /** @noSelf */
      static onSetAlarm: (def: any) => any;

      /** @noSelf */
      static OnSetCompost: (worldobjects: any, obj: any) => any;

      /** @noSelf */
      static OnSetDoorKeyID: (worldobjects: any, door: any) => any;

      /** @noSelf */
      static OnSetDoorKeyIDBuilding: (worldobjects: any, door: any) => any;

      /** @noSelf */
      static OnSetDoorKeyIDRandom: (worldobjects: any, door: any) => any;

      /** @noSelf */
      static OnSetZombieOnFire: (zombie: any) => any;

      /** @noSelf */
      static onSpawnPoints: (square: any, player: any) => any;

      /** @noSelf */
      static onSpawnSurvivorHorde: (playerObj: any) => any;

      /** @noSelf */
      static onSpawnVehicle: (playerObj: any) => any;

      /** @noSelf */
      static onTeleportUI: (playerObj: any) => any;

      /** @noSelf */
      static onTeleportValid: (button: any, x: any, y: any, z: any) => any;

      /** @noSelf */
      static onTick: () => any;

      /** @noSelf */
      static onTilesPicker: (playerObj: any) => any;

      /** @noSelf */
      static OnUnbendFence: (worldobjects: any, fence: any) => any;

      /** @noSelf */
      static OnWindowGlassRemoved: (worldobjects: any, window: any) => any;

      /** @noSelf */
      static OnWindowLock: (worldobjects: any, window: any) => any;

      /** @noSelf */
      static OnWindowPermLock: (worldobjects: any, window: any) => any;

      /** @noSelf */
      static OnWindowSmash: (worldobjects: any, window: any) => any;

      /** @noSelf */
      static pickSquare: (x: any, y: any) => any;

      /** @noSelf */
      static setForceLockDoor: (worldobjects: any, door: any, player: any) => any;

      /** @noSelf */
      static stagger: (player: any, stag: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugContextMenu {}
}
