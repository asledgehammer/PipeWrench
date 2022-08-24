/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.audio.parameters {
    /**
     * @customConstructor ParameterCharacterMovementSpeed.new
     * @
     * [CLASS] zombie.audio.parameters.ParameterCharacterMovementSpeed extends zombie.audio.FMODLocalParameter
     */
    export class ParameterCharacterMovementSpeed {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      calculateCurrentValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION
       */
      getParameterDescription(): fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION;
      /**
       * Method Parameters: 
       *  - (Empty): fmod.fmod.FMOD_STUDIO_PARAMETER_ID
       */
      getParameterID(): fmod.fmod.FMOD_STUDIO_PARAMETER_ID;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCurrentValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (MovementType arg0): void
       */
      setMovementType(arg0: zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      startEventInstance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      stopEventInstance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /** [ENUM] zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType */
    export class ParameterCharacterMovementSpeed$MovementType {
      protected constructor();
      static readonly Run: zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType;
      static readonly SneakRun: zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType;
      static readonly SneakWalk: zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType;
      static readonly Sprint: zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType;
      static readonly Strafe: zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType;
      static readonly Walk: zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType;

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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType>;
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
       *  - (String arg0): zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType[]
       */
      static values(): zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType[];
    }
    /** [ENUM] zombie.audio.parameters.ParameterMeleeHitSurface$Material */
    export class ParameterMeleeHitSurface$Material {
      protected constructor();
      static readonly Body: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Default: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Fabric: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly GarageDoor: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Glass: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Head: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Metal: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly MetalDoor: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly MetalGate: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Plastic: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly PrisonMetalDoor: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly SlidingGlassDoor: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Stone: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Tree: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly Wood: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly WoodDoor: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
      static readonly WoodGate: zombie.audio.parameters.ParameterMeleeHitSurface$Material;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.audio.parameters.ParameterMeleeHitSurface$Material>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.audio.parameters.ParameterMeleeHitSurface$Material>;
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
       *  - (String arg0): zombie.audio.parameters.ParameterMeleeHitSurface$Material
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.audio.parameters.ParameterMeleeHitSurface$Material | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.audio.parameters.ParameterMeleeHitSurface$Material[]
       */
      static values(): zombie.audio.parameters.ParameterMeleeHitSurface$Material[];
    }
  }
}
