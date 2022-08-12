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
  export namespace lua.server.XpSystem {
    export abstract class xpUpdate {
      static [id: string]: any;

      /** @noSelf */
      static addXp: (owner: any, type: any, amount: any) => any;

      /** @noSelf */
      static checkForLosingLevel: (playerObj: any, perk: any) => any;

      /** @noSelf */
      static displayCharacterInfo: (key: any) => any;

      /** @noSelf */
      static everyTenMinutes: () => any;

      /** @noSelf */
      static getModData: (playerObj: any) => any;

      /** @noSelf */
      static levelPerk: (owner: any, perk: any, level: any, addBuffer: any) => any;

      /** @noSelf */
      static onMakeItem: (item: any, resultItem: any, recipe: any) => any;

      /** @noSelf */
      static onNewGame: (playerObj: any, square: any) => any;

      /** @noSelf */
      static onPlayerMove: () => any;

      /** @noSelf */
      static OnWeaponHitTree: (owner: any, weapon: any) => any;

      /** @noSelf */
      static onWeaponHitXp: (owner: any, weapon: any, hitObject: any, damage: any) => any;

      /** @noSelf */
      static randXp: () => any;
    }
  }
  export namespace lua.server.XpSystem.XpUpdate {}
}
