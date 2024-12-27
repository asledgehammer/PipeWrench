/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.entity.components.resources {
    /**
     * @customConstructor Resource.new
     * @
     * [ABSTRACT CLASS] zombie.entity.components.resources.Resource
     */
    export class Resource {

      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       *  - (InventoryItem arg0, boolean arg1): boolean
       */
      acceptsItem(arg0: zombie.inventory.InventoryItem, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      canDrainFromItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      canDrainToItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canMoveItemsToOutput(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       *  - (Item arg0): boolean
       */
      canStackItem(arg0: zombie.inventory.InventoryItem | zombie.scripting.objects.Item): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      containsItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      drainFromItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      drainToItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceChannel
       */
      getChannel(): zombie.entity.components.resources.ResourceChannel;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugFlagsString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnergyAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnergyCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFilterName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFluidAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFluidCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeEnergyCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeFluidCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeItemCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeItemUsesCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getGameEntity(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceIO
       */
      getIO(): zombie.entity.components.resources.ResourceIO;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemUsesAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemUsesCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getProgress(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.Resources
       */
      getResourcesComponent(): zombie.entity.components.resources.Resources;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceType
       */
      getType(): zombie.entity.components.resources.ResourceType;
      /**
       * Method Parameters: 
       *  - (ResourceFlag arg0): boolean
       */
      hasFlag(arg0: zombie.entity.components.resources.ResourceFlag): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAutoDecay(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDirty(): boolean;
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
      isLocked(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      loadSync(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0, boolean arg1): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.InventoryItem
       */
      offerItem(arg0: zombie.inventory.InventoryItem, arg1?: boolean, arg2?: boolean, arg3?: boolean): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      peekItem(arg0?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       *  - (boolean arg0, boolean arg1): zombie.inventory.InventoryItem
       */
      pollItem(arg0?: boolean, arg1?: boolean): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      saveSync(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDirty(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLocked(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setProgress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Resource arg0): void
       *  - (Resource arg0, float arg1): void
       */
      tryTransferTo(arg0: zombie.entity.components.resources.Resource, arg1?: number): void;
    }
    /**
     * @customConstructor ResourceBlueprint.new
     * @
     * [CLASS] zombie.entity.components.resources.ResourceBlueprint
     */
    export class ResourceBlueprint {
      /** java.lang.String */
      static readonly serialElementSeparator?: string;
      /** java.lang.String */
      static readonly serialSubSeparator?: string;


      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceChannel
       */
      getChannel(): zombie.entity.components.resources.ResourceChannel;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFilter(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFlagBits(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceIO
       */
      getIO(): zombie.entity.components.resources.ResourceIO;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceType
       */
      getType(): zombie.entity.components.resources.ResourceType;
      /**
       * Method Parameters: 
       *  - (ResourceFlag arg0): boolean
       */
      hasFlag(arg0: zombie.entity.components.resources.ResourceFlag): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.resources.ResourceBlueprint
       *  - (ResourceBlueprint arg0, String arg1): zombie.entity.components.resources.ResourceBlueprint
       *  - (ResourceBlueprint arg0, String arg1, boolean arg2): zombie.entity.components.resources.ResourceBlueprint
       */
      static Deserialize(arg0: string | zombie.entity.components.resources.ResourceBlueprint, arg1?: string, arg2?: boolean): zombie.entity.components.resources.ResourceBlueprint;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.resources.ResourceBlueprint
       */
      static DeserializeFromScript(arg0: string): zombie.entity.components.resources.ResourceBlueprint;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ResourceBlueprint arg0): string
       *  - (String arg0, ResourceType arg1, ResourceIO arg2, float arg3, String arg4, ResourceChannel arg5, EnumBitStore arg6): string
       */
      static Serialize(arg0: zombie.entity.components.resources.ResourceBlueprint | string, arg1?: zombie.entity.components.resources.ResourceType, arg2?: zombie.entity.components.resources.ResourceIO, arg3?: number, arg4?: string, arg5?: zombie.entity.components.resources.ResourceChannel, arg6?: zombie.entity.util.enums.EnumBitStore<zombie.entity.components.resources.ResourceFlag>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, ResourceType arg1, ResourceIO arg2, float arg3, String arg4, ResourceChannel arg5, EnumBitStore arg6): zombie.entity.components.resources.ResourceBlueprint
       */
      static alloc(arg0: string, arg1: zombie.entity.components.resources.ResourceType, arg2: zombie.entity.components.resources.ResourceIO, arg3: number, arg4: string, arg5: zombie.entity.components.resources.ResourceChannel, arg6: zombie.entity.util.enums.EnumBitStore<zombie.entity.components.resources.ResourceFlag>): zombie.entity.components.resources.ResourceBlueprint;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ResourceBlueprint arg0): void
       */
      static release(arg0: zombie.entity.components.resources.ResourceBlueprint): void;
    }
    /** [ENUM] zombie.entity.components.resources.ResourceChannel */
    export class ResourceChannel {
      protected constructor();
      static readonly Channel_Blue: zombie.entity.components.resources.ResourceChannel;
      static readonly Channel_Cyan: zombie.entity.components.resources.ResourceChannel;
      static readonly Channel_Green: zombie.entity.components.resources.ResourceChannel;
      static readonly Channel_Magenta: zombie.entity.components.resources.ResourceChannel;
      static readonly Channel_Orange: zombie.entity.components.resources.ResourceChannel;
      static readonly Channel_Purple: zombie.entity.components.resources.ResourceChannel;
      static readonly Channel_Red: zombie.entity.components.resources.ResourceChannel;
      static readonly Channel_Yellow: zombie.entity.components.resources.ResourceChannel;
      static readonly NO_CHANNEL: zombie.entity.components.resources.ResourceChannel;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.resources.ResourceChannel>>;
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
       *  - (Empty): zombie.core.Color
       */
      getColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.resources.ResourceChannel>;
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
       *  - (byte arg0): zombie.entity.components.resources.ResourceChannel
       */
      static fromId(arg0: number): zombie.entity.components.resources.ResourceChannel;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.resources.ResourceChannel
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.resources.ResourceChannel | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceChannel[]
       */
      static values(): zombie.entity.components.resources.ResourceChannel[];
    }
    /**
     * @customConstructor ResourceEnergy.new
     * @
     * [CLASS] zombie.entity.components.resources.ResourceEnergy extends zombie.entity.components.resources.Resource
     */
    export class ResourceEnergy {

      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       *  - (InventoryItem arg0, boolean arg1): boolean
       */
      acceptsItem(arg0: zombie.inventory.InventoryItem, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      canDrainFromItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      canDrainToItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canMoveItemsToOutput(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       *  - (Item arg0): boolean
       */
      canStackItem(arg0: zombie.inventory.InventoryItem | zombie.scripting.objects.Item): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      containsItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      drainFromItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      drainToItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceChannel
       */
      getChannel(): zombie.entity.components.resources.ResourceChannel;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugFlagsString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.energy.Energy
       */
      getEnergy(): zombie.entity.energy.Energy;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnergyAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnergyCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnergyRatio(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFilterName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFluidAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFluidCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeEnergyCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeFluidCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeItemCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeItemUsesCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getGameEntity(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceIO
       */
      getIO(): zombie.entity.components.resources.ResourceIO;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemUsesAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemUsesCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getProgress(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.Resources
       */
      getResourcesComponent(): zombie.entity.components.resources.Resources;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceType
       */
      getType(): zombie.entity.components.resources.ResourceType;
      /**
       * Method Parameters: 
       *  - (ResourceFlag arg0): boolean
       */
      hasFlag(arg0: zombie.entity.components.resources.ResourceFlag): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAutoDecay(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDirty(): boolean;
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
      isLocked(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      loadSync(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0, boolean arg1): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.InventoryItem
       */
      offerItem(arg0: zombie.inventory.InventoryItem, arg1?: boolean, arg2?: boolean, arg3?: boolean): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      peekItem(arg0?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       *  - (boolean arg0, boolean arg1): zombie.inventory.InventoryItem
       */
      pollItem(arg0?: boolean, arg1?: boolean): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      saveSync(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDirty(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): boolean
       */
      setEnergyAmount(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLocked(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setProgress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ResourceEnergy arg0, float arg1): void
       */
      transferTo(arg0: zombie.entity.components.resources.ResourceEnergy, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Resource arg0): void
       *  - (Resource arg0, float arg1): void
       */
      tryTransferTo(arg0: zombie.entity.components.resources.Resource, arg1?: number): void;
    }
    /** [ENUM] zombie.entity.components.resources.ResourceFlag */
    export class ResourceFlag {
      protected constructor();
      static readonly AutoDecay: zombie.entity.components.resources.ResourceFlag;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.resources.ResourceFlag>>;
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
      getDeclaringClass(): java.lang.Class<zombie.entity.components.resources.ResourceFlag>;
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
       *  - (byte arg0): zombie.entity.components.resources.ResourceFlag
       */
      static fromByteId(arg0: number): zombie.entity.components.resources.ResourceFlag;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.resources.ResourceFlag
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.resources.ResourceFlag | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceFlag[]
       */
      static values(): zombie.entity.components.resources.ResourceFlag[];
    }
    /**
     * @customConstructor ResourceFluid.new
     * @
     * [CLASS] zombie.entity.components.resources.ResourceFluid extends zombie.entity.components.resources.Resource
     */
    export class ResourceFluid {

      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       *  - (InventoryItem arg0, boolean arg1): boolean
       */
      acceptsItem(arg0: zombie.inventory.InventoryItem, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      canDrainFromItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      canDrainToItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canMoveItemsToOutput(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       *  - (Item arg0): boolean
       */
      canStackItem(arg0: zombie.inventory.InventoryItem | zombie.scripting.objects.Item): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      containsItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      drainFromItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      drainToItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceChannel
       */
      getChannel(): zombie.entity.components.resources.ResourceChannel;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugFlagsString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnergyAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnergyCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFilterName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFluidAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFluidCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidContainer
       */
      getFluidContainer(): zombie.entity.components.fluids.FluidContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFluidRatio(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeEnergyCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeFluidCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeItemCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeItemUsesCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getGameEntity(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceIO
       */
      getIO(): zombie.entity.components.resources.ResourceIO;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemUsesAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemUsesCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getProgress(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.Resources
       */
      getResourcesComponent(): zombie.entity.components.resources.Resources;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceType
       */
      getType(): zombie.entity.components.resources.ResourceType;
      /**
       * Method Parameters: 
       *  - (ResourceFlag arg0): boolean
       */
      hasFlag(arg0: zombie.entity.components.resources.ResourceFlag): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAutoDecay(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDirty(): boolean;
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
      isLocked(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      loadSync(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0, boolean arg1): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.InventoryItem
       */
      offerItem(arg0: zombie.inventory.InventoryItem, arg1?: boolean, arg2?: boolean, arg3?: boolean): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      peekItem(arg0?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       *  - (boolean arg0, boolean arg1): zombie.inventory.InventoryItem
       */
      pollItem(arg0?: boolean, arg1?: boolean): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      saveSync(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDirty(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLocked(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setProgress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ResourceFluid arg0, float arg1): void
       */
      transferTo(arg0: zombie.entity.components.resources.ResourceFluid, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Resource arg0): void
       *  - (Resource arg0, float arg1): void
       */
      tryTransferTo(arg0: zombie.entity.components.resources.Resource, arg1?: number): void;
    }
    /**
     * @customConstructor ResourceGroup.new
     * @
     * [CLASS] zombie.entity.components.resources.ResourceGroup
     */
    export class ResourceGroup {

      /**
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.resources.Resource
       */
      get(arg0: string): zombie.entity.components.resources.Resource;
      /**
       * Method Parameters: 
       *  - (Resource arg0): number
       */
      getIndex(arg0: zombie.entity.components.resources.Resource): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.entity.components.resources.Resource>
       *  - (List arg0, ResourceChannel arg1): java.util.List<zombie.entity.components.resources.Resource>
       *  - (List arg0, ResourceIO arg1): java.util.List<zombie.entity.components.resources.Resource>
       *  - (List arg0, ResourceType arg1): java.util.List<zombie.entity.components.resources.Resource>
       *  - (List arg0, ResourceIO arg1, ResourceChannel arg2): java.util.List<zombie.entity.components.resources.Resource>
       *  - (List arg0, ResourceIO arg1, ResourceType arg2): java.util.List<zombie.entity.components.resources.Resource>
       */
      getResources(arg0?: java.util.List<zombie.entity.components.resources.Resource>, arg1?: zombie.entity.components.resources.ResourceChannel | zombie.entity.components.resources.ResourceIO | zombie.entity.components.resources.ResourceType, arg2?: zombie.entity.components.resources.ResourceChannel | zombie.entity.components.resources.ResourceType): java.util.List<zombie.entity.components.resources.Resource>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDirty(): boolean;
    }
    /** [ENUM] zombie.entity.components.resources.ResourceIO */
    export class ResourceIO {
      protected constructor();
      static readonly Any: zombie.entity.components.resources.ResourceIO;
      static readonly Input: zombie.entity.components.resources.ResourceIO;
      static readonly Output: zombie.entity.components.resources.ResourceIO;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.resources.ResourceIO>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.resources.ResourceIO>;
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
       *  - (byte arg0): zombie.entity.components.resources.ResourceIO
       */
      static fromId(arg0: number): zombie.entity.components.resources.ResourceIO;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.resources.ResourceIO
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.resources.ResourceIO | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceIO[]
       */
      static values(): zombie.entity.components.resources.ResourceIO[];
    }
    /**
     * @customConstructor ResourceItem.new
     * @
     * [CLASS] zombie.entity.components.resources.ResourceItem extends zombie.entity.components.resources.Resource
     */
    export class ResourceItem {

      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       *  - (InventoryItem arg0, boolean arg1): boolean
       */
      acceptsItem(arg0: zombie.inventory.InventoryItem, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      canDrainFromItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      canDrainToItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canMoveItemsToOutput(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       *  - (Item arg0): boolean
       */
      canStackItem(arg0: zombie.inventory.InventoryItem | zombie.scripting.objects.Item): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      containsItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      drainFromItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      drainToItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceChannel
       */
      getChannel(): zombie.entity.components.resources.ResourceChannel;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugFlagsString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnergyAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEnergyCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFilterName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFluidAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFluidCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeEnergyCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeFluidCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeItemCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFreeItemUsesCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getGameEntity(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceIO
       */
      getIO(): zombie.entity.components.resources.ResourceIO;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemFilter
       */
      getItemFilter(): zombie.inventory.ItemFilter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemUsesAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemUsesCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getProgress(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.Resources
       */
      getResourcesComponent(): zombie.entity.components.resources.Resources;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getStoredItems(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceType
       */
      getType(): zombie.entity.components.resources.ResourceType;
      /**
       * Method Parameters: 
       *  - (ResourceFlag arg0): boolean
       */
      hasFlag(arg0: zombie.entity.components.resources.ResourceFlag): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAutoDecay(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDirty(): boolean;
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
      isLocked(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      loadSync(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0, boolean arg1): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0, boolean arg1, boolean arg2, boolean arg3): zombie.inventory.InventoryItem
       */
      offerItem(arg0: zombie.inventory.InventoryItem, arg1?: boolean, arg2?: boolean, arg3?: boolean): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (ArrayList arg0, boolean arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      offerItems(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>, arg1?: boolean): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      peekItem(arg0?: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       *  - (boolean arg0, boolean arg1): zombie.inventory.InventoryItem
       */
      pollItem(arg0?: boolean, arg1?: boolean): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      removeAllItems(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      saveSync(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDirty(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLocked(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setProgress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      storedSize(): number;
      /**
       * Method Parameters: 
       *  - (ResourceItem arg0, int arg1): void
       */
      transferTo(arg0: zombie.entity.components.resources.ResourceItem, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, int arg2, String arg3, boolean arg4): boolean
       */
      tryLoadSyncItems(arg0: java.nio.ByteBuffer, arg1: number, arg2: number, arg3: string, arg4: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Resource arg0): void
       *  - (Resource arg0, float arg1): void
       */
      tryTransferTo(arg0: zombie.entity.components.resources.Resource, arg1?: number): void;
    }
    /** [ENUM] zombie.entity.components.resources.ResourceType */
    export class ResourceType {
      protected constructor();
      static readonly Any: zombie.entity.components.resources.ResourceType;
      static readonly Energy: zombie.entity.components.resources.ResourceType;
      static readonly Fluid: zombie.entity.components.resources.ResourceType;
      static readonly Item: zombie.entity.components.resources.ResourceType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.resources.ResourceType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.resources.ResourceType>;
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
       *  - (byte arg0): zombie.entity.components.resources.ResourceType
       */
      static fromId(arg0: number): zombie.entity.components.resources.ResourceType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.resources.ResourceType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.resources.ResourceType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.resources.ResourceType[]
       */
      static values(): zombie.entity.components.resources.ResourceType[];
    }
    /**
     * @customConstructor Resources.new
     * @
     * [CLASS] zombie.entity.components.resources.Resources extends zombie.entity.Component
     */
    export class Resources {
      /** java.lang.String */
      static readonly defaultGroup?: string;


      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
      /**
       * Method Parameters: 
       *  - (ResourceBlueprint arg0): void
       *  - (String arg0, ResourceBlueprint arg1): void
       */
      createResource(arg0: zombie.entity.components.resources.ResourceBlueprint | string, arg1?: zombie.entity.components.resources.ResourceBlueprint): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, String arg1): void
       */
      createResourceFromSerial(arg0: string, arg1?: string): void;
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
       *  - (int arg0): zombie.entity.components.resources.Resource
       *  - (String arg0): zombie.entity.components.resources.Resource
       */
      getResource(arg0: number | string): zombie.entity.components.resources.Resource;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getResourceCount(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.resources.ResourceGroup
       */
      getResourceGroup(arg0: string): zombie.entity.components.resources.ResourceGroup;
      /**
       * Method Parameters: 
       *  - (Resource arg0): number
       */
      getResourceIndex(arg0: zombie.entity.components.resources.Resource): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.entity.components.resources.Resource>
       *  - (List arg0, ResourceChannel arg1): java.util.List<zombie.entity.components.resources.Resource>
       *  - (List arg0, ResourceIO arg1): java.util.List<zombie.entity.components.resources.Resource>
       *  - (List arg0, ResourceType arg1): java.util.List<zombie.entity.components.resources.Resource>
       *  - (List arg0, ResourceIO arg1, ResourceChannel arg2): java.util.List<zombie.entity.components.resources.Resource>
       *  - (List arg0, ResourceIO arg1, ResourceType arg2): java.util.List<zombie.entity.components.resources.Resource>
       */
      getResources(arg0?: java.util.List<zombie.entity.components.resources.Resource>, arg1?: zombie.entity.components.resources.ResourceChannel | zombie.entity.components.resources.ResourceIO | zombie.entity.components.resources.ResourceType, arg2?: zombie.entity.components.resources.ResourceChannel | zombie.entity.components.resources.ResourceType): java.util.List<zombie.entity.components.resources.Resource>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.List<zombie.entity.components.resources.Resource>
       */
      getResourcesForGroup(arg0: string): java.util.List<zombie.entity.components.resources.Resource>;
      /**
       * Method Parameters: 
       *  - (String arg0, List arg1, ResourceChannel arg2): java.util.List<zombie.entity.components.resources.Resource>
       *  - (String arg0, List arg1, ResourceIO arg2): java.util.List<zombie.entity.components.resources.Resource>
       *  - (String arg0, List arg1, ResourceType arg2): java.util.List<zombie.entity.components.resources.Resource>
       *  - (String arg0, List arg1, ResourceIO arg2, ResourceChannel arg3): java.util.List<zombie.entity.components.resources.Resource>
       *  - (String arg0, List arg1, ResourceIO arg2, ResourceType arg3): java.util.List<zombie.entity.components.resources.Resource>
       */
      getResourcesFromGroup(arg0: string, arg1: java.util.List<zombie.entity.components.resources.Resource>, arg2: zombie.entity.components.resources.ResourceChannel | zombie.entity.components.resources.ResourceIO | zombie.entity.components.resources.ResourceType, arg3?: zombie.entity.components.resources.ResourceChannel | zombie.entity.components.resources.ResourceType): java.util.List<zombie.entity.components.resources.Resource>;
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
       *  - (String arg0): void
       *  - (Resource arg0): void
       */
      removeResource(arg0: string | zombie.entity.components.resources.Resource): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (ResourceGroup arg0): void
       */
      removeResourceGroup(arg0: string | zombie.entity.components.resources.ResourceGroup): void;
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
  }
}
