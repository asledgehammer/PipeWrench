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
  export namespace lua.shared.Reloading {
    /** @customConstructor ISSemiAutoWeapon:new */
    export class ISSemiAutoWeapon extends lua.shared.Reloading.ISReloadableWeapon {
      [id: string]: any;
      static [id: string]: any;

      clipIcon: any;

      clipName: any;

      containsClip: any;

      currentCapacity: any;

      insertClipText: any;

      reloadInProgress: any;

      reloadText: any;

      removeClipText: any;

      roundChambered: any;

      constructor();

      createMagazine: (() => any) | any;

      getRackTime: (() => any) | any;

      getReloadTime: (() => any) | any;

      isChainReloading: (() => any) | any;

      isReloadValidEasy: ((char: any, square: any) => any) | any;

      isReloadValidHard: ((char: any, square: any) => any) | any;

      isReloadValidNormal: ((char: any, square: any) => any) | any;

      printReloadableWeaponDetails: (() => any) | any;

      printWeaponDetails: ((item: any) => any) | any;

      rackingPerform: ((char: any, square: any, weapon: any) => any) | any;

      rackingStart: ((char: any, square: any, weapon: any) => any) | any;

      reloadPerformEasy: ((char: any, square: any, weapon: any) => any) | any;

      reloadPerformNormal: ((char: any, square: any, weapon: any) => any) | any;

      reloadStartEasy: ((char: any, square: any) => any) | any;

      reloadStartNormal: ((char: any, square: any) => any) | any;

      setupMagazine: ((magazine: any) => any) | any;
    }
  }
  export namespace lua.shared.Reloading.ISSemiAutoWeapon {}
}
