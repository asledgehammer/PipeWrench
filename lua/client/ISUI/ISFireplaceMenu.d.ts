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

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    export abstract class ISFireplaceMenu {
      static [id: string]: any;

      /** @noSelf */
      static onAddAllFuel: (playerObj: any, fireplace: any) => any;

      /** @noSelf */
      static onAddFuel: (playerObj: any, fireplace: any, fuelType: any) => any;

      /** @noSelf */
      static onAddMultipleFuel: (playerObj: any, fireplace: any, fuelType: any) => any;

      /** @noSelf */
      static onDisplayInfo: (worldobjects: any, player: any, bbq: any) => any;

      /** @noSelf */
      static onExtinguish: (worldobjects: any, player: any, fireplace: any) => any;

      /** @noSelf */
      static OnFillWorldObjectContextMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static onLightFromKindle: (
        worldobjects: any,
        player: any,
        percedWood: any,
        stickOrBranch: any,
        fireplace: any
      ) => any;

      /** @noSelf */
      static onLightFromLiterature: (playerObj: any, itemType: any, lighter: any, fireplace: any, fuelAmt: any) => any;

      /** @noSelf */
      static onLightFromPetrol: (worldobjects: any, player: any, lighter: any, petrol: any, fireplace: any) => any;

      /** @noSelf */
      static toPlayerInventory: (playerObj: any, item: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISFireplaceMenu {}
}
