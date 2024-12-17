/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.worldgen.blending {
    /** [ENUM] zombie.iso.worldgen.blending.BlendDirection */
    export class BlendDirection {
      protected constructor();
      static readonly EAST: zombie.iso.worldgen.blending.BlendDirection;
      static readonly NORTH: zombie.iso.worldgen.blending.BlendDirection;
      static readonly SOUTH: zombie.iso.worldgen.blending.BlendDirection;
      static readonly WEST: zombie.iso.worldgen.blending.BlendDirection;

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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.iso.worldgen.blending.BlendDirection>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.iso.worldgen.blending.BlendDirection>;
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
       *  - (Empty): zombie.iso.worldgen.blending.BlendDirection
       */
      opposite(): zombie.iso.worldgen.blending.BlendDirection;
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
       *  - (String arg0): zombie.iso.worldgen.blending.BlendDirection
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.iso.worldgen.blending.BlendDirection | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.worldgen.blending.BlendDirection[]
       */
      static values(): zombie.iso.worldgen.blending.BlendDirection[];
    }
    /**
     * @customConstructor Blending.new
     * @
     * [CLASS] zombie.iso.worldgen.blending.Blending
     */
    export class Blending {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoChunk arg0): void
       */
      applyBlending(arg0: zombie.iso.IsoChunk): void;
    }
  }
}
