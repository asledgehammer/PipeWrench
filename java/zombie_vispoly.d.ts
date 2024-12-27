/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.vispoly {
    /**
     * @customConstructor VisibilityPolygon2.new
     * @
     * [CLASS] zombie.vispoly.VisibilityPolygon2
     */
    export class VisibilityPolygon2 {

      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      renderMain(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.vispoly.VisibilityPolygon2
       */
      static getInstance(): zombie.vispoly.VisibilityPolygon2;
    }
    /**
     * @customConstructor ChunkData.new
     * @
     * [CLASS] zombie.vispoly.VisibilityPolygon2$ChunkData
     */
    export class VisibilityPolygon2$ChunkData {
      /**
       * Constructors: 
       *  - (IsoChunk arg0)
       */
      constructor(arg0: zombie.iso.IsoChunk);
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.vispoly.VisibilityPolygon2$ChunkLevelData
       */
      getDataForLevel(arg0: number): zombie.vispoly.VisibilityPolygon2$ChunkLevelData;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeFromWorld(): void;
    }
    /**
     * @customConstructor ChunkLevelData.new
     * @
     * [CLASS] zombie.vispoly.VisibilityPolygon2$ChunkLevelData
     */
    export class VisibilityPolygon2$ChunkLevelData {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      invalidate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      recreate(): void;
    }
    /**
     * @customConstructor VisibilityWall.new
     * @
     * [CLASS] zombie.vispoly.VisibilityPolygon2$VisibilityWall
     */
    export class VisibilityPolygon2$VisibilityWall {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
  }
}
