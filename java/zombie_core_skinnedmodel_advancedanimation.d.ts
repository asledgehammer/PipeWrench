/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.skinnedmodel.advancedanimation {
    /**
     * @customConstructor AdvancedAnimator.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator
     */
    export class AdvancedAnimator {
      /** float */
      static s_MotionScale: number;
      /** float */
      static s_RotationScale: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (TransitionNodeProxy arg0): void
       */
      FindTransitionsFromProxy(arg0: zombie.core.utils.TransitionNodeProxy): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetDebug(): string;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      OnAnimDataChanged(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (AnimLayer arg0, AnimEvent arg1): void
       */
      OnAnimEvent(arg0: zombie.core.skinnedmodel.advancedanimation.AnimLayer, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (TransitionNodeProxy arg0): void
       */
      ProcessTransitions(arg0: zombie.core.utils.TransitionNodeProxy): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reload(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (AnimationSet arg0): void
       */
      SetAnimSet(arg0: zombie.core.skinnedmodel.advancedanimation.AnimationSet): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, List arg1): void
       */
      SetState(arg0: string, arg1?: java.util.List<string>): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      containsAnyIdleNodes(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsState(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      debugGetVariables(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (AnimationVariableReference arg0): void
       */
      decrementWhileAliveFlag(arg0: zombie.core.skinnedmodel.advancedanimation.AnimationVariableReference): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getActiveSubLayerCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.IAnimatable
       */
      getCharacter(): zombie.core.skinnedmodel.advancedanimation.IAnimatable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCurrentStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor
       */
      getDebugMonitor(): zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimLayer
       */
      getRootLayer(): zombie.core.skinnedmodel.advancedanimation.AnimLayer;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.advancedanimation.AnimLayer
       */
      getSubLayerAt(arg0: number): zombie.core.skinnedmodel.advancedanimation.AnimLayer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSubLayerCount(): number;
      /**
       * Method Parameters: 
       *  - (AnimationVariableReference arg0): void
       */
      incrementWhileAliveFlag(arg0: zombie.core.skinnedmodel.advancedanimation.AnimationVariableReference): void;
      /**
       * Method Parameters: 
       *  - (IAnimatable arg0): void
       */
      init(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimatable): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRecording(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      printDebugCharacterActions(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (AnimatorDebugMonitor arg0): void
       */
      setDebugMonitor(arg0: zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor): void;
      /**
       * Method Parameters: 
       *  - (AnimationPlayerRecorder arg0): void
       */
      setRecorder(arg0: zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      update(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): void
       */
      updateSpeedScale(arg0: string, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static checkModifiedFiles(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static systemInit(): void;
    }
    /**
     * @customConstructor SubLayerSlot.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator$SubLayerSlot
     */
    export class AdvancedAnimator$SubLayerSlot {
      /**
       * Constructors: 
       *  - (AnimLayer arg0, IAnimatable arg1, AdvancedAnimator arg2)
       */
      constructor(arg0: zombie.core.skinnedmodel.advancedanimation.AnimLayer, arg1: zombie.core.skinnedmodel.advancedanimation.IAnimatable, arg2: zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      applyTransition(): void;
      /**
       * Method Parameters: 
       *  - (AnimState arg0, boolean arg1): void
       */
      transitionTo(arg0: zombie.core.skinnedmodel.advancedanimation.AnimState, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      update(arg0: number): void;
    }
    /**
     * @customConstructor AnimBoneWeight.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimBoneWeight
     */
    export class AnimBoneWeight {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (String arg0, float arg1)
       */
      constructor(arg0?: string, arg1?: number);
    }
    /**
     * @customConstructor AnimEvent.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimEvent
     */
    export class AnimEvent {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (AnimEvent arg0)
       */
      constructor(arg0?: zombie.core.skinnedmodel.advancedanimation.AnimEvent);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toDetailsString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /** [ENUM] zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime */
    export class AnimEvent$AnimEventTime {
      protected constructor();
      static readonly End: zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime;
      static readonly Percentage: zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime;
      static readonly Start: zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime>;
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
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime[]
       */
      static values(): zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime[];
    }
    /**
     * @customConstructor AnimLayer.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimLayer
     */
    export class AnimLayer {
      /**
       * Constructors: 
       *  - (IAnimatable arg0, AdvancedAnimator arg1)
       *  - (AnimLayer arg0, IAnimatable arg1, AdvancedAnimator arg2)
       */
      constructor(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimatable | zombie.core.skinnedmodel.advancedanimation.AnimLayer, arg1: zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator | zombie.core.skinnedmodel.advancedanimation.IAnimatable, arg2?: zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator);
      /**
       * Method Parameters: 
       *  - (TransitionNodeProxy arg0, boolean arg1): void
       */
      FindTransitioningLiveAnimNode(arg0: zombie.core.utils.TransitionNodeProxy, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetDebugString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (AnimState arg0, boolean arg1): boolean
       */
      TransitionTo(arg0: zombie.core.skinnedmodel.advancedanimation.AnimState, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      Update(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      UpdateLiveAnimNodes(): void;
      /**
       * Method Parameters: 
       *  - (LiveAnimNode arg0): void
       */
      decrementWhileAliveFlags(arg0: zombie.core.skinnedmodel.advancedanimation.LiveAnimNode): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationMultiTrack
       */
      getAnimationTrack(): zombie.core.skinnedmodel.animation.AnimationMultiTrack;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCurrentStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.LiveAnimNode
       */
      getCurrentSyncNode(): zombie.core.skinnedmodel.advancedanimation.LiveAnimNode;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      getCurrentSyncTrack(): zombie.core.skinnedmodel.animation.AnimationTrack;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugNodeName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDepth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.core.skinnedmodel.advancedanimation.LiveAnimNode>
       */
      getLiveAnimNodes(): java.util.List<zombie.core.skinnedmodel.advancedanimation.LiveAnimNode>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource
       */
      getVariableSource(): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasState(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isCurrentState(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRecording(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStateless(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSubLayer(): boolean;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onAnimStarted(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onLoopedAnim(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onNoAnimConditionsPass(): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onNonLoopedAnimFadeOut(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onNonLoopedAnimFinished(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onTrackDestroyed(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeFadedOutNodes(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (TransitionNodeProxyData arg0): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      startTransitionAnimation(arg0: zombie.core.utils.TransitionNodeProxy$TransitionNodeProxyData): zombie.core.skinnedmodel.animation.AnimationTrack;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateNodeActiveFlags(): void;
    }
    /**
     * @customConstructor AnimNode.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimNode
     */
    export class AnimNode {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0): boolean
       */
      checkConditions(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource): boolean;
      /**
       * Method Parameters: 
       *  - (AnimNode arg0): number
       */
      compareSelectionConditions(arg0: zombie.core.skinnedmodel.advancedanimation.AnimNode): number;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0, AnimNode arg1): zombie.core.skinnedmodel.advancedanimation.AnimTransition
       */
      findTransitionTo(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource, arg1: zombie.core.skinnedmodel.advancedanimation.AnimNode): zombie.core.skinnedmodel.advancedanimation.AnimTransition;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlendOutTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getConditionsString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.BoneAxis
       */
      getDeferredBoneAxis(): zombie.core.skinnedmodel.animation.BoneAxis;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDeferredBoneName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMatchingGrappledAnimNode(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPriority(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRagdollMaxTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRandomAnim(): string;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0): number
       */
      getSpeedScale(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAbstract(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGrappler(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIdleAnim(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRagdoll(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.AnimNode
       */
      static Parse(arg0: string): zombie.core.skinnedmodel.advancedanimation.AnimNode;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AnimNode arg0, AnimNode arg1): number
       */
      static compareSelectionConditions(arg0: zombie.core.skinnedmodel.advancedanimation.AnimNode, arg1: zombie.core.skinnedmodel.advancedanimation.AnimNode): number;
    }
    /**
     * @customConstructor AnimState.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimState
     */
    export class AnimState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (AnimNode arg0): void
       */
      addNode(arg0: zombie.core.skinnedmodel.advancedanimation.AnimNode): void;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0, List arg1): java.util.List<zombie.core.skinnedmodel.advancedanimation.AnimNode>
       */
      getAnimNodes(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource, arg1: java.util.List<zombie.core.skinnedmodel.advancedanimation.AnimNode>): java.util.List<zombie.core.skinnedmodel.advancedanimation.AnimNode>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.core.skinnedmodel.advancedanimation.AnimState
       */
      static Parse(arg0: string, arg1: string): zombie.core.skinnedmodel.advancedanimation.AnimState;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AnimState arg0): string
       */
      static getStateName(arg0: zombie.core.skinnedmodel.advancedanimation.AnimState): string;
    }
    /**
     * @customConstructor AnimTransition.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimTransition
     */
    export class AnimTransition {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (AnimNode arg0, AnimNode arg1): void
       */
      parse(arg0: zombie.core.skinnedmodel.advancedanimation.AnimNode, arg1: zombie.core.skinnedmodel.advancedanimation.AnimNode): void;
    }
    /**
     * @customConstructor AnimatedModel.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimatedModel extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource
     */
    export class AnimatedModel {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IModelCamera arg0): void
       *  - (int arg0, int arg1, int arg2, int arg3, float arg4, float arg5): void
       */
      DoRender(arg0: zombie.core.opengl.IModelCamera | number, arg1?: number, arg2?: number, arg3?: number, arg4?: number, arg5?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      DoRenderToWorld(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetAnimSetName(): string;
      /**
       * Method Parameters: 
       *  - (AnimLayer arg0, AnimEvent arg1): void
       */
      OnAnimEvent(arg0: zombie.core.skinnedmodel.advancedanimation.AnimLayer, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (ActionContext arg0): void
       */
      actionStateChanged(arg0: zombie.characters.action.ActionContext): void;
      /**
       * Method Parameters: 
       *  - (ShadowParams arg0, boolean arg1): zombie.iso.objects.ShadowParams
       */
      calculateShadowParams(arg0: zombie.iso.objects.ShadowParams, arg1: boolean): zombie.iso.objects.ShadowParams;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      canTransitionToState(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      clearVariable(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearVariables(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      clothingItemChanged(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsVariable(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.action.ActionContext
       */
      getActionContext(): zombie.characters.action.ActionContext;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator
       */
      getAdvancedAnimator(): zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAnimalSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAnimalType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.AnimalVisual
       */
      getAnimalVisual(): zombie.core.skinnedmodel.visual.AnimalVisual;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationPlayer
       */
      getAnimationPlayer(): zombie.core.skinnedmodel.animation.AnimationPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder
       */
      getAnimationPlayerRecorder(): zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getCharacter(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>
       */
      getGameVariables(): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.IGrappleable
       */
      getGrappleable(): zombie.core.skinnedmodel.IGrappleable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.HumanVisual
       */
      getHumanVisual(): zombie.core.skinnedmodel.visual.HumanVisual;
      /**
       * Method Parameters: 
       *  - (ItemVisuals arg0): void
       */
      getItemVisuals(arg0: zombie.core.skinnedmodel.visual.ItemVisuals): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstance
       */
      getModelInstance(): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOnlineID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScale(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getState(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource
       */
      getSubVariableSource(arg0: string): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUID(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       *  - (AnimationVariableHandle arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       */
      getVariable(arg0: string | zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (String arg0, boolean arg1): boolean
       */
      getVariableBoolean(arg0: string, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): number
       */
      getVariableFloat(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getVariableString(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.BaseVisual
       */
      getVisual(): zombie.core.skinnedmodel.visual.BaseVisual;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasAnimationPlayer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimationRecorderActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFemale(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIsometric(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadyToRender(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRendered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSkeleton(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      isVariable(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isZombie(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      postRender(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      releaseAnimationPlayer(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      renderMain(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAlpha(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0, boolean arg1, boolean arg2): void
       */
      setAmbient(arg0: zombie.core.textures.ColorInfo, arg1: boolean, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setAngle(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAnimSetName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnimate(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (AttachedModelNames arg0): void
       */
      setAttachedModelNames(arg0: zombie.characters.AttachedItems.AttachedModelNames): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setCharacter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCullFace(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFlipY(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0): void
       */
      setGrappleable(arg0: zombie.core.skinnedmodel.IGrappleable): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHighResDepthMultiplier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsometric(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ResultLight[] arg0, float arg1, float arg2, float arg3): void
       */
      setLights(arg0: zombie.iso.IsoGridSquare$ResultLight[], arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVisual arg0, ItemVisuals arg1): void
       *  - (BaseVisual arg0, ItemVisuals arg1, IsoAnimal arg2): void
       */
      setModelData(arg0: zombie.core.skinnedmodel.visual.BaseVisual, arg1: zombie.core.skinnedmodel.visual.ItemVisuals, arg2?: zombie.characters.animals.IsoAnimal): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      setOffset(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, boolean arg2): void
       */
      setOutfitName(arg0: string, arg1: boolean, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPrimaryHandModelName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSecondaryHandModelName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowBip01(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setState(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): void
       */
      setSurvivorDesc(arg0: zombie.characters.SurvivorDesc): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTargetDepth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       *  - (float arg0, float arg1, float arg2): void
       */
      setTint(arg0: zombie.core.textures.ColorInfo | number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTrackTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSlot arg0): void
       *  - (String arg0, boolean arg1): void
       *  - (String arg0, float arg1): void
       *  - (String arg0, String arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, Class arg1, Supplier arg2): void
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, Class arg1, Supplier arg2, Consumer arg3): void
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       */
      setVariable<EnumType>(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot | string, arg1?: boolean | number | string | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped | java.lang.Class<EnumType>, arg2?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped | java.util._function_.Supplier<EnumType> | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped, arg3?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped | java.util._function_.Consumer<EnumType> | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped): void;
      /**
       * Method Parameters: 
       *  - (BaseVisual arg0): void
       */
      setVisual(arg0: zombie.core.skinnedmodel.visual.BaseVisual): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor AnimatedModelInstanceRenderData.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimatedModel$AnimatedModelInstanceRenderData
     */
    export class AnimatedModel$AnimatedModelInstanceRenderData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Shader arg0): void
       */
      UpdateCharacter(arg0: zombie.core.skinnedmodel.shader.Shader): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimatedModel$AnimatedModelInstanceRenderData
       */
      init(): zombie.core.skinnedmodel.advancedanimation.AnimatedModel$AnimatedModelInstanceRenderData;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initMatrixPalette(): void;
      /**
       * Method Parameters: 
       *  - (ModelInstance arg0, AnimatedModelInstanceRenderData arg1): void
       */
      initModel(arg0: zombie.core.skinnedmodel.model.ModelInstance, arg1: zombie.core.skinnedmodel.advancedanimation.AnimatedModel$AnimatedModelInstanceRenderData): void;
      /**
       * Method Parameters: 
       *  - (AnimatedModelInstanceRenderData arg0): zombie.core.skinnedmodel.advancedanimation.AnimatedModel$AnimatedModelInstanceRenderData
       */
      transformToParent(arg0: zombie.core.skinnedmodel.advancedanimation.AnimatedModel$AnimatedModelInstanceRenderData): zombie.core.skinnedmodel.advancedanimation.AnimatedModel$AnimatedModelInstanceRenderData;
    }
    /**
     * @customConstructor StateInfo.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimatedModel$StateInfo
     */
    export class AnimatedModel$StateInfo {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor AnimationSet.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimationSet
     */
    export class AnimationSet {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.AnimState
       */
      GetState(arg0: string): zombie.core.skinnedmodel.advancedanimation.AnimState;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      Load(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsState(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.core.skinnedmodel.advancedanimation.AnimationSet
       */
      static GetAnimationSet(arg0: string, arg1: boolean): zombie.core.skinnedmodel.advancedanimation.AnimationSet;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
    }
    /**
     * @customConstructor AnimationVariableHandle.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle
     */
    export class AnimationVariableHandle {

      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (AnimationVariableHandle arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVariableIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getVariableName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle
       */
      static alloc(arg0: string): zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AnimationVariableHandle arg0, AnimationVariableHandle arg1): boolean
       */
      static equals(arg0: zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle, arg1: zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle): boolean;
    }
    /**
     * @customConstructor AnimationVariableReference.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimationVariableReference
     */
    export class AnimationVariableReference {

      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0): void
       */
      clearVariable(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (AnimationVariableReference arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSubVariableSourceName(): string;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       */
      getVariable(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSubVariableSourceReference(): boolean;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0, boolean arg1): void
       *  - (IAnimationVariableSource arg0, String arg1): void
       */
      setVariable(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource, arg1: boolean | string): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.AnimationVariableReference
       */
      static fromRawVariableName(arg0: string): zombie.core.skinnedmodel.advancedanimation.AnimationVariableReference;
    }
    /**
     * @customConstructor AnimationVariableSlotCallbackBool.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallback<java.lang.Boolean>
     */
    export class AnimationVariableSlotCallbackBool {
      /**
       * Constructors: 
       *  - (String arg0, CallbackGetStrongTyped arg1)
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2)
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2)
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3)
       */
      constructor(arg0: string, arg1: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped | boolean, arg2?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped, arg3?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped);
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      canConvertFrom(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (Empty): any
       */
      getDefaultValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType
       */
      getType(): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      /**
       * Method Parameters: 
       *  - (Empty): VariableType
       */
      getValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValueBool(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValueFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (float arg0): void
       *  - (String arg0): void
       */
      setValue(arg0: boolean | number | string): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      trySetValue(arg0: any): boolean;
    }
    /**
     * @customConstructor CallbackGetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped
     */
    export class AnimationVariableSlotCallbackBool$CallbackGetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      get(): any;
    }
    /**
     * @customConstructor CallbackSetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped
     */
    export class AnimationVariableSlotCallbackBool$CallbackSetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      accept(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): java.util._function_.Consumer<T>
       */
      andThen(arg0: java.util._function_.Consumer<any>): java.util._function_.Consumer<any>;
    }
    /**
     * @customConstructor AnimationVariableSlotCallbackFloat.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallback<java.lang.Float>
     */
    export class AnimationVariableSlotCallbackFloat {
      /**
       * Constructors: 
       *  - (String arg0, CallbackGetStrongTyped arg1)
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2)
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2)
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3)
       */
      constructor(arg0: string, arg1: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped | number, arg2?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped, arg3?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped);
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      canConvertFrom(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (Empty): any
       */
      getDefaultValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType
       */
      getType(): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      /**
       * Method Parameters: 
       *  - (Empty): VariableType
       */
      getValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValueBool(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValueFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (float arg0): void
       *  - (String arg0): void
       */
      setValue(arg0: boolean | number | string): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      trySetValue(arg0: any): boolean;
    }
    /**
     * @customConstructor CallbackGetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped
     */
    export class AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      get(): any;
    }
    /**
     * @customConstructor CallbackSetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped
     */
    export class AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      accept(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): java.util._function_.Consumer<T>
       */
      andThen(arg0: java.util._function_.Consumer<any>): java.util._function_.Consumer<any>;
    }
    /**
     * @customConstructor AnimationVariableSlotCallbackInt.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallback<java.lang.Integer>
     */
    export class AnimationVariableSlotCallbackInt {
      /**
       * Constructors: 
       *  - (String arg0, CallbackGetStrongTyped arg1)
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2)
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2)
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3)
       */
      constructor(arg0: string, arg1: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped | number, arg2?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped, arg3?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped);
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      canConvertFrom(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (Empty): any
       */
      getDefaultValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType
       */
      getType(): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      /**
       * Method Parameters: 
       *  - (Empty): VariableType
       */
      getValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValueBool(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValueFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (float arg0): void
       *  - (String arg0): void
       */
      setValue(arg0: boolean | number | string): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      trySetValue(arg0: any): boolean;
    }
    /**
     * @customConstructor CallbackGetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped
     */
    export class AnimationVariableSlotCallbackInt$CallbackGetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      get(): any;
    }
    /**
     * @customConstructor CallbackSetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped
     */
    export class AnimationVariableSlotCallbackInt$CallbackSetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      accept(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): java.util._function_.Consumer<T>
       */
      andThen(arg0: java.util._function_.Consumer<any>): java.util._function_.Consumer<any>;
    }
    /**
     * @customConstructor AnimationVariableSlotCallbackString.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallback<java.lang.String>
     */
    export class AnimationVariableSlotCallbackString {
      /**
       * Constructors: 
       *  - (String arg0, CallbackGetStrongTyped arg1)
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2)
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2)
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3)
       */
      constructor(arg0: string, arg1: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped | string, arg2?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped, arg3?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped);
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      canConvertFrom(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       *  - (Empty): string
       */
      getDefaultValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType
       */
      getType(): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      /**
       * Method Parameters: 
       *  - (Empty): VariableType
       */
      getValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValueBool(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValueFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (float arg0): void
       *  - (String arg0): void
       */
      setValue(arg0: boolean | number | string): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      trySetValue(arg0: any): boolean;
    }
    /**
     * @customConstructor CallbackGetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped
     */
    export class AnimationVariableSlotCallbackString$CallbackGetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      get(): any;
    }
    /**
     * @customConstructor CallbackSetStrongTyped.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped
     */
    export class AnimationVariableSlotCallbackString$CallbackSetStrongTyped {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      accept(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): java.util._function_.Consumer<T>
       */
      andThen(arg0: java.util._function_.Consumer<any>): java.util._function_.Consumer<any>;
    }
    /**
     * @customConstructor AnimationVariableSource.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource
     */
    export class AnimationVariableSource {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      clearVariable(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearVariables(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsVariable(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>
       */
      getGameVariables(): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource
       */
      getSubVariableSource(arg0: string): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       *  - (AnimationVariableHandle arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       */
      getVariable(arg0: string | zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (String arg0, boolean arg1): boolean
       */
      getVariableBoolean(arg0: string, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): number
       */
      getVariableFloat(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getVariableString(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      isVariable(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSlot arg0): void
       *  - (String arg0, boolean arg1): void
       *  - (String arg0, float arg1): void
       *  - (String arg0, String arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, Class arg1, Supplier arg2): void
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, Class arg1, Supplier arg2, Consumer arg3): void
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       */
      setVariable<EnumType>(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot | string, arg1?: boolean | number | string | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped | java.lang.Class<EnumType>, arg2?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped | java.util._function_.Supplier<EnumType> | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped, arg3?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped | java.util._function_.Consumer<EnumType> | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped): void;
    }
    /**
     * @customConstructor AnimationVariableSlotGenerator.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource$AnimationVariableSlotGenerator
     */
    export class AnimationVariableSource$AnimationVariableSlotGenerator {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       */
      Create(arg0: string): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot;
    }
    /** [ENUM] zombie.core.skinnedmodel.advancedanimation.AnimationVariableType */
    export class AnimationVariableType {
      protected constructor();
      static readonly Boolean: zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      static readonly Float: zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      static readonly String: zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      static readonly Void: zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.skinnedmodel.advancedanimation.AnimationVariableType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.skinnedmodel.advancedanimation.AnimationVariableType>;
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
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType[]
       */
      static values(): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType[];
    }
    /** [ENUM] zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour */
    export class GrappleOffsetBehaviour {
      protected constructor();
      static readonly Grappled: zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour;
      static readonly Grappled_TweenOutToNone: zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour;
      static readonly Grappler: zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour;
      static readonly None: zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour;
      static readonly None_TweenInGrappler: zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour>;
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
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour[]
       */
      static values(): zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour[];
    }
    /**
     * @customConstructor IAnimatable.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.IAnimatable
     */
    export class IAnimatable {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetAnimSetName(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      canTransitionToState(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsVariable(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.action.ActionContext
       */
      getActionContext(): zombie.characters.action.ActionContext;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator
       */
      getAdvancedAnimator(): zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationPlayer
       */
      getAnimationPlayer(): zombie.core.skinnedmodel.animation.AnimationPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder
       */
      getAnimationPlayerRecorder(): zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>
       */
      getGameVariables(): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.IGrappleable
       */
      getGrappleable(): zombie.core.skinnedmodel.IGrappleable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstance
       */
      getModelInstance(): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOnlineID(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource
       */
      getSubVariableSource(arg0: string): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUID(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       *  - (AnimationVariableHandle arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       */
      getVariable(arg0: string | zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (String arg0, boolean arg1): boolean
       */
      getVariableBoolean(arg0: string, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): number
       */
      getVariableFloat(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getVariableString(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasAnimationPlayer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimationRecorderActive(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      isVariable(arg0: string, arg1: string): boolean;
    }
    /**
     * @customConstructor IAnimationVariableCallbackMap.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.IAnimationVariableCallbackMap
     */
    export class IAnimationVariableCallbackMap {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      clearVariable(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearVariables(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsVariable(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>
       */
      getGameVariables(): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource
       */
      getSubVariableSource(arg0: string): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       *  - (AnimationVariableHandle arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       */
      getVariable(arg0: string | zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (String arg0, boolean arg1): boolean
       */
      getVariableBoolean(arg0: string, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): number
       */
      getVariableFloat(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getVariableString(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      isVariable(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSlot arg0): void
       *  - (String arg0, boolean arg1): void
       *  - (String arg0, float arg1): void
       *  - (String arg0, String arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, Class arg1, Supplier arg2): void
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, Class arg1, Supplier arg2, Consumer arg3): void
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       */
      setVariable<EnumType>(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot | string, arg1?: boolean | number | string | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped | java.lang.Class<EnumType>, arg2?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped | java.util._function_.Supplier<EnumType> | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped, arg3?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped | java.util._function_.Consumer<EnumType> | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped): void;
    }
    /**
     * @customConstructor IAnimationVariableSlot.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
     */
    export class IAnimationVariableSlot {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      canConvertFrom(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType
       */
      getType(): zombie.core.skinnedmodel.advancedanimation.AnimationVariableType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValueBool(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValueFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (float arg0): void
       *  - (String arg0): void
       */
      setValue(arg0: boolean | number | string): void;
    }
    /**
     * @customConstructor IAnimationVariableSource.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource
     */
    export class IAnimationVariableSource {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsVariable(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>
       */
      getGameVariables(): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource
       */
      getSubVariableSource(arg0: string): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       *  - (AnimationVariableHandle arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       */
      getVariable(arg0: string | zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (String arg0, boolean arg1): boolean
       */
      getVariableBoolean(arg0: string, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): number
       */
      getVariableFloat(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getVariableString(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      isVariable(arg0: string, arg1: string): boolean;
    }
    /**
     * @customConstructor LiveAnimNode.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.LiveAnimNode extends zombie.util.PooledObject
     */
    export class LiveAnimNode {

      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      addMainTrack(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): boolean
       */
      containsMainAnimationTrack(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): boolean;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0, AnimNode arg1): zombie.core.skinnedmodel.advancedanimation.AnimTransition
       */
      findTransitionTo(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource, arg1: zombie.core.skinnedmodel.advancedanimation.AnimNode): zombie.core.skinnedmodel.advancedanimation.AnimTransition;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAnimName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlendInTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlendOutTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.BoneAxis
       */
      getDeferredBoneAxis(): zombie.core.skinnedmodel.animation.BoneAxis;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDeferredBoneName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeferredRotationScale(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGrappleOffsetForward(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGrappleTweenInTime(): number;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.core.math.Vector3
       *  - (Vector3 arg0): zombie.iso.Vector3
       */
      getGrappleTweenStartPos(arg0: zombie.core.math.Vector3 | zombie.iso.Vector3): zombie.core.math.Vector3 | zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGrappledOffsetYaw(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour
       */
      getGrapplerOffsetBehaviour(): zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLayerIdx(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      getMainAnimationTrackAt(arg0: number): zombie.core.skinnedmodel.animation.AnimationTrack;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.core.skinnedmodel.animation.AnimationTrack>
       */
      getMainAnimationTracks(): java.lang.Iterable<zombie.core.skinnedmodel.animation.AnimationTrack>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMainAnimationTracksCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMainInitialRewindTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMatchingGrappledAnimNode(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      getPlayingTrackAt(arg0: number): zombie.core.skinnedmodel.animation.AnimationTrack;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayingTrackCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool$PoolReference
       */
      getPoolReference(): zombie.util.Pool$PoolReference;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPriority(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimNode
       */
      getSourceNode(): zombie.core.skinnedmodel.advancedanimation.AnimNode;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSource arg0): number
       */
      getSpeedScale(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.core.skinnedmodel.advancedanimation.AnimBoneWeight>
       */
      getSubStateBoneWeights(): java.util.List<zombie.core.skinnedmodel.advancedanimation.AnimBoneWeight>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTransitionFrom(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTransitionInBlendInTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTransitionInBlendOutTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      getTransitionInTrack(): zombie.core.skinnedmodel.animation.AnimationTrack;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTransitionInWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTransitionLayerIdx(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getUseDeferredMovement(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getUseDeferredRotation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.core.skinnedmodel.advancedanimation.AnimationVariableReference>
       */
      getWhileAliveFlags(): java.util.ArrayList<zombie.core.skinnedmodel.advancedanimation.AnimationVariableReference>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasMainAnimationTracks(): boolean;
      /**
       * Method Parameters: 
       *  - (AnimationVariableReference arg0): boolean
       */
      incrementWhileAliveFlagOnce(arg0: zombie.core.skinnedmodel.advancedanimation.AnimationVariableReference): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBlendingOut(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGrappler(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIdleAnimActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLooped(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMainAnimActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNew(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTransitioningIn(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTweeningInGrapple(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTweeningInGrappleFinished(): boolean;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onAnimStarted(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onLoopedAnim(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onNoAnimConditionsPass(): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onNonLoopedAnimFadeOut(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onNonLoopedAnimFinished(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (AnimationTrack arg0): void
       */
      onTrackDestroyed(arg0: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllTracks(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      selectRandomAnim(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActive(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): void
       *  - (Vector3 arg0): void
       */
      setGrappleTweenStartPos(arg0: zombie.core.math.Vector3 | zombie.iso.Vector3): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTransitionInBlendDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (AnimTransition arg0): void
       */
      setTransitionOut(arg0: zombie.core.skinnedmodel.advancedanimation.AnimTransition): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTweeningInGrapple(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTweeningInGrappleFinished(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setWeightsToFull(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setWeightsToZero(): void;
      /**
       * Method Parameters: 
       *  - (AnimNode arg0, AnimTransition arg1, AnimationTrack arg2): void
       *  - (LiveAnimNode arg0, AnimTransition arg1, AnimationTrack arg2): void
       */
      startTransitionIn(arg0: zombie.core.skinnedmodel.advancedanimation.AnimNode | zombie.core.skinnedmodel.advancedanimation.LiveAnimNode, arg1: zombie.core.skinnedmodel.advancedanimation.AnimTransition, arg2: zombie.core.skinnedmodel.animation.AnimationTrack): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stopTransitionIn(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      update(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      wasActivated(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      wasDeactivated(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AnimLayer arg0, AnimNode arg1, int arg2): zombie.core.skinnedmodel.advancedanimation.LiveAnimNode
       */
      static alloc(arg0: zombie.core.skinnedmodel.advancedanimation.AnimLayer, arg1: zombie.core.skinnedmodel.advancedanimation.AnimNode, arg2: number): zombie.core.skinnedmodel.advancedanimation.LiveAnimNode;
    }
  }
}
