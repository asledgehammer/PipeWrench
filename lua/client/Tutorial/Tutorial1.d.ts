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
 * File generated at: 2022-08-05T02:36:33.144Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Tutorial {
    export abstract class Tutorial1 {
      static [id: string]: any;

      static contextMenuEat: any;

      static contextMenuEquip2Hand: any;

      static contextMenuEquipBag: any;

      static contextMenuEquipPrimary: any;

      static contextMenuFillBottle: any;

      static contextMenuOpenCurtain: any;

      static contextMenuWear: any;

      static DeadMouse: any;

      /** @noSelf */
      static Add: () => any;

      /** @noSelf */
      static addBarricade: (x: any, y: any, z: any) => any;

      /** @noSelf */
      static addMetalBarricade: (x: any, y: any, z: any) => any;

      /** @noSelf */
      static AddPlayer: (p: any) => any;

      /** @noSelf */
      static closeBothInv: () => any;

      /** @noSelf */
      static closeInv: () => any;

      /** @noSelf */
      static closeLoot: () => any;

      /** @noSelf */
      static collapseInv: (inv: any) => any;

      /** @noSelf */
      static createInventoryContextMenu: (player: any, isInPlayerInventory: any, items: any, x: any, y: any) => any;

      /** @noSelf */
      static createWorldContextMenu: (player: any, worldobjects: any, x: any, y: any) => any;

      /** @noSelf */
      static createWorldContextMenuFromContext: (context: any, worldobjects: any) => any;

      /** @noSelf */
      static doubleClickInventory: (inventoryPane: any, x: any, y: any, mouseOverOption: any) => any;

      /** @noSelf */
      static FillContainers: () => any;

      /** @noSelf */
      static Init: () => any;

      /** @noSelf */
      static lockDoor: (x: any, y: any, z: any) => any;

      /** @noSelf */
      static openDoor: (x: any, y: any, z: any, north: any) => any;

      /** @noSelf */
      static PreloadInit: () => any;

      /** @noSelf */
      static removeFences: () => any;

      /** @noSelf */
      static Render: () => any;

      /** @noSelf */
      static replaceFence: (sq: any, north: any) => any;

      /** @noSelf */
      static SpawnZombies: (count: any) => any;

      /** @noSelf */
      static Tick: () => any;

      /** @noSelf */
      static unlockDoor: (x: any, y: any, z: any) => any;
    }
  }
  export namespace lua.client.Tutorial.Tutorial1 {}
}
