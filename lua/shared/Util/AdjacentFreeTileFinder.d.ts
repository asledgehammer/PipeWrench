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
  export namespace lua.shared.Util {
    export abstract class AdjacentFreeTileFinder {
      static [id: string]: any;

      /** @noSelf */
      static Find: (gridSquare: any, playerObj: any) => any;

      /** @noSelf */
      static FindClosest: (gridSquare: any, playerObj: any) => any;

      /** @noSelf */
      static FindEdge: (gridSquare: any, dir: any, playerObj: any, preferSameSquare: any) => any;

      /** @noSelf */
      static FindWall: (gridSquare: any, north: any, playerObj: any) => any;

      /** @noSelf */
      static FindWindowOrDoor: (gridSquare: any, window: any, playerObj: any) => any;

      /** @noSelf */
      static isTileOrAdjacent: (a: any, b: any) => any;

      /** @noSelf */
      static isTileOrAdjacent8: (a: any, b: any) => any;

      /** @noSelf */
      static privCanStand: (test: any) => any;

      /** @noSelf */
      static privGetNorth: (gridSquare: any, object: any) => any;

      /** @noSelf */
      static privTrySquare: (src: any, test: any) => any;

      /** @noSelf */
      static privTrySquareForWalls: (src: any, test: any) => any;

      /** @noSelf */
      static privTrySquareForWalls2: (src: any, x: any, y: any, z: any) => any;

      /** @noSelf */
      static privTrySquareWindow: (src: any, test: any) => any;
    }
  }
  export namespace lua.shared.Util.AdjacentFreeTileFinder {}
}
