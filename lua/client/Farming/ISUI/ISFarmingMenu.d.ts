/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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
