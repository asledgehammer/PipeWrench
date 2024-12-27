/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.skinnedmodel.model {
    /**
     * @customConstructor AnimationAsset.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.AnimationAsset extends zombie.asset.Asset
     */
    export class AnimationAsset {
      /** zombie.asset.AssetType */
      static readonly ASSET_TYPE?: zombie.asset.AssetType;

      /**
       * Constructors: 
       *  - (AssetPath arg0, AssetManager arg1, AnimationAssetParams arg2)
       */
      constructor(arg0: zombie.asset.AssetPath, arg1: zombie.asset.AssetManager, arg2: zombie.core.skinnedmodel.model.AnimationAsset$AnimationAssetParams);
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      addDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetManager
       */
      getAssetManager(): zombie.asset.AssetManager;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$ObserverCallback
       */
      getObserverCb(): zombie.asset.Asset$ObserverCallback;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetPath
       */
      getPath(): zombie.asset.AssetPath;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRefCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$State
       */
      getState(): zombie.asset.Asset$State;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetType
       */
      getType(): zombie.asset.AssetType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFailure(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReady(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onBeforeReady(): void;
      /**
       * Method Parameters: 
       *  - (State arg0): void
       */
      onCreated(arg0: zombie.asset.Asset$State): void;
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      removeDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (AssetParams arg0): void
       */
      setAssetParams(arg0: zombie.asset.AssetManager$AssetParams): void;
    }
    /**
     * @customConstructor AnimationAssetParams.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.AnimationAsset$AnimationAssetParams extends zombie.asset.AssetManager$AssetParams
     */
    export class AnimationAsset$AnimationAssetParams {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor CharacterMask.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.CharacterMask
     */
    export class CharacterMask {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      contentsToString(): string;
      /**
       * Method Parameters: 
       *  - (CharacterMask arg0): void
       */
      copyFrom(arg0: zombie.core.skinnedmodel.model.CharacterMask): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEachVisible(arg0: java.util._function_.Consumer<zombie.core.skinnedmodel.model.CharacterMask$Part>): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): boolean
       */
      isBloodBodyPartVisible(arg0: zombie.characterTextures.BloodBodyPartType): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNothingVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Part arg0): boolean
       */
      isPartVisible(arg0: zombie.core.skinnedmodel.model.CharacterMask$Part): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTorsoVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Part arg0, boolean arg1): void
       */
      setPartVisible(arg0: zombie.core.skinnedmodel.model.CharacterMask$Part, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0, boolean arg1): void
       */
      setPartsVisible(arg0: java.util.ArrayList<number>, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /** [ENUM] zombie.core.skinnedmodel.model.CharacterMask$Part */
    export class CharacterMask$Part {
      protected constructor();
      static readonly Belt: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly Chest: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly Crotch: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly Dress: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly Head: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly LeftArm: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly LeftFoot: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly LeftHand: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly LeftLeg: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly Pelvis: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly RightArm: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly RightFoot: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly RightHand: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly RightLeg: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly Torso: zombie.core.skinnedmodel.model.CharacterMask$Part;
      static readonly Waist: zombie.core.skinnedmodel.model.CharacterMask$Part;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.skinnedmodel.model.CharacterMask$Part>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characterTextures.BloodBodyPartType[]
       */
      getBloodBodyPartTypes(): zombie.characterTextures.BloodBodyPartType[];
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.skinnedmodel.model.CharacterMask$Part>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.CharacterMask$Part
       */
      getParent(): zombie.core.skinnedmodel.model.CharacterMask$Part;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasSubdivisions(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSubdivision(): boolean;
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
       *  - (Empty): zombie.core.skinnedmodel.model.CharacterMask$Part[]
       */
      subDivisions(): zombie.core.skinnedmodel.model.CharacterMask$Part[];
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static count(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.model.CharacterMask$Part
       */
      static fromInt(arg0: number): zombie.core.skinnedmodel.model.CharacterMask$Part;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.CharacterMask$Part[]
       */
      static leaves(): zombie.core.skinnedmodel.model.CharacterMask$Part[];
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.model.CharacterMask$Part
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.skinnedmodel.model.CharacterMask$Part | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.CharacterMask$Part[]
       */
      static values(): zombie.core.skinnedmodel.model.CharacterMask$Part[];
    }
    /**
     * @customConstructor Model.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.Model extends zombie.asset.Asset
     */
    export class Model {
      /** zombie.asset.AssetType */
      static readonly ASSET_TYPE?: zombie.asset.AssetType;
      /** int */
      static InstancingThreshold: number;
      /** java.util.HashMap<zombie.core.skinnedmodel.model.Model, java.lang.Integer> */
      static ModelDrawCounts?: java.util.HashMap<zombie.core.skinnedmodel.model.Model, number>;
      /** zombie.core.Color[] */
      static readonly debugDrawColours?: zombie.core.Color[];
      /** java.nio.FloatBuffer */
      static readonly m_staticReusableFloatBuffer?: java.nio.FloatBuffer;

      /**
       * Constructors: 
       *  - (AssetPath arg0, AssetManager arg1, ModelAssetParams arg2)
       */
      constructor(arg0: zombie.asset.AssetPath, arg1: zombie.asset.AssetManager, arg2: zombie.core.skinnedmodel.model.Model$ModelAssetParams);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      CreateShader(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ModelSlotRenderData arg0, ModelInstanceRenderData arg1): void
       */
      DrawChar(arg0: zombie.core.skinnedmodel.model.ModelSlotRenderData, arg1: zombie.core.skinnedmodel.model.ModelInstanceRenderData): void;
      /**
       * Method Parameters: 
       *  - (ModelSlotRenderData arg0, ModelInstanceRenderData arg1): void
       */
      DrawVehicle(arg0: zombie.core.skinnedmodel.model.ModelSlotRenderData, arg1: zombie.core.skinnedmodel.model.ModelInstanceRenderData): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      EnsureEffect(): void;
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      addDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (IsoLightSource arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      debugDrawLightSource(arg0: zombie.iso.IsoLightSource, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetManager
       */
      getAssetManager(): zombie.asset.AssetManager;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$ObserverCallback
       */
      getObserverCb(): zombie.asset.Asset$ObserverCallback;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetPath
       */
      getPath(): zombie.asset.AssetPath;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRefCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$State
       */
      getState(): zombie.asset.Asset$State;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetType
       */
      getType(): zombie.asset.AssetType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFailure(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReady(): boolean;
      /**
       * Method Parameters: 
       *  - (State arg0): void
       */
      onCreated(arg0: zombie.asset.Asset$State): void;
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      removeDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (AssetParams arg0): void
       */
      setAssetParams(arg0: zombie.asset.AssetManager$AssetParams): void;
      /**
       * Method Parameters: 
       *  - (ModelSlotRenderData arg0, int arg1): void
       */
      setLights(arg0: zombie.core.skinnedmodel.model.ModelSlotRenderData, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ModelSlotRenderData arg0, int arg1): void
       */
      setLightsInst(arg0: zombie.core.skinnedmodel.model.ModelSlotRenderData, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, Vector3 arg2): void
       *  - (ModelSlotRenderData arg0, int arg1, Vector3 arg2): void
       *  - (AnimationPlayer arg0, float arg1, float arg2, float arg3, float arg4, int arg5, Vector3 arg6): void
       */
      static BoneToWorldCoords(arg0: zombie.characters.IsoGameCharacter | zombie.core.skinnedmodel.model.ModelSlotRenderData | zombie.core.skinnedmodel.animation.AnimationPlayer, arg1: number, arg2: zombie.iso.Vector3 | number, arg3?: number, arg4?: number, arg5?: number, arg6?: zombie.iso.Vector3): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, Vector3 arg2, float arg3): void
       */
      static BoneYDirectionToWorldCoords(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: zombie.iso.Vector3, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, Vector3 arg2, float arg3): void
       */
      static BoneZDirectionToWorldCoords(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: zombie.iso.Vector3, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ModelSlotRenderData arg0): void
       */
      static CharacterModelCameraBegin(arg0: zombie.core.skinnedmodel.model.ModelSlotRenderData): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static CharacterModelCameraEnd(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static SwapInstancedBasic(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, Vector3 arg1): void
       *  - (ModelSlotRenderData arg0, Vector3 arg1): void
       *  - (float arg0, float arg1, float arg2, float arg3, Vector3 arg4): void
       */
      static VectorToWorldCoords(arg0: zombie.characters.IsoGameCharacter | zombie.core.skinnedmodel.model.ModelSlotRenderData | number, arg1: zombie.iso.Vector3 | number, arg2?: number, arg3?: number, arg4?: zombie.iso.Vector3): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, Vector3 arg1): void
       */
      static WorldToModel(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.Vector3): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      static debugDrawAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6): void
       */
      static debugDrawLightSource(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Matrix4f arg0): void
       */
      static drawBoneMtx(arg0: org.lwjgl.util.vector.Matrix4f): void;
    }
    /**
     * @customConstructor ModelAssetParams.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.Model$ModelAssetParams extends zombie.asset.AssetManager$AssetParams
     */
    export class Model$ModelAssetParams {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ModelInstance.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelInstance
     */
    export class ModelInstance {
      /** float */
      static MODEL_LIGHT_MULT_OUTSIDE: number;
      /** float */
      static MODEL_LIGHT_MULT_ROOM: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      LoadTexture(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      SetForceDir(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      Update(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      UpdateDir(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      applyModelScriptScale(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      clearOwner(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroySmartTextures(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      dismember(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.ModelAttachment
       */
      getAttachment(arg0: number): zombie.scripting.objects.ModelAttachment;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.ModelAttachment
       */
      getAttachmentById(arg0: string): zombie.scripting.objects.ModelAttachment;
      /**
       * Method Parameters: 
       *  - (int arg0, Matrix4f arg1): org.joml.Matrix4f
       *  - (ModelAttachment arg0, Matrix4f arg1): org.joml.Matrix4f
       */
      getAttachmentMatrix(arg0: number | zombie.scripting.objects.ModelAttachment, arg1: org.joml.Matrix4f): org.joml.Matrix4f;
      /**
       * Method Parameters: 
       *  - (String arg0, Matrix4f arg1): org.joml.Matrix4f
       */
      getAttachmentMatrixById(arg0: string, arg1: org.joml.Matrix4f): org.joml.Matrix4f;
      /**
       * Method Parameters: 
       *  - (ModelAttachment arg0, Vector3 arg1, Vector3 arg2): void
       */
      getAttachmentWorldPosition(arg0: zombie.scripting.objects.ModelAttachment, arg1: zombie.iso.Vector3, arg2: zombie.iso.Vector3): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.ItemVisual
       */
      getItemVisual(): zombie.core.skinnedmodel.visual.ItemVisual;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getOwner(): any;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstanceTextureInitializer
       */
      getTextureInitializer(): zombie.core.skinnedmodel.model.ModelInstanceTextureInitializer;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasTextureCreator(): boolean;
      /**
       * Method Parameters: 
       *  - (Model arg0, IsoGameCharacter arg1, AnimationPlayer arg2): zombie.core.skinnedmodel.model.ModelInstance
       */
      init(arg0: zombie.core.skinnedmodel.model.Model, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.core.skinnedmodel.animation.AnimationPlayer): zombie.core.skinnedmodel.model.ModelInstance;
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
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setInstanceSkip(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ItemVisual arg0): void
       */
      setItemVisual(arg0: zombie.core.skinnedmodel.visual.ItemVisual): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setOwner(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (ModelInstanceTextureInitializer arg0): void
       */
      setTextureInitializer(arg0: zombie.core.skinnedmodel.model.ModelInstanceTextureInitializer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateLights(): void;
    }
    /**
     * @customConstructor EffectLight.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelInstance$EffectLight
     */
    export class ModelInstance$EffectLight {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (IsoLightSource arg0): void
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, int arg6): void
       */
      set(arg0: zombie.iso.IsoLightSource | number, arg1?: number, arg2?: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number): void;
    }
    /** [ENUM] zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus */
    export class ModelInstance$FrameLightBlendStatus {
      protected constructor();
      static readonly During: zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus;
      static readonly In: zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus;
      static readonly Out: zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus>;
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
       *  - (String arg0): zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus[]
       */
      static values(): zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus[];
    }
    /**
     * @customConstructor FrameLightInfo.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelInstance$FrameLightInfo
     */
    export class ModelInstance$FrameLightInfo {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor PlayerData.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelInstance$PlayerData
     */
    export class ModelInstance$PlayerData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ModelInstanceRenderData.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelInstanceRenderData extends zombie.core.skinnedmodel.advancedanimation.AnimatedModel$AnimatedModelInstanceRenderData
     */
    export class ModelInstanceRenderData {
      /** boolean */
      static INVERT_ATTACHMENT_SELF_TRANSFORM: boolean;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ModelSlotRenderData arg0): void
       */
      RenderCharacter(arg0: zombie.core.skinnedmodel.model.ModelSlotRenderData): void;
      /**
       * Method Parameters: 
       *  - (ModelSlotRenderData arg0): void
       */
      RenderVehicle(arg0: zombie.core.skinnedmodel.model.ModelSlotRenderData): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0): void
       */
      UpdateCharacter(arg0: zombie.core.skinnedmodel.shader.Shader): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimatedModel$AnimatedModelInstanceRenderData
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstanceRenderData
       */
      init(): zombie.core.skinnedmodel.advancedanimation.AnimatedModel$AnimatedModelInstanceRenderData | zombie.core.skinnedmodel.model.ModelInstanceRenderData;
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
       *  - (Empty): void
       */
      renderDebug(): void;
      /**
       * Method Parameters: 
       *  - (AnimatedModelInstanceRenderData arg0): zombie.core.skinnedmodel.advancedanimation.AnimatedModel$AnimatedModelInstanceRenderData
       */
      transformToParent(arg0: zombie.core.skinnedmodel.advancedanimation.AnimatedModel$AnimatedModelInstanceRenderData): zombie.core.skinnedmodel.advancedanimation.AnimatedModel$AnimatedModelInstanceRenderData;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstanceRenderData
       */
      static alloc(): zombie.core.skinnedmodel.model.ModelInstanceRenderData;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ModelInstance arg0, String arg1, Matrix4f arg2): void
       */
      static applyBoneTransform(arg0: zombie.core.skinnedmodel.model.ModelInstance, arg1: string, arg2: org.joml.Matrix4f): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ModelAttachment arg0, Matrix4f arg1): org.joml.Matrix4f
       */
      static makeAttachmentTransform(arg0: zombie.scripting.objects.ModelAttachment, arg1: org.joml.Matrix4f): org.joml.Matrix4f;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AnimationPlayer arg0, String arg1, Matrix4f arg2): void
       */
      static makeBoneTransform(arg0: zombie.core.skinnedmodel.animation.AnimationPlayer, arg1: string, arg2: org.joml.Matrix4f): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Matrix4f arg0, ModelMesh arg1): org.joml.Matrix4f
       */
      static postMultiplyMeshTransform(arg0: org.joml.Matrix4f, arg1: zombie.core.skinnedmodel.model.ModelMesh): org.joml.Matrix4f;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Matrix4f arg0, ModelMesh arg1): org.joml.Matrix4f
       */
      static preMultiplyMeshTransform(arg0: org.joml.Matrix4f, arg1: zombie.core.skinnedmodel.model.ModelMesh): org.joml.Matrix4f;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      static release(arg0: java.util.ArrayList<zombie.core.skinnedmodel.model.ModelInstanceRenderData>): void;
    }
    /**
     * @customConstructor ModelInstanceRenderDataList.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelInstanceRenderDataList extends java.util.ArrayList<zombie.core.skinnedmodel.model.ModelInstanceRenderData>
     */
    export class ModelInstanceRenderDataList {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (int arg0, Object arg1): void
       */
      add(arg0: any | number, arg1?: any): boolean | void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       *  - (int arg0, Collection arg1): boolean
       */
      addAll(arg0: java.util.Collection<zombie.core.skinnedmodel.model.ModelInstanceRenderData> | number, arg1?: java.util.Collection<zombie.core.skinnedmodel.model.ModelInstanceRenderData>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      contains(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      containsAll(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      ensureCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<zombie.core.skinnedmodel.model.ModelInstanceRenderData>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      get(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      indexOf(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<E>
       */
      iterator(): java.util.Iterator<zombie.core.skinnedmodel.model.ModelInstanceRenderData>;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      lastIndexOf(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ListIterator<E>
       *  - (int arg0): java.util.ListIterator<E>
       */
      listIterator(arg0?: number): java.util.ListIterator<zombie.core.skinnedmodel.model.ModelInstanceRenderData>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      parallelStream(): java.util.stream.Stream<zombie.core.skinnedmodel.model.ModelInstanceRenderData>;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       *  - (Object arg0): boolean
       */
      remove(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      removeAll(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): boolean
       */
      removeIf(arg0: java.util._function_.Predicate<zombie.core.skinnedmodel.model.ModelInstanceRenderData>): boolean;
      /**
       * Method Parameters: 
       *  - (UnaryOperator arg0): void
       */
      replaceAll(arg0: java.util._function_.UnaryOperator<zombie.core.skinnedmodel.model.ModelInstanceRenderData>): void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      retainAll(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, Object arg1): E
       */
      set(arg0: number, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): void
       */
      sort(arg0: java.util.Comparator<zombie.core.skinnedmodel.model.ModelInstanceRenderData>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<E>
       */
      spliterator(): java.util.Spliterator<zombie.core.skinnedmodel.model.ModelInstanceRenderData>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      stream(): java.util.stream.Stream<zombie.core.skinnedmodel.model.ModelInstanceRenderData>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.List<E>
       */
      subList(arg0: number, arg1: number): java.util.List<zombie.core.skinnedmodel.model.ModelInstanceRenderData>;
      /**
       * Method Parameters: 
       *  - (Empty): any[]
       *  - (Object[] arg0): T[]
       *  - (IntFunction arg0): T[]
       */
      toArray<T>(arg0?: any | java.util._function_.IntFunction<T[]>): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize(): void;
    }
    /**
     * @customConstructor ModelInstanceTextureCreator.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelInstanceTextureCreator extends zombie.core.textures.TextureDraw$GenericDrawer
     */
    export class ModelInstanceTextureCreator {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       *  - (AnimalVisual arg0, ModelInstance arg1): void
       *  - (BaseVisual arg0, ItemVisuals arg1, ModelInstance arg2): void
       *  - (HumanVisual arg0, ItemVisuals arg1, ModelInstance arg2): void
       */
      init(arg0: zombie.characters.IsoGameCharacter | zombie.core.skinnedmodel.visual.AnimalVisual | zombie.core.skinnedmodel.visual.BaseVisual | zombie.core.skinnedmodel.visual.HumanVisual, arg1?: zombie.core.skinnedmodel.model.ModelInstance | zombie.core.skinnedmodel.visual.ItemVisuals, arg2?: zombie.core.skinnedmodel.model.ModelInstance): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRendered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postRender(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstanceTextureCreator
       */
      static alloc(): zombie.core.skinnedmodel.model.ModelInstanceTextureCreator;
    }
    /**
     * @customConstructor ModelInstanceTextureInitializer.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelInstanceTextureInitializer
     */
    export class ModelInstanceTextureInitializer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ModelInstance arg0, float arg1): void
       *  - (ModelInstance arg0, InventoryItem arg1): void
       */
      init(arg0: zombie.core.skinnedmodel.model.ModelInstance, arg1: number | zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDirty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRendered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postRender(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderMain(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDirty(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstanceTextureInitializer
       */
      static alloc(): zombie.core.skinnedmodel.model.ModelInstanceTextureInitializer;
    }
    /**
     * @customConstructor ModelMesh.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelMesh extends zombie.asset.Asset
     */
    export class ModelMesh {
      /** zombie.asset.AssetType */
      static readonly ASSET_TYPE?: zombie.asset.AssetType;

      /**
       * Constructors: 
       *  - (AssetPath arg0, AssetManager arg1, MeshAssetParams arg2)
       */
      constructor(arg0: zombie.asset.AssetPath, arg1: zombie.asset.AssetManager, arg2: zombie.core.skinnedmodel.model.ModelMesh$MeshAssetParams);
      /**
       * Method Parameters: 
       *  - (Shader arg0): void
       */
      Draw(arg0: zombie.core.skinnedmodel.shader.Shader): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0, int arg1): void
       */
      DrawInstanced(arg0: zombie.core.skinnedmodel.shader.Shader, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (VertexBufferObject arg0): void
       */
      SetVertexBuffer(arg0: zombie.core.skinnedmodel.model.VertexBufferObject): void;
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      addDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetManager
       */
      getAssetManager(): zombie.asset.AssetManager;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$ObserverCallback
       */
      getObserverCb(): zombie.asset.Asset$ObserverCallback;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetPath
       */
      getPath(): zombie.asset.AssetPath;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRefCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.Asset$State
       */
      getState(): zombie.asset.Asset$State;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.asset.AssetType
       */
      getType(): zombie.asset.AssetType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFailure(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReady(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onBeforeReady(): void;
      /**
       * Method Parameters: 
       *  - (State arg0): void
       */
      onCreated(arg0: zombie.asset.Asset$State): void;
      /**
       * Method Parameters: 
       *  - (Asset arg0): void
       */
      removeDependency(arg0: zombie.asset.Asset): void;
      /**
       * Method Parameters: 
       *  - (AssetParams arg0): void
       */
      setAssetParams(arg0: zombie.asset.AssetManager$AssetParams): void;
    }
    /**
     * @customConstructor MeshAssetParams.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelMesh$MeshAssetParams extends zombie.asset.AssetManager$AssetParams
     */
    export class ModelMesh$MeshAssetParams {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ModelSlotRenderData.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.ModelSlotRenderData extends zombie.core.textures.TextureDraw$GenericDrawer
     */
    export class ModelSlotRenderData {
      /** zombie.core.skinnedmodel.shader.Shader */
      static solidColor?: zombie.core.skinnedmodel.shader.Shader;
      /** zombie.core.skinnedmodel.shader.Shader */
      static solidColorStatic?: zombie.core.skinnedmodel.shader.Shader;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsRenderingToCard(): boolean;
      /**
       * Method Parameters: 
       *  - (ShaderPropertyBlock arg0): void
       */
      UpdateCharacter(arg0: zombie.core.rendering.ShaderPropertyBlock): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canRender(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      checkReady(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstanceRenderDataList
       */
      getModelData(): zombie.core.skinnedmodel.model.ModelInstanceRenderDataList;
      /**
       * Method Parameters: 
       *  - (ModelSlot arg0): zombie.core.skinnedmodel.model.ModelSlotRenderData
       */
      init(arg0: zombie.core.skinnedmodel.ModelManager$ModelSlot): zombie.core.skinnedmodel.model.ModelSlotRenderData;
      /**
       * Method Parameters: 
       *  - (ModelSlot arg0): void
       */
      initModel(arg0: zombie.core.skinnedmodel.ModelManager$ModelSlot): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postRender(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Imposter arg0): void
       */
      renderCard(arg0: zombie.characters.Imposter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderDebug(): void;
      /**
       * Method Parameters: 
       *  - (Imposter arg0): void
       */
      renderToImposterCard(arg0: zombie.characters.Imposter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelSlotRenderData
       */
      static alloc(): zombie.core.skinnedmodel.model.ModelSlotRenderData;
    }
    /** [ENUM] zombie.core.skinnedmodel.model.SkeletonBone */
    export class SkeletonBone {
      protected constructor();
      static readonly BONE_COUNT: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_BackPack: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_DressBack: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_DressBack02: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_DressFront: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_DressFront02: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_Head: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_L_Calf: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_L_Clavicle: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_L_Finger0: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_L_Finger1: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_L_Foot: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_L_Forearm: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_L_Hand: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_L_Thigh: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_L_Toe0: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_L_UpperArm: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_Neck: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_Pelvis: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_Prop1: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_Prop2: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_R_Calf: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_R_Clavicle: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_R_Finger0: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_R_Finger1: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_R_Foot: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_R_Forearm: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_R_Hand: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_R_Thigh: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_R_Toe0: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_R_UpperArm: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_Spine: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Bip01_Spine1: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Dummy01: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly None: zombie.core.skinnedmodel.model.SkeletonBone;
      static readonly Translation_Data: zombie.core.skinnedmodel.model.SkeletonBone;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.skinnedmodel.model.SkeletonBone>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.skinnedmodel.model.SkeletonBone>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      index(): number;
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
       *  - (Empty): zombie.core.skinnedmodel.model.SkeletonBone[]
       */
      static all(): zombie.core.skinnedmodel.model.SkeletonBone[];
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static count(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): string
       */
      static getBoneName(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static getBoneOrdinal(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.model.SkeletonBone
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.skinnedmodel.model.SkeletonBone | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.SkeletonBone[]
       */
      static values(): zombie.core.skinnedmodel.model.SkeletonBone[];
    }
    /**
     * @customConstructor SkinningBone.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.SkinningBone
     */
    export class SkinningBone {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEachDescendant(arg0: java.util._function_.Consumer<zombie.core.skinnedmodel.model.SkinningBone>): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getParentBoneIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.SkeletonBone
       */
      getParentSkeletonBone(): zombie.core.skinnedmodel.model.SkeletonBone;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRoot(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.SkinningBone
       */
      toRoot(): zombie.core.skinnedmodel.model.SkinningBone;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor SkinningBoneHierarchy.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.SkinningBoneHierarchy
     */
    export class SkinningBoneHierarchy {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (SkinningData arg0): void
       */
      buildBoneHiearchy(arg0: zombie.core.skinnedmodel.model.SkinningData): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.model.SkinningBone
       *  - (Predicate arg0): zombie.core.skinnedmodel.model.SkinningBone
       *  - (SkeletonBone arg0): zombie.core.skinnedmodel.model.SkinningBone
       */
      getBone(arg0: string | java.util._function_.Predicate<zombie.core.skinnedmodel.model.SkinningBone> | zombie.core.skinnedmodel.model.SkeletonBone): zombie.core.skinnedmodel.model.SkinningBone;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.model.SkinningBone
       */
      getBoneAt(arg0: number): zombie.core.skinnedmodel.model.SkinningBone;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.model.SkinningBone
       */
      getRootBoneAt(arg0: number): zombie.core.skinnedmodel.model.SkinningBone;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.model.SkinningBoneHierarchy
       *  - (String arg0): zombie.core.skinnedmodel.model.SkinningBoneHierarchy
       */
      getSubHierarchy(arg0: number | string): zombie.core.skinnedmodel.model.SkinningBoneHierarchy;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      numBones(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      numRootBones(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (SkinningBone arg0): zombie.core.skinnedmodel.model.SkinningBoneHierarchy
       */
      static getSubHierarchy(arg0: zombie.core.skinnedmodel.model.SkinningBone): zombie.core.skinnedmodel.model.SkinningBoneHierarchy;
    }
    /**
     * @customConstructor SkinningData.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.SkinningData
     */
    export class SkinningData {
      /**
       * Constructors: 
       *  - (HashMap arg0, List arg1, List arg2, List arg3, List arg4, HashMap arg5)
       */
      constructor(arg0: java.util.HashMap<string, zombie.core.skinnedmodel.animation.AnimationClip>, arg1: java.util.List<org.lwjgl.util.vector.Matrix4f>, arg2: java.util.List<org.lwjgl.util.vector.Matrix4f>, arg3: java.util.List<org.lwjgl.util.vector.Matrix4f>, arg4: java.util.List<number>, arg5: java.util.HashMap<string, number>);
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.model.SkinningBone
       */
      getBone(arg0: string): zombie.core.skinnedmodel.model.SkinningBone;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.model.SkinningBone
       */
      getBoneAt(arg0: number): zombie.core.skinnedmodel.model.SkinningBone;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.SkinningBoneHierarchy
       */
      getBoneHieararchy(): zombie.core.skinnedmodel.model.SkinningBoneHierarchy;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getParentBoneIdx(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.model.SkinningBone
       */
      getRootBoneAt(arg0: number): zombie.core.skinnedmodel.model.SkinningBone;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.SkinningBoneHierarchy
       */
      getSkeletonBoneHiearchy(): zombie.core.skinnedmodel.model.SkinningBoneHierarchy;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      numBones(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      numRootBones(): number;
    }
    /**
     * @customConstructor Buffers.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.SkinningData$Buffers
     */
    export class SkinningData$Buffers {
      /**
       * Constructors: 
       *  - (List arg0, float[] arg1, List arg2)
       */
      constructor(arg0: java.util.List<org.lwjgl.util.vector.Matrix4f>, arg1: number[], arg2: java.util.List<number>);
    }
    /**
     * @customConstructor UInt4.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.UInt4
     */
    export class UInt4 {
      /**
       * Constructors: 
       *  - (int arg0, int arg1, int arg2, int arg3)
       */
      constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    /**
     * @customConstructor VertexBufferObject.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.VertexBufferObject
     */
    export class VertexBufferObject {
      /** zombie.core.VBO.IGLBufferObject */
      static funcs?: zombie.core.VBO.IGLBufferObject;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (VertexArray arg0, int[] arg1)
       *  - (VertexPositionNormalTangentTexture[] arg0, int[] arg1)
       *  - (VertexArray arg0, int[] arg1, boolean arg2)
       *  - (VertexPositionNormalTangentTextureSkin[] arg0, int[] arg1, boolean arg2)
       */
      constructor(arg0?: zombie.core.skinnedmodel.model.VertexBufferObject$VertexArray | zombie.core.skinnedmodel.model.VertexPositionNormalTangentTexture[] | zombie.core.skinnedmodel.model.VertexPositionNormalTangentTextureSkin[], arg1?: number[], arg2?: boolean);
      /**
       * Method Parameters: 
       *  - (Shader arg0): boolean
       */
      BeginDraw(arg0: zombie.core.skinnedmodel.shader.Shader): boolean;
      /**
       * Method Parameters: 
       *  - (Shader arg0): number
       */
      BeginInstancedDraw(arg0: zombie.core.skinnedmodel.shader.Shader): number;
      /**
       * Method Parameters: 
       *  - (Shader arg0): void
       */
      Draw(arg0: zombie.core.skinnedmodel.shader.Shader): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0, int arg1): void
       */
      DrawInstanced(arg0: zombie.core.skinnedmodel.shader.Shader, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0): void
       */
      DrawStrip(arg0: zombie.core.skinnedmodel.shader.Shader): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0, boolean arg1): void
       */
      FinishDraw(arg0: zombie.core.skinnedmodel.shader.Shader, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0, boolean arg1): void
       */
      FinishInstancedDraw(arg0: zombie.core.skinnedmodel.shader.Shader, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, Vbo arg1, int[] arg2): zombie.core.skinnedmodel.model.VertexBufferObject$Vbo
       */
      LoadSoftwareVBO(arg0: java.nio.ByteBuffer, arg1: zombie.core.skinnedmodel.model.VertexBufferObject$Vbo, arg2: number[]): zombie.core.skinnedmodel.model.VertexBufferObject$Vbo;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      PushDrawCall(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (VertexFormat arg0, Shader arg1, boolean arg2): void
       */
      static FinishDraw(arg0: zombie.core.skinnedmodel.model.VertexBufferObject$VertexFormat, arg1: zombie.core.skinnedmodel.shader.Shader, arg2: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static getDepthValueAt(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Matrix4f arg0): void
       */
      static getModelViewProjection(arg0: org.joml.Matrix4f): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ShaderProgram arg0): void
       *  - (Shader arg0): void
       */
      static setModelViewProjection(arg0: zombie.core.opengl.ShaderProgram | zombie.core.skinnedmodel.shader.Shader): void;
    }
    /** [ENUM] zombie.core.skinnedmodel.model.VertexBufferObject$BeginMode */
    export class VertexBufferObject$BeginMode {
      protected constructor();
      static readonly Triangles: zombie.core.skinnedmodel.model.VertexBufferObject$BeginMode;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.skinnedmodel.model.VertexBufferObject$BeginMode>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.skinnedmodel.model.VertexBufferObject$BeginMode>;
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
       *  - (String arg0): zombie.core.skinnedmodel.model.VertexBufferObject$BeginMode
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.skinnedmodel.model.VertexBufferObject$BeginMode | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.VertexBufferObject$BeginMode[]
       */
      static values(): zombie.core.skinnedmodel.model.VertexBufferObject$BeginMode[];
    }
    /**
     * @customConstructor Vbo.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.VertexBufferObject$Vbo
     */
    export class VertexBufferObject$Vbo {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor VertexArray.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.VertexBufferObject$VertexArray
     */
    export class VertexBufferObject$VertexArray {
      /**
       * Constructors: 
       *  - (VertexFormat arg0, int arg1)
       */
      constructor(arg0: zombie.core.skinnedmodel.model.VertexBufferObject$VertexFormat, arg1: number);
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): number
       */
      getElementFloat(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3): void
       *  - (int arg0, int arg1, float arg2, float arg3, float arg4): void
       *  - (int arg0, int arg1, float arg2, float arg3, float arg4, float arg5): void
       */
      setElement(arg0: number, arg1: number, arg2: number, arg3: number, arg4?: number, arg5?: number): void;
    }
    /**
     * @customConstructor VertexElement.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.VertexBufferObject$VertexElement
     */
    export class VertexBufferObject$VertexElement {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor VertexFormat.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.VertexBufferObject$VertexFormat
     */
    export class VertexBufferObject$VertexFormat {
      /**
       * Constructors: 
       *  - (int arg0)
       */
      constructor(arg0: number);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      calculate(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.skinnedmodel.model.VertexBufferObject$VertexElement
       */
      getElement(arg0: number): zombie.core.skinnedmodel.model.VertexBufferObject$VertexElement;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumElements(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStride(): number;
      /**
       * Method Parameters: 
       *  - (VertexType arg0): number
       */
      indexOf(arg0: zombie.core.skinnedmodel.model.VertexBufferObject$VertexType): number;
      /**
       * Method Parameters: 
       *  - (int arg0, VertexType arg1, int arg2): void
       */
      setElement(arg0: number, arg1: zombie.core.skinnedmodel.model.VertexBufferObject$VertexType, arg2: number): void;
    }
    /** [ENUM] zombie.core.skinnedmodel.model.VertexBufferObject$VertexType */
    export class VertexBufferObject$VertexType {
      protected constructor();
      static readonly BlendIndexArray: zombie.core.skinnedmodel.model.VertexBufferObject$VertexType;
      static readonly BlendWeightArray: zombie.core.skinnedmodel.model.VertexBufferObject$VertexType;
      static readonly ColorArray: zombie.core.skinnedmodel.model.VertexBufferObject$VertexType;
      static readonly Depth: zombie.core.skinnedmodel.model.VertexBufferObject$VertexType;
      static readonly IndexArray: zombie.core.skinnedmodel.model.VertexBufferObject$VertexType;
      static readonly NormalArray: zombie.core.skinnedmodel.model.VertexBufferObject$VertexType;
      static readonly TangentArray: zombie.core.skinnedmodel.model.VertexBufferObject$VertexType;
      static readonly TextureCoordArray: zombie.core.skinnedmodel.model.VertexBufferObject$VertexType;
      static readonly VertexArray: zombie.core.skinnedmodel.model.VertexBufferObject$VertexType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.skinnedmodel.model.VertexBufferObject$VertexType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.skinnedmodel.model.VertexBufferObject$VertexType>;
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
       *  - (String arg0): zombie.core.skinnedmodel.model.VertexBufferObject$VertexType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.skinnedmodel.model.VertexBufferObject$VertexType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.VertexBufferObject$VertexType[]
       */
      static values(): zombie.core.skinnedmodel.model.VertexBufferObject$VertexType[];
    }
    /**
     * @customConstructor VertexPositionNormalTangentTexture.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.VertexPositionNormalTangentTexture
     */
    export class VertexPositionNormalTangentTexture {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Vector3 arg0, Vector3 arg1, Vector3 arg2, Vector2 arg3)
       */
      constructor(arg0?: zombie.core.skinnedmodel.Vector3, arg1?: zombie.core.skinnedmodel.Vector3, arg2?: zombie.core.skinnedmodel.Vector3, arg3?: zombie.iso.Vector2);
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      put(arg0: java.nio.ByteBuffer): void;
    }
    /**
     * @customConstructor VertexPositionNormalTangentTextureSkin.new
     * @
     * [CLASS] zombie.core.skinnedmodel.model.VertexPositionNormalTangentTextureSkin
     */
    export class VertexPositionNormalTangentTextureSkin {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Vector3 arg0, Vector3 arg1, Vector3 arg2, Vector2 arg3, Vector4 arg4, UInt4 arg5)
       */
      constructor(arg0?: zombie.core.skinnedmodel.Vector3, arg1?: zombie.core.skinnedmodel.Vector3, arg2?: zombie.core.skinnedmodel.Vector3, arg3?: zombie.iso.Vector2, arg4?: zombie.core.skinnedmodel.Vector4, arg5?: zombie.core.skinnedmodel.model.UInt4);
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      put(arg0: java.nio.ByteBuffer): void;
    }
  }
}
