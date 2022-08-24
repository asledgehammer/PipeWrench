/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.ai.sadisticAIDirector {
    /**
     * @customConstructor SleepingEvent.new
     * @
     * [CLASS] zombie.ai.sadisticAIDirector.SleepingEvent
     */
    export class SleepingEvent {
      /** zombie.ai.sadisticAIDirector.SleepingEvent */
      static readonly instance?: zombie.ai.sadisticAIDirector.SleepingEvent;
      /** boolean */
      static zombiesInvasion: boolean;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, int arg1): void
       */
      setPlayerFallAsleep(arg0: zombie.characters.IsoPlayer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      update(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       *  - (IsoGameCharacter arg0, boolean arg1): void
       */
      wakeUp(arg0: zombie.characters.IsoGameCharacter, arg1?: boolean): void;
    }
    /**
     * @customConstructor SleepingEventData.new
     * @
     * [CLASS] zombie.ai.sadisticAIDirector.SleepingEventData
     */
    export class SleepingEventData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHoursSinceRainStarted(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
    }
  }
}
