/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.seating {
    /**
     * @customConstructor SeatingFile.new
     * @
     * [CLASS] zombie.seating.SeatingFile
     */
    export class SeatingFile {
      /** int */
      static readonly VERSION1: number;
      /** int */
      static readonly VERSION2: number;
      /** int */
      static readonly VERSION3: number;
      /** int */
      static readonly VERSION_LATEST: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Tile.new
     * @
     * [CLASS] zombie.seating.SeatingFile$Tile
     */
    export class SeatingFile$Tile {

    }
    /**
     * @customConstructor SeatingManager.new
     * @
     * [CLASS] zombie.seating.SeatingManager
     */
    export class SeatingManager {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, String arg4): number
       */
      addTilePosition(arg0: string, arg1: string, arg2: number, arg3: number, arg4: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      fixDefaultPositions(): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoObject arg1, String arg2, String arg3, String arg4, String arg5, Vector3f arg6): boolean
       *  - (String arg0, IsoSprite arg1, String arg2, String arg3, Model arg4, String arg5, String arg6, String arg7, Vector2f arg8): boolean
       */
      getAdjacentPosition(arg0: zombie.characters.IsoGameCharacter | string, arg1: zombie.iso.IsoObject | zombie.iso.sprite.IsoSprite, arg2: string, arg3: string, arg4: string | zombie.core.skinnedmodel.model.Model, arg5: string, arg6: org.joml.Vector3f | string, arg7?: string, arg8?: org.joml.Vector2f): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, String arg1): number
       */
      getAnimationTrackFraction(arg0: zombie.characters.IsoGameCharacter, arg1: string): number;
      /**
       * Method Parameters: 
       *  - (BoneAxis arg0, Vector3f arg1, Vector2 arg2): zombie.iso.Vector2
       */
      getDeferredMovement(arg0: zombie.core.skinnedmodel.animation.BoneAxis, arg1: org.lwjgl.util.vector.Vector3f, arg2: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): string
       *  - (IsoSprite arg0): string
       *  - (String arg0, int arg1, int arg2): string
       *  - (String arg0, String arg1, int arg2, int arg3): string
       */
      getFacingDirection(arg0: zombie.iso.IsoObject | zombie.iso.sprite.IsoSprite | string, arg1?: number | string, arg2?: number, arg3?: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getModIDs(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3): zombie.seating.SeatingFile$Tile
       */
      getOrCreateTile(arg0: string, arg1: string, arg2: number, arg3: number): zombie.seating.SeatingFile$Tile;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3): zombie.seating.SeatingFile$Tile
       */
      getTile(arg0: string, arg1: string, arg2: number, arg3: number): zombie.seating.SeatingFile$Tile;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): number
       *  - (String arg0, int arg1, int arg2): number
       *  - (String arg0, String arg1, int arg2, int arg3): number
       */
      getTilePositionCount(arg0: zombie.iso.IsoObject | string, arg1?: number | string, arg2?: number, arg3?: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4): string
       */
      getTilePositionID(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number): string;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, String arg5): string
       */
      getTilePositionProperty(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4): org.joml.Vector3f
       */
      getTilePositionTranslate(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2, String arg3): string
       *  - (String arg0, String arg1, int arg2, int arg3, String arg4): string
       */
      getTileProperty(arg0: string, arg1: number | string, arg2: number, arg3: string | number, arg4?: string): string;
      /**
       * Method Parameters: 
       *  - (IsoSprite arg0, String arg1, Vector3f arg2): org.joml.Vector3f
       *  - (String arg0, int arg1, String arg2, Vector3f arg3): org.joml.Vector3f
       *  - (String arg0, IsoSprite arg1, String arg2, Vector3f arg3): org.joml.Vector3f
       *  - (String arg0, String arg1, int arg2, String arg3, Vector3f arg4): org.joml.Vector3f
       */
      getTranslation(arg0: zombie.iso.sprite.IsoSprite | string, arg1: string | number | zombie.iso.sprite.IsoSprite, arg2: org.joml.Vector3f | string | number, arg3?: org.joml.Vector3f | string, arg4?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, String arg4): boolean
       */
      hasTilePositionWithID(arg0: string, arg1: string, arg2: number, arg3: number, arg4: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initGameData(): void;
      /**
       * Method Parameters: 
       *  - (Mod arg0): void
       */
      initModData(arg0: zombie.gameStates.ChooseGameInfo$Mod): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      mergeAfterEditing(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4): void
       */
      removeTilePosition(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, String arg5, String arg6): void
       */
      setTilePositionProperty(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: string, arg6: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, String arg4, String arg5): void
       */
      setTileProperty(arg0: string, arg1: string, arg2: number, arg3: number, arg4: string, arg5: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      write(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.seating.SeatingManager
       */
      static getInstance(): zombie.seating.SeatingManager;
    }
  }
}
