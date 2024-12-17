/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.entity.components.fluids {
    /**
     * @customConstructor Fluid.new
     * @
     * [CLASS] zombie.entity.components.fluids.Fluid
     */
    export class Fluid {
      /** zombie.entity.components.fluids.Fluid */
      static readonly Acid?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly Alcohol?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly AnimalBlood?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly AnimalGrease?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly Beer?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly Bleach?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly Blood?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly CarbonatedWater?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly CleaningLiquid?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly Coffee?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly CowMilk?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly Dye?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly HairDye?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly Honey?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly Mead?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly Petrol?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly PoisonPotent?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly SecretFlavoring?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly SheepMilk?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly SodaPop?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly SpiffoJuice?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly TaintedWater?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly Tea?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly Water?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly Whiskey?: zombie.entity.components.fluids.Fluid;
      /** zombie.entity.components.fluids.Fluid */
      static readonly Wine?: zombie.entity.components.fluids.Fluid;


      /**
       * Method Parameters: 
       *  - (Fluid arg0): boolean
       */
      canBlendWith(arg0: zombie.entity.components.fluids.Fluid): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): com.google.common.collect.ImmutableSet<zombie.entity.components.fluids.FluidCategory>
       */
      getCategories(): com.google.common.collect.ImmutableSet<zombie.entity.components.fluids.FluidCategory>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDisplayName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidType
       */
      getFluidType(): zombie.entity.components.fluids.FluidType;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFluidTypeString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidInstance
       */
      getInstance(): zombie.entity.components.fluids.FluidInstance;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.PoisonInfo
       */
      getPoisonInfo(): zombie.entity.components.fluids.PoisonInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.SealedFluidProperties
       */
      getProperties(): zombie.entity.components.fluids.SealedFluidProperties;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.FluidDefinitionScript
       */
      getScript(): zombie.scripting.objects.FluidDefinitionScript;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedNameLower(): string;
      /**
       * Method Parameters: 
       *  - (FluidCategory arg0): boolean
       */
      isCategory(arg0: zombie.entity.components.fluids.FluidCategory): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPoisonous(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVanilla(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static FluidsInitialized(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.fluids.Fluid
       *  - (FluidType arg0): zombie.entity.components.fluids.Fluid
       */
      static Get(arg0: string | zombie.entity.components.fluids.FluidType): zombie.entity.components.fluids.Fluid;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ScriptLoadMode arg0): void
       */
      static Init(arg0: zombie.scripting.ScriptLoadMode): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static PreReloadScripts(): void;
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
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.Item>
       */
      static getAllFluidItemsDebug(): java.util.ArrayList<zombie.scripting.objects.Item>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.components.fluids.Fluid>
       */
      static getAllFluids(): java.util.ArrayList<zombie.entity.components.fluids.Fluid>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): zombie.entity.components.fluids.Fluid
       */
      static loadFluid(arg0: java.nio.ByteBuffer, arg1: number): zombie.entity.components.fluids.Fluid;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Fluid arg0, ByteBuffer arg1): void
       */
      static saveFluid(arg0: zombie.entity.components.fluids.Fluid, arg1: java.nio.ByteBuffer): void;
    }
    /** [ENUM] zombie.entity.components.fluids.FluidCategory */
    export class FluidCategory {
      protected constructor();
      static readonly Alcoholic: zombie.entity.components.fluids.FluidCategory;
      static readonly Beverage: zombie.entity.components.fluids.FluidCategory;
      static readonly Colors: zombie.entity.components.fluids.FluidCategory;
      static readonly Dyes: zombie.entity.components.fluids.FluidCategory;
      static readonly Fuel: zombie.entity.components.fluids.FluidCategory;
      static readonly HairDyes: zombie.entity.components.fluids.FluidCategory;
      static readonly Hazardous: zombie.entity.components.fluids.FluidCategory;
      static readonly Industrial: zombie.entity.components.fluids.FluidCategory;
      static readonly Medical: zombie.entity.components.fluids.FluidCategory;
      static readonly Paint: zombie.entity.components.fluids.FluidCategory;
      static readonly Poisons: zombie.entity.components.fluids.FluidCategory;
      static readonly Water: zombie.entity.components.fluids.FluidCategory;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.fluids.FluidCategory>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.fluids.FluidCategory>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getId(): number;
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
       *  - (byte arg0): zombie.entity.components.fluids.FluidCategory
       */
      static FromId(arg0: number): zombie.entity.components.fluids.FluidCategory;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.components.fluids.FluidCategory>
       */
      static getList(): java.util.ArrayList<zombie.entity.components.fluids.FluidCategory>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.fluids.FluidCategory
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.fluids.FluidCategory | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidCategory[]
       */
      static values(): zombie.entity.components.fluids.FluidCategory[];
    }
    /**
     * @customConstructor FluidConsume.new
     * @
     * [CLASS] zombie.entity.components.fluids.FluidConsume extends zombie.entity.components.fluids.SealedFluidProperties
     */
    export class FluidConsume {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlcohol(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCalories(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCarbohydrates(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnduranceChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFatigueChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFluReduction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFoodSicknessReduction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHungerChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLipids(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPainReduction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.PoisonEffect
       */
      getPoisonEffect(): zombie.entity.components.fluids.PoisonEffect;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getProteins(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStressChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThirstChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUnhappyChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasProperties(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidConsume
       */
      static Alloc(): zombie.entity.components.fluids.FluidConsume;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): zombie.entity.components.fluids.FluidConsume
       *  - (FluidConsume arg0, ByteBuffer arg1, int arg2): zombie.entity.components.fluids.FluidConsume
       */
      static Load(arg0: java.nio.ByteBuffer | zombie.entity.components.fluids.FluidConsume, arg1: number | java.nio.ByteBuffer, arg2?: number): zombie.entity.components.fluids.FluidConsume;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (FluidConsume arg0, ByteBuffer arg1): void
       */
      static Save(arg0: zombie.entity.components.fluids.FluidConsume, arg1: java.nio.ByteBuffer): void;
    }
    /**
     * @customConstructor FluidContainer.new
     * @
     * [CLASS] zombie.entity.components.fluids.FluidContainer extends zombie.entity.Component
     */
    export class FluidContainer {
      /** java.lang.String */
      static readonly DEF_CONTAINER_NAME?: string;
      /** int */
      static readonly MAX_FLUIDS: number;


      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      Empty(arg0?: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): void
       *  - (Fluid arg0, float arg1): void
       *  - (FluidType arg0, float arg1): void
       */
      addFluid(arg0: string | zombie.entity.components.fluids.Fluid | zombie.entity.components.fluids.FluidType, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      adjustAmount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Fluid arg0, float arg1): void
       */
      adjustSpecificFluidAmount(arg0: zombie.entity.components.fluids.Fluid, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Fluid arg0): boolean
       */
      canAddFluid(arg0: zombie.entity.components.fluids.Fluid): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canPlayerEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Fluid arg0): boolean
       */
      contains(arg0: zombie.entity.components.fluids.Fluid): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidContainer
       */
      copy(): zombie.entity.components.fluids.FluidContainer;
      /**
       * Method Parameters: 
       *  - (FluidContainer arg0): void
       */
      copyFluidsFrom(arg0: zombie.entity.components.fluids.FluidContainer): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidSample
       *  - (float arg0): zombie.entity.components.fluids.FluidSample
       *  - (FluidSample arg0, float arg1): zombie.entity.components.fluids.FluidSample
       */
      createFluidSample(arg0?: number | zombie.entity.components.fluids.FluidSample, arg1?: number): zombie.entity.components.fluids.FluidSample;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidFilter
       */
      getBlacklist(): zombie.entity.components.fluids.FluidFilter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getColor(): zombie.core.Color;
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
       *  - (Empty): string
       */
      getContainerName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCustomDrinkSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFilledRatio(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeCapacity(): number;
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
       *  - (Empty): zombie.entity.components.fluids.PoisonEffect
       */
      getPoisonEffect(): zombie.entity.components.fluids.PoisonEffect;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPoisonRatio(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.Fluid
       */
      getPrimaryFluid(): zombie.entity.components.fluids.Fluid;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPrimaryFluidAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.SealedFluidProperties
       */
      getProperties(): zombie.entity.components.fluids.SealedFluidProperties;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRainCatcher(): number;
      /**
       * Method Parameters: 
       *  - (Fluid arg0): number
       */
      getRatioForFluid(arg0: zombie.entity.components.fluids.Fluid): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderLastPriority(): number;
      /**
       * Method Parameters: 
       *  - (Fluid arg0): number
       */
      getSpecificFluidAmount(arg0: zombie.entity.components.fluids.Fluid): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedContainerName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUiName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      getUsingPlayer(): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidFilter
       */
      getWhitelist(): zombie.entity.components.fluids.FluidFilter;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAddedToEngine(): boolean;
      /**
       * Method Parameters: 
       *  - (FluidCategory arg0): boolean
       */
      isAllCategory(arg0: zombie.entity.components.fluids.FluidCategory): boolean;
      /**
       * Method Parameters: 
       *  - (FluidCategory arg0): boolean
       */
      isCategory(arg0: zombie.entity.components.fluids.FluidCategory): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFull(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenAmount(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInputLocked(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMixture(): boolean;
      /**
       * Method Parameters: 
       *  - (Fluid arg0, IsoGameCharacter arg1): boolean
       */
      isPerceivedFluidToPlayer(arg0: zombie.entity.components.fluids.Fluid, arg1: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPoisonous(): boolean;
      /**
       * Method Parameters: 
       *  - (Fluid arg0): boolean
       */
      isPureFluid(arg0: zombie.entity.components.fluids.Fluid): boolean;
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
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): zombie.entity.components.fluids.FluidConsume
       *  - (float arg0): void
       *  - (float arg0, boolean arg1): zombie.entity.components.fluids.FluidConsume
       *  - (float arg0, boolean arg1, FluidConsume arg2): zombie.entity.components.fluids.FluidConsume
       */
      removeFluid(arg0?: boolean | number, arg1?: boolean, arg2?: zombie.entity.components.fluids.FluidConsume): void | zombie.entity.components.fluids.FluidConsume;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, EntityPacketData arg1): void
       */
      sendServerPacketTo(arg0: zombie.characters.IsoPlayer, arg1: zombie.entity.network.EntityPacketData): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanPlayerEmpty(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setContainerName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setInputLocked(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (FluidContainer arg0): void
       *  - (FluidContainer arg0, float arg1): void
       */
      transferFrom(arg0: zombie.entity.components.fluids.FluidContainer, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (FluidContainer arg0): void
       *  - (FluidContainer arg0, float arg1): void
       */
      transferTo(arg0: zombie.entity.components.fluids.FluidContainer, arg1?: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (FluidContainer arg0, FluidContainer arg1): boolean
       */
      static CanTransfer(arg0: zombie.entity.components.fluids.FluidContainer, arg1: zombie.entity.components.fluids.FluidContainer): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidContainer
       */
      static CreateContainer(): zombie.entity.components.fluids.FluidContainer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (FluidContainer arg0): void
       */
      static DisposeContainer(arg0: zombie.entity.components.fluids.FluidContainer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (FluidContainer arg0, FluidContainer arg1): string
       *  - (FluidContainer arg0, FluidContainer arg1, boolean arg2): string
       */
      static GetTransferReason(arg0: zombie.entity.components.fluids.FluidContainer, arg1: zombie.entity.components.fluids.FluidContainer, arg2?: boolean): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (FluidContainer arg0, FluidContainer arg1): void
       *  - (FluidContainer arg0, FluidContainer arg1, float arg2): void
       *  - (FluidContainer arg0, FluidContainer arg1, float arg2, boolean arg3): void
       */
      static Transfer(arg0: zombie.entity.components.fluids.FluidContainer, arg1: zombie.entity.components.fluids.FluidContainer, arg2?: number, arg3?: boolean): void;
    }
    /**
     * @customConstructor FluidFilter.new
     * @
     * [CLASS] zombie.entity.components.fluids.FluidFilter
     */
    export class FluidFilter {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.fluids.FluidFilter
       *  - (Fluid arg0): zombie.entity.components.fluids.FluidFilter
       *  - (FluidCategory arg0): zombie.entity.components.fluids.FluidFilter
       *  - (FluidType arg0): zombie.entity.components.fluids.FluidFilter
       */
      add(arg0: string | zombie.entity.components.fluids.Fluid | zombie.entity.components.fluids.FluidCategory | zombie.entity.components.fluids.FluidType): zombie.entity.components.fluids.FluidFilter;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (Fluid arg0): boolean
       *  - (FluidType arg0): boolean
       */
      allows(arg0: string | zombie.entity.components.fluids.Fluid | zombie.entity.components.fluids.FluidType): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (Fluid arg0): boolean
       *  - (FluidCategory arg0): boolean
       *  - (FluidType arg0): boolean
       */
      contains(arg0: string | zombie.entity.components.fluids.Fluid | zombie.entity.components.fluids.FluidCategory | zombie.entity.components.fluids.FluidType): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidFilter
       */
      copy(): zombie.entity.components.fluids.FluidFilter;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidFilter$FilterType
       */
      getFilterType(): zombie.entity.components.fluids.FluidFilter$FilterType;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.fluids.FluidFilter
       *  - (Fluid arg0): zombie.entity.components.fluids.FluidFilter
       *  - (FluidCategory arg0): zombie.entity.components.fluids.FluidFilter
       *  - (FluidType arg0): zombie.entity.components.fluids.FluidFilter
       */
      remove(arg0: string | zombie.entity.components.fluids.Fluid | zombie.entity.components.fluids.FluidCategory | zombie.entity.components.fluids.FluidType): zombie.entity.components.fluids.FluidFilter;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setFilterScript(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (FilterType arg0): zombie.entity.components.fluids.FluidFilter
       */
      setFilterType(arg0: zombie.entity.components.fluids.FluidFilter$FilterType): zombie.entity.components.fluids.FluidFilter;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /** [ENUM] zombie.entity.components.fluids.FluidFilter$FilterType */
    export class FluidFilter$FilterType {
      protected constructor();
      static readonly Blacklist: zombie.entity.components.fluids.FluidFilter$FilterType;
      static readonly Whitelist: zombie.entity.components.fluids.FluidFilter$FilterType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.fluids.FluidFilter$FilterType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.fluids.FluidFilter$FilterType>;
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
       *  - (String arg0): zombie.entity.components.fluids.FluidFilter$FilterType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.fluids.FluidFilter$FilterType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidFilter$FilterType[]
       */
      static values(): zombie.entity.components.fluids.FluidFilter$FilterType[];
    }
    /**
     * @customConstructor FluidInstance.new
     * @
     * [CLASS] zombie.entity.components.fluids.FluidInstance
     */
    export class FluidInstance {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidInstance
       */
      copy(): zombie.entity.components.fluids.FluidInstance;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.Fluid
       */
      getFluid(): zombie.entity.components.fluids.Fluid;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedName(): string;
      /**
       * Method Parameters: 
       *  - (Color arg0, float arg1): void
       */
      mixColor(arg0: zombie.core.Color, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Color arg0): void
       *  - (float arg0, float arg1, float arg2): void
       */
      setColor(arg0: zombie.core.Color | number, arg1?: number, arg2?: number): void;
    }
    /**
     * @customConstructor FluidProperties.new
     * @
     * [CLASS] zombie.entity.components.fluids.FluidProperties extends zombie.entity.components.fluids.SealedFluidProperties
     */
    export class FluidProperties {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlcohol(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCalories(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCarbohydrates(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnduranceChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFatigueChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFluReduction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFoodSicknessReduction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHungerChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLipids(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPainReduction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getProteins(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.SealedFluidProperties
       */
      getSealedFluidProperties(): zombie.entity.components.fluids.SealedFluidProperties;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStressChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThirstChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUnhappyChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasProperties(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAlcohol(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCalories(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCarbohydrates(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): void
       */
      setEffects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setEnduranceChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFatigueChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFluReduction(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFoodSicknessReduction(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHungerChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLipids(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setNutrients(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPainReduction(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setProteins(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setReductions(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStressChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setThirstChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setUnhappyChange(arg0: number): void;
    }
    /**
     * @customConstructor FluidSample.new
     * @
     * [CLASS] zombie.entity.components.fluids.FluidSample
     */
    export class FluidSample {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidSample
       */
      copy(): zombie.entity.components.fluids.FluidSample;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.components.fluids.Fluid
       */
      getFluid(arg0: number): zombie.entity.components.fluids.Fluid;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.components.fluids.FluidInstance
       *  - (Fluid arg0): zombie.entity.components.fluids.FluidInstance
       */
      getFluidInstance(arg0: number | zombie.entity.components.fluids.Fluid): zombie.entity.components.fluids.FluidInstance;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getPercentage(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.Fluid
       */
      getPrimaryFluid(): zombie.entity.components.fluids.Fluid;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPureFluid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      scaleToAmount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidSample
       */
      static Alloc(): zombie.entity.components.fluids.FluidSample;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): zombie.entity.components.fluids.FluidSample
       *  - (FluidSample arg0, ByteBuffer arg1, int arg2): zombie.entity.components.fluids.FluidSample
       */
      static Load(arg0: java.nio.ByteBuffer | zombie.entity.components.fluids.FluidSample, arg1: number | java.nio.ByteBuffer, arg2?: number): zombie.entity.components.fluids.FluidSample;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (FluidSample arg0, ByteBuffer arg1): void
       */
      static Save(arg0: zombie.entity.components.fluids.FluidSample, arg1: java.nio.ByteBuffer): void;
    }
    /** [ENUM] zombie.entity.components.fluids.FluidType */
    export class FluidType {
      protected constructor();
      static readonly Acid: zombie.entity.components.fluids.FluidType;
      static readonly Alcohol: zombie.entity.components.fluids.FluidType;
      static readonly AnimalBlood: zombie.entity.components.fluids.FluidType;
      static readonly AnimalGrease: zombie.entity.components.fluids.FluidType;
      static readonly Beer: zombie.entity.components.fluids.FluidType;
      static readonly Bleach: zombie.entity.components.fluids.FluidType;
      static readonly Blood: zombie.entity.components.fluids.FluidType;
      static readonly CarbonatedWater: zombie.entity.components.fluids.FluidType;
      static readonly CleaningLiquid: zombie.entity.components.fluids.FluidType;
      static readonly Coffee: zombie.entity.components.fluids.FluidType;
      static readonly CowMilk: zombie.entity.components.fluids.FluidType;
      static readonly Dye: zombie.entity.components.fluids.FluidType;
      static readonly HairDye: zombie.entity.components.fluids.FluidType;
      static readonly Honey: zombie.entity.components.fluids.FluidType;
      static readonly Mead: zombie.entity.components.fluids.FluidType;
      static readonly Modded: zombie.entity.components.fluids.FluidType;
      static readonly None: zombie.entity.components.fluids.FluidType;
      static readonly Paint: zombie.entity.components.fluids.FluidType;
      static readonly Petrol: zombie.entity.components.fluids.FluidType;
      static readonly PoisonNormal: zombie.entity.components.fluids.FluidType;
      static readonly PoisonPotent: zombie.entity.components.fluids.FluidType;
      static readonly PoisonStrong: zombie.entity.components.fluids.FluidType;
      static readonly PoisonWeak: zombie.entity.components.fluids.FluidType;
      static readonly SecretFlavoring: zombie.entity.components.fluids.FluidType;
      static readonly SheepMilk: zombie.entity.components.fluids.FluidType;
      static readonly SodaPop: zombie.entity.components.fluids.FluidType;
      static readonly SpiffoJuice: zombie.entity.components.fluids.FluidType;
      static readonly TaintedWater: zombie.entity.components.fluids.FluidType;
      static readonly Tea: zombie.entity.components.fluids.FluidType;
      static readonly Water: zombie.entity.components.fluids.FluidType;
      static readonly Whiskey: zombie.entity.components.fluids.FluidType;
      static readonly Wine: zombie.entity.components.fluids.FluidType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.fluids.FluidType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.fluids.FluidType>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getId(): number;
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
       * Method Parameters: 
       *  - (Empty): string
       */
      toStringLower(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (byte arg0): zombie.entity.components.fluids.FluidType
       */
      static FromId(arg0: number): zombie.entity.components.fluids.FluidType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.fluids.FluidType
       */
      static FromNameLower(arg0: string): zombie.entity.components.fluids.FluidType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static containsNameLowercase(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getAllFluidName(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.fluids.FluidType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.fluids.FluidType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidType[]
       */
      static values(): zombie.entity.components.fluids.FluidType[];
    }
    /**
     * @customConstructor FluidUtil.new
     * @
     * [CLASS] zombie.entity.components.fluids.FluidUtil
     */
    export class FluidUtil {
      /** float */
      static readonly MIN_CONTAINER_CAPACITY: number;
      /** float */
      static readonly MIN_TRANSFER_ACTION_TIME: number;
      /** float */
      static readonly MIN_UNIT: number;
      /** float */
      static readonly TRANSFER_ACTION_TIME_PER_LITER: number;
      /** float */
      static readonly UNIT_L: number;
      /** float */
      static readonly UNIT_cL: number;
      /** float */
      static readonly UNIT_cmL: number;
      /** float */
      static readonly UNIT_dL: number;
      /** float */
      static readonly UNIT_dmL: number;
      /** float */
      static readonly UNIT_mL: number;
      /** float */
      static readonly UNIT_uL: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): string
       */
      static getAmountFormatted(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): string
       */
      static getAmountLiter(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): string
       */
      static getAmountLiter10(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): string
       */
      static getAmountLiter1000(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): string
       */
      static getAmountMilli(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMinContainerCapacity(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMinTransferActionTime(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMinUnit(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getTransferActionTimePerLiter(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getUnitCentiLiter(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getUnitCentiMilliLiter(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getUnitDeciLiter(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getUnitDeciMilliLiter(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getUnitLiter(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getUnitMicroLiter(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getUnitMilliLiter(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static roundTransfer(arg0: number): number;
    }
    /** [ENUM] zombie.entity.components.fluids.PoisonEffect */
    export class PoisonEffect {
      protected constructor();
      static readonly Deadly: zombie.entity.components.fluids.PoisonEffect;
      static readonly Extreme: zombie.entity.components.fluids.PoisonEffect;
      static readonly Medium: zombie.entity.components.fluids.PoisonEffect;
      static readonly Mild: zombie.entity.components.fluids.PoisonEffect;
      static readonly None: zombie.entity.components.fluids.PoisonEffect;
      static readonly Severe: zombie.entity.components.fluids.PoisonEffect;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.fluids.PoisonEffect>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.fluids.PoisonEffect>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerEffect(): number;
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
       * Method Parameters: 
       *  - (Empty): string
       */
      toStringLower(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.entity.components.fluids.PoisonEffect
       */
      static FromLevel(arg0: number): zombie.entity.components.fluids.PoisonEffect;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.fluids.PoisonEffect
       */
      static FromNameLower(arg0: string): zombie.entity.components.fluids.PoisonEffect;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static containsNameLowercase(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.fluids.PoisonEffect
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.fluids.PoisonEffect | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.PoisonEffect[]
       */
      static values(): zombie.entity.components.fluids.PoisonEffect[];
    }
    /**
     * @customConstructor PoisonInfo.new
     * @
     * [CLASS] zombie.entity.components.fluids.PoisonInfo
     */
    export class PoisonInfo {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.Fluid
       */
      getFluid(): zombie.entity.components.fluids.Fluid;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): zombie.entity.components.fluids.PoisonEffect
       */
      getPoisonEffect(arg0: number, arg1: number): zombie.entity.components.fluids.PoisonEffect;
    }
    /**
     * @customConstructor SealedFluidProperties.new
     * @
     * [CLASS] zombie.entity.components.fluids.SealedFluidProperties
     */
    export class SealedFluidProperties {
      /** java.lang.String */
      static readonly Str_Alcohol?: string;
      /** java.lang.String */
      static readonly Str_Calories?: string;
      /** java.lang.String */
      static readonly Str_Carbohydrates?: string;
      /** java.lang.String */
      static readonly Str_Endurance?: string;
      /** java.lang.String */
      static readonly Str_Fatigue?: string;
      /** java.lang.String */
      static readonly Str_Flu?: string;
      /** java.lang.String */
      static readonly Str_FoodSickness?: string;
      /** java.lang.String */
      static readonly Str_Hunger?: string;
      /** java.lang.String */
      static readonly Str_Lipids?: string;
      /** java.lang.String */
      static readonly Str_Pain?: string;
      /** java.lang.String */
      static readonly Str_Proteins?: string;
      /** java.lang.String */
      static readonly Str_Stress?: string;
      /** java.lang.String */
      static readonly Str_Thirst?: string;
      /** java.lang.String */
      static readonly Str_Unhappy?: string;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlcohol(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCalories(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCarbohydrates(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnduranceChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFatigueChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFluReduction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFoodSicknessReduction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHungerChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLipids(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPainReduction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getProteins(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStressChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThirstChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUnhappyChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasProperties(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
    }
  }
}
