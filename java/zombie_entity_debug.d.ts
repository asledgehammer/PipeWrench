/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.entity.debug {
    /**
     * @customConstructor EntityDebugTest.new
     * @
     * [ABSTRACT CLASS] zombie.entity.debug.EntityDebugTest
     */
    export class EntityDebugTest {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      create(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (EntityDebugTestType arg0, IsoGridSquare arg1): void
       */
      static CreateTest(arg0: zombie.entity.debug.EntityDebugTestType, arg1: zombie.iso.IsoGridSquare): void;
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
       *  - (Empty): void
       */
      static Update(): void;
    }
    /**
     * @customConstructor BaseTest.new
     * @
     * [CLASS] zombie.entity.debug.EntityDebugTest$BaseTest extends zombie.entity.debug.EntityDebugTest
     */
    export class EntityDebugTest$BaseTest {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      create(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (EntityDebugTestType arg0, IsoGridSquare arg1): void
       */
      static CreateTest(arg0: zombie.entity.debug.EntityDebugTestType, arg1: zombie.iso.IsoGridSquare): void;
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
       *  - (Empty): void
       */
      static Update(): void;
    }
    /** [ENUM] zombie.entity.debug.EntityDebugTestType */
    export class EntityDebugTestType {
      protected constructor();
      static readonly BaseTest: zombie.entity.debug.EntityDebugTestType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.debug.EntityDebugTestType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.debug.EntityDebugTestType>;
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
       *  - (Empty): java.util.ArrayList<zombie.entity.debug.EntityDebugTestType>
       */
      static getValueList(): java.util.ArrayList<zombie.entity.debug.EntityDebugTestType>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.debug.EntityDebugTestType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.debug.EntityDebugTestType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.debug.EntityDebugTestType[]
       */
      static values(): zombie.entity.debug.EntityDebugTestType[];
    }
  }
}
