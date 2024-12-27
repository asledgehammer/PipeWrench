/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.physics {
    /**
     * @customConstructor BallisticsController.new
     * @
     * [CLASS] zombie.core.physics.BallisticsController extends zombie.util.PooledObject
     */
    export class BallisticsController {
      /** int */
      static readonly maxBallisticsCameraTargetsArraySize: number;
      /** int */
      static readonly maxBallisticsSpreadLocationsArraySize: number;


      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      cachedSpreadCount(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearCacheTargets(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debugRender(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      getBallisticsSpreadData(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      getBallisticsTargets(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      getCachedBallisticsTargetSpreadData(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      getCachedBallisticsTargets(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCachedNumberOfTargets(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getCachedTargetedBodyPart(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       *  - (float arg0, boolean arg1): void
       */
      getCameraTargets(arg0?: number, arg1?: boolean): number[] | void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector3
       */
      getMuzzlePosition(): zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumberOfCachedSpreadData(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumberOfCameraTargets(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumberOfSpreadData(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumberOfTargets(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool$PoolReference
       */
      getPoolReference(): zombie.util.Pool$PoolReference;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, int arg3): void
       */
      getSpreadData(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getTargetedBodyPart(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      getTargets(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasBallisticsTarget(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasSpreadData(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isCachedCameraTarget(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isCachedSpreadTarget(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isCachedTarget(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isCameraTarget(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isSpreadTarget(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isTarget(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isValidCachedTarget(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isValidTarget(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postUpdate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      releaseController(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderlast(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setIsoGameCharacter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      spreadCount(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.physics.BallisticsController
       */
      static alloc(): zombie.core.physics.BallisticsController;
    }
    /**
     * @customConstructor BallisticsTarget.new
     * @
     * [CLASS] zombie.core.physics.BallisticsTarget extends zombie.util.PooledObject
     */
    export class BallisticsTarget {
      /** float[] */
      static boneTransformData?: number[];


      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      add(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debugRender(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.physics.BallisticsTarget$CombatDamageData
       */
      getCombatDamageData(): zombie.core.physics.BallisticsTarget$CombatDamageData;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getCombatDamageDateProcessed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
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
       *  - (Empty): boolean
       */
      isValidIsoGameCharacter(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (int arg0): void
       */
      release(arg0?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      releaseTarget(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCombatDamageDataProcessed(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setIsoGameCharacter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      update(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.core.physics.BallisticsTarget
       */
      static alloc(arg0: zombie.characters.IsoGameCharacter): zombie.core.physics.BallisticsTarget;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool<zombie.util.IPooledObject>
       */
      static getBallisticsTargetPool(): zombie.util.Pool<zombie.util.IPooledObject>;
    }
    /**
     * @customConstructor CombatDamageData.new
     * @
     * [CLASS] zombie.core.physics.BallisticsTarget$CombatDamageData
     */
    export class BallisticsTarget$CombatDamageData {
      /**
       * Constructors: 
       *  - (BallisticsTarget arg0)
       */
      constructor(arg0: zombie.core.physics.BallisticsTarget);
    }
    /**
     * @customConstructor CarController.new
     * @
     * [CLASS] zombie.core.physics.CarController
     */
    export class CarController {
      /** zombie.core.physics.CarController$GearInfo[] */
      static gears?: zombie.core.physics.CarController$GearInfo[];

      /**
       * Constructors: 
       *  - (BaseVehicle arg0)
       */
      constructor(arg0: zombie.vehicles.BaseVehicle);
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      accelerator(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      brake(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkShouldBeActive(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      control_NoControl(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debug(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6): void
       */
      drawCircle(arg0: number, arg1: number, arg2: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number): void;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0, float arg1, float arg2, float arg3, float arg4): void
       *  - (Vector3f arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      drawRect(arg0: org.joml.Vector3f, arg1: number, arg2: number, arg3: number, arg4: number, arg5?: number, arg6?: number, arg7?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): zombie.core.physics.CarController$GearInfo
       */
      findGear(arg0: number): zombie.core.physics.CarController$GearInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.physics.CarController$ClientControls
       */
      getClientControls(): zombie.core.physics.CarController$ClientControls;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBrakePedalPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGasPedalPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      park(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateControls(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateTrailer(): void;
    }
    /**
     * @customConstructor BulletVariables.new
     * @
     * [CLASS] zombie.core.physics.CarController$BulletVariables
     */
    export class CarController$BulletVariables {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ClientControls.new
     * @
     * [CLASS] zombie.core.physics.CarController$ClientControls
     */
    export class CarController$ClientControls {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
    }
    /**
     * @customConstructor GearInfo.new
     * @
     * [CLASS] zombie.core.physics.CarController$GearInfo
     */
    export class CarController$GearInfo {

    }
    /** [ENUM] zombie.core.physics.RagdollBodyPart */
    export class RagdollBodyPart {
      protected constructor();
      static readonly BODYPART_COUNT: zombie.core.physics.RagdollBodyPart;
      static readonly BODYPART_HEAD: zombie.core.physics.RagdollBodyPart;
      static readonly BODYPART_LEFT_LOWER_ARM: zombie.core.physics.RagdollBodyPart;
      static readonly BODYPART_LEFT_LOWER_LEG: zombie.core.physics.RagdollBodyPart;
      static readonly BODYPART_LEFT_UPPER_ARM: zombie.core.physics.RagdollBodyPart;
      static readonly BODYPART_LEFT_UPPER_LEG: zombie.core.physics.RagdollBodyPart;
      static readonly BODYPART_PELVIS: zombie.core.physics.RagdollBodyPart;
      static readonly BODYPART_RIGHT_LOWER_ARM: zombie.core.physics.RagdollBodyPart;
      static readonly BODYPART_RIGHT_LOWER_LEG: zombie.core.physics.RagdollBodyPart;
      static readonly BODYPART_RIGHT_UPPER_ARM: zombie.core.physics.RagdollBodyPart;
      static readonly BODYPART_RIGHT_UPPER_LEG: zombie.core.physics.RagdollBodyPart;
      static readonly BODYPART_SPINE: zombie.core.physics.RagdollBodyPart;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.physics.RagdollBodyPart>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.physics.RagdollBodyPart>;
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
       *  - (String arg0): zombie.core.physics.RagdollBodyPart
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.physics.RagdollBodyPart | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.physics.RagdollBodyPart[]
       */
      static values(): zombie.core.physics.RagdollBodyPart[];
    }
    /**
     * @customConstructor RagdollController.new
     * @
     * [CLASS] zombie.core.physics.RagdollController extends zombie.util.PooledObject
     */
    export class RagdollController {
      /** float */
      static readonly BulletZtoPZWorldScale: number;
      /** float */
      static readonly MovementThreshold: number;
      /** float */
      static readonly MovementThresholdTime: number;


      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addToWorld(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debugRender(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationPlayer
       */
      getAnimationPlayer(): zombie.core.skinnedmodel.animation.AnimationPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCalculatedSimlationDirectionAngle(): number;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getCalculatedSimulationDirection(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.physics.RagdollControllerDebugRenderer$DebugDrawSettings
       */
      getDebugDrawSettings(): zombie.core.physics.RagdollControllerDebugRenderer$DebugDrawSettings;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getGameCharacterObject(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.iso.Vector3
       */
      getHeadPosition(arg0: zombie.iso.Vector3): zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumberOfBones(): number;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.iso.Vector3
       */
      getPelvisPosition(arg0: zombie.iso.Vector3): zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPelvisPositionX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPelvisPositionY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPelvisPositionZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool$PoolReference
       */
      getPoolReference(): zombie.util.Pool$PoolReference;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.physics.RagdollStateData
       */
      getRagdollStateData(): zombie.core.physics.RagdollStateData;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInitialized(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIsoPlayer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnBack(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSimulationActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSimulationDirectionCalculated(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSimulationSleeping(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUpright(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reinitialize(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
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
       *  - (IsoGameCharacter arg0): void
       */
      setGameCharacterObject(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): void
       */
      setHeadPosition(arg0: zombie.iso.Vector3): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOnBack(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): void
       */
      setPelvisPosition(arg0: zombie.iso.Vector3): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUpright(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      simulateRagdoll(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      update(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateRagdollSkeleton(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateSimulationStateID(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.physics.RagdollController
       */
      static alloc(): zombie.core.physics.RagdollController;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector3f arg0): org.lwjgl.util.vector.Vector3f
       */
      static pzSpaceToBulletSpace(arg0: org.lwjgl.util.vector.Vector3f): org.lwjgl.util.vector.Vector3f;
    }
    /** [ENUM] zombie.core.physics.RagdollController$SimulationState */
    export class RagdollController$SimulationState {
      protected constructor();
      static readonly ACTIVE_TAG: zombie.core.physics.RagdollController$SimulationState;
      static readonly DISABLE_DEACTIVATION: zombie.core.physics.RagdollController$SimulationState;
      static readonly DISABLE_SIMULATION: zombie.core.physics.RagdollController$SimulationState;
      static readonly ISLAND_SLEEPING: zombie.core.physics.RagdollController$SimulationState;
      static readonly UNKNOWN: zombie.core.physics.RagdollController$SimulationState;
      static readonly WANTS_DEACTIVATION: zombie.core.physics.RagdollController$SimulationState;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.physics.RagdollController$SimulationState>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.physics.RagdollController$SimulationState>;
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
       *  - (String arg0): zombie.core.physics.RagdollController$SimulationState
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.physics.RagdollController$SimulationState | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.physics.RagdollController$SimulationState[]
       */
      static values(): zombie.core.physics.RagdollController$SimulationState[];
    }
    /**
     * @customConstructor RagdollControllerDebugRenderer.new
     * @
     * [CLASS] zombie.core.physics.RagdollControllerDebugRenderer
     */
    export class RagdollControllerDebugRenderer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, boolean arg1, boolean arg2, Vector3 arg3, RagdollStateData arg4): void
       */
      static drawIsoDebug(arg0: zombie.characters.IsoGameCharacter, arg1: boolean, arg2: boolean, arg3: zombie.iso.Vector3, arg4: zombie.core.physics.RagdollStateData): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static renderDebugPhysics(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RagdollController arg0): void
       */
      static updateDebug(arg0: zombie.core.physics.RagdollController): void;
    }
    /**
     * @customConstructor DebugDrawSettings.new
     * @
     * [CLASS] zombie.core.physics.RagdollControllerDebugRenderer$DebugDrawSettings
     */
    export class RagdollControllerDebugRenderer$DebugDrawSettings {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor RagdollSettingsManager.new
     * @
     * [CLASS] zombie.core.physics.RagdollSettingsManager
     */
    export class RagdollSettingsManager {
      /** int */
      static readonly GlobalChanceID: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (RagdollBodyPart arg0): number
       */
      getChanceSetting(arg0: zombie.core.physics.RagdollBodyPart): number;
      /**
       * Method Parameters: 
       *  - (RagdollBodyPart arg0): boolean
       */
      getEnabledSetting(arg0: zombie.core.physics.RagdollBodyPart): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.physics.RagdollSettingsManager$ForceHitReactionLocation
       *  - (int arg0): zombie.core.physics.RagdollSettingsManager$ForceHitReactionLocation
       */
      getForceHitReactionLocation(arg0?: number): zombie.core.physics.RagdollSettingsManager$ForceHitReactionLocation;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getForcedHitReactionLocationAsShotLocation(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGlobalImpulseSetting(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGlobalUpImpulseSetting(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHitReactionLocationsCount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.physics.RagdollSettingsManager$HitReactionSetting
       */
      getHitReactionSetting(arg0: number): zombie.core.physics.RagdollSettingsManager$HitReactionSetting;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHitReactionSettingsCount(): number;
      /**
       * Method Parameters: 
       *  - (RagdollBodyPart arg0): number
       */
      getImpulseSetting(arg0: zombie.core.physics.RagdollBodyPart): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSandboxHitReactionFrequency(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSandboxHitReactionImpulseStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSandboxHitReactionUpImpulseStrength(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.physics.RagdollSettingsManager$RagdollSetting
       */
      getSetting(arg0: number): zombie.core.physics.RagdollSettingsManager$RagdollSetting;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSettingsCount(): number;
      /**
       * Method Parameters: 
       *  - (RagdollBodyPart arg0): number
       */
      getUpImpulseSetting(arg0: zombie.core.physics.RagdollBodyPart): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForcedHitReaction(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefaults(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): boolean
       */
      usePhysicHitReaction(arg0: zombie.characters.IsoZombie): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.physics.RagdollSettingsManager
       */
      static getInstance(): zombie.core.physics.RagdollSettingsManager;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RagdollSettingsManager arg0): void
       */
      static setInstance(arg0: zombie.core.physics.RagdollSettingsManager): void;
    }
    /**
     * @customConstructor ForceHitReactionLocation.new
     * @
     * [CLASS] zombie.core.physics.RagdollSettingsManager$ForceHitReactionLocation
     */
    export class RagdollSettingsManager$ForceHitReactionLocation {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getAdminValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1): zombie.core.physics.RagdollSettingsManager$ForceHitReactionLocation
       */
      init(arg0: number, arg1: string): zombie.core.physics.RagdollSettingsManager$ForceHitReactionLocation;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnableAdmin(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAdminValue(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnableAdmin(arg0: boolean): void;
    }
    /**
     * @customConstructor HitReactionSetting.new
     * @
     * [CLASS] zombie.core.physics.RagdollSettingsManager$HitReactionSetting
     */
    export class RagdollSettingsManager$HitReactionSetting {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAdminValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, float arg2, float arg3, float arg4): zombie.core.physics.RagdollSettingsManager$HitReactionSetting
       */
      init(arg0: number, arg1: string, arg2: number, arg3: number, arg4: number): zombie.core.physics.RagdollSettingsManager$HitReactionSetting;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnableAdmin(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAdminValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnableAdmin(arg0: boolean): void;
    }
    /**
     * @customConstructor RagdollSetting.new
     * @
     * [CLASS] zombie.core.physics.RagdollSettingsManager$RagdollSetting
     */
    export class RagdollSettingsManager$RagdollSetting {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAdminValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, float arg2, float arg3, float arg4): zombie.core.physics.RagdollSettingsManager$RagdollSetting
       */
      init(arg0: number, arg1: string, arg2: number, arg3: number, arg4: number): zombie.core.physics.RagdollSettingsManager$RagdollSetting;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnableAdmin(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAdminValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnableAdmin(arg0: boolean): void;
    }
    /**
     * @customConstructor RagdollStateData.new
     * @
     * [CLASS] zombie.core.physics.RagdollStateData
     */
    export class RagdollStateData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
    }
    /**
     * @customConstructor Transform.new
     * @
     * [CLASS] zombie.core.physics.Transform
     */
    export class Transform {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Matrix3f arg0)
       *  - (Matrix4f arg0)
       *  - (Transform arg0)
       */
      constructor(arg0?: org.joml.Matrix3f | org.joml.Matrix4f | zombie.core.physics.Transform);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Matrix4f arg0): org.joml.Matrix4f
       */
      getMatrix(arg0: org.joml.Matrix4f): org.joml.Matrix4f;
      /**
       * Method Parameters: 
       *  - (Quaternionf arg0): org.joml.Quaternionf
       */
      getRotation(arg0: org.joml.Quaternionf): org.joml.Quaternionf;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (Transform arg0): void
       */
      inverse(arg0?: zombie.core.physics.Transform): void;
      /**
       * Method Parameters: 
       *  - (Matrix3f arg0): void
       *  - (Matrix4f arg0): void
       *  - (Transform arg0): void
       */
      set(arg0: org.joml.Matrix3f | org.joml.Matrix4f | zombie.core.physics.Transform): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setIdentity(): void;
      /**
       * Method Parameters: 
       *  - (Quaternionf arg0): void
       */
      setRotation(arg0: org.joml.Quaternionf): void;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0): void
       */
      transform(arg0: org.joml.Vector3f): void;
    }
  }
}
