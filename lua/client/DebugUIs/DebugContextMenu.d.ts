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
 *
 * File generated at: 2022-08-04T20:14:40.672Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs {
    export class DebugContextMenu {
      private constructor();

      static [id: string]: any;

      static addRBDebugMenu: (context: any, building: any) => any;

      static addRVSDebugMenu: (context: any, square: any) => any;

      static addRZSDebugMenu: (context: any, square: any) => any;

      static do3DItem: () => any;

      static doCheatMenu: (context: any, playerObj: any) => any;

      static doDebugCorpseMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      static doDebugMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      static doDebugObjectMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      static doDebugZombieMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      static doRandomizedBuilding: (building: any, RBdef: any) => any;

      static doRandomizedVehicleStory: (square: any, rvs: any) => any;

      static doRandomizedZoneStory: (square: any, rzs: any) => any;

      static onAttachedItems: (playerObj: any) => any;

      static OnBBQSetFuel: (obj: any) => any;

      static OnBBQZeroFuel: (obj: any) => any;

      static OnBendFence: (worldobjects: any, fence: any) => any;

      static OnBreakFence: (worldobjects: any, fence: any) => any;

      static OnCampfireSetFuel: (obj: any) => any;

      static OnCampfireZeroFuel: (obj: any) => any;

      static onCheat: (player: any, cheat: any) => any;

      static OnDeadBodyRemove: (body: any) => any;

      static OnDeadBodyToggleCrawling: (body: any) => any;

      static OnDeadBodyToggleFakeDead: (body: any) => any;

      static onDebugInterpolationUI: (square: any) => any;

      static onDebugPlayerInterpolationUI: (square: any) => any;

      static OnDoorLock: (worldobjects: any, door: any) => any;

      static onExtList: (playerObj: any) => any;

      static OnFireplaceSetFuel: (obj: any) => any;

      static OnFireplaceZeroFuel: (obj: any) => any;

      static onGenerateLootUI: (playerObj: any) => any;

      static OnGeneratorSetFuel: (obj: any) => any;

      static OnGetBuildingKey: (worldobjects: any, player: any) => any;

      static OnGetDoorKey: (worldobjects: any, door: any, player: any) => any;

      static onHordeManager: (square: any, player: any) => any;

      static onMakeNoise: (square: any, playerObj: any, radius: any, volume: any) => any;

      static OnMannequinCreateItem: (script: any) => any;

      static OnMannequinSetScript: (obj: any, script: any) => any;

      static OnMetalDrumSetWater: (obj: any) => any;

      static OnMetalDrumZeroWater: (obj: any) => any;

      static OnRainBarrelSetWater: (obj: any) => any;

      static OnRainBarrelZeroWater: (obj: any) => any;

      static OnReanimateCorpse: (body: any) => any;

      static OnRemoveAllZombies: (zombie: any) => any;

      static OnRemoveAllZombiesClient: (zombie: any) => any;

      static onRemoveItemTool: (playerObj: any) => any;

      static onRemoveVehicles: (zone: any) => any;

      static onRunningUI: (playerObj: any) => any;

      static OnSelectedZombieKnockDown: (hitFromBehind: any) => any;

      static OnSelectedZombieToggleCanCrawlUnderVehicle: () => any;

      static OnSelectedZombieToggleCanWalk: () => any;

      static OnSelectedZombieToggleCrawling: () => any;

      static OnSelectedZombieToggleFakeDead: () => any;

      static OnSelectedZombieToggleUseless: () => any;

      static OnSelectedZombieWalk: (square: any) => any;

      static OnSelectZombie: (zombie: any) => any;

      static onSetAlarm: (def: any) => any;

      static OnSetCompost: (worldobjects: any, obj: any) => any;

      static OnSetDoorKeyID: (worldobjects: any, door: any) => any;

      static OnSetDoorKeyIDBuilding: (worldobjects: any, door: any) => any;

      static OnSetDoorKeyIDRandom: (worldobjects: any, door: any) => any;

      static OnSetZombieOnFire: (zombie: any) => any;

      static onSpawnPoints: (square: any, player: any) => any;

      static onSpawnSurvivorHorde: (playerObj: any) => any;

      static onSpawnVehicle: (playerObj: any) => any;

      static onTeleportUI: (playerObj: any) => any;

      static onTeleportValid: (button: any, x: any, y: any, z: any) => any;

      static onTick: () => any;

      static onTilesPicker: (playerObj: any) => any;

      static OnUnbendFence: (worldobjects: any, fence: any) => any;

      static OnWindowGlassRemoved: (worldobjects: any, window: any) => any;

      static OnWindowLock: (worldobjects: any, window: any) => any;

      static OnWindowPermLock: (worldobjects: any, window: any) => any;

      static OnWindowSmash: (worldobjects: any, window: any) => any;

      static pickSquare: (x: any, y: any) => any;

      static setForceLockDoor: (worldobjects: any, door: any, player: any) => any;

      static stagger: (player: any, stag: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugContextMenu {}
}
