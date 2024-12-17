/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.entity.components.spriteconfig {
    /**
     * @customConstructor SpriteConfig.new
     * @
     * [CLASS] zombie.entity.components.spriteconfig.SpriteConfig extends zombie.entity.Component
     */
    export class SpriteConfig {

      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): boolean
       */
      getAllMultiSquareObjects(arg0: java.util.ArrayList<zombie.iso.IsoObject>): boolean;
      /**
       * Method Parameters: 
       *  - (ComponentType arg0): T
       */
      getComponent<T>(arg0: zombie.entity.ComponentType): T;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.ComponentType
       */
      getComponentType(): zombie.entity.ComponentType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.spriteconfig.SpriteConfigManager$FaceInfo
       */
      getFaceInfo(): zombie.entity.components.spriteconfig.SpriteConfigManager$FaceInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getGameEntity(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMasterOffsetX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMasterOffsetY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMasterOffsetZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getMultiSquareMaster(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.spriteconfig.SpriteConfigManager$ObjectInfo
       */
      getObjectInfo(): zombie.entity.components.spriteconfig.SpriteConfigManager$ObjectInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getOwner(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderLastPriority(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.spriteconfig.SpriteConfigManager$TileInfo
       */
      getTileInfo(): zombie.entity.components.spriteconfig.SpriteConfigManager$TileInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      getUsingPlayer(): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAddedToEngine(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanRotate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMultiSquareFullyLoaded(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMultiSquareMaster(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMultiSquareSlave(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isQualifiesForMetaStorage(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRenderLast(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRunningInMeta(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      isUsingPlayer(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValidMultiSquare(): boolean;
      /**
       * Method Parameters: 
       *  - (GameEntityType arg0): boolean
       */
      isValidOwnerType(arg0: zombie.entity.GameEntityType): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWasLoadedAsMaster(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, EntityPacketData arg1): void
       */
      sendServerPacketTo(arg0: zombie.characters.IsoPlayer, arg1: zombie.entity.network.EntityPacketData): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor SpriteConfigManager.new
     * @
     * [CLASS] zombie.entity.components.spriteconfig.SpriteConfigManager
     */
    export class SpriteConfigManager {
      /** java.lang.String */
      static readonly FACE_E?: string;
      /** int */
      static readonly FACE_ID_CARDINAL_MAX: number;
      /** int */
      static readonly FACE_ID_E: number;
      /** int */
      static readonly FACE_ID_MAX: number;
      /** int */
      static readonly FACE_ID_N: number;
      /** int */
      static readonly FACE_ID_N_OPEN: number;
      /** int */
      static readonly FACE_ID_S: number;
      /** int */
      static readonly FACE_ID_SINGLE: number;
      /** int */
      static readonly FACE_ID_W: number;
      /** int */
      static readonly FACE_ID_W_OPEN: number;
      /** java.lang.String */
      static readonly FACE_N?: string;
      /** java.lang.String */
      static readonly FACE_N_OPEN?: string;
      /** java.lang.String */
      static readonly FACE_S?: string;
      /** java.lang.String */
      static readonly FACE_SINGLE?: string;
      /** java.lang.String */
      static readonly FACE_W?: string;
      /** java.lang.String */
      static readonly FACE_W_OPEN?: string;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static GetFaceIdForString(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.spriteconfig.SpriteConfigManager$ObjectInfo
       */
      static GetObjectInfo(arg0: string): zombie.entity.components.spriteconfig.SpriteConfigManager$ObjectInfo;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.components.spriteconfig.SpriteConfigManager$ObjectInfo>
       */
      static GetObjectInfoList(): java.util.ArrayList<zombie.entity.components.spriteconfig.SpriteConfigManager$ObjectInfo>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static HasLoadErrors(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static InitScriptsPostTileDef(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.spriteconfig.SpriteConfigManager$ObjectInfo
       */
      static getObjectInfoFromSprite(arg0: string): zombie.entity.components.spriteconfig.SpriteConfigManager$ObjectInfo;
    }
    /**
     * @customConstructor FaceInfo.new
     * @
     * [CLASS] zombie.entity.components.spriteconfig.SpriteConfigManager$FaceInfo
     */
    export class SpriteConfigManager$FaceInfo {

      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFaceName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.spriteconfig.SpriteConfigManager$TileInfo
       */
      getMasterTileInfo(): zombie.entity.components.spriteconfig.SpriteConfigManager$TileInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMasterX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMasterY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMasterZ(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.entity.components.spriteconfig.SpriteConfigManager$TileInfo
       */
      getTileInfo(arg0: number, arg1: number, arg2: number): zombie.entity.components.spriteconfig.SpriteConfigManager$TileInfo;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.spriteconfig.SpriteConfigManager$TileInfo
       */
      getTileInfoForSprite(arg0: string): zombie.entity.components.spriteconfig.SpriteConfigManager$TileInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getzLayers(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMasterSet(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMultiSquare(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, IsoObject arg3): boolean
       */
      verifyObject(arg0: number, arg1: number, arg2: number, arg3: zombie.iso.IsoObject): boolean;
    }
    /**
     * @customConstructor ObjectInfo.new
     * @
     * [CLASS] zombie.entity.components.spriteconfig.SpriteConfigManager$ObjectInfo
     */
    export class SpriteConfigManager$ObjectInfo {

      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canRotate(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.components.spriteconfig.SpriteConfigManager$FaceInfo
       *  - (String arg0): zombie.entity.components.spriteconfig.SpriteConfigManager$FaceInfo
       */
      getFace(arg0: number | string): zombie.entity.components.spriteconfig.SpriteConfigManager$FaceInfo;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.spriteconfig.SpriteConfigManager$FaceInfo
       */
      getFaceForSprite(arg0: string): zombie.entity.components.spriteconfig.SpriteConfigManager$FaceInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getIconTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMainSpriteNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipeComponentScript
       */
      getRecipe(): zombie.scripting.entity.components.crafting.CraftRecipeComponentScript;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRequiredSkillCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.spriteconfig.SpriteConfigScript
       */
      getScript(): zombie.scripting.entity.components.spriteconfig.SpriteConfigScript;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<string>
       */
      getTags(): java.util.List<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVersion(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isProp(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSingleFace(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      needToBeLearn(): boolean;
    }
    /**
     * @customConstructor TileInfo.new
     * @
     * [CLASS] zombie.entity.components.spriteconfig.SpriteConfigManager$TileInfo
     */
    export class SpriteConfigManager$TileInfo {

      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMasterOffsetX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMasterOffsetY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMasterOffsetZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSpriteName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBlocking(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMaster(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): boolean
       */
      verifyObject(arg0: zombie.iso.IsoObject): boolean;
    }
  }
}
