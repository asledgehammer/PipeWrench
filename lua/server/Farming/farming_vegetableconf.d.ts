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
 * File generated at: 2022-08-01T06:43:04.453Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.server.Farming {
    export class farming_vegetableconf {
      private constructor();

      static [id: string]: any;

      static calcDisease: ((diseaseLvl: any) => any) | any;

      static calcWater: ((waterMin: any, waterLvl: any) => any) | any;

      static getObjectName: ((plant: any) => any) | any;

      static getSpriteName: ((plant: any) => any) | any;

      static growBroccoli: ((planting: any, nextGrowing: any, updateNbOfGrow: any) => any) | any;

      static growCabbage: ((planting: any, nextGrowing: any, updateNbOfGrow: any) => any) | any;

      static growCarrots: ((planting: any, nextGrowing: any, updateNbOfGrow: any) => any) | any;

      static growPotato: ((planting: any, nextGrowing: any, updateNbOfGrow: any) => any) | any;

      static growRedRadish: ((planting: any, nextGrowing: any, updateNbOfGrow: any) => any) | any;

      static growStrewberries: ((planting: any, nextGrowing: any, updateNbOfGrow: any) => any) | any;

      static growTomato: ((planting: any, nextGrowing: any, updateNbOfGrow: any) => any) | any;
    }
  }
  export namespace lua.server.Farming.farming_vegetableconf {}
}
