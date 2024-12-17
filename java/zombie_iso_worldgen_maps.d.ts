/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.worldgen.maps {
    /**
     * @customConstructor BiomeMap.new
     * @
     * [CLASS] zombie.iso.worldgen.maps.BiomeMap
     */
    export class BiomeMap {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getBiomeName(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.worldgen.maps.BiomeMapEntry
       */
      getEntry(arg0: number): zombie.iso.worldgen.maps.BiomeMapEntry;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<string>
       */
      getForagingZones(): java.util.List<string>;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getOreName(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getZoneName(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number[]
       */
      getZones(arg0: number, arg1: number): number[];
    }
    /**
     * @customConstructor BiomeMapEntry.new
     * @
     * [CLASS] zombie.iso.worldgen.maps.BiomeMapEntry extends java.lang.Record
     */
    export class BiomeMapEntry {
      /**
       * Constructors: 
       *  - (int pixel, String biome, String ore, String zone)
       */
      constructor(arg0: number, arg1: string, arg2: string, arg3: string);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      biome(): string;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      ore(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      pixel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      zone(): string;
    }
  }
}
