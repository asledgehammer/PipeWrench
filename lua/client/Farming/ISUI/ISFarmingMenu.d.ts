/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Farming.ISUI {
    export abstract class ISFarmingMenu {
      static [id: string]: any;

      doSeedMenu: ((context: any, plant: any, sq: any, playerObj: any) => any) | any;

      isCompostValid: (() => any) | any;

      isFertilizeValid: (() => any) | any;

      isHarvestValid: (() => any) | any;

      isInfoValid: (() => any) | any;

      isSeedValid: (() => any) | any;

      isWaterValid: (() => any) | any;

      onCompostSquareSelected: (() => any) | any;

      onFertilizeSquareSelected: (() => any) | any;

      onHarvestSquareSelected: (() => any) | any;

      onInfoSquareSelected: (() => any) | any;

      onSeedSquareSelected: (() => any) | any;

      onWaterSquareSelected: (() => any) | any;

      /** @noSelf */
      static canDigHere: (worldObjects: any, ...__args: never[]) => any;

      /** @noSelf */
      static canDigHereSquare: (square: any, ...__args: never[]) => any;

      /** @noSelf */
      static canPlow: (
        seedAvailable: any,
        typeOfSeed: any,
        option: any,
        seedName: any,
        playerObj: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static doFarmingMenu: (player: any, context: any, worldobjects: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static doFarmingMenu2: (player: any, context: any, worldobjects: any, test: any, ...__args: never[]) => any;

      /** @noSelf */
      static getFluidContainerMillilitresPerUse: (...__args: never[]) => any;

      /** @noSelf */
      static getPlantName: (plant: any, ...__args: never[]) => any;

      /** @noSelf */
      static getShovel: (player: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWaterUsesFloat: (item: any, ...__args: never[]) => any;

      /** @noSelf */
      static getWaterUsesInteger: (item: any, ...__args: never[]) => any;

      /** @noSelf */
      static isValidPlant: (plant: any, ...__args: never[]) => any;

      /** @noSelf */
      static itemSortByName: (a: any, b: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAphidsCure: (worldobjects: any, uses: any, sq: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheat: (worldobjects: any, plant: any, args: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatGrow: (worldobjects: any, plant: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheatWater: (worldobjects: any, plant: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCompost: (
        worldobjects: any,
        handItem: any,
        plant: any,
        sq: any,
        playerObj: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onFertilize: (
        worldobjects: any,
        handItem: any,
        plant: any,
        sq: any,
        playerObj: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onFliesCure: (worldobjects: any, uses: any, sq: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onHarvest: (worldobjects: any, plantToharvest: any, sq: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onInfo: (worldobjects: any, plant: any, sq: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onJoypadFarming: (square: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMildewCure: (worldobjects: any, uses: any, sq: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onPlow: (worldobjects: any, player: any, handItem: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSeed: (playerObj: any, typeOfSeed: any, plant: any, sq: any, seedName: any, ...__args: never[]) => any;

      /** @noSelf */
      static onShovel: (worldobjects: any, plant: any, player: any, sq: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSlugsCure: (worldobjects: any, uses: any, sq: any, playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onWater: (
        worldobjects: any,
        uses: any,
        handItem: any,
        playerObj: any,
        plant: any,
        sq: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static plantInfo: (prop: any, ...__args: never[]) => any;

      /** @noSelf */
      static walkToPlant: (playerObj: any, square: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Farming.ISUI.ISFarmingMenu {}
}
