/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Farming {
    export abstract class farming_vegetableconf {
      static [id: string]: any;

      /** @noSelf */
      static calcDisease: (diseaseLvl: any, ...__args: never[]) => any;

      /** @noSelf */
      static calcWater: (waterMin: any, waterLvl: any, ...__args: never[]) => any;

      /** @noSelf */
      static getObjectName: (plant: any, ...__args: never[]) => any;

      /** @noSelf */
      static getSpriteName: (plant: any, ...__args: never[]) => any;

      /** @noSelf */
      static growBroccoli: (planting: any, nextGrowing: any, updateNbOfGrow: any, ...__args: never[]) => any;

      /** @noSelf */
      static growCabbage: (planting: any, nextGrowing: any, updateNbOfGrow: any, ...__args: never[]) => any;

      /** @noSelf */
      static growCarrots: (planting: any, nextGrowing: any, updateNbOfGrow: any, ...__args: never[]) => any;

      /** @noSelf */
      static growPotato: (planting: any, nextGrowing: any, updateNbOfGrow: any, ...__args: never[]) => any;

      /** @noSelf */
      static growRedRadish: (planting: any, nextGrowing: any, updateNbOfGrow: any, ...__args: never[]) => any;

      /** @noSelf */
      static growStrewberries: (planting: any, nextGrowing: any, updateNbOfGrow: any, ...__args: never[]) => any;

      /** @noSelf */
      static growTomato: (planting: any, nextGrowing: any, updateNbOfGrow: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Farming.farming_vegetableconf {}
}
