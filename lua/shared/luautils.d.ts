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
/// <reference path="../../reference.d.ts" />
/// <reference path="../../PipeWrench.d.ts" />

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared {
    export abstract class luautils {
      static [id: string]: any;

      /** @noSelf */
      static equipItems: (_player: any, _primItemToEquip: any, _scndItemToEquip: any) => any;

      /** @noSelf */
      static getConditionRGB: (condition: any) => any;

      /** @noSelf */
      static getCorrectSquareForWall: (playerObj: any, square: any) => any;

      /** @noSelf */
      static getNextTiles: (cell: any, startingGrid: any, range: any) => any;

      /** @noSelf */
      static haveToBeTransfered: (player: any, item: any, dontWalk: any) => any;

      /** @noSelf */
      static indexOf: (table1: any, value: any) => any;

      /** @noSelf */
      static isEquipped: (_item: any, _player: any) => any;

      /** @noSelf */
      static isSquareAdjacentToSquare: (_square1: any, _square2: any) => any;

      /** @noSelf */
      static okModal: (_text: any, _centered: any, _width: any, _height: any, _posX: any, _posY: any) => any;

      /** @noSelf */
      static round: (num: any, idp: any) => any;

      /** @noSelf */
      static split: (inputstr: any, sep: any) => any;

      /** @noSelf */
      static stringEnds: (String: any, End: any) => any;

      /** @noSelf */
      static stringStarts: (String: any, Start: any) => any;

      /** @noSelf */
      static trim: (s: any) => any;

      /** @noSelf */
      static updatePerksXp: (perks: any, player: any) => any;

      /** @noSelf */
      static walkAdj: (playerObj: any, square: any, keepActions: any) => any;

      /** @noSelf */
      static walkAdjAltTest: (playerObj: any, square: any, altSquare: any, keepActions: any) => any;

      /** @noSelf */
      static walkAdjWall: (playerObj: any, square: any, north: any, keepActions: any) => any;

      /** @noSelf */
      static walkAdjWindowOrDoor: (playerObj: any, square: any, item: any, keepActions: any) => any;

      /** @noSelf */
      static walkToContainer: (container: any, playerNum: any) => any;

      /** @noSelf */
      static walkToObject: (_player: any, _object: any, _cancelTA: any) => any;

      /** @noSelf */
      static weaponLowerCondition: (_weapon: any, _character: any, _replace: any, _chance: any) => any;
    }
  }
  export namespace lua.shared.luautils { }
}
