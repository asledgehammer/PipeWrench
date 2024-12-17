/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.scripting.entity.components.spriteconfig {
    /**
     * @customConstructor SpriteConfigScript.new
     * @
     * [CLASS] zombie.scripting.entity.components.spriteconfig.SpriteConfigScript extends zombie.scripting.entity.ComponentScript
     */
    export class SpriteConfigScript {

      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      InitLoadPP(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      Load(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (Block arg0): void
       */
      LoadCommonBlock(arg0: string | zombie.scripting.ScriptParser$Block): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      OnLoadedAfterLua(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      OnPostWorldDictionaryInit(): void;
      /**
       * Method Parameters: 
       *  - (ScriptLoadMode arg0): void
       */
      OnScriptsLoaded(arg0: zombie.scripting.ScriptLoadMode): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      PreReload(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      addLoadedScriptBody(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      calculateScriptVersion(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      debugString(): string;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.ArrayList<string>
       */
      getAllScriptLines(arg0: java.util.ArrayList<string>): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getAllTileNames(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (int arg0, ArrayList arg1): java.util.ArrayList<string>
       */
      getBodyScriptLines(arg0: number, arg1: java.util.ArrayList<string>): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBonusHealth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBreakSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCornerSprite(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getDontNeedFrame(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$FaceScript
       */
      getFace(arg0: number): zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$FaceScript;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHealth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsThumpable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLoadedScriptBodies(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLoadedScriptBodyCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getNeedToBeAgainstWall(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getNeedWindowFrame(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getObsolete(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOnCreate(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOnIsValid(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.BaseScriptObject
       */
      getParent(): zombie.scripting.objects.BaseScriptObject;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPreviousStages(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getScriptLines(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptObjectFullType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptObjectName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ScriptType
       */
      getScriptObjectType(): zombie.scripting.ScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScriptVersion(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSkillBaseHealth(): number;
      /**
       * Method Parameters: 
       *  - (IVersionHash arg0): void
       */
      getVersion(arg0: zombie.world.scripts.IVersionHash): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDebugOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMultiTile(): boolean;
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
      isValid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isoMasterOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetLoadedScriptBodies(): void;
      /**
       * Method Parameters: 
       *  - (ScriptModule arg0): void
       */
      setModule(arg0: zombie.scripting.objects.ScriptModule): void;
      /**
       * Method Parameters: 
       *  - (BaseScriptObject arg0): void
       */
      setParent(arg0: zombie.scripting.objects.BaseScriptObject): void;
    }
    /**
     * @customConstructor FaceScript.new
     * @
     * [CLASS] zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$FaceScript
     */
    export class SpriteConfigScript$FaceScript {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFaceName(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$ZLayer
       */
      getLayer(arg0: number): zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$ZLayer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZLayers(): number;
    }
    /**
     * @customConstructor TileScript.new
     * @
     * [CLASS] zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$TileScript
     */
    export class SpriteConfigScript$TileScript {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTileName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBlocksSquare(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmptySpace(): boolean;
    }
    /**
     * @customConstructor XRow.new
     * @
     * [CLASS] zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$XRow
     */
    export class SpriteConfigScript$XRow {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$TileScript
       */
      getTile(arg0: number): zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$TileScript;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
    }
    /**
     * @customConstructor ZLayer.new
     * @
     * [CLASS] zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$ZLayer
     */
    export class SpriteConfigScript$ZLayer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$XRow
       */
      getRow(arg0: number): zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$XRow;
    }
  }
}
