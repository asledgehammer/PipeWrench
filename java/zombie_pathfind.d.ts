/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.pathfind {
    /**
     * @customConstructor Path.new
     * @
     * [CLASS] zombie.pathfind.Path
     */
    export class Path {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): zombie.pathfind.PathNode
       */
      addNode(arg0: number, arg1: number, arg2: number): zombie.pathfind.PathNode;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Path arg0): void
       */
      copyFrom(arg0: zombie.pathfind.Path): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      crossesSquare(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.pathfind.PathNode
       */
      getNode(arg0: number): zombie.pathfind.PathNode;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      length(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
    }
    /**
     * @customConstructor PathFindBehavior2.new
     * @
     * [CLASS] zombie.pathfind.PathFindBehavior2
     */
    export class PathFindBehavior2 {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (Mover arg0): void
       */
      Failed(arg0: zombie.ai.astar.Mover): void;
      /**
       * Method Parameters: 
       *  - (Path arg0, Mover arg1): void
       */
      Succeeded(arg0: zombie.pathfind.Path, arg1: zombie.ai.astar.Mover): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      allowTurnAnimation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      cancel(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getGoalSitOnFurnitureObject(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPathLength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getTargetChar(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTargetX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTargetY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTargetZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasStartedMoving(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoalCharacter(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoalLocation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoalNone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoalSitOnFurniture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoalSound(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoalVehicleAdjacent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoalVehicleArea(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGoalVehicleSeat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMovingUsingPathFind(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStrafing(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): boolean
       */
      isTargetLocation(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTurningToObstacle(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, float arg1): void
       */
      moveToDir(arg0: zombie.iso.IsoMovingObject, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      moveToPoint(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      pathToCharacter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      pathToLocation(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      pathToLocationF(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (TFloatArrayList arg0): void
       */
      pathToNearest(arg0: gnu.trove.list.array.TFloatArrayList): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      pathToNearestTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, boolean arg1): void
       */
      pathToSitOnFurniture(arg0: zombie.iso.IsoObject, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      pathToSound(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      pathToVehicleAdjacent(arg0: zombie.vehicles.BaseVehicle): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, String arg1): void
       */
      pathToVehicleArea(arg0: zombie.vehicles.BaseVehicle, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, int arg1): void
       */
      pathToVehicleSeat(arg0: zombie.vehicles.BaseVehicle, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      setData(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldBeMoving(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldGetUpFromCrawl(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      shouldIgnoreCollisionWithSquare(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.pathfind.PathFindBehavior2$BehaviorResult
       */
      update(): zombie.pathfind.PathFindBehavior2$BehaviorResult;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, IsoMovingObject arg3, Path arg4, PointOnPath arg5): void
       */
      static closestPointOnPath(arg0: number, arg1: number, arg2: number, arg3: zombie.iso.IsoMovingObject, arg4: zombie.pathfind.Path, arg5: zombie.pathfind.PathFindBehavior2$PointOnPath): void;
    }
    /** [ENUM] zombie.pathfind.PathFindBehavior2$BehaviorResult */
    export class PathFindBehavior2$BehaviorResult {
      protected constructor();
      static readonly Failed: zombie.pathfind.PathFindBehavior2$BehaviorResult;
      static readonly Succeeded: zombie.pathfind.PathFindBehavior2$BehaviorResult;
      static readonly Working: zombie.pathfind.PathFindBehavior2$BehaviorResult;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.pathfind.PathFindBehavior2$BehaviorResult>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.pathfind.PathFindBehavior2$BehaviorResult>;
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
       *  - (String arg0): zombie.pathfind.PathFindBehavior2$BehaviorResult
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.pathfind.PathFindBehavior2$BehaviorResult | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.pathfind.PathFindBehavior2$BehaviorResult[]
       */
      static values(): zombie.pathfind.PathFindBehavior2$BehaviorResult[];
    }
    /**
     * @customConstructor NPCData.new
     * @
     * [CLASS] zombie.pathfind.PathFindBehavior2$NPCData
     */
    export class PathFindBehavior2$NPCData {
      /**
       * Constructors: 
       *  - (PathFindBehavior2 arg0)
       */
      constructor(arg0: zombie.pathfind.PathFindBehavior2);
    }
    /**
     * @customConstructor PointOnPath.new
     * @
     * [CLASS] zombie.pathfind.PathFindBehavior2$PointOnPath
     */
    export class PathFindBehavior2$PointOnPath {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor PathFindState2.new
     * @
     * [CLASS] zombie.pathfind.PathFindState2 extends zombie.ai.State
     */
    export class PathFindState2 {
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
    }
    /**
     * @customConstructor PathNode.new
     * @
     * [CLASS] zombie.pathfind.PathNode
     */
    export class PathNode {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor VehiclePoly.new
     * @
     * [CLASS] zombie.pathfind.VehiclePoly
     */
    export class VehiclePoly {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): boolean
       */
      containsPoint(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (VehiclePoly arg0): zombie.pathfind.VehiclePoly
       *  - (BaseVehicle arg0, float arg1): zombie.pathfind.VehiclePoly
       */
      init(arg0: zombie.pathfind.VehiclePoly | zombie.vehicles.BaseVehicle, arg1?: number): zombie.pathfind.VehiclePoly;
      /**
       * Method Parameters: 
       *  - (VehiclePoly arg0): boolean
       */
      isEqual(arg0: zombie.pathfind.VehiclePoly): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      toByteBuffer(arg0: java.nio.ByteBuffer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector2 arg0, Vector2 arg1, Vector2 arg2, Vector2 arg3): zombie.iso.Vector2
       */
      static lineIntersection(arg0: zombie.iso.Vector2, arg1: zombie.iso.Vector2, arg2: zombie.iso.Vector2, arg3: zombie.iso.Vector2): zombie.iso.Vector2;
    }
  }
}
