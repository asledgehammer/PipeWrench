/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.worldgen {
    /**
     * @customConstructor WGChunk.new
     * @
     * [CLASS] zombie.iso.worldgen.WGChunk
     */
    export class WGChunk {
      /**
       * Constructors: 
       *  - (long arg0)
       */
      constructor(arg0: number);
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addZombieToSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      areSimilar(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (IsoCell arg0, IsoChunk arg1, int arg2, int arg3): void
       */
      genMapChunk(arg0: zombie.iso.IsoCell, arg1: zombie.iso.IsoChunk, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (IsoCell arg0, IsoChunk arg1, int arg2, int arg3): boolean
       */
      genRandomChunk(arg0: zombie.iso.IsoCell, arg1: zombie.iso.IsoChunk, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, Direction arg1): java.util.List<zombie.iso.worldgen.biomes.TileGroup>
       */
      getAttachment(arg0: string, arg1: zombie.iso.worldgen.utils.Direction): java.util.List<zombie.iso.worldgen.biomes.TileGroup>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.worldgen.biomes.IBiome
       */
      getBiome(arg0: number, arg1: number): zombie.iso.worldgen.biomes.IBiome;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, String arg2): zombie.iso.worldgen.biomes.IBiome
       */
      getMapBiome(arg0: number, arg1: number, arg2: string): zombie.iso.worldgen.biomes.IBiome;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.iso.worldgen.roads.RoadGenerator>
       */
      getRoadGenerators(): java.util.List<zombie.iso.worldgen.roads.RoadGenerator>;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      priority(arg0: string, arg1: string): boolean;
    }
    /**
     * @customConstructor WGParams.new
     * @
     * [CLASS] zombie.iso.worldgen.WGParams
     */
    export class WGParams {
      /** zombie.iso.worldgen.WGParams */
      static instance?: zombie.iso.worldgen.WGParams;


      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxXCell(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxYCell(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinXCell(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinYCell(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.Random
       *  - (int arg0, int arg1, long arg2): java.util.Random
       */
      getRandom(arg0: number, arg1: number, arg2?: number): java.util.Random;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSeedString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxXCell(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxYCell(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinXCell(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinYCell(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSeedString(arg0: string): void;
    }
    /**
     * @customConstructor WGUtils.new
     * @
     * [CLASS] zombie.iso.worldgen.WGUtils
     */
    export class WGUtils {
      /** zombie.iso.worldgen.WGUtils */
      static instance?: zombie.iso.worldgen.WGUtils;


      /**
       * Method Parameters: 
       *  - (List arg0, String arg1): boolean
       */
      canPlace(arg0: java.util.List<string>, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       *  - (KahluaTable arg0): string
       */
      displayTable(arg0: string | se.krka.kahlua.vm.KahluaTable): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      generateSeed(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getFile(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      getFiles(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFilesNum(): number;
      /**
       * Method Parameters: 
       *  - (StackTraceElement arg0): string
       */
      methodName(arg0: java.lang.StackTraceElement): string;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, String... arg2): string
       */
      methodsCall(arg0: string, arg1: number, arg2: string[]): string;
    }
  }
}
