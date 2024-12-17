/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.skinnedmodel.advancedanimation.events {
    /**
     * @customConstructor AnimEventBroadcaster.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
     */
    export class AnimEventBroadcaster {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IAnimEventListenerSetVariableString arg0): void
       *  - (String arg0, IAnimEventListener arg1): void
       *  - (String arg0, IAnimEventListenerBoolean arg1): void
       *  - (String arg0, IAnimEventListenerFloat arg1): void
       *  - (String arg0, IAnimEventListenerNoParam arg1): void
       *  - (String arg0, IAnimEventListenerString arg1): void
       */
      addListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
    }
    /**
     * @customConstructor IAnimEventListener.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener
     */
    export class IAnimEventListener {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
    }
    /**
     * @customConstructor IAnimEventListenerBoolean.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean
     */
    export class IAnimEventListenerBoolean {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, boolean arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: boolean): void;
    }
    /**
     * @customConstructor IAnimEventListenerFloat.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat
     */
    export class IAnimEventListenerFloat {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, float arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: number): void;
    }
    /**
     * @customConstructor IAnimEventListenerNoParam.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam
     */
    export class IAnimEventListenerNoParam {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter): void;
    }
    /**
     * @customConstructor IAnimEventListenerSetVariableString.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString
     */
    export class IAnimEventListenerSetVariableString {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimationVariableReference arg1, String arg2): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimationVariableReference, arg2: string): void;
    }
    /**
     * @customConstructor IAnimEventListenerString.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString
     */
    export class IAnimEventListenerString {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, String arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: string): void;
    }
  }
}
