/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.scripting.itemConfig.enums {
    /** [ENUM] zombie.scripting.itemConfig.enums.SelectorType */
    export class SelectorType {
      protected constructor();
      static readonly Container: zombie.scripting.itemConfig.enums.SelectorType;
      static readonly Default: zombie.scripting.itemConfig.enums.SelectorType;
      static readonly None: zombie.scripting.itemConfig.enums.SelectorType;
      static readonly OnCreate: zombie.scripting.itemConfig.enums.SelectorType;
      static readonly Room: zombie.scripting.itemConfig.enums.SelectorType;
      static readonly Situated: zombie.scripting.itemConfig.enums.SelectorType;
      static readonly Tile: zombie.scripting.itemConfig.enums.SelectorType;
      static readonly Vehicle: zombie.scripting.itemConfig.enums.SelectorType;
      static readonly WorldAge: zombie.scripting.itemConfig.enums.SelectorType;
      static readonly Zone: zombie.scripting.itemConfig.enums.SelectorType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.scripting.itemConfig.enums.SelectorType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.scripting.itemConfig.enums.SelectorType>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowChaining(): boolean;
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
       *  - (String arg0): zombie.scripting.itemConfig.enums.SelectorType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.scripting.itemConfig.enums.SelectorType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.scripting.itemConfig.enums.SelectorType[]
       */
      static values(): zombie.scripting.itemConfig.enums.SelectorType[];
    }
    /** [ENUM] zombie.scripting.itemConfig.enums.SituatedType */
    export class SituatedType {
      protected constructor();
      static readonly Exterior: zombie.scripting.itemConfig.enums.SituatedType;
      static readonly Interior: zombie.scripting.itemConfig.enums.SituatedType;
      static readonly Junk: zombie.scripting.itemConfig.enums.SituatedType;
      static readonly None: zombie.scripting.itemConfig.enums.SituatedType;
      static readonly Shop: zombie.scripting.itemConfig.enums.SituatedType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.scripting.itemConfig.enums.SituatedType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.scripting.itemConfig.enums.SituatedType>;
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
       *  - (String arg0): zombie.scripting.itemConfig.enums.SituatedType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.scripting.itemConfig.enums.SituatedType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.scripting.itemConfig.enums.SituatedType[]
       */
      static values(): zombie.scripting.itemConfig.enums.SituatedType[];
    }
  }
}
