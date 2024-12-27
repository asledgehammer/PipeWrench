/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.worldgen.zones {
    /**
     * @customConstructor ZoneGenerator.new
     * @
     * [CLASS] zombie.iso.worldgen.zones.ZoneGenerator
     */
    export class ZoneGenerator {
      /**
       * Constructors: 
       *  - (BiomeMap arg0)
       */
      constructor(arg0: zombie.iso.worldgen.maps.BiomeMap);
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      genAnimalsPath(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      genForaging(arg0: number, arg1: number): void;
    }
  }
}
