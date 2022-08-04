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
 * File generated at: 2022-08-04T20:14:40.452Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs {
    export class AdminContextMenu {
      private constructor();

      static [id: string]: any;

      static doMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      static onDebugBlood: (playerObj: any, vehicle: any) => any;

      static onDebugColor: (playerObj: any, vehicle: any) => any;

      static OnDoorLock: (worldobjects: any, door: any) => any;

      static OnGetDoorKey: (worldobjects: any, door: any, player: any) => any;

      static onHordeManager: (square: any, player: any) => any;

      static onMakeNoise: (square: any, playerObj: any, radius: any, volume: any) => any;

      static OnRemoveAllZombiesClient: (zombie: any) => any;

      static onRemoveItemTool: (playerObj: any) => any;

      static OnSetDoorKeyID: (worldobjects: any, door: any) => any;

      static OnSetDoorKeyIDBuilding: (worldobjects: any, door: any) => any;

      static OnSetDoorKeyIDRandom: (worldobjects: any, door: any) => any;

      static onSpawnVehicle: (playerObj: any) => any;

      static onTeleportUI: (playerObj: any) => any;

      static onTriggerThunderUI: (playerObj: any) => any;

      static setForceLockDoor: (worldobjects: any, door: any, player: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.AdminContextMenu {}
}
