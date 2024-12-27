/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.seams {
    /**
     * @customConstructor SeamFile.new
     * @
     * [CLASS] zombie.seams.SeamFile
     */
    export class SeamFile {
      /** int */
      static readonly VERSION1: number;
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
     * [CLASS] zombie.seams.SeamFile$Tile
     */
    export class SeamFile$Tile {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMasterTileName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMasterTile(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNull(): boolean;
    }
    /**
     * @customConstructor Tileset.new
     * @
     * [CLASS] zombie.seams.SeamFile$Tileset
     */
    export class SeamFile$Tileset {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor SeamManager.new
     * @
     * [CLASS] zombie.seams.SeamManager
     */
    export class SeamManager {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2): zombie.seams.SeamFile$Tile
       */
      getHighestPriorityTile(arg0: string, arg1: number, arg2: number): zombie.seams.SeamFile$Tile;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.seams.SeamFile$Tile
       */
      getHighestPriorityTileFromName(arg0: string): zombie.seams.SeamFile$Tile;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3): string
       */
      getMasterTileName(arg0: string, arg1: string, arg2: number, arg3: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getModIDs(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3): zombie.seams.SeamFile$Tile
       */
      getOrCreateTile(arg0: string, arg1: string, arg2: number, arg3: number): zombie.seams.SeamFile$Tile;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3): zombie.seams.SeamFile$Tile
       */
      getTile(arg0: string, arg1: string, arg2: number, arg3: number): zombie.seams.SeamFile$Tile;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.seams.SeamFile$Tile
       */
      getTileFromName(arg0: string, arg1: string): zombie.seams.SeamFile$Tile;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, boolean arg4): java.util.ArrayList<string>
       */
      getTileJoinBelowE(arg0: string, arg1: string, arg2: number, arg3: number, arg4: boolean): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, boolean arg4): java.util.ArrayList<string>
       */
      getTileJoinBelowS(arg0: string, arg1: string, arg2: number, arg3: number, arg4: boolean): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, boolean arg4): java.util.ArrayList<string>
       */
      getTileJoinE(arg0: string, arg1: string, arg2: number, arg3: number, arg4: boolean): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, boolean arg4): java.util.ArrayList<string>
       */
      getTileJoinS(arg0: string, arg1: string, arg2: number, arg3: number, arg4: boolean): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, String arg4): string
       */
      getTileProperty(arg0: string, arg1: string, arg2: number, arg3: number, arg4: string): string;
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
       *  - (String arg0, String arg1, int arg2, int arg3): boolean
       */
      isMasterTile(arg0: string, arg1: string, arg2: number, arg3: number): boolean;
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
       *  - (Empty): zombie.seams.SeamManager
       */
      static getInstance(): zombie.seams.SeamManager;
    }
  }
}
