/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace fmod.fmod {
    export type Audio = any;
    /** [ENUM] fmod.fmod.EmitterType */
    export class EmitterType {
      protected constructor();
      static readonly Extra: fmod.EmitterType;
      static readonly Footstep: fmod.EmitterType;
      static readonly Voice: fmod.EmitterType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<fmod.EmitterType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<fmod.EmitterType>;
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
       *  - (String arg0): fmod.EmitterType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): fmod.EmitterType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): fmod.EmitterType[]
       */
      static values(): fmod.EmitterType[];
    }
    /**
     * @customConstructor FMODAudio.new
     * @
     * [CLASS] fmod.fmod.FMODAudio
     */
    export class FMODAudio {
      /**
       * Constructors: 
       *  - (BaseSoundEmitter arg0)
       */
      constructor(arg0: zombie.audio.BaseSoundEmitter);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPlaying(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      pause(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setVolume(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      start(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stop(): void;
    }
    export type FMODFootstep = any;
    /**
     * @customConstructor FMODSoundBank.new
     * @
     * [CLASS] fmod.fmod.FMODSoundBank extends zombie.audio.BaseSoundBank
     */
    export class FMODSoundBank {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, String arg3, String arg4): void
       */
      addFootstep(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, float arg2): void
       */
      addVoice(arg0: string, arg1: string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): fmod.FMODFootstep
       */
      getFootstep(arg0: string): fmod.FMODFootstep;
      /**
       * Method Parameters: 
       *  - (String arg0): fmod.FMODVoice
       */
      getVoice(arg0: string): fmod.FMODVoice;
    }
    /**
     * @customConstructor FMODSoundEmitter.new
     * @
     * [CLASS] fmod.fmod.FMODSoundEmitter extends zombie.audio.BaseSoundEmitter
     */
    export class FMODSoundEmitter {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (FMODParameter arg0): void
       */
      addParameter(arg0: zombie.audio.FMODParameter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearParameters(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasSoundsToStart(): boolean;
      /**
       * Method Parameters: 
       *  - (long arg0): boolean
       */
      hasSustainPoints(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (long arg0): boolean
       */
      isPlaying(arg0: string | number): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playAmbientLoopedImpl(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playAmbientSound(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (GameSoundClip arg0, IsoObject arg1): number
       */
      playClip(arg0: zombie.audio.GameSoundClip, arg1: zombie.iso.IsoObject): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       *  - (String arg0, boolean arg1): number
       *  - (String arg0, IsoGameCharacter arg1): number
       *  - (String arg0, IsoGridSquare arg1): number
       *  - (String arg0, IsoObject arg1): number
       *  - (String arg0, int arg1, int arg2, int arg3): number
       */
      playSound(arg0: string, arg1?: boolean | zombie.characters.IsoGameCharacter | zombie.iso.IsoGridSquare | zombie.iso.IsoObject | number, arg2?: number, arg3?: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoGridSquare arg1): number
       *  - (String arg0, IsoObject arg1): number
       *  - (String arg0, boolean arg1, IsoObject arg2): number
       */
      playSoundImpl(arg0: string, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoObject | boolean, arg2?: zombie.iso.IsoObject): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playSoundLooped(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playSoundLoopedImpl(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      randomStart(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): boolean
       */
      restart(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (long arg0, boolean arg1): void
       */
      set3D(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (long arg0, FMOD_STUDIO_PARAMETER_DESCRIPTION arg1, float arg2): void
       */
      setParameterValue(arg0: number, arg1: fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0, float arg1): void
       */
      setPitch(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      setPos(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0, String arg1): void
       */
      setTimelinePosition(arg0: number, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (long arg0, float arg1): void
       */
      setVolume(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setVolumeAll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stopAll(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      stopOrTriggerSound(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      stopOrTriggerSoundByName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      stopSound(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      stopSoundByName(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      stopSoundLocal(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      tick(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      triggerCue(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static update(): void;
    }
    export type FMODVoice = any;
    export type FMOD_STUDIO_PARAMETER_DESCRIPTION = any;
    export type FMOD_STUDIO_PARAMETER_ID = any;
  }
}
