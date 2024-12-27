/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.characters.animals.behavior {
    /**
     * @customConstructor BaseAnimalBehavior.new
     * @
     * [CLASS] zombie.characters.animals.behavior.BaseAnimalBehavior
     */
    export class BaseAnimalBehavior {
      /**
       * Constructors: 
       *  - (IsoAnimal arg0)
       */
      constructor(arg0: zombie.characters.animals.IsoAnimal);
      /**
       * Method Parameters: 
       *  - (IsoHutch arg0, boolean arg1): boolean
       */
      callToHutch(arg0: zombie.iso.objects.IsoHutch, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeAttached(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoFeedingTrough arg0): boolean
       */
      canDrinkFromTrough(arg0: zombie.iso.objects.IsoFeedingTrough): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      canEatThis(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (IsoHutch arg0, boolean arg1): boolean
       */
      canGoToHutch(arg0: zombie.iso.objects.IsoHutch, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkBehavior(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      checkEatBehavior(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkSit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doBehaviorAction(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      eatFromVehicle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      fightAnimal(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceEatFromMom(): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      forceFleeFromChr(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoFeedingTrough>
       */
      getRandomTroughList(): java.util.ArrayList<zombie.iso.objects.IsoFeedingTrough>;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      goAttack(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      pickRandomWanderInterval(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetBehaviorAction(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBlockMovement(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHourBeforeLeavingHutch(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, boolean arg1, float arg2): void
       */
      spotted(arg0: zombie.iso.IsoMovingObject, arg1: boolean, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateAttackTimer(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      walkedOnSpot(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      wanderIdle(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      static shuffleList(arg0: java.util.ArrayList<zombie.iso.objects.IsoFeedingTrough>): void;
    }
  }
}
