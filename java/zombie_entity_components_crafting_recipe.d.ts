/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.entity.components.crafting.recipe {
    /**
     * @customConstructor CraftRecipeData.new
     * @
     * [CLASS] zombie.entity.components.crafting.recipe.CraftRecipeData
     */
    export class CraftRecipeData {
      /**
       * Constructors: 
       *  - (CraftMode arg0, boolean arg1, boolean arg2, boolean arg3, boolean arg4)
       */
      constructor(arg0: zombie.entity.components.crafting.CraftMode, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean);
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      OnTestItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      areAllInputItemsSatisfied(): boolean;
      /**
       * Method Parameters: 
       *  - (List arg0): boolean
       *  - (List arg0, List arg1, boolean arg2): boolean
       */
      canConsumeInputs(arg0: java.util.List<zombie.entity.components.resources.Resource>, arg1?: java.util.List<zombie.inventory.InventoryItem>, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (List arg0): boolean
       *  - (List arg0, IsoGameCharacter arg1): boolean
       */
      canCreateOutputs(arg0: java.util.List<zombie.entity.components.resources.Resource>, arg1?: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       *  - (InventoryItem arg0, boolean arg1): boolean
       *  - (InputScript arg0, InventoryItem arg1): boolean
       *  - (InputScript arg0, InventoryItem arg1, boolean arg2): boolean
       */
      canOfferInputItem(arg0: zombie.inventory.InventoryItem | zombie.scripting.entity.components.crafting.InputScript, arg1?: boolean | zombie.inventory.InventoryItem, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, List arg1, List arg2): boolean
       */
      canPerform(arg0: zombie.characters.IsoGameCharacter, arg1: java.util.List<zombie.entity.components.resources.Resource>, arg2: java.util.List<zombie.inventory.InventoryItem>): boolean;
      /**
       * Method Parameters: 
       *  - (List arg0): boolean
       */
      consumeInputs(arg0: java.util.List<zombie.entity.components.resources.Resource>): boolean;
      /**
       * Method Parameters: 
       *  - (List arg0): boolean
       */
      consumeOnTickInputs(arg0: java.util.List<zombie.entity.components.resources.Resource>): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      containsInputItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (List arg0): boolean
       */
      createOnTickOutputs(arg0: java.util.List<zombie.entity.components.resources.Resource>): boolean;
      /**
       * Method Parameters: 
       *  - (List arg0): boolean
       *  - (List arg0, IsoGameCharacter arg1): boolean
       */
      createOutputs(arg0: java.util.List<zombie.entity.components.resources.Resource>, arg1?: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (ArrayList arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (ArrayList arg0, boolean arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllConsumedItems(arg0?: java.util.ArrayList<zombie.inventory.InventoryItem>, arg1?: boolean): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (ArrayList arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllCreatedItems(arg0?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllInputItems(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllInputItemsWithFlag(arg0: string): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (ArrayList arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllKeepInputItems(arg0?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllNotKeepInputItems(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllPutBackInputItems(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (InputScript arg0): zombie.entity.components.crafting.recipe.CraftRecipeData$InputScriptData
       */
      getDataForInputScript(arg0: zombie.scripting.entity.components.crafting.InputScript): zombie.entity.components.crafting.recipe.CraftRecipeData$InputScriptData;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getFirstCreatedItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstInputItemWithFlag(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstInputItemWithTag(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (InputScript arg0): zombie.inventory.InventoryItem
       */
      getFirstManualInputFor(arg0: zombie.scripting.entity.components.crafting.InputScript): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Integer arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getInputItems(arg0: number): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModelHandOne(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModelHandTwo(): string;
      /**
       * Method Parameters: 
       *  - (List arg0, List arg1, List arg2, List arg3): number
       */
      getPossibleCraftCount(arg0: java.util.List<zombie.entity.components.resources.Resource>, arg1: java.util.List<zombie.inventory.InventoryItem>, arg2: java.util.List<zombie.entity.components.resources.Resource>, arg3: java.util.List<zombie.inventory.InventoryItem>): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.recipe.ItemDataList
       */
      getToOutputItems(): zombie.entity.components.crafting.recipe.ItemDataList;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      getViableItem(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.components.resources.Resource
       */
      getViableResource(arg0: number): zombie.entity.components.resources.Resource;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowInputItems(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowInputResources(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowOutputItems(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowOutputResources(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, CraftRecipe arg2, boolean arg3): boolean
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2: zombie.scripting.entity.components.crafting.CraftRecipe, arg3: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (IsoGameCharacter arg0): void
       */
      luaCallOnCreate(arg0?: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      luaCallOnFailed(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (IsoGameCharacter arg0): void
       */
      luaCallOnStart(arg0?: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      luaCallOnTest(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      luaCallOnUpdate(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       *  - (InputScript arg0, InventoryItem arg1): boolean
       *  - (InputScript arg0, InventoryItem arg1, boolean arg2): boolean
       */
      offerInputItem(arg0: zombie.inventory.InventoryItem | zombie.scripting.entity.components.crafting.InputScript, arg1?: zombie.inventory.InventoryItem, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, List arg1, List arg2): boolean
       */
      perform(arg0: zombie.characters.IsoGameCharacter, arg1: java.util.List<zombie.entity.components.resources.Resource>, arg2: java.util.List<zombie.inventory.InventoryItem>): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      removeInputItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (CraftRecipeMonitor arg0): void
       */
      setMonitor(arg0: zombie.entity.components.crafting.CraftRecipeMonitor): void;
      /**
       * Method Parameters: 
       *  - (CraftRecipe arg0): void
       */
      setRecipe(arg0: zombie.scripting.entity.components.crafting.CraftRecipe): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (CraftMode arg0, boolean arg1, boolean arg2, boolean arg3, boolean arg4): zombie.entity.components.crafting.recipe.CraftRecipeData
       */
      static Alloc(arg0: zombie.entity.components.crafting.CraftMode, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean): zombie.entity.components.crafting.recipe.CraftRecipeData;
    }
    /**
     * @customConstructor CacheData.new
     * @
     * [ABSTRACT CLASS] zombie.entity.components.crafting.recipe.CraftRecipeData$CacheData
     */
    export class CraftRecipeData$CacheData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      addAppliedItemsToList(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      getAppliedItem(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAppliedItemsCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getFirstAppliedItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getMostRecentItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMoveToOutputs(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMoveToOutputs(arg0: boolean): void;
    }
    /**
     * @customConstructor InputScriptData.new
     * @
     * [CLASS] zombie.entity.components.crafting.recipe.CraftRecipeData$InputScriptData extends zombie.entity.components.crafting.recipe.CraftRecipeData$CacheData
     */
    export class CraftRecipeData$InputScriptData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      acceptsInputItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      addAppliedItemsToList(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      addInputItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      getAppliedItem(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAppliedItemsCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getFirstAppliedItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getFirstInputItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInputItemCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInputItemFluidUses(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInputItemUses(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.InputScript
       */
      getInputScript(): zombie.scripting.entity.components.crafting.InputScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getLastInputItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      getManualInputItems(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getMostRecentItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCachedCanConsume(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInputItemsSatisfied(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMoveToOutputs(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      removeInputItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMoveToOutputs(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      verifyInputItems(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>): void;
    }
    /**
     * @customConstructor OutputScriptData.new
     * @
     * [CLASS] zombie.entity.components.crafting.recipe.CraftRecipeData$OutputScriptData extends zombie.entity.components.crafting.recipe.CraftRecipeData$CacheData
     */
    export class CraftRecipeData$OutputScriptData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      addAppliedItemsToList(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      getAppliedItem(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAppliedItemsCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getFirstAppliedItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getMostRecentItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.OutputScript
       */
      getOutputScript(): zombie.scripting.entity.components.crafting.OutputScript;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMoveToOutputs(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMoveToOutputs(arg0: boolean): void;
    }
    /**
     * @customConstructor CraftRecipeManager.new
     * @
     * [CLASS] zombie.entity.components.crafting.recipe.CraftRecipeManager
     */
    export class CraftRecipeManager {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static FormatAndRegisterRecipeTagsQuery(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Init(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static LogAllRecipesToFile(): void;
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
       *  - (Empty): void
       */
      static debugPrintTagManager(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static debugPrintTagManagerLines(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, List arg1): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>
       *  - (String arg0, List arg1, List arg2): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      static filterRecipeList(arg0: string, arg1: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>, arg2?: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      static getAllItemsFromContainers(arg0: java.util.ArrayList<zombie.inventory.ItemContainer>, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.List<string>
       */
      static getAllRecipeTags(): java.util.List<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (CraftRecipe arg0, ArrayList arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      static getAllValidItemsForRecipe(arg0: zombie.scripting.entity.components.crafting.CraftRecipe, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>, arg2: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (CraftRecipe arg0, ArrayList arg1): number
       */
      static getAutoCraftCountItems(arg0: zombie.scripting.entity.components.crafting.CraftRecipe, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): zombie.entity.components.crafting.recipe.CraftRecipeData
       */
      static getCraftDataForPlayer(arg0: zombie.characters.IsoPlayer): zombie.entity.components.crafting.recipe.CraftRecipeData;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      static getRecipesForTag(arg0: string): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.List<string>
       */
      static getTagGroups(): java.util.List<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, IsoGameCharacter arg1, ArrayList arg2): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      static getUniqueRecipeItems(arg0: zombie.inventory.InventoryItem, arg1: zombie.characters.IsoGameCharacter, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (CraftRecipe arg0, InventoryItem arg1): zombie.scripting.entity.components.crafting.InputScript
       */
      static getValidInputScriptForItem(arg0: zombie.scripting.entity.components.crafting.CraftRecipe, arg1: zombie.inventory.InventoryItem): zombie.scripting.entity.components.crafting.InputScript;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (CraftRecipe arg0, IsoGameCharacter arg1): boolean
       */
      static hasPlayerLearnedRecipe(arg0: zombie.scripting.entity.components.crafting.CraftRecipe, arg1: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RequiredSkill arg0, IsoGameCharacter arg1): boolean
       */
      static hasPlayerRequiredSkill(arg0: zombie.scripting.entity.components.crafting.CraftRecipe$RequiredSkill, arg1: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (CraftRecipe arg0, InventoryItem arg1): boolean
       */
      static isItemToolForRecipe(arg0: zombie.scripting.entity.components.crafting.CraftRecipe, arg1: zombie.inventory.InventoryItem): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InputScript arg0, InventoryItem arg1): boolean
       */
      static isItemValidForInputScript(arg0: zombie.scripting.entity.components.crafting.InputScript, arg1: zombie.inventory.InventoryItem): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (CraftRecipe arg0, InventoryItem arg1): boolean
       */
      static isItemValidForRecipe(arg0: zombie.scripting.entity.components.crafting.CraftRecipe, arg1: zombie.inventory.InventoryItem): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (CraftRecipe arg0, IsoGameCharacter arg1, CraftRecipeMonitor arg2): boolean
       */
      static isValidRecipeForCharacter(arg0: zombie.scripting.entity.components.crafting.CraftRecipe, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.entity.components.crafting.CraftRecipeMonitor): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, List arg1, boolean arg2): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>
       *  - (String arg0, List arg1, List arg2, boolean arg3): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      static populateRecipeList(arg0: string, arg1: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>, arg2: boolean | java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>, arg3?: boolean): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      static queryRecipes(arg0: string): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static sanitizeTagQuery(arg0: string): string;
    }
    /** [ENUM] zombie.entity.components.crafting.recipe.CraftRecipeManager$FilterMode */
    export class CraftRecipeManager$FilterMode {
      protected constructor();
      static readonly InputName: zombie.entity.components.crafting.recipe.CraftRecipeManager$FilterMode;
      static readonly ModName: zombie.entity.components.crafting.recipe.CraftRecipeManager$FilterMode;
      static readonly Name: zombie.entity.components.crafting.recipe.CraftRecipeManager$FilterMode;
      static readonly OutputName: zombie.entity.components.crafting.recipe.CraftRecipeManager$FilterMode;
      static readonly Tags: zombie.entity.components.crafting.recipe.CraftRecipeManager$FilterMode;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.crafting.recipe.CraftRecipeManager$FilterMode>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.crafting.recipe.CraftRecipeManager$FilterMode>;
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
       *  - (String arg0): zombie.entity.components.crafting.recipe.CraftRecipeManager$FilterMode
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.crafting.recipe.CraftRecipeManager$FilterMode | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.recipe.CraftRecipeManager$FilterMode[]
       */
      static values(): zombie.entity.components.crafting.recipe.CraftRecipeManager$FilterMode[];
    }
    /**
     * @customConstructor CraftRecipeSort.new
     * @
     * [CLASS] zombie.entity.components.crafting.recipe.CraftRecipeSort
     */
    export class CraftRecipeSort {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (List arg0): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      static alphaNumeric(arg0: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (List arg0, IsoGameCharacter arg1, ArrayList arg2, ArrayList arg3): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      static canPerformAndValidRecipes(arg0: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>, arg1: zombie.characters.IsoGameCharacter, arg2: java.util.ArrayList<zombie.entity.components.resources.Resource>, arg3: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (List arg0, IsoGameCharacter arg1): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      static validRecipes(arg0: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>, arg1: zombie.characters.IsoGameCharacter): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>;
    }
    /**
     * @customConstructor ValidCanPerformRecipeComparator.new
     * @
     * [CLASS] zombie.entity.components.crafting.recipe.CraftRecipeSort$ValidCanPerformRecipeComparator
     */
    export class CraftRecipeSort$ValidCanPerformRecipeComparator {
      /**
       * Constructors: 
       *  - (List arg0, IsoGameCharacter arg1, ArrayList arg2, ArrayList arg3)
       */
      constructor(arg0: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>, arg1: zombie.characters.IsoGameCharacter, arg2: java.util.ArrayList<zombie.entity.components.resources.Resource>, arg3: java.util.ArrayList<zombie.inventory.InventoryItem>);
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): number
       *  - (CraftRecipe arg0, CraftRecipe arg1): number
       */
      compare(arg0: any, arg1: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Comparator<T>
       */
      reversed(): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): java.util.Comparator<T>
       *  - (Function arg0): java.util.Comparator<T>
       *  - (Function arg0, Comparator arg1): java.util.Comparator<T>
       */
      thenComparing<U>(arg0: java.util.Comparator<any> | java.util._function_.Function<any, U>, arg1?: java.util.Comparator<U>): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (ToDoubleFunction arg0): java.util.Comparator<T>
       */
      thenComparingDouble(arg0: java.util._function_.ToDoubleFunction<any>): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (ToIntFunction arg0): java.util.Comparator<T>
       */
      thenComparingInt(arg0: java.util._function_.ToIntFunction<any>): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (ToLongFunction arg0): java.util.Comparator<T>
       */
      thenComparingLong(arg0: java.util._function_.ToLongFunction<any>): java.util.Comparator<any>;
    }
    /**
     * @customConstructor ValidRecipeComparator.new
     * @
     * [CLASS] zombie.entity.components.crafting.recipe.CraftRecipeSort$ValidRecipeComparator
     */
    export class CraftRecipeSort$ValidRecipeComparator {
      /**
       * Constructors: 
       *  - (List arg0, IsoGameCharacter arg1)
       */
      constructor(arg0: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>, arg1: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): number
       *  - (CraftRecipe arg0, CraftRecipe arg1): number
       */
      compare(arg0: any, arg1: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Comparator<T>
       */
      reversed(): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): java.util.Comparator<T>
       *  - (Function arg0): java.util.Comparator<T>
       *  - (Function arg0, Comparator arg1): java.util.Comparator<T>
       */
      thenComparing<U>(arg0: java.util.Comparator<any> | java.util._function_.Function<any, U>, arg1?: java.util.Comparator<U>): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (ToDoubleFunction arg0): java.util.Comparator<T>
       */
      thenComparingDouble(arg0: java.util._function_.ToDoubleFunction<any>): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (ToIntFunction arg0): java.util.Comparator<T>
       */
      thenComparingInt(arg0: java.util._function_.ToIntFunction<any>): java.util.Comparator<any>;
      /**
       * Method Parameters: 
       *  - (ToLongFunction arg0): java.util.Comparator<T>
       */
      thenComparingLong(arg0: java.util._function_.ToLongFunction<any>): java.util.Comparator<any>;
    }
    /**
     * @customConstructor HandcraftLogic.new
     * @
     * [CLASS] zombie.entity.components.crafting.recipe.HandcraftLogic extends zombie.entity.components.crafting.BaseCraftingLogic
     */
    export class HandcraftLogic {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0, CraftBench arg1, IsoObject arg2)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.entity.components.crafting.CraftBench, arg2: zombie.iso.IsoObject);
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): void
       *  - (String arg0, Object arg1, Object arg2): void
       */
      addEventListener(arg0: string, arg1: any, arg2?: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      areAllInputItemsSatisfied(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      autoPopulateInputs(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      cachedCanPerformCurrentRecipe(): boolean;
      /**
       * Method Parameters: 
       *  - (CraftRecipe arg0): boolean
       */
      canCharacterPerformRecipe(arg0: zombie.scripting.entity.components.crafting.CraftRecipe): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canPerformCurrentRecipe(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkValidRecipeSelected(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String arg1, boolean arg2): void
       *  - (String arg0, String arg1, boolean arg2, IsoPlayer arg3): void
       */
      filterRecipeList(arg0: string, arg1: string, arg2?: boolean, arg3?: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllItems(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.inventory.InventoryItem>
       */
      getAllViableInputInventoryItems(): java.util.List<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.entity.components.resources.Resource>
       */
      getAllViableInputResources(): java.util.List<zombie.entity.components.resources.Resource>;
      /**
       * Method Parameters: 
       *  - (CraftRecipe arg0): zombie.entity.components.crafting.BaseCraftingLogic$CachedRecipeInfo
       */
      getCachedRecipeInfo(arg0: zombie.scripting.entity.components.crafting.CraftRecipe): zombie.entity.components.crafting.BaseCraftingLogic$CachedRecipeInfo;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCategoryList(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.ItemContainer>
       */
      getContainers(): java.util.ArrayList<zombie.inventory.ItemContainer>;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.j2se.KahluaTableImpl
       */
      getCraftActionTable(): se.krka.kahlua.j2se.KahluaTableImpl;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.CraftBench
       */
      getCraftBench(): zombie.entity.components.crafting.CraftBench;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      getCreatedOutputItems(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>): void;
      /**
       * Method Parameters: 
       *  - (InputScript arg0): number
       */
      getInputCount(arg0: zombie.scripting.entity.components.crafting.InputScript): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.components.crafting.recipe.HandcraftLogic$InputItemNode>
       */
      getInputItemNodes(): java.util.ArrayList<zombie.entity.components.crafting.recipe.HandcraftLogic$InputItemNode>;
      /**
       * Method Parameters: 
       *  - (InputScript arg0): java.util.ArrayList<zombie.entity.components.crafting.recipe.HandcraftLogic$InputItemNode>
       */
      getInputItemNodesForInput(arg0: zombie.scripting.entity.components.crafting.InputScript): java.util.ArrayList<zombie.entity.components.crafting.recipe.HandcraftLogic$InputItemNode>;
      /**
       * Method Parameters: 
       *  - (InputScript arg0): number
       */
      getInputUses(arg0: zombie.scripting.entity.components.crafting.InputScript): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getIsoObject(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (InputScript arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getManualInputsFor(arg0: zombie.scripting.entity.components.crafting.InputScript, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.InputScript
       */
      getManualSelectInputScriptFilter(): zombie.scripting.entity.components.crafting.InputScript;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModelHandOne(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModelHandTwo(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getMulticraftConsumedItems(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (InputScript arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getMulticraftConsumedItemsFor(arg0: zombie.scripting.entity.components.crafting.InputScript, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.components.resources.Resource>
       */
      getMulticraftConsumedResources(): java.util.ArrayList<zombie.entity.components.resources.Resource>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getPlayer(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (boolean arg0): number
       */
      getPossibleCraftCount(arg0: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.recipe.CraftRecipeData
       */
      getRecipeData(): zombie.entity.components.crafting.recipe.CraftRecipeData;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      getRecipeList(): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * Method Parameters: 
       *  - (InputScript arg0): number
       */
      getResidualFluidFromInput(arg0: zombie.scripting.entity.components.crafting.InputScript): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getResultTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (InputScript arg0): java.util.List<zombie.inventory.InventoryItem>
       */
      getSatisfiedInputInventoryItems(arg0: zombie.scripting.entity.components.crafting.InputScript): java.util.List<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (InputScript arg0): java.util.List<zombie.scripting.objects.Item>
       */
      getSatisfiedInputItems(arg0: zombie.scripting.entity.components.crafting.InputScript): java.util.List<zombie.scripting.objects.Item>;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoPlayer arg1): string
       */
      getSelectedRecipeStyle(arg0: string, arg1: zombie.characters.IsoPlayer): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.components.resources.Resource>
       */
      getSourceResources(): java.util.ArrayList<zombie.entity.components.resources.Resource>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCharacterInRangeOfWorkbench(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCraftActionInProgress(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCraftCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (InputScript arg0): boolean
       */
      isInputSatisfied(arg0: zombie.scripting.entity.components.crafting.InputScript): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isManualSelectInputs(): boolean;
      /**
       * Method Parameters: 
       *  - (CraftRecipe arg0): boolean
       */
      isRecipeAvailableForCharacter(arg0: zombie.scripting.entity.components.crafting.CraftRecipe): boolean;
      /**
       * Method Parameters: 
       *  - (CraftRecipe arg0): boolean
       */
      isValidRecipeForCharacter(arg0: zombie.scripting.entity.components.crafting.CraftRecipe): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      offerInputItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      performCurrentRecipe(): boolean;
      /**
       * Method Parameters: 
       *  - (List arg0, List arg1, boolean arg2): void
       */
      populateInputs(arg0: java.util.List<zombie.inventory.InventoryItem>, arg1: java.util.List<zombie.entity.components.resources.Resource>, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      refresh(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      removeInputItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      selectionSpam(): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      selectionSpamWithout(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setContainers(arg0: java.util.ArrayList<zombie.inventory.ItemContainer>): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setIsoObject(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (InputScript arg0, ArrayList arg1): boolean
       */
      setManualInputsFor(arg0: zombie.scripting.entity.components.crafting.InputScript, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>): boolean;
      /**
       * Method Parameters: 
       *  - (InputScript arg0): void
       */
      setManualSelectInputScriptFilter(arg0: zombie.scripting.entity.components.crafting.InputScript): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setManualSelectInputs(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (CraftRecipe arg0): void
       */
      setRecipe(arg0: zombie.scripting.entity.components.crafting.CraftRecipe): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      setRecipes(arg0: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, IsoPlayer arg2): void
       */
      setSelectedRecipeStyle(arg0: string, arg1: string, arg2: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowManualSelectInputs(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldShowManualSelectInputs(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      sortRecipeList(): void;
      /**
       * Method Parameters: 
       *  - (KahluaTableImpl arg0): void
       */
      startCraftAction(arg0: se.krka.kahlua.j2se.KahluaTableImpl): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stopCraftAction(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, Object arg1): void
       */
      static callLua(arg0: string, arg1: any): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, Object arg1): boolean
       */
      static callLuaBool(arg0: string, arg1: any): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, List arg2, List arg3, IsoPlayer arg4): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      static filterRecipeList(arg0: string, arg1: string, arg2: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>, arg3: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>, arg4: zombie.characters.IsoPlayer): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (CraftRecipe arg0): string
       */
      static getFavouriteModDataString(arg0: zombie.scripting.entity.components.crafting.CraftRecipe): string;
    }
    /**
     * @customConstructor CachedRecipeInfo.new
     * @
     * [CLASS] zombie.entity.components.crafting.recipe.HandcraftLogic$CachedRecipeInfo
     */
    export class HandcraftLogic$CachedRecipeInfo {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAvailable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanPerform(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValid(): boolean;
    }
    /**
     * @customConstructor InputItemNode.new
     * @
     * [CLASS] zombie.entity.components.crafting.recipe.HandcraftLogic$InputItemNode
     */
    export class HandcraftLogic$InputItemNode {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.InputScript
       */
      getFirstMatchedInputScript(): zombie.scripting.entity.components.crafting.InputScript;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getItems(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.Item
       */
      getScriptItem(): zombie.scripting.objects.Item;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isExpanded(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isKeep(): boolean;
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
      isUse(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setExpanded(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      toggleExpanded(): void;
    }
    /**
     * @customConstructor ItemDataList.new
     * @
     * [CLASS] zombie.entity.components.crafting.recipe.ItemDataList
     */
    export class ItemDataList {
      /**
       * Constructors: 
       *  - (int arg0)
       */
      constructor(arg0: number);
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       *  - (Item arg0): void
       *  - (InventoryItem arg0, boolean arg1): void
       *  - (Item arg0, boolean arg1): void
       */
      addItem(arg0: zombie.inventory.InventoryItem | zombie.scripting.objects.Item, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      getInventoryItem(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.objects.Item
       */
      getItem(arg0: number): zombie.scripting.objects.Item;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       *  - (ArrayList arg0, boolean arg1): void
       */
      getUnprocessed(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasUnprocessed(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isProcessed(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setProcessed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
    }
    /**
     * @customConstructor OutputMapper.new
     * @
     * [CLASS] zombie.entity.components.crafting.recipe.OutputMapper
     */
    export class OutputMapper {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      OnPostWorldDictionaryInit(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String[] arg1): void
       *  - (String arg0, ArrayList arg1): void
       */
      addOutputEntree(arg0: string, arg1: string[] | java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.components.crafting.recipe.OutputMapper$OutputEntree>
       */
      getEntrees(): java.util.ArrayList<zombie.entity.components.crafting.recipe.OutputMapper$OutputEntree>;
      /**
       * Method Parameters: 
       *  - (CraftRecipeData arg0): zombie.scripting.objects.Item
       *  - (CraftRecipeData arg0, boolean arg1): zombie.scripting.objects.Item
       */
      getOutputItem(arg0: zombie.entity.components.crafting.recipe.CraftRecipeData, arg1?: boolean): zombie.scripting.objects.Item;
      /**
       * Method Parameters: 
       *  - (Item arg0): java.util.ArrayList<zombie.scripting.objects.Item>
       */
      getPatternForResult(arg0: zombie.scripting.objects.Item): java.util.ArrayList<zombie.scripting.objects.Item>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.Item>
       */
      getResultItems(): java.util.ArrayList<zombie.scripting.objects.Item>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (InputScript arg0): void
       */
      registerInputScript(arg0: zombie.scripting.entity.components.crafting.InputScript): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDefaultOutputEntree(arg0: string): void;
    }
    /**
     * @customConstructor OutputEntree.new
     * @
     * [CLASS] zombie.entity.components.crafting.recipe.OutputMapper$OutputEntree
     */
    export class OutputMapper$OutputEntree {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
  }
}
