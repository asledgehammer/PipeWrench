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
 * File generated at: 2022-08-07T18:22:54.811Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Farming.ISUI {
    export abstract class ISFarmingMenu {
      static [id: string]: any;

      doSeedMenu: ((context: any, plant: any, sq: any, playerObj: any) => any) | any;

      isFertilizeValid: (() => any) | any;

      isHarvestValid: (() => any) | any;

      isInfoValid: (() => any) | any;

      isSeedValid: (() => any) | any;

      isWaterValid: (() => any) | any;

      onFertilizeSquareSelected: (() => any) | any;

      onHarvestSquareSelected: (() => any) | any;

      onInfoSquareSelected: (() => any) | any;

      onSeedSquareSelected: (() => any) | any;

      onWaterSquareSelected: (() => any) | any;

      /** @noSelf */
      static canDigHere: (worldObjects: any) => any;

      /** @noSelf */
      static canPlow: (seedAvailable: any, typeOfSeed: any, option: any) => any;

      /** @noSelf */
      static doFarmingMenu: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static doFarmingMenu2: (player: any, context: any, worldobjects: any, test: any) => any;

      /** @noSelf */
      static getPlantName: (plant: any) => any;

      /** @noSelf */
      static getShovel: (player: any) => any;

      /** @noSelf */
      static getShovelAnim: (item: any) => any;

      /** @noSelf */
      static isValidPlant: (plant: any) => any;

      /** @noSelf */
      static itemSortByName: (a: any, b: any) => any;

      /** @noSelf */
      static onCheat: (worldobjects: any, plant: any, args: any) => any;

      /** @noSelf */
      static onCheatGrow: (worldobjects: any, plant: any) => any;

      /** @noSelf */
      static onCheatWater: (worldobjects: any, plant: any) => any;

      /** @noSelf */
      static onFertilize: (worldobjects: any, handItem: any, plant: any, sq: any, playerObj: any) => any;

      /** @noSelf */
      static onFliesCure: (worldobjects: any, uses: any, sq: any, playerObj: any) => any;

      /** @noSelf */
      static onHarvest: (worldobjects: any, plantToharvest: any, sq: any, playerObj: any) => any;

      /** @noSelf */
      static onInfo: (worldobjects: any, plant: any, sq: any, playerObj: any) => any;

      /** @noSelf */
      static onJoypadFarming: (square: any, player: any) => any;

      /** @noSelf */
      static onMildewCure: (worldobjects: any, uses: any, sq: any, playerObj: any) => any;

      /** @noSelf */
      static onPlow: (worldobjects: any, player: any, handItem: any) => any;

      /** @noSelf */
      static onSeed: (playerObj: any, typeOfSeed: any, plant: any, sq: any) => any;

      /** @noSelf */
      static onShovel: (worldobjects: any, plant: any, player: any, sq: any) => any;

      /** @noSelf */
      static onWater: (worldobjects: any, uses: any, handItem: any, playerObj: any, plant: any, sq: any) => any;

      /** @noSelf */
      static walkToPlant: (playerObj: any, square: any) => any;
    }
  }
  export namespace lua.client.Farming.ISUI.ISFarmingMenu {}
}
