/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.stash {
    /**
     * @customConstructor Stash.new
     * @
     * [CLASS] zombie.core.stash.Stash
     */
    export class Stash {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBuildingX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBuildingY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (KahluaTableImpl arg0): void
       */
      load(arg0: se.krka.kahlua.j2se.KahluaTableImpl): void;
    }
    /**
     * @customConstructor StashBuilding.new
     * @
     * [CLASS] zombie.core.stash.StashBuilding
     */
    export class StashBuilding {
      /**
       * Constructors: 
       *  - (String arg0, int arg1, int arg2)
       */
      constructor(arg0: string, arg1: number, arg2: number);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
    }
    /**
     * @customConstructor StashSystem.new
     * @
     * [CLASS] zombie.core.stash.StashSystem
     */
    export class StashSystem {
      /** java.util.ArrayList<zombie.core.stash.Stash> */
      static allStashes?: java.util.ArrayList<zombie.core.stash.Stash>;
      /** java.util.ArrayList<zombie.core.stash.StashBuilding> */
      static buildingsToDo?: java.util.ArrayList<zombie.core.stash.StashBuilding>;
      /** java.util.ArrayList<zombie.core.stash.StashBuilding> */
      static possibleStashes?: java.util.ArrayList<zombie.core.stash.StashBuilding>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (InventoryItem arg0): void
       */
      static checkStashItem(arg0: zombie.inventory.InventoryItem): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      static doBuildingStash(arg0: zombie.iso.BuildingDef): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Stash arg0, InventoryItem arg1): void
       */
      static doStashItem(arg0: zombie.core.stash.Stash, arg1: zombie.inventory.InventoryItem): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.core.stash.StashBuilding>
       */
      static getPossibleStashes(): java.util.ArrayList<zombie.core.stash.StashBuilding>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.stash.Stash
       */
      static getStash(arg0: string): zombie.core.stash.Stash;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static init(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initAllStashes(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      static load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static prepareBuildingStash(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static reinit(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      static save(arg0: java.nio.ByteBuffer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BuildingDef arg0): void
       */
      static visitedBuilding(arg0: zombie.iso.BuildingDef): void;
    }
  }
}
