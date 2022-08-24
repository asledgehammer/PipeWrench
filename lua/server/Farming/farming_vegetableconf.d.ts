/**  @noSelfInFile */

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
  export namespace lua.server.Farming.farming_vegetableconf {}
}
