/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.entity {
    /**
     * @customConstructor Component.new
     * @
     * [ABSTRACT CLASS] zombie.entity.Component
     */
    export class Component {

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
    /** [ENUM] zombie.entity.ComponentType */
    export class ComponentType {
      protected constructor();
      static readonly Attributes: zombie.entity.ComponentType;
      static readonly CraftBench: zombie.entity.ComponentType;
      static readonly CraftLogic: zombie.entity.ComponentType;
      static readonly CraftRecipe: zombie.entity.ComponentType;
      static readonly DryingLogic: zombie.entity.ComponentType;
      static readonly FluidContainer: zombie.entity.ComponentType;
      static readonly FurnaceLogic: zombie.entity.ComponentType;
      static readonly Lua: zombie.entity.ComponentType;
      static readonly MashingLogic: zombie.entity.ComponentType;
      static readonly MetaTag: zombie.entity.ComponentType;
      static readonly Parts: zombie.entity.ComponentType;
      static readonly Resources: zombie.entity.ComponentType;
      static readonly Script: zombie.entity.ComponentType;
      static readonly Signals: zombie.entity.ComponentType;
      static readonly SpriteConfig: zombie.entity.ComponentType;
      static readonly TestComponent: zombie.entity.ComponentType;
      static readonly UiConfig: zombie.entity.ComponentType;
      static readonly Undefined: zombie.entity.ComponentType;
      name(): string;
      ordinal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.Component
       */
      CreateComponent(): zombie.entity.Component;
      /**
       * Method Parameters: 
       *  - (ComponentScript arg0): zombie.entity.Component
       */
      CreateComponentFromScript(arg0: zombie.scripting.entity.ComponentScript): zombie.entity.Component;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.ComponentScript
       */
      CreateComponentScript(): zombie.scripting.entity.ComponentScript;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<zombie.entity.Component>
       */
      GetComponentClass(): java.lang.Class<zombie.entity.Component>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetID(): number;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.ComponentType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.ComponentType>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAddToEngine(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRenderLast(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRunInMeta(): boolean;
      /**
       * Method Parameters: 
       *  - (GameEntityType arg0): boolean
       */
      isValidGameEntityType(arg0: zombie.entity.GameEntityType): boolean;
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
       *  - (Class arg0): zombie.entity.ComponentType
       */
      static FromClass(arg0: java.lang.Class<zombie.entity.Component>): zombie.entity.ComponentType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (short arg0): zombie.entity.ComponentType
       */
      static FromId(arg0: number): zombie.entity.ComponentType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.ComponentType>
       */
      static GetList(): java.util.ArrayList<zombie.entity.ComponentType>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Component arg0): void
       */
      static ReleaseComponent(arg0: zombie.entity.Component): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ComponentType... arg0): zombie.entity.util.BitSet
       */
      static getBitsFor(arg0: zombie.entity.ComponentType[]): zombie.entity.util.BitSet;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.ComponentType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.ComponentType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.ComponentType[]
       */
      static values(): zombie.entity.ComponentType[];
    }
    /**
     * @customConstructor EntityBucket.new
     * @
     * [ABSTRACT CLASS] zombie.entity.EntityBucket
     */
    export class EntityBucket {

      /**
       * Method Parameters: 
       *  - (int arg0, IBucketListener arg1): void
       */
      addListener(arg0: number, arg1: zombie.entity.IBucketListener): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.util.ImmutableArray<zombie.entity.GameEntity>
       */
      getEntities(): zombie.entity.util.ImmutableArray<zombie.entity.GameEntity>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIndex(): number;
      /**
       * Method Parameters: 
       *  - (IBucketListener arg0): void
       */
      removeListener(arg0: zombie.entity.IBucketListener): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVerbose(arg0: boolean): void;
    }
    /**
     * @customConstructor EntityValidator.new
     * @
     * [INTERFACE] zombie.entity.EntityBucket$EntityValidator
     */
    export class EntityBucket$EntityValidator {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (GameEntity arg0): boolean
       */
      acceptsEntity(arg0: zombie.entity.GameEntity): boolean;
    }
    /**
     * @customConstructor Family.new
     * @
     * [CLASS] zombie.entity.Family
     */
    export class Family {

      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (GameEntity arg0): boolean
       */
      matches(arg0: zombie.entity.GameEntity): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ComponentType... arg0): zombie.entity.Family$Builder
       */
      static all(arg0: zombie.entity.ComponentType[]): zombie.entity.Family$Builder;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ComponentType... arg0): zombie.entity.Family$Builder
       */
      static exclude(arg0: zombie.entity.ComponentType[]): zombie.entity.Family$Builder;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ComponentType... arg0): zombie.entity.Family$Builder
       */
      static one(arg0: zombie.entity.ComponentType[]): zombie.entity.Family$Builder;
    }
    /**
     * @customConstructor Builder.new
     * @
     * [CLASS] zombie.entity.Family$Builder
     */
    export class Family$Builder {

      /**
       * Method Parameters: 
       *  - (ComponentType... arg0): zombie.entity.Family$Builder
       */
      all(arg0: zombie.entity.ComponentType[]): zombie.entity.Family$Builder;
      /**
       * Method Parameters: 
       *  - (ComponentType... arg0): zombie.entity.Family$Builder
       */
      exclude(arg0: zombie.entity.ComponentType[]): zombie.entity.Family$Builder;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.Family
       */
      get(): zombie.entity.Family;
      /**
       * Method Parameters: 
       *  - (ComponentType... arg0): zombie.entity.Family$Builder
       */
      one(arg0: zombie.entity.ComponentType[]): zombie.entity.Family$Builder;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.Family$Builder
       */
      reset(): zombie.entity.Family$Builder;
    }
    /**
     * @customConstructor GameEntity.new
     * @
     * [ABSTRACT CLASS] zombie.entity.GameEntity
     */
    export class GameEntity {
      /** java.lang.String */
      static readonly DEFAULT_ENTITY_DISPLAY_NAME?: string;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addToWorld(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeContainer
       */
      attrib(): zombie.entity.components.attributes.AttributeContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      componentSize(): number;
      /**
       * Method Parameters: 
       *  - (Component arg0): boolean
       */
      containsComponent(arg0: zombie.entity.Component): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeContainer
       */
      getAttributes(): zombie.entity.components.attributes.AttributeContainer;
      /**
       * Method Parameters: 
       *  - (ComponentType arg0): T
       */
      getComponent<T>(arg0: zombie.entity.ComponentType): T;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.Component
       */
      getComponentForIndex(arg0: number): zombie.entity.Component;
      /**
       * Method Parameters: 
       *  - (short arg0): zombie.entity.Component
       */
      getComponentFromID(arg0: number): zombie.entity.Component;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEntityDisplayName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEntityFullTypeDebug(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEntityNetID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getExceptionCompatibleString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidContainer
       */
      getFluidContainer(): zombie.entity.components.fluids.FluidContainer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntityType
       */
      getGameEntityType(): zombie.entity.GameEntityType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.spriteconfig.SpriteConfig
       */
      getSpriteConfig(): zombie.entity.components.spriteconfig.SpriteConfig;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      getUsingPlayer(): zombie.characters.IsoPlayer;
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
       *  - (ComponentType arg0): boolean
       */
      hasComponent(arg0: zombie.entity.ComponentType): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasComponents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasRenderers(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAddedToEngine(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEntityValid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMeta(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemovingFromEngine(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScheduledForBucketUpdate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScheduledForEngineRemoval(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      isUsingPlayer(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValidEngineEntity(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      loadEntity(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      onEquip(arg0?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onUnEquip(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      removeFromWorld(arg0?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderlast(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderlastComponents(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      requiresEntitySave(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      saveEntity(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      sendSyncEntity(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      setUsingPlayer(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDefaultEntityDisplayName(): string;
    }
    /**
     * @customConstructor GameEntityFactory.new
     * @
     * [CLASS] zombie.entity.GameEntityFactory
     */
    export class GameEntityFactory {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (GameEntity arg0, Component arg1): void
       *  - (GameEntity arg0, boolean arg1, Component arg2): void
       */
      static AddComponent(arg0: zombie.entity.GameEntity, arg1: zombie.entity.Component | boolean, arg2?: zombie.entity.Component): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (GameEntity arg0, Component... arg1): void
       *  - (GameEntity arg0, boolean arg1, Component... arg2): void
       */
      static AddComponents(arg0: zombie.entity.GameEntity, arg1: zombie.entity.Component[] | boolean, arg2?: zombie.entity.Component[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (GameEntity arg0, GameEntityScript arg1, boolean arg2): void
       */
      static CreateEntityDebugReload(arg0: zombie.entity.GameEntity, arg1: zombie.scripting.entity.GameEntityScript, arg2: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, Item arg1, boolean arg2): void
       */
      static CreateInventoryItemEntity(arg0: zombie.inventory.InventoryItem, arg1: zombie.scripting.objects.Item, arg2: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      static CreateIsoEntityFromCellLoading(arg0: zombie.iso.IsoObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0, GameEntityScript arg1, boolean arg2): void
       */
      static CreateIsoObjectEntity(arg0: zombie.iso.IsoObject, arg1: zombie.scripting.entity.GameEntityScript, arg2: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (GameEntity arg0, Component arg1): void
       */
      static RemoveComponent(arg0: zombie.entity.GameEntity, arg1: zombie.entity.Component): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (GameEntity arg0, ComponentType arg1): void
       */
      static RemoveComponentType(arg0: zombie.entity.GameEntity, arg1: zombie.entity.ComponentType): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (GameEntity arg0, EnumSet arg1): void
       */
      static RemoveComponentTypes(arg0: zombie.entity.GameEntity, arg1: java.util.EnumSet<zombie.entity.ComponentType>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (GameEntity arg0, Component... arg1): void
       */
      static RemoveComponents(arg0: zombie.entity.GameEntity, arg1: zombie.entity.Component[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (GameEntity arg0, GameEntity arg1): void
       */
      static TransferComponents(arg0: zombie.entity.GameEntity, arg1: zombie.entity.GameEntity): void;
    }
    /** [ENUM] zombie.entity.GameEntityType */
    export class GameEntityType {
      protected constructor();
      static readonly InventoryItem: zombie.entity.GameEntityType;
      static readonly IsoMovingObject: zombie.entity.GameEntityType;
      static readonly IsoObject: zombie.entity.GameEntityType;
      static readonly MetaEntity: zombie.entity.GameEntityType;
      static readonly Template: zombie.entity.GameEntityType;
      static readonly VehiclePart: zombie.entity.GameEntityType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.GameEntityType>>;
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
      getDeclaringClass(): java.lang.Class<zombie.entity.GameEntityType>;
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
       *  - (byte arg0): zombie.entity.GameEntityType
       */
      static FromID(arg0: number): zombie.entity.GameEntityType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.GameEntityType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.GameEntityType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntityType[]
       */
      static values(): zombie.entity.GameEntityType[];
    }
    /**
     * @customConstructor IBucketListener.new
     * @
     * [INTERFACE] zombie.entity.IBucketListener
     */
    export class IBucketListener {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (EntityBucket arg0, GameEntity arg1): void
       */
      onBucketEntityAdded(arg0: zombie.entity.EntityBucket, arg1: zombie.entity.GameEntity): void;
      /**
       * Method Parameters: 
       *  - (EntityBucket arg0, GameEntity arg1): void
       */
      onBucketEntityRemoved(arg0: zombie.entity.EntityBucket, arg1: zombie.entity.GameEntity): void;
    }
    /**
     * @customConstructor MetaEntity.new
     * @
     * [CLASS] zombie.entity.MetaEntity extends zombie.entity.GameEntity
     */
    export class MetaEntity {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addToWorld(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeContainer
       */
      attrib(): zombie.entity.components.attributes.AttributeContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      componentSize(): number;
      /**
       * Method Parameters: 
       *  - (Component arg0): boolean
       */
      containsComponent(arg0: zombie.entity.Component): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeContainer
       */
      getAttributes(): zombie.entity.components.attributes.AttributeContainer;
      /**
       * Method Parameters: 
       *  - (ComponentType arg0): T
       */
      getComponent<T>(arg0: zombie.entity.ComponentType): T;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.Component
       */
      getComponentForIndex(arg0: number): zombie.entity.Component;
      /**
       * Method Parameters: 
       *  - (short arg0): zombie.entity.Component
       */
      getComponentFromID(arg0: number): zombie.entity.Component;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEntityDisplayName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEntityFullTypeDebug(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEntityNetID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getExceptionCompatibleString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidContainer
       */
      getFluidContainer(): zombie.entity.components.fluids.FluidContainer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntityType
       */
      getGameEntityType(): zombie.entity.GameEntityType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntityType
       */
      getOriginalGameEntityType(): zombie.entity.GameEntityType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.spriteconfig.SpriteConfig
       */
      getSpriteConfig(): zombie.entity.components.spriteconfig.SpriteConfig;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      getUsingPlayer(): zombie.characters.IsoPlayer;
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
       *  - (ComponentType arg0): boolean
       */
      hasComponent(arg0: zombie.entity.ComponentType): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasComponents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasRenderers(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAddedToEngine(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEntityValid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMeta(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemovingFromEngine(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScheduledForBucketUpdate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScheduledForEngineRemoval(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      isUsingPlayer(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValidEngineEntity(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      loadEntity(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      loadMetaEntity(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      onEquip(arg0?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onUnEquip(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      removeFromWorld(arg0?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderlast(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderlastComponents(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      requiresEntitySave(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      saveEntity(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      saveMetaEntity(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      sendSyncEntity(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      setUsingPlayer(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDefaultEntityDisplayName(): string;
    }
  }
}
