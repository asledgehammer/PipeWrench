/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.scripting {
    /** [ENUM] zombie.scripting.ScriptLoadMode */
    export class ScriptLoadMode {
      protected constructor();
      static readonly Init: zombie.scripting.ScriptLoadMode;
      static readonly Reload: zombie.scripting.ScriptLoadMode;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.scripting.ScriptLoadMode>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.scripting.ScriptLoadMode>;
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
       *  - (String arg0): zombie.scripting.ScriptLoadMode
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.scripting.ScriptLoadMode | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ScriptLoadMode[]
       */
      static values(): zombie.scripting.ScriptLoadMode[];
    }
    /**
     * @customConstructor ScriptManager.new
     * @
     * [CLASS] zombie.scripting.ScriptManager
     */
    export class ScriptManager {
      /** java.lang.String */
      static readonly Base?: string;
      /** java.lang.String */
      static readonly Base_Module?: string;
      /** java.lang.String */
      static readonly VanillaID?: string;
      /** zombie.scripting.ScriptManager */
      static readonly instance?: zombie.scripting.ScriptManager;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CheckExitPoints(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Item
       *  - (String arg0, boolean arg1): zombie.scripting.objects.Item
       */
      FindItem(arg0: string, arg1?: boolean): zombie.scripting.objects.Item;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Load(): void;
      /**
       * Method Parameters: 
       *  - (ScriptLoadMode arg0, String arg1, boolean arg2): void
       */
      LoadFile(arg0: zombie.scripting.ScriptLoadMode, arg1: string, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      LoadedAfterLua(): void;
      /**
       * Method Parameters: 
       *  - (ScriptLoadMode arg0, String arg1): void
       */
      ParseScript(arg0: zombie.scripting.ScriptLoadMode, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      PostTileDefinitions(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      PostWorldDictionaryInit(): void;
      /**
       * Method Parameters: 
       *  - (EnumSet arg0): void
       *  - (ScriptType arg0): void
       */
      ReloadScripts(arg0: java.util.EnumSet<zombie.scripting.ScriptType> | zombie.scripting.ScriptType): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (ModelScript arg0): void
       */
      addModelScript(arg0: zombie.scripting.objects.ModelScript): void;
      /**
       * Method Parameters: 
       *  - (SpriteModel arg0): void
       */
      addSpriteModel(arg0: zombie.iso.SpriteModel): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      checkAutoLearn(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, String arg1): void
       */
      checkMetaRecipe(arg0: zombie.characters.IsoGameCharacter, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      checkMetaRecipes(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.AnimationsMesh>
       */
      getAllAnimationsMeshes(): java.util.ArrayList<zombie.scripting.objects.AnimationsMesh>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      getAllCraftRecipes(): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.EnergyDefinitionScript>
       */
      getAllEnergyDefinitionScripts(): java.util.ArrayList<zombie.scripting.objects.EnergyDefinitionScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.scripting.objects.EvolvedRecipe>
       */
      getAllEvolvedRecipes(): java.util.Stack<zombie.scripting.objects.EvolvedRecipe>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.EvolvedRecipe>
       */
      getAllEvolvedRecipesList(): java.util.ArrayList<zombie.scripting.objects.EvolvedRecipe>;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.ArrayList<zombie.scripting.objects.Fixing>
       */
      getAllFixing(arg0: java.util.ArrayList<zombie.scripting.objects.Fixing>): java.util.ArrayList<zombie.scripting.objects.Fixing>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.FluidDefinitionScript>
       */
      getAllFluidDefinitionScripts(): java.util.ArrayList<zombie.scripting.objects.FluidDefinitionScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.FluidFilterScript>
       */
      getAllFluidFilters(): java.util.ArrayList<zombie.scripting.objects.FluidFilterScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.entity.GameEntityScript>
       */
      getAllGameEntities(): java.util.ArrayList<zombie.scripting.entity.GameEntityScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.entity.GameEntityTemplate>
       */
      getAllGameEntityTemplates(): java.util.ArrayList<zombie.scripting.entity.GameEntityTemplate>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.GameSoundScript>
       */
      getAllGameSounds(): java.util.ArrayList<zombie.scripting.objects.GameSoundScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.itemConfig.ItemConfig>
       */
      getAllItemConfigs(): java.util.ArrayList<zombie.scripting.itemConfig.ItemConfig>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.ItemFilterScript>
       */
      getAllItemFilters(): java.util.ArrayList<zombie.scripting.objects.ItemFilterScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.Item>
       */
      getAllItems(): java.util.ArrayList<zombie.scripting.objects.Item>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.scripting.objects.Item>
       */
      getAllItemsWithTag(arg0: string): java.util.ArrayList<zombie.scripting.objects.Item>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.MannequinScript>
       */
      getAllMannequinScripts(): java.util.ArrayList<zombie.scripting.objects.MannequinScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.ModelScript>
       */
      getAllModelScripts(): java.util.ArrayList<zombie.scripting.objects.ModelScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.PhysicsShapeScript>
       */
      getAllPhysicsShapes(): java.util.ArrayList<zombie.scripting.objects.PhysicsShapeScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.Recipe>
       */
      getAllRecipes(): java.util.ArrayList<zombie.scripting.objects.Recipe>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.scripting.objects.Recipe>
       */
      getAllRecipesFor(arg0: string): java.util.ArrayList<zombie.scripting.objects.Recipe>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.core.skinnedmodel.runtime.RuntimeAnimationScript>
       */
      getAllRuntimeAnimationScripts(): java.util.ArrayList<zombie.core.skinnedmodel.runtime.RuntimeAnimationScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.SoundTimelineScript>
       */
      getAllSoundTimelines(): java.util.ArrayList<zombie.scripting.objects.SoundTimelineScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.SpriteModel>
       */
      getAllSpriteModels(): java.util.ArrayList<zombie.iso.SpriteModel>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.StringListScript>
       */
      getAllStringLists(): java.util.ArrayList<zombie.scripting.objects.StringListScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.TimedActionScript>
       */
      getAllTimedActionScripts(): java.util.ArrayList<zombie.scripting.objects.TimedActionScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.scripting.objects.UniqueRecipe>
       */
      getAllUniqueRecipes(): java.util.Stack<zombie.scripting.objects.UniqueRecipe>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.vehicles.VehicleEngineRPM>
       */
      getAllVehicleEngineRPMs(): java.util.ArrayList<zombie.vehicles.VehicleEngineRPM>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.VehicleScript>
       */
      getAllVehicleScripts(): java.util.ArrayList<zombie.scripting.objects.VehicleScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.VehicleTemplate>
       */
      getAllVehicleTemplates(): java.util.ArrayList<zombie.scripting.objects.VehicleTemplate>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.XuiColorsScript>
       */
      getAllXuiColors(): java.util.ArrayList<zombie.scripting.objects.XuiColorsScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.XuiConfigScript>
       */
      getAllXuiConfigScripts(): java.util.ArrayList<zombie.scripting.objects.XuiConfigScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.XuiLayoutScript>
       */
      getAllXuiDefaultStyles(): java.util.ArrayList<zombie.scripting.objects.XuiLayoutScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.XuiLayoutScript>
       */
      getAllXuiLayouts(): java.util.ArrayList<zombie.scripting.objects.XuiLayoutScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.XuiSkinScript>
       */
      getAllXuiSkinScripts(): java.util.ArrayList<zombie.scripting.objects.XuiSkinScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.XuiLayoutScript>
       */
      getAllXuiStyles(): java.util.ArrayList<zombie.scripting.objects.XuiLayoutScript>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.AnimationsMesh
       */
      getAnimationsMesh(arg0: string): zombie.scripting.objects.AnimationsMesh;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getChecksum(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getCraftRecipe(arg0: string): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.EnergyDefinitionScript
       */
      getEnergyDefinitionScript(arg0: string): zombie.scripting.objects.EnergyDefinitionScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.EvolvedRecipe
       */
      getEvolvedRecipe(arg0: string): zombie.scripting.objects.EvolvedRecipe;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Fixing
       */
      getFixing(arg0: string): zombie.scripting.objects.Fixing;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.FluidDefinitionScript
       */
      getFluidDefinitionScript(arg0: string): zombie.scripting.objects.FluidDefinitionScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.FluidFilterScript
       */
      getFluidFilter(arg0: string): zombie.scripting.objects.FluidFilterScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.entity.GameEntityScript
       */
      getGameEntityScript(arg0: string): zombie.scripting.entity.GameEntityScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.entity.GameEntityTemplate
       */
      getGameEntityTemplate(arg0: string): zombie.scripting.entity.GameEntityTemplate;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.GameSoundScript
       */
      getGameSound(arg0: string): zombie.scripting.objects.GameSoundScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Item
       */
      getItem(arg0: string): zombie.scripting.objects.Item;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.itemConfig.ItemConfig
       */
      getItemConfig(arg0: string): zombie.scripting.itemConfig.ItemConfig;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.ItemFilterScript
       */
      getItemFilter(arg0: string): zombie.scripting.objects.ItemFilterScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Item
       */
      getItemForClothingItem(arg0: string): zombie.scripting.objects.Item;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getItemTypeForClothingItem(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.scripting.objects.Item>
       */
      getItemsByType(arg0: string): java.util.ArrayList<zombie.scripting.objects.Item>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.scripting.objects.Item>
       */
      getItemsTag(arg0: string): java.util.ArrayList<zombie.scripting.objects.Item>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.MannequinScript
       */
      getMannequinScript(arg0: string): zombie.scripting.objects.MannequinScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.ModelScript
       */
      getModelScript(arg0: string): zombie.scripting.objects.ModelScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.ScriptModule
       *  - (String arg0, boolean arg1): zombie.scripting.objects.ScriptModule
       */
      getModule(arg0: string, arg1?: boolean): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.ScriptModule
       */
      getModuleNoDisableCheck(arg0: string): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.PhysicsShapeScript
       */
      getPhysicsShape(arg0: string): zombie.scripting.objects.PhysicsShapeScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.RagdollScript
       */
      getRagdollScript(arg0: string): zombie.scripting.objects.RagdollScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Recipe
       */
      getRecipe(arg0: string): zombie.scripting.objects.Recipe;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.runtime.RuntimeAnimationScript
       */
      getRuntimeAnimationScript(arg0: string): zombie.core.skinnedmodel.runtime.RuntimeAnimationScript;
      /**
       * Method Parameters: 
       *  - (ScriptType arg0): java.util.ArrayList<any>
       */
      getScriptsForType(arg0: zombie.scripting.ScriptType): java.util.ArrayList<any>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.SoundTimelineScript
       */
      getSoundTimeline(arg0: string): zombie.scripting.objects.SoundTimelineScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.entity.GameEntityScript
       */
      getSpecificEntity(arg0: string): zombie.scripting.entity.GameEntityScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Item
       */
      getSpecificItem(arg0: string): zombie.scripting.objects.Item;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.iso.SpriteModel
       */
      getSpriteModel(arg0: string): zombie.iso.SpriteModel;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.StringListScript
       */
      getStringList(arg0: string): zombie.scripting.objects.StringListScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.TimedActionScript
       */
      getTimedActionScript(arg0: string): zombie.scripting.objects.TimedActionScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.UniqueRecipe
       */
      getUniqueRecipe(arg0: string): zombie.scripting.objects.UniqueRecipe;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.VehicleScript
       */
      getVehicle(arg0: string): zombie.scripting.objects.VehicleScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.vehicles.VehicleEngineRPM
       */
      getVehicleEngineRPM(arg0: string): zombie.vehicles.VehicleEngineRPM;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.VehicleTemplate
       */
      getVehicleTemplate(arg0: string): zombie.scripting.objects.VehicleTemplate;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.XuiColorsScript
       */
      getXuiColor(arg0: string): zombie.scripting.objects.XuiColorsScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.XuiConfigScript
       */
      getXuiConfigScript(arg0: string): zombie.scripting.objects.XuiConfigScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.XuiLayoutScript
       */
      getXuiDefaultStyle(arg0: string): zombie.scripting.objects.XuiLayoutScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.XuiLayoutScript
       */
      getXuiLayout(arg0: string): zombie.scripting.objects.XuiLayoutScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.XuiSkinScript
       */
      getXuiSkinScript(arg0: string): zombie.scripting.objects.XuiSkinScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.XuiLayoutScript
       */
      getXuiStyle(arg0: string): zombie.scripting.objects.XuiLayoutScript;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getZedDmgMap(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (boolean arg0): boolean
       */
      hasLoadErrors(arg0?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isDrainableItemType(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (ScriptModule arg0, String arg1): string
       */
      resolveItemType(arg0: zombie.scripting.objects.ScriptModule, arg1: string): string;
      /**
       * Method Parameters: 
       *  - (ScriptModule arg0, String arg1): string
       */
      resolveModelScript(arg0: zombie.scripting.objects.ScriptModule, arg1: string): string;
      /**
       * Method Parameters: 
       *  - (URI arg0, File arg1, ArrayList arg2): void
       */
      searchFolders(arg0: java.net.URI, arg1: java.io.File, arg2: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ScriptType arg0, boolean arg1): void
       */
      static EnableDebug(arg0: zombie.scripting.ScriptType, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCurrentLoadFileAbsPath(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCurrentLoadFileMod(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCurrentLoadFileName(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getItemName(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ScriptType arg0): boolean
       */
      static isDebugEnabled(arg0: zombie.scripting.ScriptType): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ScriptType arg0, String arg1): void
       *  - (BaseScriptObject arg0, String arg1): void
       */
      static println(arg0: zombie.scripting.ScriptType | zombie.scripting.objects.BaseScriptObject, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0, ArrayList arg1): void
       */
      static resolveGetItemTypes(arg0: java.util.ArrayList<string>, arg1: java.util.ArrayList<zombie.scripting.objects.Item>): void;
    }
    /**
     * @customConstructor ScriptParser.new
     * @
     * [CLASS] zombie.scripting.ScriptParser
     */
    export class ScriptParser {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ScriptParser$Block
       */
      static parse(arg0: string): zombie.scripting.ScriptParser$Block;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<string>
       */
      static parseTokens(arg0: string): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1, Block arg2): number
       */
      static readBlock(arg0: string, arg1: number, arg2: zombie.scripting.ScriptParser$Block): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static stripComments(arg0: string): string;
    }
    /**
     * @customConstructor Block.new
     * @
     * [CLASS] zombie.scripting.ScriptParser$Block
     */
    export class ScriptParser$Block {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.scripting.ScriptParser$Block
       */
      addBlock(arg0: string, arg1: string): zombie.scripting.ScriptParser$Block;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.scripting.ScriptParser$Value
       */
      addValue(arg0: string, arg1: string): zombie.scripting.ScriptParser$Value;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ScriptParser$Block
       */
      asBlock(): zombie.scripting.ScriptParser$Block;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ScriptParser$Value
       */
      asValue(): zombie.scripting.ScriptParser$Value;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.scripting.ScriptParser$Block
       */
      getBlock(arg0: string, arg1: string): zombie.scripting.ScriptParser$Block;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUid(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ScriptParser$Value
       */
      getValue(arg0: string): zombie.scripting.ScriptParser$Value;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      moveValueAfter(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, StringBuilder arg1, String arg2): void
       */
      prettyPrint(arg0: number, arg1: java.lang.StringBuilder, arg2: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, StringBuilder arg1, String arg2): void
       */
      prettyPrintElements(arg0: number, arg1: java.lang.StringBuilder, arg2: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      setValue(arg0: string, arg1: string): void;
    }
    /**
     * @customConstructor BlockElement.new
     * @
     * [INTERFACE] zombie.scripting.ScriptParser$BlockElement
     */
    export class ScriptParser$BlockElement {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ScriptParser$Block
       */
      asBlock(): zombie.scripting.ScriptParser$Block;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ScriptParser$Value
       */
      asValue(): zombie.scripting.ScriptParser$Value;
      /**
       * Method Parameters: 
       *  - (int arg0, StringBuilder arg1, String arg2): void
       */
      prettyPrint(arg0: number, arg1: java.lang.StringBuilder, arg2: string): void;
    }
    /**
     * @customConstructor Value.new
     * @
     * [CLASS] zombie.scripting.ScriptParser$Value
     */
    export class ScriptParser$Value {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ScriptParser$Block
       */
      asBlock(): zombie.scripting.ScriptParser$Block;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ScriptParser$Value
       */
      asValue(): zombie.scripting.ScriptParser$Value;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValue(): string;
      /**
       * Method Parameters: 
       *  - (int arg0, StringBuilder arg1, String arg2): void
       */
      prettyPrint(arg0: number, arg1: java.lang.StringBuilder, arg2: string): void;
    }
    /** [ENUM] zombie.scripting.ScriptType */
    export class ScriptType {
      protected constructor();
      static readonly AnimationMesh: zombie.scripting.ScriptType;
      static readonly CraftRecipe: zombie.scripting.ScriptType;
      static readonly EnergyDefinition: zombie.scripting.ScriptType;
      static readonly Entity: zombie.scripting.ScriptType;
      static readonly EntityComponent: zombie.scripting.ScriptType;
      static readonly EntityTemplate: zombie.scripting.ScriptType;
      static readonly EvolvedRecipe: zombie.scripting.ScriptType;
      static readonly Fixing: zombie.scripting.ScriptType;
      static readonly FluidDefinition: zombie.scripting.ScriptType;
      static readonly FluidFilter: zombie.scripting.ScriptType;
      static readonly Item: zombie.scripting.ScriptType;
      static readonly ItemConfig: zombie.scripting.ScriptType;
      static readonly ItemFilter: zombie.scripting.ScriptType;
      static readonly Mannequin: zombie.scripting.ScriptType;
      static readonly Model: zombie.scripting.ScriptType;
      static readonly PhysicsShape: zombie.scripting.ScriptType;
      static readonly Ragdoll: zombie.scripting.ScriptType;
      static readonly Recipe: zombie.scripting.ScriptType;
      static readonly RuntimeAnimation: zombie.scripting.ScriptType;
      static readonly Sound: zombie.scripting.ScriptType;
      static readonly SoundTimeline: zombie.scripting.ScriptType;
      static readonly SpriteModel: zombie.scripting.ScriptType;
      static readonly StringList: zombie.scripting.ScriptType;
      static readonly TimedAction: zombie.scripting.ScriptType;
      static readonly UniqueRecipe: zombie.scripting.ScriptType;
      static readonly Vehicle: zombie.scripting.ScriptType;
      static readonly VehicleEngineRPM: zombie.scripting.ScriptType;
      static readonly VehicleTemplate: zombie.scripting.ScriptType;
      static readonly XuiColor: zombie.scripting.ScriptType;
      static readonly XuiConfig: zombie.scripting.ScriptType;
      static readonly XuiDefaultStyle: zombie.scripting.ScriptType;
      static readonly XuiLayout: zombie.scripting.ScriptType;
      static readonly XuiSkin: zombie.scripting.ScriptType;
      static readonly XuiStyle: zombie.scripting.ScriptType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.scripting.ScriptType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.scripting.ScriptType>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptTag(): string;
      /**
       * Method Parameters: 
       *  - (Flags arg0): boolean
       */
      hasFlag(arg0: zombie.scripting.ScriptType$Flags): boolean;
      /**
       * Method Parameters: 
       *  - (EnumSet arg0): boolean
       */
      hasFlags(arg0: java.util.EnumSet<zombie.scripting.ScriptType$Flags>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCritical(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTemplate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVerbose(): boolean;
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
       *  - (boolean arg0): void
       */
      setVerbose(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ScriptType>
       */
      static GetEnumListLua(): java.util.ArrayList<zombie.scripting.ScriptType>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ScriptType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.scripting.ScriptType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ScriptType[]
       */
      static values(): zombie.scripting.ScriptType[];
    }
    /** [ENUM] zombie.scripting.ScriptType$Flags */
    export class ScriptType$Flags {
      protected constructor();
      static readonly AllowNewScriptDiscoveryOnReload: zombie.scripting.ScriptType$Flags;
      static readonly CacheFullType: zombie.scripting.ScriptType$Flags;
      static readonly Clear: zombie.scripting.ScriptType$Flags;
      static readonly FromList: zombie.scripting.ScriptType$Flags;
      static readonly NewInstanceOnReload: zombie.scripting.ScriptType$Flags;
      static readonly RemoveLoadError: zombie.scripting.ScriptType$Flags;
      static readonly ResetExisting: zombie.scripting.ScriptType$Flags;
      static readonly ResetOnceOnReload: zombie.scripting.ScriptType$Flags;
      static readonly SeekImports: zombie.scripting.ScriptType$Flags;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.scripting.ScriptType$Flags>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.scripting.ScriptType$Flags>;
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
       *  - (String arg0): zombie.scripting.ScriptType$Flags
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.scripting.ScriptType$Flags | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ScriptType$Flags[]
       */
      static values(): zombie.scripting.ScriptType$Flags[];
    }
  }
}
