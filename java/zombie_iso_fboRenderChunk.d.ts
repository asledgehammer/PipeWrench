/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.fboRenderChunk {
    /**
     * @customConstructor FBORenderChunk.new
     * @
     * [CLASS] zombie.iso.fboRenderChunk.FBORenderChunk
     */
    export class FBORenderChunk {
      /** long */
      static DIRTY_BLOOD: number;
      /** long */
      static DIRTY_CORPSE: number;
      /** long */
      static DIRTY_CREATE: number;
      /** long */
      static DIRTY_CUTAWAYS: number;
      /** long */
      static DIRTY_ITEM_ADD: number;
      /** long */
      static DIRTY_ITEM_MODIFY: number;
      /** long */
      static DIRTY_ITEM_REMOVE: number;
      /** long */
      static DIRTY_LIGHTING: number;
      /** long */
      static DIRTY_NONE: number;
      /** long */
      static DIRTY_OBJECT_ADD: number;
      /** long */
      static DIRTY_OBJECT_MODIFY: number;
      /** long */
      static DIRTY_OBJECT_REMOVE: number;
      /** long */
      static DIRTY_OBSCURING: number;
      /** long */
      static DIRTY_REDO_CUTAWAYS: number;
      /** long */
      static DIRTY_REDRAW: number;
      /** long */
      static DIRTY_TREES: number;
      /** int */
      static readonly FLOOR_HEIGHT: number;
      /** int */
      static readonly JUMBO_HEIGHT: number;
      /** int */
      static readonly LEVELS_PER_TEXTURE: number;
      /** int */
      static readonly PIXELS_PER_LEVEL: number;
      /** int */
      static readonly TEXTURE_HEIGHT: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      beginMainThread(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      beginRenderThread(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endMainThread(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endRenderThread(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.fboRenderChunk.FBORenderLevels
       */
      getRenderLevels(): zombie.iso.fboRenderChunk.FBORenderLevels;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      getTextureHeight(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      getTextureWidth(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTopLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isTopLevel(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      preInit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderInWorldMainThread(): void;
      /**
       * Method Parameters: 
       *  - (FBORenderLevels arg0): void
       */
      setRenderLevels(arg0: zombie.iso.fboRenderChunk.FBORenderLevels): void;
    }
    /**
     * @customConstructor FBORenderCutaways.new
     * @
     * [CLASS] zombie.iso.fboRenderChunk.FBORenderCutaways
     */
    export class FBORenderCutaways {
      /** byte */
      static readonly CLDSF_NONE: number;
      /** byte */
      static readonly CLDSF_SHOULD_RENDER: number;
      /** zombie.popman.ObjectPool<zombie.iso.fboRenderChunk.FBORenderCutaways$CutawayWall> */
      static readonly s_cutawayWallPool?: zombie.popman.ObjectPool<zombie.iso.fboRenderChunk.FBORenderCutaways$CutawayWall>;
      /** zombie.popman.ObjectPool<zombie.iso.fboRenderChunk.FBORenderCutaways$SlopedSurface> */
      static readonly s_slopedSurfacePool?: zombie.popman.ObjectPool<zombie.iso.fboRenderChunk.FBORenderCutaways$SlopedSurface>;


      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      CalculateBuildingsToCollapse(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CalculatePointsOfInterest(): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      CanBuildingSquareOccludePlayer(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): boolean
       */
      checkExteriorWalls(arg0: java.util.ArrayList<zombie.iso.IsoChunk>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkHiddenBuildingLevels(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, ArrayList arg1): boolean
       */
      checkOccludedRooms(arg0: number, arg1: java.util.ArrayList<zombie.iso.IsoChunk>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      checkPlayerRoom(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): boolean
       */
      checkSlopedSurfaces(arg0: java.util.ArrayList<zombie.iso.IsoChunk>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, ArrayList arg1): void
       */
      doCutawayVisitSquares(arg0: number, arg1: java.util.ArrayList<zombie.iso.IsoChunk>): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoObject
       */
      getFirstMultiLevelObject(arg0: zombie.iso.IsoGridSquare): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0, IsoGridSquare arg1): boolean
       */
      isForceRenderSquare(arg0: number, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      isRoofRoomSquare(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, IsoObject arg1): boolean
       */
      shouldHideElevatedFloor(arg0: number, arg1: zombie.iso.IsoObject): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, IsoGridSquare arg1): boolean
       */
      shouldRenderBuildingSquare(arg0: number, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      squareChanged(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.fboRenderChunk.FBORenderCutaways
       */
      static getInstance(): zombie.iso.fboRenderChunk.FBORenderCutaways;
    }
    /**
     * @customConstructor ChunkLevelData.new
     * @
     * [CLASS] zombie.iso.fboRenderChunk.FBORenderCutaways$ChunkLevelData
     */
    export class FBORenderCutaways$ChunkLevelData {

      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4, int[] arg5): boolean
       */
      calculateOccludingSquares(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, IsoGridSquare arg1): boolean
       */
      shouldRenderSquare(arg0: number, arg1: zombie.iso.IsoGridSquare): boolean;
    }
    /**
     * @customConstructor ChunkLevelsData.new
     * @
     * [CLASS] zombie.iso.fboRenderChunk.FBORenderCutaways$ChunkLevelsData
     */
    export class FBORenderCutaways$ChunkLevelsData {
      /**
       * Constructors: 
       *  - (IsoChunk arg0)
       */
      constructor(arg0: zombie.iso.IsoChunk);
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      debugRender(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.fboRenderChunk.FBORenderCutaways$ChunkLevelData
       */
      getDataForLevel(arg0: number): zombie.iso.fboRenderChunk.FBORenderCutaways$ChunkLevelData;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      invalidateOccludedSquaresMaskForSeenRooms(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      recreateLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      recreateLevel_AllWalls(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      recreateLevel_ExteriorWalls(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      recreateLevel_SlopedSurfaces(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeFromWorld(): void;
    }
    /**
     * @customConstructor CutawayWall.new
     * @
     * [CLASS] zombie.iso.fboRenderChunk.FBORenderCutaways$CutawayWall
     */
    export class FBORenderCutaways$CutawayWall {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor OrphanStructures.new
     * @
     * [CLASS] zombie.iso.fboRenderChunk.FBORenderCutaways$OrphanStructures
     */
    export class FBORenderCutaways$OrphanStructures {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor PointOfInterest.new
     * @
     * [CLASS] zombie.iso.fboRenderChunk.FBORenderCutaways$PointOfInterest
     */
    export class FBORenderCutaways$PointOfInterest {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
    }
    /**
     * @customConstructor SlopedSurface.new
     * @
     * [CLASS] zombie.iso.fboRenderChunk.FBORenderCutaways$SlopedSurface
     */
    export class FBORenderCutaways$SlopedSurface {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor FBORenderLevels.new
     * @
     * [CLASS] zombie.iso.fboRenderChunk.FBORenderLevels
     */
    export class FBORenderLevels {
      /** boolean */
      static bClearCachedSquares: boolean;

      /**
       * Constructors: 
       *  - (int arg0, IsoChunk arg1)
       */
      constructor(arg0: number, arg1: zombie.iso.IsoChunk);
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      calculateInStencilRect(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      calculateOnScreen(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearCache(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      clearCachedSquares(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      clearDelayedLoading(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       *  - (int arg0, long arg1, float arg2): void
       */
      clearDirty(arg0: number, arg1: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      freeChunk(): void;
      /**
       * Method Parameters: 
       *  - (FBORenderChunk arg0): void
       */
      freeFBO(arg0: zombie.iso.fboRenderChunk.FBORenderChunk): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      freeFBOsForLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): java.util.ArrayList<zombie.iso.IsoGridSquare>
       */
      getCachedSquares_AnimatedAttachments(arg0: number): java.util.ArrayList<zombie.iso.IsoGridSquare>;
      /**
       * Method Parameters: 
       *  - (int arg0): java.util.ArrayList<zombie.iso.IsoGridSquare>
       */
      getCachedSquares_Corpses(arg0: number): java.util.ArrayList<zombie.iso.IsoGridSquare>;
      /**
       * Method Parameters: 
       *  - (int arg0): java.util.ArrayList<zombie.iso.IsoGridSquare>
       */
      getCachedSquares_Flies(arg0: number): java.util.ArrayList<zombie.iso.IsoGridSquare>;
      /**
       * Method Parameters: 
       *  - (int arg0): java.util.ArrayList<zombie.iso.IsoGridSquare>
       */
      getCachedSquares_Items(arg0: number): java.util.ArrayList<zombie.iso.IsoGridSquare>;
      /**
       * Method Parameters: 
       *  - (int arg0): java.util.ArrayList<zombie.iso.IsoGridSquare>
       */
      getCachedSquares_Puddles(arg0: number): java.util.ArrayList<zombie.iso.IsoGridSquare>;
      /**
       * Method Parameters: 
       *  - (int arg0): java.util.ArrayList<zombie.iso.IsoGridSquare>
       */
      getCachedSquares_TranslucentFloor(arg0: number): java.util.ArrayList<zombie.iso.IsoGridSquare>;
      /**
       * Method Parameters: 
       *  - (int arg0): java.util.ArrayList<zombie.iso.IsoGridSquare>
       */
      getCachedSquares_TranslucentNonFloor(arg0: number): java.util.ArrayList<zombie.iso.IsoGridSquare>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoChunk
       */
      getChunk(): zombie.iso.IsoChunk;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): zombie.iso.fboRenderChunk.FBORenderChunk
       */
      getFBOForLevel(arg0: number, arg1: number): zombie.iso.fboRenderChunk.FBORenderChunk;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getMaxLevel(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getMinLevel(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): zombie.iso.fboRenderChunk.FBORenderChunk
       */
      getOrCreateFBOForLevel(arg0: number, arg1: number): zombie.iso.fboRenderChunk.FBORenderChunk;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerIndex(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getRenderedSquaresCount(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      handleDelayedLoading(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      invalidateAll(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, long arg1): void
       */
      invalidateLevel(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isDelayedLoading(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): boolean
       *  - (int arg0, long arg1, float arg2): boolean
       */
      isDirty(arg0: number, arg1: number, arg2?: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isOnScreen(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, boolean arg1): void
       */
      setOnScreen(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      setRenderedSquaresCount(arg0: number, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static calculateMinLevel(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2): number
       */
      static calculateTextureHeightForLevels(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2): number
       */
      static calculateTextureWidthForLevels(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      static extraHeightForJumboTrees(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static getTextureScale(arg0: number): number;
    }
    /**
     * @customConstructor FBORenderTracerEffects.new
     * @
     * [CLASS] zombie.iso.fboRenderChunk.FBORenderTracerEffects
     */
    export class FBORenderTracerEffects {

      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, float arg1): void
       */
      addEffect(arg0: zombie.characters.IsoGameCharacter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.config.ConfigOption
       */
      getOptionByName(arg0: string): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      releaseWeaponTransform(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, Matrix4f arg1): void
       */
      storeWeaponTransform(arg0: zombie.characters.IsoGameCharacter, arg1: org.joml.Matrix4f): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.fboRenderChunk.FBORenderTracerEffects
       */
      static getInstance(): zombie.iso.fboRenderChunk.FBORenderTracerEffects;
    }
    /**
     * @customConstructor DoubleConfigOption1.new
     * @
     * [CLASS] zombie.iso.fboRenderChunk.FBORenderTracerEffects$DoubleConfigOption1 extends zombie.config.DoubleConfigOption
     */
    export class FBORenderTracerEffects$DoubleConfigOption1 {
      /**
       * Constructors: 
       *  - (FBORenderTracerEffects arg0, String arg1, double arg2, double arg3, double arg4)
       */
      constructor(arg0: zombie.iso.fboRenderChunk.FBORenderTracerEffects, arg1: string, arg2: number, arg3: number, arg4: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDefaultValue(): number;
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
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      makeCopy(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor ObjectRenderInfo.new
     * @
     * [CLASS] zombie.iso.fboRenderChunk.ObjectRenderInfo
     */
    export class ObjectRenderInfo {
      /**
       * Constructors: 
       *  - (IsoObject arg0)
       */
      constructor(arg0: zombie.iso.IsoObject);
    }
  }
}
