/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.erosion {
    /**
     * @customConstructor ErosionConfig.new
     * @
     * [CLASS] zombie.erosion.ErosionConfig
     */
    export class ErosionConfig {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      consolePrint(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.erosion.ErosionConfig$Debug
       */
      getDebug(): zombie.erosion.ErosionConfig$Debug;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      readFile(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      writeFile(arg0: string): void;
    }
    /**
     * @customConstructor Debug.new
     * @
     * [CLASS] zombie.erosion.ErosionConfig$Debug
     */
    export class ErosionConfig$Debug {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStartDay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStartMonth(): number;
    }
    /**
     * @customConstructor Season.new
     * @
     * [CLASS] zombie.erosion.ErosionConfig$Season
     */
    export class ErosionConfig$Season {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Seeds.new
     * @
     * [CLASS] zombie.erosion.ErosionConfig$Seeds
     */
    export class ErosionConfig$Seeds {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Time.new
     * @
     * [CLASS] zombie.erosion.ErosionConfig$Time
     */
    export class ErosionConfig$Time {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ErosionData.new
     * @
     * [CLASS] zombie.erosion.ErosionData
     */
    export class ErosionData {
      /** boolean */
      static staticRand: boolean;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Chunk.new
     * @
     * [CLASS] zombie.erosion.ErosionData$Chunk
     */
    export class ErosionData$Chunk {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (IsoChunk arg0): void
       */
      set(arg0: zombie.iso.IsoChunk): void;
    }
    /**
     * @customConstructor Square.new
     * @
     * [CLASS] zombie.erosion.ErosionData$Square
     */
    export class ErosionData$Square {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): number
       */
      rand(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
    }
    /**
     * @customConstructor ErosionMain.new
     * @
     * [CLASS] zombie.erosion.ErosionMain
     */
    export class ErosionMain {
      /**
       * Constructors: 
       *  - (IsoSpriteManager arg0, boolean arg1)
       */
      constructor(arg0: zombie.iso.sprite.IsoSpriteManager, arg1: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DebugUpdateMapNow(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.erosion.ErosionConfig
       */
      getConfig(): zombie.erosion.ErosionConfig;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEtick(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.erosion.season.ErosionSeason
       */
      getSeasons(): zombie.erosion.season.ErosionSeason;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSnowFraction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSnowFractionYesterday(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSpriteManager
       */
      getSpriteManager(): zombie.iso.sprite.IsoSpriteManager;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSnow(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      mainTimer(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      receiveState(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      sendState(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      snowCheck(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      start(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoChunk arg0): void
       */
      static ChunkLoaded(arg0: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static EveryTenMinutes(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      static LoadGridsquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.erosion.ErosionMain
       */
      static getInstance(): zombie.erosion.ErosionMain;
    }
  }
}
