/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.basements {
    /**
     * @customConstructor BasementSpawnLocation.new
     * @
     * [CLASS] zombie.basements.BasementSpawnLocation
     */
    export class BasementSpawnLocation {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Basements.new
     * @
     * [CLASS] zombie.basements.Basements
     */
    export class Basements {
      /** int */
      static readonly SAVEFILE_VERSION: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      afterLoadMetaGrid(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      beforeLoadMetaGrid(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      beforeOnLoadMapZones(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.basements.BasementsPerMap
       */
      getOrCreatePerMap(arg0: string): zombie.basements.BasementsPerMap;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.basements.BasementsPerMap
       */
      getPerMap(arg0: string): zombie.basements.BasementsPerMap;
      /**
       * Method Parameters: 
       *  - (IsoChunk arg0): void
       */
      onNewChunkLoaded(arg0: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      parseBasementAccessDefinitions(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      parseBasementDefinitions(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.basements.BasementsV1
       */
      static getAPIv1(): zombie.basements.BasementsV1;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.basements.Basements
       */
      static getInstance(): zombie.basements.Basements;
    }
    /**
     * @customConstructor BasementsPerMap.new
     * @
     * [CLASS] zombie.basements.BasementsPerMap
     */
    export class BasementsPerMap {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
    }
    /**
     * @customConstructor BasementsV1.new
     * @
     * [CLASS] zombie.basements.BasementsV1
     */
    export class BasementsV1 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, KahluaTable arg1): void
       */
      addAccessDefinitions(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0, KahluaTable arg1): void
       */
      addBasementDefinitions(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0, KahluaTable arg1): void
       */
      addSpawnLocations(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, int arg3, int arg4, int arg5, int arg6, int arg7, KahluaTable arg8): zombie.basements.BasementSpawnLocation
       */
      registerBasementSpawnLocation(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: se.krka.kahlua.vm.KahluaTable): zombie.basements.BasementSpawnLocation;
    }
  }
}
