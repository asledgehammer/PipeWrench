/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.worldMap.network {
    /**
     * @customConstructor WorldMapClient.new
     * @
     * [CLASS] zombie.worldMap.network.WorldMapClient
     */
    export class WorldMapClient {
      /** zombie.worldMap.network.WorldMapClient */
      static readonly instance?: zombie.worldMap.network.WorldMapClient;

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
       *  - (ByteBuffer arg0): void
       */
      receive(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      receiveRequestData(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (WorldMapBaseSymbol arg0, WorldMapSymbolNetworkInfo arg1): void
       */
      sendAddSymbol(arg0: zombie.worldMap.symbols.WorldMapBaseSymbol, arg1: zombie.worldMap.network.WorldMapSymbolNetworkInfo): void;
      /**
       * Method Parameters: 
       *  - (WorldMapBaseSymbol arg0): void
       */
      sendModifySymbol(arg0: zombie.worldMap.symbols.WorldMapBaseSymbol): void;
      /**
       * Method Parameters: 
       *  - (WorldMapBaseSymbol arg0): void
       */
      sendRemoveSymbol(arg0: zombie.worldMap.symbols.WorldMapBaseSymbol): void;
      /**
       * Method Parameters: 
       *  - (WorldMapBaseSymbol arg0): void
       */
      sendSetPrivateSymbol(arg0: zombie.worldMap.symbols.WorldMapBaseSymbol): void;
      /**
       * Method Parameters: 
       *  - (WorldMapBaseSymbol arg0, WorldMapSymbolNetworkInfo arg1): void
       */
      sendShareSymbol(arg0: zombie.worldMap.symbols.WorldMapBaseSymbol, arg1: zombie.worldMap.network.WorldMapSymbolNetworkInfo): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      worldMapLoaded(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.network.WorldMapClient
       */
      static getInstance(): zombie.worldMap.network.WorldMapClient;
    }
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
