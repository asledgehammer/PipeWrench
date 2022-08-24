/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.skinnedmodel.animation.debug {
    /**
     * @customConstructor AnimationPlayerRecorder.new
     * @
     * [CLASS] zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder
     */
    export class AnimationPlayerRecorder {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      beginLine(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      discardRecording(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endLine(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getOwner(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRecording(): boolean;
      /**
       * Method Parameters: 
       *  - (State arg0, List arg1): void
       */
      logAIState(arg0: zombie.ai.State, arg1: java.util.List<zombie.ai.StateMachine$SubstateSlot>): void;
      /**
       * Method Parameters: 
       *  - (ActionState arg0, List arg1): void
       */
      logActionState(arg0: zombie.characters.action.ActionState, arg1: java.util.List<zombie.characters.action.ActionState>): void;
      /**
       * Method Parameters: 
       *  - (LiveAnimNode arg0): void
       */
      logAnimNode(arg0: zombie.core.skinnedmodel.advancedanimation.LiveAnimNode): void;
      /**
       * Method Parameters: 
       *  - (AnimState arg0): void
       */
      logAnimState(arg0: zombie.core.skinnedmodel.advancedanimation.AnimState): void;
      /**
       * Method Parameters: 
       *  - (List arg0, int[] arg1, float[] arg2, Vector2 arg3): void
       */
      logAnimWeights(arg0: java.util.List<zombie.core.skinnedmodel.animation.AnimationTrack>, arg1: number[], arg2: number[], arg3: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      logCharacterPos(): void;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0): void
       */
      logVariables(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRecording(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, boolean arg1, Consumer arg2): java.io.PrintStream
       */
      static openFileStream(arg0: string, arg1: boolean, arg2: java.util._function_.Consumer<string>): java.io.PrintStream;
    }
  }
}
