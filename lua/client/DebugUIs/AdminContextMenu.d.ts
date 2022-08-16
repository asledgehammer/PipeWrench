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
  export namespace lua.client.DebugUIs.AdminContextMenu { }
}
