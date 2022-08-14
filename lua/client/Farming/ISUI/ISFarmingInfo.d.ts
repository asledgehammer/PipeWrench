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
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />

declare module '@shughesuk/pipewrench' {
  export namespace lua.client.Farming.ISUI {
    /** @customConstructor ISFarmingInfo:new */
    export class ISFarmingInfo extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      plant: any;

      vegetable: any;

      constructor(x: any, y: any, width: any, height: any, character: any, plant: any);

      getBlueBar: ((list: any) => any) | any;

      getDiseaseColor: ((diseaseLvl: any, index: any, info: any) => any) | any;

      getGreen: ((list: any, index: any) => any) | any;

      getOrange: ((list: any, index: any) => any) | any;

      getOrangeBar: ((list: any) => any) | any;

      getRed: ((list: any, index: any) => any) | any;

      getRedBar: ((list: any) => any) | any;

      getWhite: ((list: any, index: any) => any) | any;

      isPlantValid: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      setPlant: ((plant: any) => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static getCurrentGrowingPhase: (info: any, farmingLevel: any) => any;

      /** @noSelf */
      static getDiseaseName: (info: any) => any;

      /** @noSelf */
      static getFertilizerColor: (info: any) => any;

      /** @noSelf */
      static getHealth: (info: any, farmingLevel: any) => any;

      /** @noSelf */
      static getHealthColor: (info: any, farmingLevel: any) => any;

      /** @noSelf */
      static getLastWatedHour: (plant: any) => any;

      /** @noSelf */
      static getNextGrowingPhase: (info: any) => any;

      /** @noSelf */
      static getNoWateredSinceColor: (plant: any, lastWatedHour: any, farmingLevel: any) => any;

      /** @noSelf */
      static getTitleColor: (plant: any) => any;

      /** @noSelf */
      static getWaterBarWidth: (info: any) => any;

      /** @noSelf */
      static getWaterLvl: (plant: any, farmingLevel: any) => any;

      /** @noSelf */
      static getWaterLvlBarColor: (info: any, farmingLevel: any) => any;

      /** @noSelf */
      static getWaterLvlColor: (plant: any, farmingLevel: any) => any;

      /** @noSelf */
      static RequiredWidth: () => any;
    }

    export abstract class disease {
      static [id: string]: any;
    }

    export abstract class disease_rgb {
      static [id: string]: any;
    }

    export abstract class fertilizer_rgb {
      static [id: string]: any;
    }

    export abstract class health_rgb {
      static [id: string]: any;
    }

    export abstract class nowateredsince_rgb {
      static [id: string]: any;
    }

    export abstract class title_rgb {
      static [id: string]: any;
    }

    export abstract class water_rgb {
      static [id: string]: any;
    }

    export abstract class waterbar_rgb {
      static [id: string]: any;
    }
  }
  export namespace lua.client.Farming.ISUI.ISFarmingInfo { }
}
