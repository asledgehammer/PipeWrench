/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.worldgen.utils {
    /**
     * @customConstructor ChunkCoord.new
     * @
     * [CLASS] zombie.iso.worldgen.utils.ChunkCoord extends java.lang.Record
     */
    export class ChunkCoord {
      /**
       * Constructors: 
       *  - (int x, int y)
       */
      constructor(arg0: number, arg1: number);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      x(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      y(): number;
    }
    /** [ENUM] zombie.iso.worldgen.utils.Direction */
    export class Direction {
      protected constructor();
      static readonly EAST: zombie.iso.worldgen.utils.Direction;
      static readonly NORTH: zombie.iso.worldgen.utils.Direction;
      static readonly SOUTH: zombie.iso.worldgen.utils.Direction;
      static readonly WEST: zombie.iso.worldgen.utils.Direction;

      /* FIELDS */

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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.iso.worldgen.utils.Direction>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.iso.worldgen.utils.Direction>;
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
       *  - (Empty): zombie.iso.worldgen.utils.Direction
       */
      opposite(): zombie.iso.worldgen.utils.Direction;
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
       *  - (String arg0): zombie.iso.worldgen.utils.Direction
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.iso.worldgen.utils.Direction | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.worldgen.utils.Direction[]
       */
      static values(): zombie.iso.worldgen.utils.Direction[];
    }
    /**
     * @customConstructor SquareCoord.new
     * @
     * [CLASS] zombie.iso.worldgen.utils.SquareCoord extends java.lang.Record
     */
    export class SquareCoord {
      /**
       * Constructors: 
       *  - (int x, int y, int z)
       */
      constructor(arg0: number, arg1: number, arg2: number);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      x(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      y(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      z(): number;
    }
  }
}
