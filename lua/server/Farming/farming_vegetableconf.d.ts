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

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Farming {
    export abstract class farming_vegetableconf {
      static [id: string]: any;

      /** @noSelf */
      static calcDisease: (diseaseLvl: any) => any;

      /** @noSelf */
      static calcWater: (waterMin: any, waterLvl: any) => any;

      /** @noSelf */
      static getObjectName: (plant: any) => any;

      /** @noSelf */
      static getSpriteName: (plant: any) => any;

      /** @noSelf */
      static growBroccoli: (planting: any, nextGrowing: any, updateNbOfGrow: any) => any;

      /** @noSelf */
      static growCabbage: (planting: any, nextGrowing: any, updateNbOfGrow: any) => any;

      /** @noSelf */
      static growCarrots: (planting: any, nextGrowing: any, updateNbOfGrow: any) => any;

      /** @noSelf */
      static growPotato: (planting: any, nextGrowing: any, updateNbOfGrow: any) => any;

      /** @noSelf */
      static growRedRadish: (planting: any, nextGrowing: any, updateNbOfGrow: any) => any;

      /** @noSelf */
      static growStrewberries: (planting: any, nextGrowing: any, updateNbOfGrow: any) => any;

      /** @noSelf */
      static growTomato: (planting: any, nextGrowing: any, updateNbOfGrow: any) => any;
    }
  }
  export namespace lua.server.Farming.farming_vegetableconf { }
}
