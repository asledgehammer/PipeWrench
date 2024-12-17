/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.worldMap.network {
    /**
     * @customConstructor WorldMapSymbolNetworkInfo.new
     * @
     * [CLASS] zombie.worldMap.network.WorldMapSymbolNetworkInfo
     */
    export class WorldMapSymbolNetworkInfo {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addPlayer(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearPlayers(): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAuthor(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getPlayerByIndex(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerCount(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasPlayer(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisibleToEveryone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisibleToFaction(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisibleToSafehouse(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, int arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAuthor(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisibleToEveryone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisibleToFaction(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisibleToSafehouse(arg0: boolean): void;
    }
  }
}
