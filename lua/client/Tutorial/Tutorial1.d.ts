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
 * File generated at: 2022-08-04T23:00:37.788Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Tutorial {
    export class Tutorial1 {
      private constructor();

      static [id: string]: any;

      static contextMenuEat: any;

      static contextMenuEquip2Hand: any;

      static contextMenuEquipBag: any;

      static contextMenuEquipPrimary: any;

      static contextMenuFillBottle: any;

      static contextMenuOpenCurtain: any;

      static contextMenuWear: any;

      static DeadMouse: any;

      static Add: () => any;

      static addBarricade: (x: any, y: any, z: any) => any;

      static addMetalBarricade: (x: any, y: any, z: any) => any;

      static AddPlayer: (p: any) => any;

      static closeBothInv: () => any;

      static closeInv: () => any;

      static closeLoot: () => any;

      static collapseInv: (inv: any) => any;

      static createInventoryContextMenu: (player: any, isInPlayerInventory: any, items: any, x: any, y: any) => any;

      static createWorldContextMenu: (player: any, worldobjects: any, x: any, y: any) => any;

      static createWorldContextMenuFromContext: (context: any, worldobjects: any) => any;

      static doubleClickInventory: (inventoryPane: any, x: any, y: any, mouseOverOption: any) => any;

      static FillContainers: () => any;

      static Init: () => any;

      static lockDoor: (x: any, y: any, z: any) => any;

      static openDoor: (x: any, y: any, z: any, north: any) => any;

      static PreloadInit: () => any;

      static removeFences: () => any;

      static Render: () => any;

      static replaceFence: (sq: any, north: any) => any;

      static SpawnZombies: (count: any) => any;

      static Tick: () => any;

      static unlockDoor: (x: any, y: any, z: any) => any;
    }
  }
  export namespace lua.client.Tutorial.Tutorial1 {}
}
