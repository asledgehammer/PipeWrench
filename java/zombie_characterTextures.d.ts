/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.characterTextures {
    /** [ENUM] zombie.characterTextures.BloodBodyPartType */
    export class BloodBodyPartType {
      protected constructor();
      static readonly Back: zombie.characterTextures.BloodBodyPartType;
      static readonly Foot_L: zombie.characterTextures.BloodBodyPartType;
      static readonly Foot_R: zombie.characterTextures.BloodBodyPartType;
      static readonly ForeArm_L: zombie.characterTextures.BloodBodyPartType;
      static readonly ForeArm_R: zombie.characterTextures.BloodBodyPartType;
      static readonly Groin: zombie.characterTextures.BloodBodyPartType;
      static readonly Hand_L: zombie.characterTextures.BloodBodyPartType;
      static readonly Hand_R: zombie.characterTextures.BloodBodyPartType;
      static readonly Head: zombie.characterTextures.BloodBodyPartType;
      static readonly LowerLeg_L: zombie.characterTextures.BloodBodyPartType;
      static readonly LowerLeg_R: zombie.characterTextures.BloodBodyPartType;
      static readonly MAX: zombie.characterTextures.BloodBodyPartType;
      static readonly Neck: zombie.characterTextures.BloodBodyPartType;
      static readonly Torso_Lower: zombie.characterTextures.BloodBodyPartType;
      static readonly Torso_Upper: zombie.characterTextures.BloodBodyPartType;
      static readonly UpperArm_L: zombie.characterTextures.BloodBodyPartType;
      static readonly UpperArm_R: zombie.characterTextures.BloodBodyPartType;
      static readonly UpperLeg_L: zombie.characterTextures.BloodBodyPartType;
      static readonly UpperLeg_R: zombie.characterTextures.BloodBodyPartType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.characterTextures.BloodBodyPartType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.CharacterMask$Part[]
       */
      getCharacterMaskParts(): zombie.core.skinnedmodel.model.CharacterMask$Part[];
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.characterTextures.BloodBodyPartType>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDisplayName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      index(): number;
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
       *  - (int arg0): zombie.characterTextures.BloodBodyPartType
       */
      static FromIndex(arg0: number): zombie.characterTextures.BloodBodyPartType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characterTextures.BloodBodyPartType
       */
      static FromString(arg0: string): zombie.characterTextures.BloodBodyPartType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      static ToIndex(arg0: zombie.characterTextures.BloodBodyPartType): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): string
       */
      static getDisplayName(arg0: zombie.characterTextures.BloodBodyPartType): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characterTextures.BloodBodyPartType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.characterTextures.BloodBodyPartType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.characterTextures.BloodBodyPartType[]
       */
      static values(): zombie.characterTextures.BloodBodyPartType[];
    }
    /** [ENUM] zombie.characterTextures.BloodClothingType */
    export class BloodClothingType {
      protected constructor();
      static readonly Apron: zombie.characterTextures.BloodClothingType;
      static readonly Bag: zombie.characterTextures.BloodClothingType;
      static readonly FullHelmet: zombie.characterTextures.BloodClothingType;
      static readonly Groin: zombie.characterTextures.BloodClothingType;
      static readonly Hands: zombie.characterTextures.BloodClothingType;
      static readonly Head: zombie.characterTextures.BloodClothingType;
      static readonly Jacket: zombie.characterTextures.BloodClothingType;
      static readonly Jumper: zombie.characterTextures.BloodClothingType;
      static readonly JumperNoSleeves: zombie.characterTextures.BloodClothingType;
      static readonly LongJacket: zombie.characterTextures.BloodClothingType;
      static readonly LowerArms: zombie.characterTextures.BloodClothingType;
      static readonly LowerBody: zombie.characterTextures.BloodClothingType;
      static readonly LowerLegs: zombie.characterTextures.BloodClothingType;
      static readonly Neck: zombie.characterTextures.BloodClothingType;
      static readonly Shirt: zombie.characterTextures.BloodClothingType;
      static readonly ShirtLongSleeves: zombie.characterTextures.BloodClothingType;
      static readonly ShirtNoSleeves: zombie.characterTextures.BloodClothingType;
      static readonly Shoes: zombie.characterTextures.BloodClothingType;
      static readonly ShortsShort: zombie.characterTextures.BloodClothingType;
      static readonly Trousers: zombie.characterTextures.BloodClothingType;
      static readonly UpperArms: zombie.characterTextures.BloodClothingType;
      static readonly UpperBody: zombie.characterTextures.BloodClothingType;
      static readonly UpperLegs: zombie.characterTextures.BloodClothingType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.characterTextures.BloodClothingType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.characterTextures.BloodClothingType>;
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
       *  - (BloodBodyPartType arg0, HumanVisual arg1, ArrayList arg2): void
       */
      static addBasicPatch(arg0: zombie.characterTextures.BloodBodyPartType, arg1: zombie.core.skinnedmodel.visual.HumanVisual, arg2: java.util.ArrayList<zombie.core.skinnedmodel.visual.ItemVisual>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, HumanVisual arg1, ArrayList arg2, boolean arg3): void
       *  - (BloodBodyPartType arg0, HumanVisual arg1, ArrayList arg2, boolean arg3): void
       *  - (BloodBodyPartType arg0, float arg1, HumanVisual arg2, ArrayList arg3, boolean arg4): void
       */
      static addBlood(arg0: number | zombie.characterTextures.BloodBodyPartType, arg1: zombie.core.skinnedmodel.visual.HumanVisual | number, arg2: java.util.ArrayList<zombie.core.skinnedmodel.visual.ItemVisual> | zombie.core.skinnedmodel.visual.HumanVisual, arg3: boolean | java.util.ArrayList<zombie.core.skinnedmodel.visual.ItemVisual>, arg4?: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BloodBodyPartType arg0, HumanVisual arg1, ArrayList arg2, boolean arg3): void
       *  - (BloodBodyPartType arg0, float arg1, HumanVisual arg2, ArrayList arg3, boolean arg4): void
       */
      static addDirt(arg0: zombie.characterTextures.BloodBodyPartType, arg1: zombie.core.skinnedmodel.visual.HumanVisual | number, arg2: java.util.ArrayList<zombie.core.skinnedmodel.visual.ItemVisual> | zombie.core.skinnedmodel.visual.HumanVisual, arg3: boolean | java.util.ArrayList<zombie.core.skinnedmodel.visual.ItemVisual>, arg4?: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BloodBodyPartType arg0, HumanVisual arg1, ArrayList arg2): void
       *  - (BloodBodyPartType arg0, HumanVisual arg1, ArrayList arg2, boolean arg3): boolean
       */
      static addHole(arg0: zombie.characterTextures.BloodBodyPartType, arg1: zombie.core.skinnedmodel.visual.HumanVisual, arg2: java.util.ArrayList<zombie.core.skinnedmodel.visual.ItemVisual>, arg3?: boolean): void | boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Clothing arg0): void
       */
      static calcTotalBloodLevel(arg0: zombie.inventory.types.Clothing): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Clothing arg0): void
       */
      static calcTotalDirtLevel(arg0: zombie.inventory.types.Clothing): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characterTextures.BloodClothingType
       */
      static fromString(arg0: string): zombie.characterTextures.BloodClothingType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): number
       */
      static getCoveredPartCount(arg0: java.util.ArrayList<zombie.characterTextures.BloodClothingType>): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.ArrayList<zombie.characterTextures.BloodBodyPartType>
       *  - (ArrayList arg0, ArrayList arg1): java.util.ArrayList<zombie.characterTextures.BloodBodyPartType>
       */
      static getCoveredParts(arg0: java.util.ArrayList<zombie.characterTextures.BloodClothingType>, arg1?: java.util.ArrayList<zombie.characterTextures.BloodBodyPartType>): java.util.ArrayList<zombie.characterTextures.BloodBodyPartType>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characterTextures.BloodClothingType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.characterTextures.BloodClothingType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.characterTextures.BloodClothingType[]
       */
      static values(): zombie.characterTextures.BloodClothingType[];
    }
  }
}
