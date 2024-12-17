/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.skinnedmodel {
    /**
     * @customConstructor BaseGrappleable.new
     * @
     * [CLASS] zombie.core.skinnedmodel.BaseGrappleable
     */
    export class BaseGrappleable {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (IsoGameCharacter arg0)
       *  - (IsoDeadBody arg0)
       */
      constructor(arg0?: zombie.characters.IsoGameCharacter | zombie.iso.objects.IsoDeadBody);
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0, String arg1): void
       */
      AcceptGrapple(arg0: zombie.core.skinnedmodel.IGrappleable, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0, HandWeapon arg1, float arg2, String arg3): void
       */
      Grappled(arg0: zombie.core.skinnedmodel.IGrappleable, arg1: zombie.inventory.types.HandWeapon, arg2: number, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0, String arg1): void
       */
      GrapplerLetGo(arg0: zombie.core.skinnedmodel.IGrappleable, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      LetGoOfGrappled(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0): void
       */
      RejectGrapple(arg0: zombie.core.skinnedmodel.IGrappleable): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeGrappled(): boolean;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getAnimForwardDirection(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.IAnimatable
       */
      getAnimatable(): zombie.core.skinnedmodel.advancedanimation.IAnimatable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBearingFromGrappledTarget(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBearingToGrappledTarget(): number;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.core.math.Vector3
       *  - (Vector3 arg0): zombie.iso.Vector3
       */
      getGrappleOffset(arg0: zombie.core.math.Vector3 | zombie.iso.Vector3): zombie.core.math.Vector3 | zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour
       */
      getGrappleOffsetBehaviour(): zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGrapplePosOffsetForward(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGrappleResult(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGrappleRotOffsetYaw(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.IGrappleable
       */
      getGrappledBy(): zombie.core.skinnedmodel.IGrappleable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGrappledByString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGrappledByType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.IGrappleable
       */
      getGrapplingTarget(): zombie.core.skinnedmodel.IGrappleable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.IGrappleable
       */
      getParentGrappleable(): zombie.core.skinnedmodel.IGrappleable;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0): org.lwjgl.util.vector.Vector3f
       *  - (Vector3 arg0): zombie.iso.Vector3
       */
      getPosition(arg0: org.lwjgl.util.vector.Vector3f | zombie.iso.Vector3): org.lwjgl.util.vector.Vector3f | zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSharedGrappleAnimNode(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSharedGrappleAnimTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSharedGrappleType(): string;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.core.math.Vector3
       *  - (Vector3 arg0): zombie.iso.Vector3
       */
      getTargetGrapplePos(arg0: zombie.core.math.Vector3 | zombie.iso.Vector3): zombie.core.math.Vector3 | zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getTargetGrappleRotation(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBeingGrappled(): boolean;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0): boolean
       */
      isBeingGrappledBy(arg0: zombie.core.skinnedmodel.IGrappleable): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoContinueGrapple(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoGrapple(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFallOnFront(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGrappling(): boolean;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0): boolean
       */
      isGrapplingTarget(arg0: zombie.core.skinnedmodel.IGrappleable): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isKilledByFall(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMoving(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPerformingAnyGrappleAnimation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPerformingGrappleAnimation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPerformingGrappleGrabAnimation(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoContinueGrapple(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoGrapple(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDoGrappleLetGo(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFallOnFront(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setForwardDirection(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): void
       *  - (Vector3 arg0): void
       *  - (float arg0, float arg1, float arg2): void
       */
      setGrappleDeferredOffset(arg0: zombie.core.math.Vector3 | zombie.iso.Vector3 | number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setGrapplePosOffsetForward(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setGrappleResult(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setGrappleRotOffsetYaw(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (GrappleOffsetBehaviour arg0): void
       */
      setGrappleoffsetBehaviour(arg0: zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setKilledByFall(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOnFloor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ICallback arg0): void
       */
      setOnGrappledBeginCallback(arg0: zombie.util.lambda.Invokers$Params0$ICallback): void;
      /**
       * Method Parameters: 
       *  - (ICallback arg0): void
       */
      setOnGrappledEndCallback(arg0: zombie.util.lambda.Invokers$Params0$ICallback): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPerformingGrappleGrabAnimation(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): void
       *  - (float arg0, float arg1, float arg2): void
       */
      setPosition(arg0: zombie.iso.Vector3 | number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSharedGrappleAnimNode(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSharedGrappleAnimTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSharedGrappleType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setTargetAndCurrentDirection(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): void
       *  - (Vector3 arg0): void
       *  - (float arg0, float arg1, float arg2): void
       */
      setTargetGrapplePos(arg0: zombie.core.math.Vector3 | zombie.iso.Vector3 | number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       *  - (float arg0, float arg1): void
       */
      setTargetGrappleRotation(arg0: zombie.iso.Vector2 | number, arg1?: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IAnimationVariableCallbackMap arg0, IGrappleable arg1): void
       */
      static RegisterGrappleVariables(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableCallbackMap, arg1: zombie.core.skinnedmodel.IGrappleable): void;
    }
    /**
     * @customConstructor IGrappleable.new
     * @
     * [INTERFACE] zombie.core.skinnedmodel.IGrappleable
     */
    export class IGrappleable {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0, String arg1): void
       */
      AcceptGrapple(arg0: zombie.core.skinnedmodel.IGrappleable, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0, HandWeapon arg1, float arg2, String arg3): void
       */
      Grappled(arg0: zombie.core.skinnedmodel.IGrappleable, arg1: zombie.inventory.types.HandWeapon, arg2: number, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0, String arg1): void
       */
      GrapplerLetGo(arg0: zombie.core.skinnedmodel.IGrappleable, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      LetGoOfGrappled(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0): void
       */
      RejectGrapple(arg0: zombie.core.skinnedmodel.IGrappleable): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeGrappled(): boolean;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getAnimForwardDirection(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.IAnimatable
       */
      getAnimatable(): zombie.core.skinnedmodel.advancedanimation.IAnimatable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBearingFromGrappledTarget(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBearingToGrappledTarget(): number;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.core.math.Vector3
       *  - (Vector3 arg0): zombie.iso.Vector3
       */
      getGrappleOffset(arg0: zombie.core.math.Vector3 | zombie.iso.Vector3): zombie.core.math.Vector3 | zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour
       */
      getGrappleOffsetBehaviour(): zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGrapplePosOffsetForward(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGrappleResult(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGrappleRotOffsetYaw(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.IGrappleable
       */
      getGrappledBy(): zombie.core.skinnedmodel.IGrappleable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGrappledByString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGrappledByType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.IGrappleable
       */
      getGrapplingTarget(): zombie.core.skinnedmodel.IGrappleable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0): org.lwjgl.util.vector.Vector3f
       *  - (Vector3 arg0): zombie.iso.Vector3
       */
      getPosition(arg0: org.lwjgl.util.vector.Vector3f | zombie.iso.Vector3): org.lwjgl.util.vector.Vector3f | zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSharedGrappleAnimNode(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSharedGrappleAnimTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSharedGrappleType(): string;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.core.math.Vector3
       *  - (Vector3 arg0): zombie.iso.Vector3
       */
      getTargetGrapplePos(arg0: zombie.core.math.Vector3 | zombie.iso.Vector3): zombie.core.math.Vector3 | zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getTargetGrappleRotation(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBeingGrappled(): boolean;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0): boolean
       */
      isBeingGrappledBy(arg0: zombie.core.skinnedmodel.IGrappleable): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoContinueGrapple(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoGrapple(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFallOnFront(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGrappling(): boolean;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0): boolean
       */
      isGrapplingTarget(arg0: zombie.core.skinnedmodel.IGrappleable): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isKilledByFall(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMoving(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPerformingAnyGrappleAnimation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPerformingGrappleAnimation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPerformingGrappleGrabAnimation(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoContinueGrapple(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoGrapple(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDoGrappleLetGo(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFallOnFront(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setForwardDirection(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): void
       *  - (Vector3 arg0): void
       *  - (float arg0, float arg1, float arg2): void
       */
      setGrappleDeferredOffset(arg0: zombie.core.math.Vector3 | zombie.iso.Vector3 | number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setGrapplePosOffsetForward(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setGrappleResult(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setGrappleRotOffsetYaw(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (GrappleOffsetBehaviour arg0): void
       */
      setGrappleoffsetBehaviour(arg0: zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setKilledByFall(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOnFloor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPerformingGrappleGrabAnimation(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): void
       *  - (float arg0, float arg1, float arg2): void
       */
      setPosition(arg0: zombie.iso.Vector3 | number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSharedGrappleAnimNode(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSharedGrappleAnimTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSharedGrappleType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setTargetAndCurrentDirection(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): void
       *  - (Vector3 arg0): void
       *  - (float arg0, float arg1, float arg2): void
       */
      setTargetGrapplePos(arg0: zombie.core.math.Vector3 | zombie.iso.Vector3 | number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       *  - (float arg0, float arg1): void
       */
      setTargetGrappleRotation(arg0: zombie.iso.Vector2 | number, arg1?: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IGrappleable arg0): zombie.core.skinnedmodel.advancedanimation.IAnimatable
       */
      static getAnimatable(arg0: zombie.core.skinnedmodel.IGrappleable): zombie.core.skinnedmodel.advancedanimation.IAnimatable;
    }
    /**
     * @customConstructor ModelManager.new
     * @
     * [CLASS] zombie.core.skinnedmodel.ModelManager
     */
    export class ModelManager {
      /** boolean */
      static NoOpenGL: boolean;
      /** zombie.core.skinnedmodel.ModelManager */
      static readonly instance?: zombie.core.skinnedmodel.ModelManager;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      Add(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      ContainsChar(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       *  - (BaseVehicle arg0): void
       */
      Remove(arg0: zombie.characters.IsoGameCharacter | zombie.vehicles.BaseVehicle): void;
      /**
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2): void
       */
      RenderParticles(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      RenderPuddles(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      RenderSkyBox(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1, int arg2, boolean arg3): void
       */
      RenderWater(arg0: zombie.core.textures.TextureDraw, arg1: number, arg2: number, arg3: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (IsoGameCharacter arg0): void
       */
      Reset(arg0?: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      ResetCharacterEquippedHands(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      ResetEquippedNextFrame(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      ResetNextFrame(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (String arg0, AnimationClip arg1): void
       */
      addAnimationClip(arg0: string, arg1: zombie.core.skinnedmodel.animation.AnimationClip): void;
      /**
       * Method Parameters: 
       *  - (ModelInstance arg0, String arg1, String arg2, String arg3): zombie.core.skinnedmodel.model.ModelInstance
       *  - (ModelSlot arg0, String arg1, String arg2, String arg3, String arg4): zombie.core.skinnedmodel.model.ModelInstance
       */
      addStatic(arg0: zombie.core.skinnedmodel.model.ModelInstance | zombie.core.skinnedmodel.ModelManager$ModelSlot, arg1: string, arg2: string, arg3: string, arg4?: string): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (ModelInstance arg0, String arg1, String arg2, String arg3, String arg4): zombie.core.skinnedmodel.model.ModelInstance
       */
      addStaticForcedTex(arg0: zombie.core.skinnedmodel.model.ModelInstance, arg1: string, arg2: string, arg3: string, arg4: string): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      addVehicle(arg0: zombie.vehicles.BaseVehicle): void;
      /**
       * Method Parameters: 
       *  - (AnimationAsset arg0): void
       */
      animationAssetLoaded(arg0: zombie.core.skinnedmodel.model.AnimationAsset): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      create(): void;
      /**
       * Method Parameters: 
       *  - (ModelInstance arg0): void
       */
      derefModelInstance(arg0: zombie.core.skinnedmodel.model.ModelInstance): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      derefModelInstances(arg0: java.util.ArrayList<zombie.core.skinnedmodel.model.ModelInstance>): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      dressInRandomOutfit(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Collection<zombie.core.skinnedmodel.animation.AnimationClip>
       */
      getAllAnimationClips(): java.util.Collection<zombie.core.skinnedmodel.animation.AnimationClip>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.model.AnimationAsset
       */
      getAnimationAsset(arg0: string): zombie.core.skinnedmodel.model.AnimationAsset;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.animation.AnimationClip
       */
      getAnimationClip(arg0: string): zombie.core.skinnedmodel.animation.AnimationClip;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.core.skinnedmodel.model.Model
       */
      getBodyModel(arg0: zombie.characters.IsoGameCharacter): zombie.core.skinnedmodel.model.Model;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.model.Model
       *  - (String arg0, String arg1, boolean arg2, String arg3): zombie.core.skinnedmodel.model.Model
       */
      getLoadedModel(arg0: string, arg1?: string, arg2?: boolean, arg3?: string): zombie.core.skinnedmodel.model.Model;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.core.skinnedmodel.ModelManager$ModelSlot
       */
      getSlot(arg0: zombie.characters.IsoGameCharacter): zombie.core.skinnedmodel.ModelManager$ModelSlot;
      /**
       * Method Parameters: 
       *  - (int arg0, IsoMovingObject arg1, EffectLight[] arg2): void
       */
      getSquareLighting(arg0: number, arg1: zombie.iso.IsoMovingObject, arg2: zombie.core.skinnedmodel.model.ModelInstance$EffectLight[]): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTextureFlags(): number;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      initAnimationMeshes(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCreated(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLoadingAnimations(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, String arg3): void
       */
      loadAdditionalModel(arg0: string, arg1: string, arg2: boolean, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      loadModAnimations(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, ModelMesh arg2, String arg3): zombie.core.skinnedmodel.model.Model
       */
      loadModel(arg0: string, arg1: string, arg2: zombie.core.skinnedmodel.model.ModelMesh, arg3: string): zombie.core.skinnedmodel.model.Model;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): zombie.core.skinnedmodel.model.Model
       */
      loadStaticModel(arg0: string, arg1: string, arg2: string): zombie.core.skinnedmodel.model.Model;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, IsoGameCharacter arg2, AnimationPlayer arg3, String arg4): zombie.core.skinnedmodel.model.ModelInstance
       */
      newAdditionalModelInstance(arg0: string, arg1: string, arg2: zombie.characters.IsoGameCharacter, arg3: zombie.core.skinnedmodel.animation.AnimationPlayer, arg4: string): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (Model arg0, IsoGameCharacter arg1, AnimationPlayer arg2): zombie.core.skinnedmodel.model.ModelInstance
       */
      newInstance(arg0: zombie.core.skinnedmodel.model.Model, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.core.skinnedmodel.animation.AnimationPlayer): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (ModelSlot arg0, String arg1, String arg2, String arg3, String arg4): zombie.core.skinnedmodel.model.ModelInstance
       */
      newStaticInstance(arg0: zombie.core.skinnedmodel.ModelManager$ModelSlot, arg1: string, arg2: string, arg3: string, arg4: string): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, String arg3, Model arg4): void
       */
      putLoadedModel(arg0: string, arg1: string, arg2: boolean, arg3: string, arg4: zombie.core.skinnedmodel.model.Model): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reloadAllOutfits(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      reloadModelsMatching(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ModelInstance arg0, Object arg1): void
       */
      resetModelInstance(arg0: zombie.core.skinnedmodel.model.ModelInstance, arg1: any): void;
      /**
       * Method Parameters: 
       *  - (ModelInstance arg0, Object arg1): void
       */
      resetModelInstanceRecurse(arg0: zombie.core.skinnedmodel.model.ModelInstance, arg1: any): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0, Object arg1): void
       */
      resetModelInstancesRecurse(arg0: java.util.ArrayList<zombie.core.skinnedmodel.model.ModelInstance>, arg1: any): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, boolean arg3): void
       *  - (String arg0, String arg1, String arg2, String arg3, boolean arg4): void
       */
      setModelMetaData(arg0: string, arg1: string, arg2: string, arg3: boolean | string, arg4?: boolean): void;
      /**
       * Method Parameters: 
       *  - (ItemVisuals arg0, String arg1): boolean
       */
      shouldHideModel(arg0: zombie.core.skinnedmodel.visual.ItemVisuals, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      shouldLimitTextureSize(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, String arg3, boolean arg4): zombie.core.skinnedmodel.model.Model
       */
      tryGetLoadedModel(arg0: string, arg1: string, arg2: boolean, arg3: string, arg4: boolean): zombie.core.skinnedmodel.model.Model;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor ModAnimations.new
     * @
     * [CLASS] zombie.core.skinnedmodel.ModelManager$ModAnimations
     */
    export class ModelManager$ModAnimations {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isActive(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPriority(arg0: number): void;
    }
    /**
     * @customConstructor ModelSlot.new
     * @
     * [CLASS] zombie.core.skinnedmodel.ModelManager$ModelSlot
     */
    export class ModelManager$ModelSlot {
      /**
       * Constructors: 
       *  - (int arg0, ModelInstance arg1, IsoGameCharacter arg2)
       */
      constructor(arg0: number, arg1: zombie.core.skinnedmodel.model.ModelInstance, arg2: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      Update(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRendering(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
    }
    /**
     * @customConstructor Vector3.new
     * @
     * [CLASS] zombie.core.skinnedmodel.Vector3
     */
    export class Vector3 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Vector3 arg0)
       *  - (float arg0, float arg1, float arg2)
       */
      constructor(arg0?: zombie.core.skinnedmodel.Vector3 | number, arg1?: number, arg2?: number);
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.core.skinnedmodel.Vector3
       *  - (float arg0, float arg1, float arg2): zombie.core.skinnedmodel.Vector3
       */
      add(arg0: zombie.core.skinnedmodel.Vector3 | number, arg1?: number, arg2?: number): zombie.core.skinnedmodel.Vector3;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.core.skinnedmodel.Vector3
       */
      cross(arg0: zombie.core.skinnedmodel.Vector3): zombie.core.skinnedmodel.Vector3;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): number
       */
      dot(arg0: zombie.core.skinnedmodel.Vector3): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      get(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      length(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): zombie.core.skinnedmodel.Vector3
       *  - (Vector3 arg0): zombie.core.skinnedmodel.Vector3
       *  - (float arg0, float arg1, float arg2): zombie.core.skinnedmodel.Vector3
       */
      mul(arg0: number | zombie.core.skinnedmodel.Vector3, arg1?: number, arg2?: number): zombie.core.skinnedmodel.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.Vector3
       */
      normalize(): zombie.core.skinnedmodel.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.Vector3
       */
      reset(): zombie.core.skinnedmodel.Vector3;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.core.skinnedmodel.Vector3
       *  - (float arg0, float arg1, float arg2): zombie.core.skinnedmodel.Vector3
       */
      set(arg0: zombie.core.skinnedmodel.Vector3 | number, arg1?: number, arg2?: number): zombie.core.skinnedmodel.Vector3;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.core.skinnedmodel.Vector3
       *  - (float arg0, float arg1, float arg2): zombie.core.skinnedmodel.Vector3
       */
      sub(arg0: zombie.core.skinnedmodel.Vector3 | number, arg1?: number, arg2?: number): zombie.core.skinnedmodel.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): zombie.core.skinnedmodel.Vector3
       */
      x(arg0?: number): number | zombie.core.skinnedmodel.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): zombie.core.skinnedmodel.Vector3
       */
      y(arg0?: number): number | zombie.core.skinnedmodel.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): zombie.core.skinnedmodel.Vector3
       */
      z(arg0?: number): number | zombie.core.skinnedmodel.Vector3;
    }
    /**
     * @customConstructor Vector4.new
     * @
     * [CLASS] zombie.core.skinnedmodel.Vector4
     */
    export class Vector4 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Vector4 arg0)
       *  - (float arg0, float arg1, float arg2, float arg3)
       */
      constructor(arg0?: zombie.core.skinnedmodel.Vector4 | number, arg1?: number, arg2?: number, arg3?: number);
      /**
       * Method Parameters: 
       *  - (Vector4 arg0): zombie.core.skinnedmodel.Vector4
       *  - (float arg0, float arg1, float arg2, float arg3): zombie.core.skinnedmodel.Vector4
       */
      set(arg0: zombie.core.skinnedmodel.Vector4 | number, arg1?: number, arg2?: number, arg3?: number): zombie.core.skinnedmodel.Vector4;
    }
  }
}
