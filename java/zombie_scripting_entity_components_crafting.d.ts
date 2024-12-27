/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.scripting.entity.components.crafting {
    /**
     * @customConstructor CraftBenchScript.new
     * @
     * [CLASS] zombie.scripting.entity.components.crafting.CraftBenchScript extends zombie.scripting.entity.ComponentScript
     */
    export class CraftBenchScript {

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
       *  - (int arg0, ArrayList arg1): java.util.ArrayList<string>
       */
      getBodyScriptLines(arg0: number, arg1: java.util.ArrayList<string>): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.util.enums.EnumBitStore<zombie.entity.components.resources.ResourceChannel>
       */
      getEnergyInputChannels(): zombie.entity.util.enums.EnumBitStore<zombie.entity.components.resources.ResourceChannel>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.util.enums.EnumBitStore<zombie.entity.components.resources.ResourceChannel>
       */
      getFluidInputChannels(): zombie.entity.util.enums.EnumBitStore<zombie.entity.components.resources.ResourceChannel>;
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
      getObsolete(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.BaseScriptObject
       */
      getParent(): zombie.scripting.objects.BaseScriptObject;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRecipeTagQuery(): string;
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
     * @customConstructor CraftLogicScript.new
     * @
     * [CLASS] zombie.scripting.entity.components.crafting.CraftLogicScript extends zombie.scripting.entity.ComponentScript
     */
    export class CraftLogicScript {

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
       *  - (int arg0, ArrayList arg1): java.util.ArrayList<string>
       */
      getBodyScriptLines(arg0: number, arg1: java.util.ArrayList<string>): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<any>
       */
      getCraftProcessorScripts(): java.util.ArrayList<any>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getInputsGroupName(): string;
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
      getObsolete(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOutputsGroupName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.BaseScriptObject
       */
      getParent(): zombie.scripting.objects.BaseScriptObject;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRecipeTagQuery(): string;
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
       *  - (Empty): zombie.entity.components.crafting.StartMode
       */
      getStartMode(): zombie.entity.components.crafting.StartMode;
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
     * @customConstructor CraftRecipe.new
     * @
     * [CLASS] zombie.scripting.entity.components.crafting.CraftRecipe extends zombie.scripting.objects.BaseScriptObject
     */
    export class CraftRecipe {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      InitLoadPP(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, Block arg1): void
       */
      Load(arg0: string, arg1: string | zombie.scripting.ScriptParser$Block): void;
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
       *  - (InventoryItem arg0): boolean
       */
      OnTestItem(arg0: zombie.inventory.InventoryItem): boolean;
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
       *  - (Perk arg0, int arg1): void
       */
      addRequiredSkill(arg0: zombie.characters.skills.PerkFactory$Perk, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      calculateScriptVersion(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeDoneInDark(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (InventoryItem arg0): boolean
       */
      canUseItem(arg0: string | zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      checkAutoLearnSkills(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       *  - (IsoGameCharacter arg0, String arg1): void
       */
      checkMetaRecipe(arg0: zombie.characters.IsoGameCharacter, arg1?: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearRequiredSkills(): void;
      /**
       * Method Parameters: 
       *  - (IOScript arg0): boolean
       */
      containsIO(arg0: zombie.scripting.entity.components.crafting.CraftRecipe$IOScript): boolean;
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
       *  - (Empty): string
       */
      getAnimation(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.entity.components.crafting.CraftRecipe$RequiredSkill
       */
      getAutoLearnSkill(arg0: number): zombie.scripting.entity.components.crafting.CraftRecipe$RequiredSkill;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAutoLearnSkillCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getAutoLearnSkills(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (int arg0, ArrayList arg1): java.util.ArrayList<string>
       */
      getBodyScriptLines(arg0: number, arg1: java.util.ArrayList<string>): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCategory(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getExistsAsVanilla(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       *  - (IsoGameCharacter arg0, boolean arg1): number
       */
      getHighestRelevantSkillLevel(arg0: zombie.characters.IsoGameCharacter, arg1?: boolean): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.entity.components.crafting.CraftRecipe$IOScript
       */
      getIOForIndex(arg0: number): zombie.scripting.entity.components.crafting.CraftRecipe$IOScript;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getIconName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getIconTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (IOScript arg0): number
       */
      getIndexForIO(arg0: zombie.scripting.entity.components.crafting.CraftRecipe$IOScript): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInputCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.entity.components.crafting.InputScript>
       */
      getInputs(): java.util.ArrayList<zombie.scripting.entity.components.crafting.InputScript>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe$IOScript>
       */
      getIoLines(): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe$IOScript>;
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
       *  - (LuaCall arg0): string
       */
      getLuaCallString(arg0: zombie.scripting.entity.components.crafting.CraftRecipe$LuaCall): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMetaRecipe(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModName(): string;
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
      getObsolete(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOnAddToMenu(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOutputCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.entity.components.crafting.OutputScript>
       */
      getOutputs(): java.util.ArrayList<zombie.scripting.entity.components.crafting.OutputScript>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.BaseScriptObject
       */
      getParent(): zombie.scripting.objects.BaseScriptObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.InputScript
       */
      getProp1(): zombie.scripting.entity.components.crafting.InputScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.InputScript
       */
      getProp2(): zombie.scripting.entity.components.crafting.InputScript;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.entity.components.crafting.CraftRecipe$RequiredSkill
       */
      getRequiredSkill(arg0: number): zombie.scripting.entity.components.crafting.CraftRecipe$RequiredSkill;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRequiredSkillCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRequiredSkills(): java.util.ArrayList<string>;
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
       *  - (Empty): zombie.entity.util.BitSet
       */
      getTagBits(): zombie.entity.util.BitSet;
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
       *  - (Empty): zombie.scripting.objects.TimedActionScript
       */
      getTimedActionScript(): zombie.scripting.objects.TimedActionScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.InputScript
       */
      getToolBoth(): zombie.scripting.entity.components.crafting.InputScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.InputScript
       */
      getToolLeft(): zombie.scripting.entity.components.crafting.InputScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.InputScript
       */
      getToolRight(): zombie.scripting.entity.components.crafting.InputScript;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslationName(): string;
      /**
       * Method Parameters: 
       *  - (IVersionHash arg0): void
       */
      getVersion(arg0: zombie.world.scripts.IVersionHash): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.entity.components.crafting.CraftRecipe$xp_Award
       */
      getXPAward(arg0: number): zombie.scripting.entity.components.crafting.CraftRecipe$xp_Award;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXPAwardCount(): number;
      /**
       * Method Parameters: 
       *  - (LuaCall arg0): boolean
       */
      hasLuaCall(arg0: zombie.scripting.entity.components.crafting.CraftRecipe$LuaCall): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasOnTickInputs(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasOnTickOutputs(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasTag(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowBatchCraft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnySurfaceCraft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanBeDoneFromFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanWalk(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsumeOnFinish(): boolean;
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
      isInHandCraftCraft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresPlayer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShapeless(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUsesTools(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVanilla(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      needToBeLearn(): boolean;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      overrideIconTexture(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      overrideTranslationName(arg0: string): void;
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
       *  - (String arg0): void
       */
      setAnimation(arg0: string): void;
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
      /**
       * Method Parameters: 
       *  - (InputScript arg0): void
       */
      setProp1(arg0: zombie.scripting.entity.components.crafting.InputScript): void;
      /**
       * Method Parameters: 
       *  - (InputScript arg0): void
       */
      setProp2(arg0: zombie.scripting.entity.components.crafting.InputScript): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static onLuaFileReloaded(): void;
    }
    /**
     * @customConstructor IOScript.new
     * @
     * [ABSTRACT CLASS] zombie.scripting.entity.components.crafting.CraftRecipe$IOScript
     */
    export class CraftRecipe$IOScript {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getParentRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRecipeLineIndex(): number;
    }
    /** [ENUM] zombie.scripting.entity.components.crafting.CraftRecipe$LuaCall */
    export class CraftRecipe$LuaCall {
      protected constructor();
      static readonly OnCreate: zombie.scripting.entity.components.crafting.CraftRecipe$LuaCall;
      static readonly OnFailed: zombie.scripting.entity.components.crafting.CraftRecipe$LuaCall;
      static readonly OnStart: zombie.scripting.entity.components.crafting.CraftRecipe$LuaCall;
      static readonly OnTest: zombie.scripting.entity.components.crafting.CraftRecipe$LuaCall;
      static readonly OnUpdate: zombie.scripting.entity.components.crafting.CraftRecipe$LuaCall;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.scripting.entity.components.crafting.CraftRecipe$LuaCall>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.scripting.entity.components.crafting.CraftRecipe$LuaCall>;
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
       *  - (String arg0): zombie.scripting.entity.components.crafting.CraftRecipe$LuaCall
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.scripting.entity.components.crafting.CraftRecipe$LuaCall | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe$LuaCall[]
       */
      static values(): zombie.scripting.entity.components.crafting.CraftRecipe$LuaCall[];
    }
    /**
     * @customConstructor RequiredSkill.new
     * @
     * [CLASS] zombie.scripting.entity.components.crafting.CraftRecipe$RequiredSkill
     */
    export class CraftRecipe$RequiredSkill {
      /**
       * Constructors: 
       *  - (Perk arg0, int arg1)
       */
      constructor(arg0: zombie.characters.skills.PerkFactory$Perk, arg1: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.skills.PerkFactory$Perk
       */
      getPerk(): zombie.characters.skills.PerkFactory$Perk;
    }
    /**
     * @customConstructor xp_Award.new
     * @
     * [CLASS] zombie.scripting.entity.components.crafting.CraftRecipe$xp_Award
     */
    export class CraftRecipe$xp_Award {
      /**
       * Constructors: 
       *  - (Perk arg0, int arg1)
       */
      constructor(arg0: zombie.characters.skills.PerkFactory$Perk, arg1: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.skills.PerkFactory$Perk
       */
      getPerk(): zombie.characters.skills.PerkFactory$Perk;
    }
    /**
     * @customConstructor CraftRecipeComponentScript.new
     * @
     * [CLASS] zombie.scripting.entity.components.crafting.CraftRecipeComponentScript extends zombie.scripting.entity.ComponentScript
     */
    export class CraftRecipeComponentScript {

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
       *  - (int arg0, ArrayList arg1): java.util.ArrayList<string>
       */
      getBodyScriptLines(arg0: number, arg1: java.util.ArrayList<string>): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBuildCategory(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getCraftRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
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
      getObsolete(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.BaseScriptObject
       */
      getParent(): zombie.scripting.objects.BaseScriptObject;
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
     * @customConstructor FurnaceLogicScript.new
     * @
     * [CLASS] zombie.scripting.entity.components.crafting.FurnaceLogicScript extends zombie.scripting.entity.ComponentScript
     */
    export class FurnaceLogicScript {

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
       *  - (int arg0, ArrayList arg1): java.util.ArrayList<string>
       */
      getBodyScriptLines(arg0: number, arg1: java.util.ArrayList<string>): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFuelInputsGroupName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFuelOutputsGroupName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFuelRecipeTagQuery(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFurnaceRecipeTagQuery(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getInputsGroupName(): string;
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
      getObsolete(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOutputsGroupName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.BaseScriptObject
       */
      getParent(): zombie.scripting.objects.BaseScriptObject;
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
       *  - (Empty): zombie.entity.components.crafting.StartMode
       */
      getStartMode(): zombie.entity.components.crafting.StartMode;
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
     * @customConstructor InputScript.new
     * @
     * [CLASS] zombie.scripting.entity.components.crafting.InputScript extends zombie.scripting.entity.components.crafting.CraftRecipe$IOScript
     */
    export class InputScript {

      /**
       * Method Parameters: 
       *  - (ScriptLoadMode arg0): void
       */
      OnScriptsLoaded(arg0: zombie.scripting.ScriptLoadMode): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      allowDestroyedItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      allowFrozenItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      allowRottenItem(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (InventoryItem arg0): boolean
       */
      canUseItem(arg0: string | zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Energy arg0): boolean
       */
      containsEnergy(arg0: zombie.entity.energy.Energy): boolean;
      /**
       * Method Parameters: 
       *  - (Fluid arg0): boolean
       */
      containsFluid(arg0: zombie.entity.components.fluids.Fluid): boolean;
      /**
       * Method Parameters: 
       *  - (Item arg0): boolean
       */
      containsItem(arg0: zombie.scripting.objects.Item): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      dontPutBack(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       *  - (String arg0): number
       */
      getAmount(arg0?: number | string): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.InputScript
       */
      getConsumeFromItemScript(): zombie.scripting.entity.components.crafting.InputScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.OutputScript
       */
      getCreateToItemScript(): zombie.scripting.entity.components.crafting.OutputScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.FluidMatchMode
       */
      getFluidMatchMode(): zombie.entity.components.crafting.FluidMatchMode;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       *  - (String arg0): number
       */
      getIntAmount(arg0?: number | string): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.ItemApplyMode
       */
      getItemApplyMode(): zombie.entity.components.crafting.ItemApplyMode;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOriginalLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getParentRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.energy.Energy>
       */
      getPossibleInputEnergies(): java.util.ArrayList<zombie.entity.energy.Energy>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.components.fluids.Fluid>
       */
      getPossibleInputFluids(): java.util.ArrayList<zombie.entity.components.fluids.Fluid>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.scripting.objects.Item>
       */
      getPossibleInputItems(): java.util.List<zombie.scripting.objects.Item>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRecipeLineIndex(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getRelativeScale(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.OutputScript
       */
      getReplaceOutputScript(): zombie.scripting.entity.components.crafting.OutputScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceType
       */
      getResourceType(): zombie.entity.components.resources.ResourceType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShapedIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasConsumeFromItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasCreateToItem(): boolean;
      /**
       * Method Parameters: 
       *  - (InputFlag arg0): boolean
       */
      hasFlag(arg0: zombie.entity.components.crafting.InputFlag): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      inheritColor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      inheritCondition(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      inheritHeadCondition(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      inheritSharpness(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      inheritUses(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAcceptsAnyEnergy(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAcceptsAnyFluid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAcceptsAnyItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isApplyOnTick(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAutomationOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCookedFoodItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDamaged(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDestroy(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmptyContainer(): boolean;
      /**
       * Method Parameters: 
       *  - (Energy arg0): boolean
       *  - (DrainableComboItem arg0): boolean
       */
      isEnergyMatch(arg0: zombie.entity.energy.Energy | zombie.inventory.types.DrainableComboItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isExclusive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFluidAnything(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFluidExact(): boolean;
      /**
       * Method Parameters: 
       *  - (FluidContainer arg0): boolean
       */
      isFluidMatch(arg0: zombie.entity.components.fluids.FluidContainer): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFluidPrimary(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFull(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHandcraftOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHeadPart(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isItemCount(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isKeep(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNotDull(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNotWorn(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isProp1(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isProp2(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReplace(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSharpenable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTool(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isToolLeft(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isToolRight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUncookedFoodItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUndamaged(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUse(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWholeFoodItem(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWorn(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      mayDegrade(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      mayDegradeHeavy(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      mayDegradeLight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      notEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      notFull(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      sharpnessCheck(): boolean;
    }
    /**
     * @customConstructor MashingLogicScript.new
     * @
     * [CLASS] zombie.scripting.entity.components.crafting.MashingLogicScript extends zombie.scripting.entity.ComponentScript
     */
    export class MashingLogicScript {

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
       *  - (int arg0, ArrayList arg1): java.util.ArrayList<string>
       */
      getBodyScriptLines(arg0: number, arg1: java.util.ArrayList<string>): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getInputsGroupName(): string;
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
      getObsolete(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.BaseScriptObject
       */
      getParent(): zombie.scripting.objects.BaseScriptObject;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRecipeTagQuery(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getResourceFluidID(): string;
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
     * @customConstructor OutputScript.new
     * @
     * [CLASS] zombie.scripting.entity.components.crafting.OutputScript extends zombie.scripting.entity.components.crafting.CraftRecipe$IOScript
     */
    export class OutputScript {

      /**
       * Method Parameters: 
       *  - (ScriptLoadMode arg0): void
       */
      OnScriptsLoaded(arg0: zombie.scripting.ScriptLoadMode): void;
      /**
       * Method Parameters: 
       *  - (Energy arg0): boolean
       */
      containsEnergy(arg0: zombie.entity.energy.Energy): boolean;
      /**
       * Method Parameters: 
       *  - (Fluid arg0): boolean
       */
      containsFluid(arg0: zombie.entity.components.fluids.Fluid): boolean;
      /**
       * Method Parameters: 
       *  - (Item arg0): boolean
       */
      containsItem(arg0: zombie.scripting.objects.Item): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.OutputScript
       */
      getCreateToItemScript(): zombie.scripting.entity.components.crafting.OutputScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.energy.Energy
       */
      getEnergy(): zombie.entity.energy.Energy;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.Fluid
       */
      getFluid(): zombie.entity.components.fluids.Fluid;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.FluidMatchMode
       */
      getFluidMatchMode(): zombie.entity.components.crafting.FluidMatchMode;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntAmount(): number;
      /**
       * Method Parameters: 
       *  - (CraftRecipeData arg0): zombie.scripting.objects.Item
       */
      getItem(arg0: zombie.entity.components.crafting.recipe.CraftRecipeData): zombie.scripting.objects.Item;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.ItemApplyMode
       */
      getItemApplyMode(): zombie.entity.components.crafting.ItemApplyMode;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOriginalLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.recipe.OutputMapper
       */
      getOutputMapper(): zombie.entity.components.crafting.recipe.OutputMapper;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getParentRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.energy.Energy>
       */
      getPossibleResultEnergies(): java.util.ArrayList<zombie.entity.energy.Energy>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.components.fluids.Fluid>
       */
      getPossibleResultFluids(): java.util.ArrayList<zombie.entity.components.fluids.Fluid>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.Item>
       */
      getPossibleResultItems(): java.util.ArrayList<zombie.scripting.objects.Item>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRecipeLineIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceType
       */
      getResourceType(): zombie.entity.components.resources.ResourceType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShapedIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasCreateToItem(): boolean;
      /**
       * Method Parameters: 
       *  - (OutputFlag arg0): boolean
       */
      hasFlag(arg0: zombie.entity.components.crafting.OutputFlag): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isApplyOnTick(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAutomationOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCreateUses(): boolean;
      /**
       * Method Parameters: 
       *  - (Energy arg0): boolean
       *  - (DrainableComboItem arg0): boolean
       */
      isEnergyMatch(arg0: zombie.entity.energy.Energy | zombie.inventory.types.DrainableComboItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFluidAnything(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFluidExact(): boolean;
      /**
       * Method Parameters: 
       *  - (FluidContainer arg0): boolean
       */
      isFluidMatch(arg0: zombie.entity.components.fluids.FluidContainer): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFluidPrimary(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHandcraftOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReplaceInput(): boolean;
    }
  }
}
