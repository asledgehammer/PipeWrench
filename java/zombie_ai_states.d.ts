/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.ai.states {
    /**
     * @customConstructor AttackState.new
     * @
     * [CLASS] zombie.ai.states.AttackState extends zombie.ai.State
     */
    export class AttackState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.AttackState
       */
      static instance(): zombie.ai.states.AttackState;
    }
    /**
     * @customConstructor BurntToDeath.new
     * @
     * [CLASS] zombie.ai.states.BurntToDeath extends zombie.ai.State
     */
    export class BurntToDeath {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.BurntToDeath
       */
      static instance(): zombie.ai.states.BurntToDeath;
    }
    /**
     * @customConstructor ClimbDownSheetRopeState.new
     * @
     * [CLASS] zombie.ai.states.ClimbDownSheetRopeState extends zombie.ai.State
     */
    export class ClimbDownSheetRopeState {
      /** float */
      static readonly CLIMB_DOWN_SLOWDOWN: number;
      /** float */
      static readonly CLIMB_DOWN_SPEED: number;

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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ClimbDownSheetRopeState
       */
      static instance(): zombie.ai.states.ClimbDownSheetRopeState;
    }
    /**
     * @customConstructor ClimbOverFenceState.new
     * @
     * [CLASS] zombie.ai.states.ClimbOverFenceState extends zombie.ai.State
     */
    export class ClimbOverFenceState {
      /** int */
      static readonly COLLIDE_WITH_WALL: number;
      /** int */
      static readonly TRIP_METAL_BARS: number;
      /** int */
      static readonly TRIP_TREE: number;
      /** int */
      static readonly TRIP_WINDOW: number;
      /** int */
      static readonly TRIP_ZOMBIE: number;


      /**
       * Method Parameters: 
       *  - (IAnimEventListenerSetVariableString arg0): void
       *  - (String arg0, IAnimEventListener arg1): void
       *  - (String arg0, IAnimEventListenerBoolean arg1): void
       *  - (String arg0, IAnimEventListenerFloat arg1): void
       *  - (String arg0, IAnimEventListenerNoParam arg1): void
       *  - (String arg0, IAnimEventListenerString arg1): void
       */
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoDirections arg1): void
       */
      setParams(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoDirections): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ClimbOverFenceState
       */
      static instance(): zombie.ai.states.ClimbOverFenceState;
    }
    /**
     * @customConstructor ClimbOverWallState.new
     * @
     * [CLASS] zombie.ai.states.ClimbOverWallState extends zombie.ai.State
     */
    export class ClimbOverWallState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoDirections arg1): void
       */
      setParams(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoDirections): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ClimbOverWallState
       */
      static instance(): zombie.ai.states.ClimbOverWallState;
    }
    /**
     * @customConstructor ClimbSheetRopeState.new
     * @
     * [CLASS] zombie.ai.states.ClimbSheetRopeState extends zombie.ai.State
     */
    export class ClimbSheetRopeState {
      /** float */
      static readonly CLIMB_SLOWDOWN: number;
      /** float */
      static readonly CLIMB_SPEED: number;

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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ClimbSheetRopeState
       */
      static instance(): zombie.ai.states.ClimbSheetRopeState;
    }
    /**
     * @customConstructor ClimbThroughWindowPositioningParams.new
     * @
     * [CLASS] zombie.ai.states.ClimbThroughWindowPositioningParams extends zombie.util.PooledObject
     */
    export class ClimbThroughWindowPositioningParams {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool$PoolReference
       */
      getPoolReference(): zombie.util.Pool$PoolReference;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ClimbThroughWindowPositioningParams
       */
      static alloc(): zombie.ai.states.ClimbThroughWindowPositioningParams;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ClimbThroughWindowPositioningParams arg0): void
       */
      static release(arg0: zombie.ai.states.ClimbThroughWindowPositioningParams): void;
    }
    /**
     * @customConstructor ClimbThroughWindowState.new
     * @
     * [CLASS] zombie.ai.states.ClimbThroughWindowState extends zombie.ai.State
     */
    export class ClimbThroughWindowState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.ai.states.ClimbThroughWindowPositioningParams
       */
      getPositioningParams(arg0: zombie.characters.IsoGameCharacter): zombie.ai.states.ClimbThroughWindowPositioningParams;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.IsoObject
       */
      getWindow(arg0: zombie.characters.IsoGameCharacter): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, IsoDirections arg3): boolean
       */
      isPastInnerEdgeOfSquare(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: zombie.iso.IsoDirections): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, IsoDirections arg3): boolean
       */
      isPastOuterEdgeOfSquare(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: zombie.iso.IsoDirections): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isWindowClosing(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoObject arg1): void
       */
      setParams(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoObject arg1, ClimbThroughWindowPositioningParams arg2): void
       */
      static getClimbThroughWindowPositioningParams(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoObject, arg2: zombie.ai.states.ClimbThroughWindowPositioningParams): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, IsoDirections arg1): zombie.iso.IsoGridSquare
       */
      static getFreeSquareAfterObstacles(arg0: zombie.iso.IsoGridSquare, arg1: zombie.iso.IsoDirections): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ClimbThroughWindowState
       */
      static instance(): zombie.ai.states.ClimbThroughWindowState;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static isFreeSquare(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static isObstacleSquare(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, ClimbThroughWindowPositioningParams arg1): void
       */
      static slideCharacterToWindowOpening(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.ai.states.ClimbThroughWindowPositioningParams): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, float arg1): void
       */
      static slideX(arg0: zombie.characters.IsoGameCharacter, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, float arg1): void
       */
      static slideY(arg0: zombie.characters.IsoGameCharacter, arg1: number): void;
    }
    /**
     * @customConstructor CloseWindowState.new
     * @
     * [CLASS] zombie.ai.states.CloseWindowState extends zombie.ai.State
     */
    export class CloseWindowState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoWindow
       */
      getWindow(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.CloseWindowState
       */
      static instance(): zombie.ai.states.CloseWindowState;
    }
    /**
     * @customConstructor CrawlingZombieTurnState.new
     * @
     * [CLASS] zombie.ai.states.CrawlingZombieTurnState extends zombie.ai.State
     */
    export class CrawlingZombieTurnState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoDirections arg1): boolean
       */
      static calculateDir(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoDirections): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.CrawlingZombieTurnState
       */
      static instance(): zombie.ai.states.CrawlingZombieTurnState;
    }
    /**
     * @customConstructor FakeDeadAttackState.new
     * @
     * [CLASS] zombie.ai.states.FakeDeadAttackState extends zombie.ai.State
     */
    export class FakeDeadAttackState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.FakeDeadAttackState
       */
      static instance(): zombie.ai.states.FakeDeadAttackState;
    }
    /**
     * @customConstructor FakeDeadZombieState.new
     * @
     * [CLASS] zombie.ai.states.FakeDeadZombieState extends zombie.ai.State
     */
    export class FakeDeadZombieState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.FakeDeadZombieState
       */
      static instance(): zombie.ai.states.FakeDeadZombieState;
    }
    /**
     * @customConstructor FishingState.new
     * @
     * [CLASS] zombie.ai.states.FishingState extends zombie.ai.State
     */
    export class FishingState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.FishingState
       */
      static instance(): zombie.ai.states.FishingState;
    }
    /** [ENUM] zombie.ai.states.FishingState$FishingStage */
    export class FishingState$FishingStage {
      protected constructor();
      static readonly Cast: zombie.ai.states.FishingState$FishingStage;
      static readonly Idle: zombie.ai.states.FishingState$FishingStage;
      static readonly None: zombie.ai.states.FishingState$FishingStage;
      static readonly PickUp: zombie.ai.states.FishingState$FishingStage;
      static readonly PickUpTrash: zombie.ai.states.FishingState$FishingStage;
      static readonly Strike: zombie.ai.states.FishingState$FishingStage;
      static readonly StrikeHard: zombie.ai.states.FishingState$FishingStage;
      static readonly StrikeMedium: zombie.ai.states.FishingState$FishingStage;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.ai.states.FishingState$FishingStage>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.ai.states.FishingState$FishingStage>;
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
       *  - (String arg0): zombie.ai.states.FishingState$FishingStage
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.ai.states.FishingState$FishingStage | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.FishingState$FishingStage[]
       */
      static values(): zombie.ai.states.FishingState$FishingStage[];
    }
    /**
     * @customConstructor FitnessState.new
     * @
     * [CLASS] zombie.ai.states.FitnessState extends zombie.ai.State
     */
    export class FitnessState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.FitnessState
       */
      static instance(): zombie.ai.states.FitnessState;
    }
    /**
     * @customConstructor IdleState.new
     * @
     * [CLASS] zombie.ai.states.IdleState extends zombie.ai.State
     */
    export class IdleState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.IdleState
       */
      static instance(): zombie.ai.states.IdleState;
    }
    /**
     * @customConstructor LungeState.new
     * @
     * [CLASS] zombie.ai.states.LungeState extends zombie.ai.State
     */
    export class LungeState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.LungeState
       */
      static instance(): zombie.ai.states.LungeState;
    }
    /**
     * @customConstructor OpenWindowState.new
     * @
     * [CLASS] zombie.ai.states.OpenWindowState extends zombie.ai.State
     */
    export class OpenWindowState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoWindow arg1): void
       */
      setParams(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.objects.IsoWindow): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.OpenWindowState
       */
      static instance(): zombie.ai.states.OpenWindowState;
    }
    /**
     * @customConstructor PathFindState.new
     * @
     * [CLASS] zombie.ai.states.PathFindState extends zombie.ai.State
     */
    export class PathFindState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.pathfind.PathFindState2
       */
      static instance(): zombie.pathfind.PathFindState2;
    }
    /**
     * @customConstructor PlayerActionsState.new
     * @
     * [CLASS] zombie.ai.states.PlayerActionsState extends zombie.ai.State
     */
    export class PlayerActionsState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerActionsState
       */
      static instance(): zombie.ai.states.PlayerActionsState;
    }
    /**
     * @customConstructor PlayerAimState.new
     * @
     * [CLASS] zombie.ai.states.PlayerAimState extends zombie.ai.State
     */
    export class PlayerAimState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerAimState
       */
      static instance(): zombie.ai.states.PlayerAimState;
    }
    /**
     * @customConstructor PlayerEmoteState.new
     * @
     * [CLASS] zombie.ai.states.PlayerEmoteState extends zombie.ai.State
     */
    export class PlayerEmoteState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerEmoteState
       */
      static instance(): zombie.ai.states.PlayerEmoteState;
    }
    /**
     * @customConstructor PlayerExtState.new
     * @
     * [CLASS] zombie.ai.states.PlayerExtState extends zombie.ai.State
     */
    export class PlayerExtState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerExtState
       */
      static instance(): zombie.ai.states.PlayerExtState;
    }
    /**
     * @customConstructor PlayerFallDownState.new
     * @
     * [CLASS] zombie.ai.states.PlayerFallDownState extends zombie.ai.State
     */
    export class PlayerFallDownState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerFallDownState
       */
      static instance(): zombie.ai.states.PlayerFallDownState;
    }
    /**
     * @customConstructor PlayerFallingState.new
     * @
     * [CLASS] zombie.ai.states.PlayerFallingState extends zombie.ai.State
     */
    export class PlayerFallingState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerFallingState
       */
      static instance(): zombie.ai.states.PlayerFallingState;
    }
    /**
     * @customConstructor PlayerGetUpState.new
     * @
     * [CLASS] zombie.ai.states.PlayerGetUpState extends zombie.ai.State
     */
    export class PlayerGetUpState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerGetUpState
       */
      static instance(): zombie.ai.states.PlayerGetUpState;
    }
    /**
     * @customConstructor PlayerHitReactionPVPState.new
     * @
     * [CLASS] zombie.ai.states.PlayerHitReactionPVPState extends zombie.ai.State
     */
    export class PlayerHitReactionPVPState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerHitReactionPVPState
       */
      static instance(): zombie.ai.states.PlayerHitReactionPVPState;
    }
    /**
     * @customConstructor PlayerHitReactionState.new
     * @
     * [CLASS] zombie.ai.states.PlayerHitReactionState extends zombie.ai.State
     */
    export class PlayerHitReactionState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerHitReactionState
       */
      static instance(): zombie.ai.states.PlayerHitReactionState;
    }
    /**
     * @customConstructor PlayerKnockedDown.new
     * @
     * [CLASS] zombie.ai.states.PlayerKnockedDown extends zombie.ai.State
     */
    export class PlayerKnockedDown {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerKnockedDown
       */
      static instance(): zombie.ai.states.PlayerKnockedDown;
    }
    /**
     * @customConstructor PlayerOnGroundState.new
     * @
     * [CLASS] zombie.ai.states.PlayerOnGroundState extends zombie.ai.State
     */
    export class PlayerOnGroundState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerOnGroundState
       */
      static instance(): zombie.ai.states.PlayerOnGroundState;
    }
    /**
     * @customConstructor PlayerSitOnFurnitureState.new
     * @
     * [CLASS] zombie.ai.states.PlayerSitOnFurnitureState extends zombie.ai.State
     */
    export class PlayerSitOnFurnitureState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      abortSitting(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IAnimEventListenerSetVariableString arg0): void
       *  - (String arg0, IAnimEventListener arg1): void
       *  - (String arg0, IAnimEventListenerBoolean arg1): void
       *  - (String arg0, IAnimEventListenerFloat arg1): void
       *  - (String arg0, IAnimEventListenerNoParam arg1): void
       *  - (String arg0, IAnimEventListenerString arg1): void
       */
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerSitOnFurnitureState
       */
      static instance(): zombie.ai.states.PlayerSitOnFurnitureState;
    }
    /**
     * @customConstructor PlayerSitOnGroundState.new
     * @
     * [CLASS] zombie.ai.states.PlayerSitOnGroundState extends zombie.ai.State
     */
    export class PlayerSitOnGroundState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerSitOnGroundState
       */
      static instance(): zombie.ai.states.PlayerSitOnGroundState;
    }
    /**
     * @customConstructor PlayerStrafeState.new
     * @
     * [CLASS] zombie.ai.states.PlayerStrafeState extends zombie.ai.State
     */
    export class PlayerStrafeState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.PlayerStrafeState
       */
      static instance(): zombie.ai.states.PlayerStrafeState;
    }
    /**
     * @customConstructor SmashWindowState.new
     * @
     * [CLASS] zombie.ai.states.SmashWindowState extends zombie.ai.State
     */
    export class SmashWindowState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.SmashWindowState
       */
      static instance(): zombie.ai.states.SmashWindowState;
    }
    /**
     * @customConstructor StaggerBackState.new
     * @
     * [CLASS] zombie.ai.states.StaggerBackState extends zombie.ai.State
     */
    export class StaggerBackState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.StaggerBackState
       */
      static instance(): zombie.ai.states.StaggerBackState;
    }
    /**
     * @customConstructor SwipeStatePlayer.new
     * @
     * [CLASS] zombie.ai.states.SwipeStatePlayer extends zombie.ai.State
     */
    export class SwipeStatePlayer {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      static dbgOnGlobalAnimEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.SwipeStatePlayer
       */
      static instance(): zombie.ai.states.SwipeStatePlayer;
    }
    /**
     * @customConstructor ThumpState.new
     * @
     * [CLASS] zombie.ai.states.ThumpState extends zombie.ai.State
     */
    export class ThumpState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getFastForwardDamageMultiplier(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ThumpState
       */
      static instance(): zombie.ai.states.ThumpState;
    }
    /**
     * @customConstructor WalkTowardState.new
     * @
     * [CLASS] zombie.ai.states.WalkTowardState extends zombie.ai.State
     */
    export class WalkTowardState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, Vector2 arg1): boolean
       */
      calculateTargetLocation(arg0: zombie.characters.IsoZombie, arg1: zombie.iso.Vector2): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.WalkTowardState
       */
      static instance(): zombie.ai.states.WalkTowardState;
    }
    /**
     * @customConstructor ZombieFallDownState.new
     * @
     * [CLASS] zombie.ai.states.ZombieFallDownState extends zombie.ai.State
     */
    export class ZombieFallDownState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ZombieFallDownState
       */
      static instance(): zombie.ai.states.ZombieFallDownState;
    }
    /**
     * @customConstructor ZombieGetDownState.new
     * @
     * [CLASS] zombie.ai.states.ZombieGetDownState extends zombie.ai.State
     */
    export class ZombieGetDownState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isNearStartXY(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setParams(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ZombieGetDownState
       */
      static instance(): zombie.ai.states.ZombieGetDownState;
    }
    /**
     * @customConstructor ZombieGetUpState.new
     * @
     * [CLASS] zombie.ai.states.ZombieGetUpState extends zombie.ai.State
     */
    export class ZombieGetUpState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ZombieGetUpState
       */
      static instance(): zombie.ai.states.ZombieGetUpState;
    }
    /**
     * @customConstructor ZombieIdleState.new
     * @
     * [CLASS] zombie.ai.states.ZombieIdleState extends zombie.ai.State
     */
    export class ZombieIdleState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ZombieIdleState
       */
      static instance(): zombie.ai.states.ZombieIdleState;
    }
    /**
     * @customConstructor ZombieOnGroundState.new
     * @
     * [CLASS] zombie.ai.states.ZombieOnGroundState extends zombie.ai.State
     */
    export class ZombieOnGroundState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ZombieOnGroundState
       */
      static instance(): zombie.ai.states.ZombieOnGroundState;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGameCharacter arg1): boolean
       */
      static isCharacterStandingOnOther(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.IsoGameCharacter): boolean;
    }
    /**
     * @customConstructor ZombieReanimateState.new
     * @
     * [CLASS] zombie.ai.states.ZombieReanimateState extends zombie.ai.State
     */
    export class ZombieReanimateState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ZombieReanimateState
       */
      static instance(): zombie.ai.states.ZombieReanimateState;
    }
    /**
     * @customConstructor ZombieSittingState.new
     * @
     * [CLASS] zombie.ai.states.ZombieSittingState extends zombie.ai.State
     */
    export class ZombieSittingState {
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
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      enter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      execute(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      exit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, MoveDeltaModifiers arg1): void
       */
      getDeltaModifiers(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.characters.MoveDeltaModifiers): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.permission.IStatePermissions
       */
      getStatePermissions(): zombie.ai.permission.IStatePermissions;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isAttacking(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): boolean
       */
      isIgnoreCollide(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isMoving(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.ai.states.ZombieSittingState
       */
      static instance(): zombie.ai.states.ZombieSittingState;
    }
  }
}
