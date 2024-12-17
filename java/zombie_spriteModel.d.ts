/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.spriteModel {
    /**
     * @customConstructor SpriteModelManager.new
     * @
     * [CLASS] zombie.spriteModel.SpriteModelManager
     */
    export class SpriteModelManager {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3): void
       */
      clearTileProperties(arg0: string, arg1: string, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.iso.SpriteModelsFile$Tileset
       */
      findTileset(arg0: string, arg1: string): zombie.iso.SpriteModelsFile$Tileset;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getModIDs(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3): zombie.iso.SpriteModel
       */
      getTileProperties(arg0: string, arg1: string, arg2: number, arg3: number): zombie.iso.SpriteModel;
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
      initSprites(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      loadedTileDefinitions(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, SpriteModel arg4): void
       */
      setTileProperties(arg0: string, arg1: string, arg2: number, arg3: number, arg4: zombie.iso.SpriteModel): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (String arg0): void
       */
      toScriptManager(arg0?: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      write(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.spriteModel.SpriteModelManager
       */
      static getInstance(): zombie.spriteModel.SpriteModelManager;
    }
  }
}
