/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.enums {
    /** [ENUM] zombie.iso.enums.ChunkGenerationStatus */
    export class ChunkGenerationStatus {
      protected constructor();
      static readonly CORE: zombie.iso.enums.ChunkGenerationStatus;
      static readonly MODDED: zombie.iso.enums.ChunkGenerationStatus;
      static readonly WORLDGEN: zombie.iso.enums.ChunkGenerationStatus;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.iso.enums.ChunkGenerationStatus>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.iso.enums.ChunkGenerationStatus>;
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
       *  - (String arg0): zombie.iso.enums.ChunkGenerationStatus
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.iso.enums.ChunkGenerationStatus | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.enums.ChunkGenerationStatus[]
       */
      static values(): zombie.iso.enums.ChunkGenerationStatus[];
    }
    /** [ENUM] zombie.iso.enums.MaterialType */
    export class MaterialType {
      protected constructor();
      static readonly Brick: zombie.iso.enums.MaterialType;
      static readonly Carpet: zombie.iso.enums.MaterialType;
      static readonly Ceramic: zombie.iso.enums.MaterialType;
      static readonly Cinderblock: zombie.iso.enums.MaterialType;
      static readonly Concrete: zombie.iso.enums.MaterialType;
      static readonly Default: zombie.iso.enums.MaterialType;
      static readonly Dirt: zombie.iso.enums.MaterialType;
      static readonly Fabric: zombie.iso.enums.MaterialType;
      static readonly Flesh: zombie.iso.enums.MaterialType;
      static readonly Flesh_Hollow: zombie.iso.enums.MaterialType;
      static readonly Glass: zombie.iso.enums.MaterialType;
      static readonly Glass_Light: zombie.iso.enums.MaterialType;
      static readonly Glass_Solid: zombie.iso.enums.MaterialType;
      static readonly Grass: zombie.iso.enums.MaterialType;
      static readonly Gravel: zombie.iso.enums.MaterialType;
      static readonly Metal: zombie.iso.enums.MaterialType;
      static readonly Metal_Large: zombie.iso.enums.MaterialType;
      static readonly Metal_Light: zombie.iso.enums.MaterialType;
      static readonly Metal_Solid: zombie.iso.enums.MaterialType;
      static readonly Plaster: zombie.iso.enums.MaterialType;
      static readonly Plastic: zombie.iso.enums.MaterialType;
      static readonly Rubber: zombie.iso.enums.MaterialType;
      static readonly Sand: zombie.iso.enums.MaterialType;
      static readonly Snow: zombie.iso.enums.MaterialType;
      static readonly Stone: zombie.iso.enums.MaterialType;
      static readonly Wood: zombie.iso.enums.MaterialType;
      static readonly Wood_Solid: zombie.iso.enums.MaterialType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.iso.enums.MaterialType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.iso.enums.MaterialType>;
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
       *  - (String arg0): zombie.iso.enums.MaterialType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.iso.enums.MaterialType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.enums.MaterialType[]
       */
      static values(): zombie.iso.enums.MaterialType[];
    }
    /** [ENUM] zombie.iso.enums.MetaCellPresence */
    export class MetaCellPresence {
      protected constructor();
      static readonly LOADED: zombie.iso.enums.MetaCellPresence;
      static readonly NOT_LOADED: zombie.iso.enums.MetaCellPresence;
      static readonly OUT_OF_BOUNDS: zombie.iso.enums.MetaCellPresence;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.iso.enums.MetaCellPresence>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.iso.enums.MetaCellPresence>;
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
       *  - (String arg0): zombie.iso.enums.MetaCellPresence
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.iso.enums.MetaCellPresence | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.enums.MetaCellPresence[]
       */
      static values(): zombie.iso.enums.MetaCellPresence[];
    }
  }
}
