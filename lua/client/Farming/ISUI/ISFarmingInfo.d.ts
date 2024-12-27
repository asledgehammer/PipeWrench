/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Farming.ISUI {
    /** @customConstructor ISFarmingInfo:new */
    export class ISFarmingInfo extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      isEnalbed: any;

      plant: any;

      vegetable: any;

      constructor(x: any, y: any, width: any, height: any, character: any, plant: any);

      getBlueBar(list: any, ...__args: never[]): any;

      getDiseaseColor(diseaseLvl: any, index: any, info: any, ...__args: never[]): any;

      getGreen(list: any, index: any, ...__args: never[]): any;

      getOrange(list: any, index: any, ...__args: never[]): any;

      getOrangeBar(list: any, ...__args: never[]): any;

      getRed(list: any, index: any, ...__args: never[]): any;

      getRedBar(list: any, ...__args: never[]): any;

      getWhite(list: any, index: any, ...__args: never[]): any;

      isPlantValid(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setEnabled(val: any, ...__args: never[]): any;

      setPlant(plant: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static getCurrentGrowingPhase: (info: any, farmingLevel: any, ...__args: never[]) => any;

      /** @noSelf */
      static getDisease: (
        diseaseLvl: any,
        farmingLevel: any,
        disease: any,
        info: any,
        index: any,
        string: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static getDiseaseName: (info: any, ...__args: never[]) => any;

      /** @noSelf */
      static getDiseaseString: (diseaseLvl: any, farmingLevel: any, ...__args: never[]) => any;

      /** @noSelf */
      static getFertilizerColor: (info: any, ...__args: never[]) => any;

      /** @noSelf */
      static getHealth: (info: any, farmingLevel: any, ...__args: never[]) => any;

      /** @noSelf */
      static getHealthColor: (info: any, farmingLevel: any, ...__args: never[]) => any;

      /** @noSelf */
      static getLastWatedHour: (plant: any, ...__args: never[]) => any;

      /** @noSelf */
      static getNextGrowingPhase: (info: any, ...__args: never[]) => any;

      /** @noSelf */
      static getNoWateredSinceColor: (plant: any, lastWatedHour: any, farmingLevel: any, ...__args: never[]) => any;

      /** @noSelf */
      static getTitleColor: (plant: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWaterBarWidth: (info: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWaterLvl: (plant: any, farmingLevel: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWaterLvlBarColor: (info: any, farmingLevel: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWaterLvlColor: (plant: any, farmingLevel: any, ...__args: never[]) => any;

      /** @noSelf */
      static hasDisease: (plant: any, ...__args: never[]) => any;

      /** @noSelf */
      static RequiredWidth: (...__args: never[]) => any;
    }

    export abstract class compost_rgb {
      static [id: string]: any;
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
  export namespace lua.client.Farming.ISUI.ISFarmingInfo {}
}
