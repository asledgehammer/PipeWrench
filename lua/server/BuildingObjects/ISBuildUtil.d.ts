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
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.server.BuildingObjects {
    export abstract class buildUtil {
      static [id: string]: any;

      /** @noSelf */
      static addCorner: (x: any, y: any, z: any, thumpable: any, item: any) => any;

      /** @noSelf */
      static addWoodXp: (ISItem: any) => any;

      /** @noSelf */
      static canBePlace: (ISItem: any, square: any) => any;

      /** @noSelf */
      static checkCorner: (x: any, y: any, z: any, north: any, thumpable: any, item: any) => any;

      /** @noSelf */
      static checkMaterialOnGround: (squareToCheck: any) => any;

      /** @noSelf */
      static consumeMaterial: (ISItem: any) => any;

      /** @noSelf */
      static getDoubleDoorObjects: (object: any) => any;

      /** @noSelf */
      static getGarageDoorObjects: (object: any) => any;

      /** @noSelf */
      static getGraveObjects: (object: any) => any;

      /** @noSelf */
      static getMaterialOnGround: (squareToCheck: any) => any;

      /** @noSelf */
      static getMaterialOnGroundCounts: (itemMap: any) => any;

      /** @noSelf */
      static getMaterialOnGroundUses: (itemMap: any) => any;

      /** @noSelf */
      static getStairObjects: (object: any) => any;

      /** @noSelf */
      static getWoodHealth: (ISItem: any) => any;

      /** @noSelf */
      static openNailsBox: (ISItem: any) => any;

      /** @noSelf */
      static predicateMaterial: (item: any) => any;

      /** @noSelf */
      static removeFromGround: (square: any) => any;

      /** @noSelf */
      static setHaveConstruction: (_square: any, _hasConstruction: any) => any;

      /** @noSelf */
      static setInfo: (javaObject: any, ISItem: any) => any;

      /** @noSelf */
      static stairIsBlockingPlacement: (_square: any, _doAdjacent: any, _north: any) => any;

      /** @noSelf */
      static useDrainable: (item: any, uses: any) => any;
    }
  }
  export namespace lua.server.BuildingObjects.ISBuildUtil {}
}
