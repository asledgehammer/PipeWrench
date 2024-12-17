/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.entity.components.crafting {
    /**
     * @customConstructor BaseCraftingLogic.new
     * @
     * [ABSTRACT CLASS] zombie.entity.components.crafting.BaseCraftingLogic
     */
    export class BaseCraftingLogic {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0, CraftBench arg1)
       */
      protected constructor(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.entity.components.crafting.CraftBench);
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): void
       *  - (String arg0, Object arg1, Object arg2): void
       */
      addEventListener(arg0: string, arg1: any, arg2?: any): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String arg1, boolean arg2): void
       *  - (String arg0, String arg1, boolean arg2, IsoPlayer arg3): void
       */
      filterRecipeList(arg0: string, arg1: string, arg2?: boolean, arg3?: zombie.characters.IsoPlayer): void;
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
       *  - (String arg0, IsoPlayer arg1): string
       */
      getSelectedRecipeStyle(arg0: string, arg1: zombie.characters.IsoPlayer): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCraftCheat(): boolean;
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
       *  - (Empty): void
       */
      sortRecipeList(): void;
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
     * @customConstructor CachedRecipeComparator.new
     * @
     * [CLASS] zombie.entity.components.crafting.BaseCraftingLogic$CachedRecipeComparator
     */
    export class BaseCraftingLogic$CachedRecipeComparator {
      /**
       * Constructors: 
       *  - (BaseCraftingLogic arg0)
       */
      constructor(arg0: zombie.entity.components.crafting.BaseCraftingLogic);
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
     * @customConstructor CachedRecipeInfo.new
     * @
     * [CLASS] zombie.entity.components.crafting.BaseCraftingLogic$CachedRecipeInfo
     */
    export class BaseCraftingLogic$CachedRecipeInfo {
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
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      overrideCanPerform(arg0: boolean): void;
    }
    /**
     * @customConstructor CraftBench.new
     * @
     * [CLASS] zombie.entity.components.crafting.CraftBench extends zombie.entity.Component
     */
    export class CraftBench {

      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
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
       *  - (Empty): zombie.entity.GameEntity
       */
      getGameEntity(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getOwner(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRecipeTagQuery(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      getRecipes(): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderLastPriority(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.components.resources.Resource>
       */
      getResources(): java.util.ArrayList<zombie.entity.components.resources.Resource>;
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
       *  - (GameEntityType arg0): boolean
       */
      isValidOwnerType(arg0: zombie.entity.GameEntityType): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, EntityPacketData arg1): void
       */
      sendServerPacketTo(arg0: zombie.characters.IsoPlayer, arg1: zombie.entity.network.EntityPacketData): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setRecipeTagQuery(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor CraftLogic.new
     * @
     * [CLASS] zombie.entity.components.crafting.CraftLogic extends zombie.entity.Component
     */
    export class CraftLogic {

      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      canStart(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): zombie.entity.components.crafting.CraftRecipeMonitor
       */
      debugCanStart(arg0: zombie.characters.IsoPlayer): zombie.entity.components.crafting.CraftRecipeMonitor;
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
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getCurrentRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getElapsedTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getGameEntity(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.entity.components.resources.Resource>
       */
      getInputResources(): java.util.List<zombie.entity.components.resources.Resource>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getInputsGroupName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.entity.components.resources.Resource>
       */
      getOutputResources(): java.util.List<zombie.entity.components.resources.Resource>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOutputsGroupName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getOwner(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getPossibleRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getProgress(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRecipeTagQuery(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>
       *  - (ArrayList arg0): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      getRecipes(arg0?: java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe> | java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderLastPriority(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      getRequestingPlayer(): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.StartMode
       */
      getStartMode(): zombie.entity.components.crafting.StartMode;
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
      isDoAutomaticCraftCheck(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFinished(): boolean;
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
      isRunning(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRunningInMeta(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStartRequested(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStopRequested(): boolean;
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
       *  - (GameEntityType arg0): boolean
       */
      isValidOwnerType(arg0: zombie.entity.GameEntityType): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, EntityPacketData arg1): void
       */
      sendServerPacketTo(arg0: zombie.characters.IsoPlayer, arg1: zombie.entity.network.EntityPacketData): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendStartRequest(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendStopRequest(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (CraftRecipe arg0): void
       */
      setRecipe(arg0: zombie.scripting.entity.components.crafting.CraftRecipe): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setRecipeTagQuery(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      start(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       *  - (IsoPlayer arg0, boolean arg1): void
       */
      stop(arg0: zombie.characters.IsoPlayer, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /** [ENUM] zombie.entity.components.crafting.CraftMode */
    export class CraftMode {
      protected constructor();
      static readonly Automation: zombie.entity.components.crafting.CraftMode;
      static readonly Handcraft: zombie.entity.components.crafting.CraftMode;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.crafting.CraftMode>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.crafting.CraftMode>;
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
       *  - (String arg0): zombie.entity.components.crafting.CraftMode
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.crafting.CraftMode | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.CraftMode[]
       */
      static values(): zombie.entity.components.crafting.CraftMode[];
    }
    /**
     * @customConstructor CraftRecipeComponent.new
     * @
     * [CLASS] zombie.entity.components.crafting.CraftRecipeComponent extends zombie.entity.Component
     */
    export class CraftRecipeComponent {

      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
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
       *  - (Empty): zombie.entity.GameEntity
       */
      getGameEntity(): zombie.entity.GameEntity;
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
       *  - (GameEntityType arg0): boolean
       */
      isValidOwnerType(arg0: zombie.entity.GameEntityType): boolean;
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
     * @customConstructor CraftRecipeMonitor.new
     * @
     * [CLASS] zombie.entity.components.crafting.CraftRecipeMonitor
     */
    export class CraftRecipeMonitor {

      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      GetLines(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canLog(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      close(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      log(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (CraftLogic arg0): void
       */
      logCraftLogic(arg0: zombie.entity.components.crafting.CraftLogic): void;
      /**
       * Method Parameters: 
       *  - (DryingLogic arg0): void
       */
      logDryingLogic(arg0: zombie.entity.components.crafting.DryingLogic): void;
      /**
       * Method Parameters: 
       *  - (FurnaceLogic arg0): void
       */
      logFurnaceLogic(arg0: zombie.entity.components.crafting.FurnaceLogic): void;
      /**
       * Method Parameters: 
       *  - (InputScript arg0): void
       */
      logInputScript(arg0: zombie.scripting.entity.components.crafting.InputScript): void;
      /**
       * Method Parameters: 
       *  - (String arg0, ArrayList arg1): void
       */
      logList<T>(arg0: string, arg1: java.util.ArrayList<T>): void;
      /**
       * Method Parameters: 
       *  - (MashingLogic arg0): void
       */
      logMashingLogic(arg0: zombie.entity.components.crafting.MashingLogic): void;
      /**
       * Method Parameters: 
       *  - (OutputScript arg0): void
       */
      logOutputScript(arg0: zombie.scripting.entity.components.crafting.OutputScript): void;
      /**
       * Method Parameters: 
       *  - (CraftRecipe arg0, boolean arg1): void
       */
      logRecipe(arg0: zombie.scripting.entity.components.crafting.CraftRecipe, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (List arg0, List arg1): void
       */
      logResources(arg0: java.util.List<zombie.entity.components.resources.Resource>, arg1: java.util.List<zombie.entity.components.resources.Resource>): void;
      /**
       * Method Parameters: 
       *  - (String arg0, List arg1): void
       */
      logResourcesList(arg0: string, arg1: java.util.List<zombie.entity.components.resources.Resource>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      open(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.CraftRecipeMonitor
       */
      seal(): zombie.entity.components.crafting.CraftRecipeMonitor;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPrintToConsole(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (CraftRecipe arg0): void
       */
      setRecipe(arg0: zombie.scripting.entity.components.crafting.CraftRecipe): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      success(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      warn(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.CraftRecipeMonitor
       */
      static Create(): zombie.entity.components.crafting.CraftRecipeMonitor;
    }
    /**
     * @customConstructor CraftUtil.new
     * @
     * [CLASS] zombie.entity.components.crafting.CraftUtil
     */
    export class CraftUtil {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.components.resources.Resource>
       */
      static AllocResourceList(): java.util.ArrayList<zombie.entity.components.resources.Resource>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      static ReleaseResourceList(arg0: java.util.ArrayList<zombie.entity.components.resources.Resource>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, InventoryItem arg1): boolean
       *  - (InventoryItem arg0, InventoryItem arg1, boolean arg2): boolean
       *  - (Item arg0, Item arg1, boolean arg2): boolean
       */
      static canItemsStack(arg0: zombie.inventory.InventoryItem | zombie.scripting.objects.Item, arg1: zombie.inventory.InventoryItem | zombie.scripting.objects.Item, arg2?: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (CraftRecipe arg0, CraftRecipeData arg1, List arg2, List arg3): boolean
       *  - (CraftRecipe arg0, CraftRecipeData arg1, List arg2, List arg3, CraftRecipeMonitor arg4): boolean
       */
      static canPerformRecipe(arg0: zombie.scripting.entity.components.crafting.CraftRecipe, arg1: zombie.entity.components.crafting.recipe.CraftRecipeData, arg2: java.util.List<zombie.entity.components.resources.Resource>, arg3: java.util.List<zombie.entity.components.resources.Resource>, arg4?: zombie.entity.components.crafting.CraftRecipeMonitor): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Resource arg0, InventoryItem arg1): boolean
       *  - (Resource arg0, Item arg1): boolean
       *  - (Resource arg0, InventoryItem arg1, int arg2): boolean
       *  - (Resource arg0, Item arg1, int arg2): boolean
       *  - (Resource arg0, InventoryItem arg1, int arg2, Resource arg3, HashSet arg4): boolean
       *  - (Resource arg0, Item arg1, int arg2, Resource arg3, HashSet arg4): boolean
       */
      static canResourceFitItem(arg0: zombie.entity.components.resources.Resource, arg1: zombie.inventory.InventoryItem | zombie.scripting.objects.Item, arg2?: number, arg3?: zombie.entity.components.resources.Resource, arg4?: java.util.HashSet<zombie.entity.components.resources.Resource>): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (CraftRecipeData arg0, List arg1, List arg2, List arg3): boolean
       *  - (CraftRecipeData arg0, List arg1, List arg2, List arg3, CraftRecipeMonitor arg4): boolean
       */
      static canStart(arg0: zombie.entity.components.crafting.recipe.CraftRecipeData, arg1: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>, arg2: java.util.List<zombie.entity.components.resources.Resource>, arg3: java.util.List<zombie.entity.components.resources.Resource>, arg4?: zombie.entity.components.crafting.CraftRecipeMonitor): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, CraftRecipeData arg1, List arg2, List arg3, List arg4, CraftRecipeMonitor arg5): zombie.entity.components.crafting.CraftRecipeMonitor
       */
      static debugCanStart(arg0: zombie.characters.IsoPlayer, arg1: zombie.entity.components.crafting.recipe.CraftRecipeData, arg2: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>, arg3: java.util.List<zombie.entity.components.resources.Resource>, arg4: java.util.List<zombie.entity.components.resources.Resource>, arg5: zombie.entity.components.crafting.CraftRecipeMonitor): zombie.entity.components.crafting.CraftRecipeMonitor;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ResourceIO arg0, List arg1, Fluid arg2, float arg3, Resource arg4, HashSet arg5): zombie.entity.components.resources.Resource
       *  - (ResourceIO arg0, List arg1, Energy arg2, float arg3, Resource arg4, HashSet arg5): zombie.entity.components.resources.Resource
       *  - (ResourceIO arg0, List arg1, InventoryItem arg2, int arg3, Resource arg4, HashSet arg5): zombie.entity.components.resources.Resource
       *  - (ResourceIO arg0, List arg1, Item arg2, int arg3, Resource arg4, HashSet arg5): zombie.entity.components.resources.Resource
       */
      static findResourceOrEmpty(arg0: zombie.entity.components.resources.ResourceIO, arg1: java.util.List<zombie.entity.components.resources.Resource>, arg2: zombie.entity.components.fluids.Fluid | zombie.entity.energy.Energy | zombie.inventory.InventoryItem | zombie.scripting.objects.Item, arg3: number, arg4: zombie.entity.components.resources.Resource, arg5: java.util.HashSet<zombie.entity.components.resources.Resource>): zombie.entity.components.resources.Resource;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (GameEntity arg0): number
       */
      static getEntityTemperature(arg0: zombie.entity.GameEntity): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (CraftRecipeData arg0, List arg1, List arg2, List arg3): zombie.scripting.entity.components.crafting.CraftRecipe
       *  - (CraftRecipeData arg0, List arg1, List arg2, List arg3, CraftRecipeMonitor arg4): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      static getPossibleRecipe(arg0: zombie.entity.components.crafting.recipe.CraftRecipeData, arg1: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>, arg2: java.util.List<zombie.entity.components.resources.Resource>, arg3: java.util.List<zombie.entity.components.resources.Resource>, arg4?: zombie.entity.components.crafting.CraftRecipeMonitor): zombie.scripting.entity.components.crafting.CraftRecipe;
    }
    /**
     * @customConstructor DryingLogic.new
     * @
     * [CLASS] zombie.entity.components.crafting.DryingLogic extends zombie.entity.Component
     */
    export class DryingLogic {

      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      canStart(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): zombie.entity.components.crafting.CraftRecipeMonitor
       */
      debugCanStart(arg0: zombie.characters.IsoPlayer): zombie.entity.components.crafting.CraftRecipeMonitor;
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
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getCurrentRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.entity.components.resources.Resource>
       */
      getDryingInputResources(): java.util.List<zombie.entity.components.resources.Resource>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDryingInputsGroupName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.entity.components.resources.Resource>
       */
      getDryingOutputResources(): java.util.List<zombie.entity.components.resources.Resource>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDryingOutputsGroupName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDryingRecipeTagQuery(): string;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      getDryingRecipes(arg0: java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getElapsedTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.entity.components.resources.Resource>
       */
      getFuelInputResources(): java.util.List<zombie.entity.components.resources.Resource>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFuelInputsGroupName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.entity.components.resources.Resource>
       */
      getFuelOutputResources(): java.util.List<zombie.entity.components.resources.Resource>;
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
       *  - (ArrayList arg0): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      getFuelRecipes(arg0: java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getGameEntity(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.components.resources.ResourceItem
       */
      getInputSlotResource(arg0: number): zombie.entity.components.resources.ResourceItem;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.components.resources.ResourceItem
       */
      getOutputSlotResource(arg0: number): zombie.entity.components.resources.ResourceItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getOwner(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getPossibleRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getProgress(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderLastPriority(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      getRequestingPlayer(): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.components.crafting.DryingLogic$DryingSlot
       */
      getSlot(arg0: number): zombie.entity.components.crafting.DryingLogic$DryingSlot;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSlotSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.StartMode
       */
      getStartMode(): zombie.entity.components.crafting.StartMode;
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
      isDoAutomaticCraftCheck(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFinished(): boolean;
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
      isRunning(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRunningInMeta(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStartRequested(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStopRequested(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUsesFuel(): boolean;
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
       *  - (GameEntityType arg0): boolean
       */
      isValidOwnerType(arg0: zombie.entity.GameEntityType): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, EntityPacketData arg1): void
       */
      sendServerPacketTo(arg0: zombie.characters.IsoPlayer, arg1: zombie.entity.network.EntityPacketData): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendStartRequest(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendStopRequest(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDryingRecipeTagQuery(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setFuelRecipeTagQuery(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      start(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       *  - (IsoPlayer arg0, boolean arg1): void
       */
      stop(arg0: zombie.characters.IsoPlayer, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor DryingSlot.new
     * @
     * [CLASS] zombie.entity.components.crafting.DryingLogic$DryingSlot
     */
    export class DryingLogic$DryingSlot {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getCurrentRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getElapsedTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getInputResourceID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOutputResourceID(): string;
    }
    /** [ENUM] zombie.entity.components.crafting.FluidMatchMode */
    export class FluidMatchMode {
      protected constructor();
      static readonly Anything: zombie.entity.components.crafting.FluidMatchMode;
      static readonly Exact: zombie.entity.components.crafting.FluidMatchMode;
      static readonly Primary: zombie.entity.components.crafting.FluidMatchMode;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.crafting.FluidMatchMode>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.crafting.FluidMatchMode>;
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
       *  - (String arg0): zombie.entity.components.crafting.FluidMatchMode
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.crafting.FluidMatchMode | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.FluidMatchMode[]
       */
      static values(): zombie.entity.components.crafting.FluidMatchMode[];
    }
    /**
     * @customConstructor FurnaceLogic.new
     * @
     * [CLASS] zombie.entity.components.crafting.FurnaceLogic extends zombie.entity.Component
     */
    export class FurnaceLogic {

      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      canStart(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): zombie.entity.components.crafting.CraftRecipeMonitor
       */
      debugCanStart(arg0: zombie.characters.IsoPlayer): zombie.entity.components.crafting.CraftRecipeMonitor;
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
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getCurrentRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getElapsedTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.entity.components.resources.Resource>
       */
      getFuelInputResources(): java.util.List<zombie.entity.components.resources.Resource>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFuelInputsGroupName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.entity.components.resources.Resource>
       */
      getFuelOutputResources(): java.util.List<zombie.entity.components.resources.Resource>;
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
       *  - (ArrayList arg0): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      getFuelRecipes(arg0: java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.entity.components.resources.Resource>
       */
      getFurnaceInputResources(): java.util.List<zombie.entity.components.resources.Resource>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFurnaceInputsGroupName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.entity.components.resources.Resource>
       */
      getFurnaceOutputResources(): java.util.List<zombie.entity.components.resources.Resource>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFurnaceOutputsGroupName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFurnaceRecipeTagQuery(): string;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      getFurnaceRecipes(arg0: java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getGameEntity(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.components.resources.ResourceItem
       */
      getInputSlotResource(arg0: number): zombie.entity.components.resources.ResourceItem;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.components.resources.ResourceItem
       */
      getOutputSlotResource(arg0: number): zombie.entity.components.resources.ResourceItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getOwner(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getPossibleRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getProgress(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderLastPriority(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      getRequestingPlayer(): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.components.crafting.FurnaceLogic$FurnaceSlot
       */
      getSlot(arg0: number): zombie.entity.components.crafting.FurnaceLogic$FurnaceSlot;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSlotSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.StartMode
       */
      getStartMode(): zombie.entity.components.crafting.StartMode;
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
      isDoAutomaticCraftCheck(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFinished(): boolean;
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
      isRunning(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRunningInMeta(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStartRequested(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStopRequested(): boolean;
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
       *  - (GameEntityType arg0): boolean
       */
      isValidOwnerType(arg0: zombie.entity.GameEntityType): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, EntityPacketData arg1): void
       */
      sendServerPacketTo(arg0: zombie.characters.IsoPlayer, arg1: zombie.entity.network.EntityPacketData): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendStartRequest(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendStopRequest(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setFuelRecipeTagQuery(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setFurnaceRecipeTagQuery(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      start(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       *  - (IsoPlayer arg0, boolean arg1): void
       */
      stop(arg0: zombie.characters.IsoPlayer, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor FurnaceSlot.new
     * @
     * [CLASS] zombie.entity.components.crafting.FurnaceLogic$FurnaceSlot
     */
    export class FurnaceLogic$FurnaceSlot {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getCurrentRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getElapsedTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getInputResourceID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOutputResourceID(): string;
    }
    /** [ENUM] zombie.entity.components.crafting.InputFlag */
    export class InputFlag {
      protected constructor();
      static readonly AllowDestroyedItem: zombie.entity.components.crafting.InputFlag;
      static readonly AllowFavorite: zombie.entity.components.crafting.InputFlag;
      static readonly AllowFrozenItem: zombie.entity.components.crafting.InputFlag;
      static readonly AllowRottenItem: zombie.entity.components.crafting.InputFlag;
      static readonly AutomationOnly: zombie.entity.components.crafting.InputFlag;
      static readonly CopyClothing: zombie.entity.components.crafting.InputFlag;
      static readonly DontPutBack: zombie.entity.components.crafting.InputFlag;
      static readonly DontReplace: zombie.entity.components.crafting.InputFlag;
      static readonly FakeOutput: zombie.entity.components.crafting.InputFlag;
      static readonly HandcraftOnly: zombie.entity.components.crafting.InputFlag;
      static readonly InheritAmmunition: zombie.entity.components.crafting.InputFlag;
      static readonly InheritColor: zombie.entity.components.crafting.InputFlag;
      static readonly InheritCondition: zombie.entity.components.crafting.InputFlag;
      static readonly InheritFavorite: zombie.entity.components.crafting.InputFlag;
      static readonly InheritFoodAge: zombie.entity.components.crafting.InputFlag;
      static readonly InheritHeadCondition: zombie.entity.components.crafting.InputFlag;
      static readonly InheritSharpness: zombie.entity.components.crafting.InputFlag;
      static readonly InheritUses: zombie.entity.components.crafting.InputFlag;
      static readonly IsCookedFoodItem: zombie.entity.components.crafting.InputFlag;
      static readonly IsDamaged: zombie.entity.components.crafting.InputFlag;
      static readonly IsEmpty: zombie.entity.components.crafting.InputFlag;
      static readonly IsEmptyContainer: zombie.entity.components.crafting.InputFlag;
      static readonly IsFull: zombie.entity.components.crafting.InputFlag;
      static readonly IsHeadPart: zombie.entity.components.crafting.InputFlag;
      static readonly IsNotDull: zombie.entity.components.crafting.InputFlag;
      static readonly IsNotWorn: zombie.entity.components.crafting.InputFlag;
      static readonly IsSharpenable: zombie.entity.components.crafting.InputFlag;
      static readonly IsUncookedFoodItem: zombie.entity.components.crafting.InputFlag;
      static readonly IsUndamaged: zombie.entity.components.crafting.InputFlag;
      static readonly IsWholeFoodItem: zombie.entity.components.crafting.InputFlag;
      static readonly IsWorn: zombie.entity.components.crafting.InputFlag;
      static readonly ItemIsEnergy: zombie.entity.components.crafting.InputFlag;
      static readonly ItemIsFluid: zombie.entity.components.crafting.InputFlag;
      static readonly ItemIsUses: zombie.entity.components.crafting.InputFlag;
      static readonly MayDegrade: zombie.entity.components.crafting.InputFlag;
      static readonly MayDegradeHeavy: zombie.entity.components.crafting.InputFlag;
      static readonly MayDegradeLight: zombie.entity.components.crafting.InputFlag;
      static readonly NoBrokenItems: zombie.entity.components.crafting.InputFlag;
      static readonly NotEmpty: zombie.entity.components.crafting.InputFlag;
      static readonly NotFull: zombie.entity.components.crafting.InputFlag;
      static readonly Prop1: zombie.entity.components.crafting.InputFlag;
      static readonly Prop2: zombie.entity.components.crafting.InputFlag;
      static readonly SharpnessCheck: zombie.entity.components.crafting.InputFlag;
      static readonly ToolLeft: zombie.entity.components.crafting.InputFlag;
      static readonly ToolRight: zombie.entity.components.crafting.InputFlag;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.crafting.InputFlag>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.crafting.InputFlag>;
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
       *  - (String arg0): zombie.entity.components.crafting.InputFlag
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.crafting.InputFlag | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.InputFlag[]
       */
      static values(): zombie.entity.components.crafting.InputFlag[];
    }
    /** [ENUM] zombie.entity.components.crafting.ItemApplyMode */
    export class ItemApplyMode {
      protected constructor();
      static readonly Destroy: zombie.entity.components.crafting.ItemApplyMode;
      static readonly Keep: zombie.entity.components.crafting.ItemApplyMode;
      static readonly Normal: zombie.entity.components.crafting.ItemApplyMode;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.crafting.ItemApplyMode>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.crafting.ItemApplyMode>;
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
       *  - (String arg0): zombie.entity.components.crafting.ItemApplyMode
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.crafting.ItemApplyMode | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.ItemApplyMode[]
       */
      static values(): zombie.entity.components.crafting.ItemApplyMode[];
    }
    /**
     * @customConstructor MashingLogic.new
     * @
     * [CLASS] zombie.entity.components.crafting.MashingLogic extends zombie.entity.Component
     */
    export class MashingLogic {

      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      canStart(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): zombie.entity.components.crafting.CraftRecipeMonitor
       */
      debugCanStart(arg0: zombie.characters.IsoPlayer): zombie.entity.components.crafting.CraftRecipeMonitor;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBarrelConsumedAmount(): number;
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
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getCurrentRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getElapsedTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceFluid
       */
      getFluidBarrel(): zombie.entity.components.resources.ResourceFluid;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getGameEntity(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (List arg0): java.util.List<zombie.entity.components.resources.Resource>
       */
      getInputResources(arg0: java.util.List<zombie.entity.components.resources.Resource>): java.util.List<zombie.entity.components.resources.Resource>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getInputsGroupName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastWorldAge(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getOwner(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getPossibleRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getProgress(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRecipeTagQuery(): string;
      /**
       * Method Parameters: 
       *  - (List arg0): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      getRecipes(arg0: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderLastPriority(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      getRequestingPlayer(): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getResourceFluidID(): string;
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
      isFinished(): boolean;
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
      isRunning(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRunningInMeta(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStartRequested(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStopRequested(): boolean;
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
       *  - (GameEntityType arg0): boolean
       */
      isValidOwnerType(arg0: zombie.entity.GameEntityType): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, EntityPacketData arg1): void
       */
      sendServerPacketTo(arg0: zombie.characters.IsoPlayer, arg1: zombie.entity.network.EntityPacketData): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendStartRequest(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendStopRequest(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setElapsedTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setLastWorldAge(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setRecipeTagQuery(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      start(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       *  - (IsoPlayer arg0, boolean arg1): void
       */
      stop(arg0: zombie.characters.IsoPlayer, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /** [ENUM] zombie.entity.components.crafting.OutputFlag */
    export class OutputFlag {
      protected constructor();
      static readonly AlwaysFill: zombie.entity.components.crafting.OutputFlag;
      static readonly AutomationOnly: zombie.entity.components.crafting.OutputFlag;
      static readonly ForceEmpty: zombie.entity.components.crafting.OutputFlag;
      static readonly HandcraftOnly: zombie.entity.components.crafting.OutputFlag;
      static readonly IsEmpty: zombie.entity.components.crafting.OutputFlag;
      static readonly RespectCapacity: zombie.entity.components.crafting.OutputFlag;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.crafting.OutputFlag>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.crafting.OutputFlag>;
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
       *  - (String arg0): zombie.entity.components.crafting.OutputFlag
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.crafting.OutputFlag | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.OutputFlag[]
       */
      static values(): zombie.entity.components.crafting.OutputFlag[];
    }
    /** [ENUM] zombie.entity.components.crafting.StartMode */
    export class StartMode {
      protected constructor();
      static readonly Automatic: zombie.entity.components.crafting.StartMode;
      static readonly Manual: zombie.entity.components.crafting.StartMode;
      static readonly Passive: zombie.entity.components.crafting.StartMode;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.crafting.StartMode>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBits(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getByteId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.crafting.StartMode>;
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
       *  - (byte arg0): zombie.entity.components.crafting.StartMode
       */
      static fromByteId(arg0: number): zombie.entity.components.crafting.StartMode;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.crafting.StartMode
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.crafting.StartMode | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.StartMode[]
       */
      static values(): zombie.entity.components.crafting.StartMode[];
    }
    /** [ENUM] zombie.entity.components.crafting.TimeMode */
    export class TimeMode {
      protected constructor();
      static readonly GameMinutes: zombie.entity.components.crafting.TimeMode;
      static readonly Seconds: zombie.entity.components.crafting.TimeMode;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.crafting.TimeMode>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBits(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getByteId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.crafting.TimeMode>;
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
       *  - (byte arg0): zombie.entity.components.crafting.TimeMode
       */
      static fromByteId(arg0: number): zombie.entity.components.crafting.TimeMode;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.crafting.TimeMode
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.crafting.TimeMode | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.crafting.TimeMode[]
       */
      static values(): zombie.entity.components.crafting.TimeMode[];
    }
  }
}
