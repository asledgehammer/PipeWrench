/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.characters.animals.datas {
    /**
     * @customConstructor AnimalBreed.new
     * @
     * [CLASS] zombie.characters.animals.datas.AnimalBreed
     */
    export class AnimalBreed {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFeatherItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMilkType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.animals.datas.AnimalBreed$Sound
       */
      getSound(arg0: string): zombie.characters.animals.datas.AnimalBreed$Sound;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWoolType(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isSoundDefined(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isSoundUndefined(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (KahluaTableImpl arg0): void
       */
      loadForcedGenes(arg0: se.krka.kahlua.j2se.KahluaTableImpl): void;
      /**
       * Method Parameters: 
       *  - (KahluaTableImpl arg0): void
       */
      loadSounds(arg0: se.krka.kahlua.j2se.KahluaTableImpl): void;
    }
    /**
     * @customConstructor ForcedGenes.new
     * @
     * [CLASS] zombie.characters.animals.datas.AnimalBreed$ForcedGenes
     */
    export class AnimalBreed$ForcedGenes {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Sound.new
     * @
     * [CLASS] zombie.characters.animals.datas.AnimalBreed$Sound
     */
    export class AnimalBreed$Sound {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIntervalValid(): boolean;
    }
    /**
     * @customConstructor AnimalData.new
     * @
     * [CLASS] zombie.characters.animals.datas.AnimalData
     */
    export class AnimalData {
      /** int */
      static readonly FEATHER_CHANCE_PER_HOUR: number;
      /** long */
      static readonly ONE_DAY_MILLISECONDS: number;
      /** long */
      static readonly ONE_HOUR_MILLISECONDS: number;
      /** long */
      static readonly ONE_WEEK_MILLISECONDS: number;

      /**
       * Constructors: 
       *  - (IsoAnimal arg0, AnimalBreed arg1)
       */
      constructor(arg0: zombie.characters.animals.IsoAnimal, arg1: zombie.characters.animals.datas.AnimalBreed);
      /**
       * Method Parameters: 
       *  - (IsoFeedingTrough arg0): void
       */
      callToTrough(arg0: zombie.iso.objects.IsoFeedingTrough): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBePregnant(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canHaveBaby(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canHaveMilk(): boolean;
      /**
       * Method Parameters: 
       *  - (PZCalendar arg0, boolean arg1): void
       */
      checkEggs(arg0: zombie.util.PZCalendar, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkFertilizedTime(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.inventory.InventoryItem
       */
      checkPoop(arg0: boolean): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkStages(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      drink(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      drinkFromGround(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.inventory.InventoryItem
       */
      dropFeather(arg0: boolean): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      eat(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      eatFood(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0, boolean arg1): void
       */
      eatItem(arg0: zombie.inventory.InventoryItem, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (PZCalendar arg0): void
       */
      findFemaleToInseminate(arg0: zombie.util.PZCalendar): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAge(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAgeGrowModifier(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): string
       */
      getAgeString(arg0: zombie.characters.IsoGameCharacter): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      getAttachedPlayer(): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getAttachedTree(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.datas.AnimalBreed
       */
      getBreed(): zombie.characters.animals.datas.AnimalBreed;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getClutchSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDaysSurvived(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugBehaviorString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFertilizedTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGeriatricPercentage(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.animals.datas.AnimalGrowStage>
       */
      getGrowStage(): java.util.ArrayList<zombie.characters.animals.datas.AnimalGrowStage>;
      /**
       * Method Parameters: 
       *  - (Float arg0): number
       */
      getHealthLoss(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHutchPosition(): number;
      /**
       * Method Parameters: 
       *  - (PZCalendar arg0): number
       */
      getLastImpregnatePeriod(arg0: zombie.util.PZCalendar): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLastPregnancyPeriod(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastTimeMilkedInHour(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxAgeGeriatric(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxMilk(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxMilkActual(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxWool(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMilkInc(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMilkQuantity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinMilk(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPreferredHutchPosition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPregnancyTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPregnantPeriod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoFeedingTrough>
       */
      getRandomTroughList(): java.util.ArrayList<zombie.iso.objects.IsoFeedingTrough>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoHutch
       */
      getRegionHutch(): zombie.iso.objects.IsoHutch;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeBeforeNextPregnancy(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWoolInc(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWoolQuantity(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      grow(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      growUp(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveLayingEggPeriod(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      hourGrow(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initSize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initStage(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initWeight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFemale(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFertilized(): boolean;
      /**
       * Method Parameters: 
       *  - (PZCalendar arg0): boolean
       */
      isInLayingEggPeriod(arg0: zombie.util.PZCalendar): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPregnant(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      reduceHealthDueToMilk(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetEatingCheck(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAge(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      setAttachedPlayer(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setAttachedTree(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (AnimalBreed arg0): void
       */
      setBreed(arg0: zombie.characters.animals.datas.AnimalBreed): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanHaveMilk(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFertilized(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setFertilizedTime(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHutchPosition(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (HashMap arg0): void
       */
      setMaleGenome(arg0: java.util.HashMap<string, zombie.characters.animals.AnimalGene>): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMaxMilkActual(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMilkQuantity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPreferredHutchPosition(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPregnancyTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPregnant(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSize(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSizeForced(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (float arg0, boolean arg1): void
       */
      setWoolQuantity(arg0: number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (PZCalendar arg0): void
       */
      tryInseminateInMeta(arg0: zombie.util.PZCalendar): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateHealth(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      updateHungerAndThirst(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateLastPregnancyTime(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateLastTimeMilked(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      static shuffleList(arg0: java.util.ArrayList<zombie.iso.objects.IsoFeedingTrough>): void;
    }
    /**
     * @customConstructor AnimalGrowStage.new
     * @
     * [CLASS] zombie.characters.animals.datas.AnimalGrowStage
     */
    export class AnimalGrowStage {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoAnimal arg0): number
       */
      getAgeToGrow(arg0: zombie.characters.animals.IsoAnimal): number;
    }
  }
}
