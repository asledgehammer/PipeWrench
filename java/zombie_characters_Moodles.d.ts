/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.characters.Moodles {
    /**
     * @customConstructor Moodle.new
     * @
     * [CLASS] zombie.characters.Moodles.Moodle
     */
    export class Moodle {
      /**
       * Constructors: 
       *  - (MoodleType arg0, IsoGameCharacter arg1)
       *  - (MoodleType arg0, IsoGameCharacter arg1, int arg2)
       */
      constructor(arg0: zombie.characters.Moodles.MoodleType, arg1: zombie.characters.IsoGameCharacter, arg2?: number);
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      Update(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1, Color arg2): boolean
       */
      chevronDifference(arg0: number, arg1: boolean, arg2: zombie.core.Color): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getChevronColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChevronCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isChevronIsUp(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1, Color arg2): void
       */
      setChevron(arg0: number, arg1: boolean, arg2: zombie.core.Color): void;
    }
    /** [ENUM] zombie.characters.Moodles.MoodleType */
    export class MoodleType {
      protected constructor();
      static readonly Angry: zombie.characters.Moodles.MoodleType;
      static readonly Bleeding: zombie.characters.Moodles.MoodleType;
      static readonly Bored: zombie.characters.Moodles.MoodleType;
      static readonly CantSprint: zombie.characters.Moodles.MoodleType;
      static readonly Dead: zombie.characters.Moodles.MoodleType;
      static readonly Drunk: zombie.characters.Moodles.MoodleType;
      static readonly Endurance: zombie.characters.Moodles.MoodleType;
      static readonly FoodEaten: zombie.characters.Moodles.MoodleType;
      static readonly HasACold: zombie.characters.Moodles.MoodleType;
      static readonly HeavyLoad: zombie.characters.Moodles.MoodleType;
      static readonly Hungry: zombie.characters.Moodles.MoodleType;
      static readonly Hyperthermia: zombie.characters.Moodles.MoodleType;
      static readonly Hypothermia: zombie.characters.Moodles.MoodleType;
      static readonly Injured: zombie.characters.Moodles.MoodleType;
      static readonly MAX: zombie.characters.Moodles.MoodleType;
      static readonly Pain: zombie.characters.Moodles.MoodleType;
      static readonly Panic: zombie.characters.Moodles.MoodleType;
      static readonly Sick: zombie.characters.Moodles.MoodleType;
      static readonly Stress: zombie.characters.Moodles.MoodleType;
      static readonly Thirst: zombie.characters.Moodles.MoodleType;
      static readonly Tired: zombie.characters.Moodles.MoodleType;
      static readonly Unhappy: zombie.characters.Moodles.MoodleType;
      static readonly Wet: zombie.characters.Moodles.MoodleType;
      static readonly Windchill: zombie.characters.Moodles.MoodleType;
      static readonly Zombie: zombie.characters.Moodles.MoodleType;
      name(): string;
      ordinal(): number;
      /**
       * Method Parameters: 
       *  - (Enum arg0): number
       *  - (Object arg0): number
       */
      compareTo(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Optional<java.lang.Enum$EnumDesc<E>>
       */
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.characters.Moodles.MoodleType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.characters.Moodles.MoodleType>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      name(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      ordinal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.characters.Moodles.MoodleType
       */
      static FromIndex(arg0: number): zombie.characters.Moodles.MoodleType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characters.Moodles.MoodleType
       */
      static FromString(arg0: string): zombie.characters.Moodles.MoodleType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (MoodleType arg0): number
       */
      static GoodBadNeutral(arg0: zombie.characters.Moodles.MoodleType): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (MoodleType arg0): number
       */
      static ToIndex(arg0: zombie.characters.Moodles.MoodleType): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (MoodleType arg0, int arg1): string
       */
      static getDescriptionText(arg0: zombie.characters.Moodles.MoodleType, arg1: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (MoodleType arg0, int arg1): string
       */
      static getDisplayName(arg0: zombie.characters.Moodles.MoodleType, arg1: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characters.Moodles.MoodleType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.characters.Moodles.MoodleType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.characters.Moodles.MoodleType[]
       */
      static values(): zombie.characters.Moodles.MoodleType[];
    }
    /**
     * @customConstructor Moodles.new
     * @
     * [CLASS] zombie.characters.Moodles.Moodles
     */
    export class Moodles {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Randomise(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      UI_RefreshNeeded(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Update(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getGoodBadNeutral(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.Color
       */
      getMoodleChevronColor(arg0: number): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getMoodleChevronCount(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      getMoodleChevronIsUp(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getMoodleDescriptionString(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getMoodleDisplayString(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       *  - (MoodleType arg0): number
       */
      getMoodleLevel(arg0: number | zombie.characters.Moodles.MoodleType): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.characters.Moodles.MoodleType
       */
      getMoodleType(arg0: number): zombie.characters.Moodles.MoodleType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumMoodles(): number;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMoodlesStateChanged(arg0: boolean): void;
    }
  }
}
