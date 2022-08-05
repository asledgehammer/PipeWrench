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
 * File generated at: 2022-08-05T02:36:28.080Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISEmptyGraves:new */
    export class ISEmptyGraves extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      actionAnim: any;

      craftingBank: any;

      equipBothHandItem: any;

      ignoreNorth: any;

      javaObject: any;

      maxTime: any;

      noNeedHammer: any;

      northSprite2: any;

      sprite2: any;

      sq: any;

      constructor(sprite1: any, sprite2: any, northSprite1: any, northSprite2: any, shovel: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getHealth: (() => any) | any;

      getSquare2: ((square: any, north: any) => any) | any;

      getSquare2Pos: ((square: any, north: any) => any) | any;

      setInfo: ((square: any, north: any, sprite: any, cell: any, spriteType: any) => any) | any;

      /** @noSelf */
      static canDigHere: (worldObjects: any) => any;

      /** @noSelf */
      static getMaxCorpses: (grave: any) => any;

      /** @noSelf */
      static isGraveFilledIn: (grave: any) => any;

      /** @noSelf */
      static isGraveFullOfCorpses: (grave: any) => any;

      /** @noSelf */
      static shovelledFloorCanDig: (square: any) => any;
    }
  }
  export namespace lua.server.BuildingObjects.ISEmptyGraves {}
}
