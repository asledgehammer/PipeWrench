/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.world.scripts {
    /**
     * @customConstructor IVersionHash.new
     * @
     * [INTERFACE] zombie.world.scripts.IVersionHash
     */
    export class IVersionHash {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (IVersionHash arg0): void
       */
      add(arg0: string | zombie.world.scripts.IVersionHash): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHash(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
    }
  }
}
