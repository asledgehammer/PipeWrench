/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.entity.components.attributes {
    /**
     * @customConstructor Attribute.new
     * @
     * [ABSTRACT CLASS] zombie.entity.components.attributes.Attribute
     */
    export class Attribute {
      /** zombie.entity.components.attributes.AttributeType$Int */
      static readonly HeadCondition?: zombie.entity.components.attributes.AttributeType$Int;
      /** zombie.entity.components.attributes.AttributeType$Int */
      static readonly HeadConditionMax?: zombie.entity.components.attributes.AttributeType$Int;
      /** zombie.entity.components.attributes.AttributeType$Int */
      static readonly Quality?: zombie.entity.components.attributes.AttributeType$Int;
      /** zombie.entity.components.attributes.AttributeType$Float */
      static readonly Sharpness?: zombie.entity.components.attributes.AttributeType$Float;
      /** zombie.entity.components.attributes.AttributeType$Bool */
      static readonly TestBool?: zombie.entity.components.attributes.AttributeType$Bool;
      /** zombie.entity.components.attributes.AttributeType$EnumSet<zombie.entity.components.attributes.TestEnum> */
      static readonly TestCategories?: zombie.entity.components.attributes.AttributeType$EnumSet<zombie.entity.components.attributes.TestEnum>;
      /** zombie.entity.components.attributes.AttributeType$Float */
      static readonly TestCondition?: zombie.entity.components.attributes.AttributeType$Float;
      /** zombie.entity.components.attributes.AttributeType$Enum<zombie.entity.components.attributes.TestEnum> */
      static readonly TestItemType?: zombie.entity.components.attributes.AttributeType$Enum<zombie.entity.components.attributes.TestEnum>;
      /** zombie.entity.components.attributes.AttributeType$Float */
      static readonly TestQuality?: zombie.entity.components.attributes.AttributeType$Float;
      /** zombie.entity.components.attributes.AttributeType$String */
      static readonly TestString?: zombie.entity.components.attributes.AttributeType$String;
      /** zombie.entity.components.attributes.AttributeType$String */
      static readonly TestString2?: zombie.entity.components.attributes.AttributeType$String;
      /** zombie.entity.components.attributes.AttributeType$EnumStringSet<zombie.entity.components.attributes.TestEnum> */
      static readonly TestTags?: zombie.entity.components.attributes.AttributeType$EnumStringSet<zombie.entity.components.attributes.TestEnum>;
      /** zombie.entity.components.attributes.AttributeType$Int */
      static readonly TestUses?: zombie.entity.components.attributes.AttributeType$Int;
      /** zombie.entity.components.attributes.AttributeType$Int */
      static readonly TimesHeadRepaired?: zombie.entity.components.attributes.AttributeType$Int;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.components.attributes.AttributeType>
       */
      static GetAllTypes(): java.util.ArrayList<zombie.entity.components.attributes.AttributeType>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (short arg0): zombie.entity.components.attributes.AttributeType
       */
      static TypeFromId(arg0: number): zombie.entity.components.attributes.AttributeType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.attributes.AttributeType
       */
      static TypeFromName(arg0: string): zombie.entity.components.attributes.AttributeType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static init(): void;
    }
    /**
     * @customConstructor UI.new
     * @
     * [CLASS] zombie.entity.components.attributes.Attribute$UI
     */
    export class Attribute$UI {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /** [ENUM] zombie.entity.components.attributes.Attribute$UI$Display */
    export class Attribute$UI$Display {
      protected constructor();
      static readonly Hidden: zombie.entity.components.attributes.Attribute$UI$Display;
      static readonly Visible: zombie.entity.components.attributes.Attribute$UI$Display;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.attributes.Attribute$UI$Display>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.attributes.Attribute$UI$Display>;
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
       *  - (String arg0): zombie.entity.components.attributes.Attribute$UI$Display
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.attributes.Attribute$UI$Display | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.Attribute$UI$Display[]
       */
      static values(): zombie.entity.components.attributes.Attribute$UI$Display[];
    }
    /** [ENUM] zombie.entity.components.attributes.Attribute$UI$DisplayAsBar */
    export class Attribute$UI$DisplayAsBar {
      protected constructor();
      static readonly Default: zombie.entity.components.attributes.Attribute$UI$DisplayAsBar;
      static readonly ForceIfBounds: zombie.entity.components.attributes.Attribute$UI$DisplayAsBar;
      static readonly Never: zombie.entity.components.attributes.Attribute$UI$DisplayAsBar;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.attributes.Attribute$UI$DisplayAsBar>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.attributes.Attribute$UI$DisplayAsBar>;
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
       *  - (String arg0): zombie.entity.components.attributes.Attribute$UI$DisplayAsBar
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.attributes.Attribute$UI$DisplayAsBar | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.Attribute$UI$DisplayAsBar[]
       */
      static values(): zombie.entity.components.attributes.Attribute$UI$DisplayAsBar[];
    }
    /**
     * @customConstructor AttributeContainer.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeContainer extends zombie.entity.Component
     */
    export class AttributeContainer {
      /** short */
      static readonly STORAGE_SIZE: number;


      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
      /**
       * Method Parameters: 
       *  - (AttributeType arg0): boolean
       */
      add(arg0: zombie.entity.components.attributes.AttributeType): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (AttributeType arg0): boolean
       */
      contains(arg0: zombie.entity.components.attributes.AttributeType): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeContainer
       */
      copy(): zombie.entity.components.attributes.AttributeContainer;
      /**
       * Method Parameters: 
       *  - (BiConsumer arg0): void
       */
      forEach(arg0: java.util._function_.BiConsumer<zombie.entity.components.attributes.AttributeType, zombie.entity.components.attributes.AttributeInstance>): void;
      /**
       * Method Parameters: 
       *  - (Bool arg0): boolean
       *  - (Byte arg0): number
       *  - (Double arg0): number
       *  - (Enum arg0): E
       *  - (EnumSet arg0): java.util.EnumSet<E>
       *  - (EnumStringSet arg0): zombie.entity.components.attributes.EnumStringObj<E>
       *  - (Float arg0): number
       *  - (Int arg0): number
       *  - (Long arg0): number
       *  - (Short arg0): number
       *  - (String arg0): string
       *  - (Bool arg0, boolean arg1): boolean
       *  - (Byte arg0, byte arg1): number
       *  - (Double arg0, double arg1): number
       *  - (Enum arg0, Enum arg1): E
       *  - (Float arg0, float arg1): number
       *  - (Int arg0, int arg1): number
       *  - (Long arg0, long arg1): number
       *  - (Short arg0, short arg1): number
       *  - (String arg0, String arg1): string
       */
      get<E>(arg0: zombie.entity.components.attributes.AttributeType$Bool | zombie.entity.components.attributes.AttributeType$Byte | zombie.entity.components.attributes.AttributeType$Double | zombie.entity.components.attributes.AttributeType$Enum<E> | zombie.entity.components.attributes.AttributeType$EnumSet<E> | zombie.entity.components.attributes.AttributeType$EnumStringSet<E> | zombie.entity.components.attributes.AttributeType$Float | zombie.entity.components.attributes.AttributeType$Int | zombie.entity.components.attributes.AttributeType$Long | zombie.entity.components.attributes.AttributeType$Short | zombie.entity.components.attributes.AttributeType$String, arg1?: boolean | number | E<any> | string): boolean | number | E<any> | java.util.EnumSet<E> | zombie.entity.components.attributes.EnumStringObj<E> | string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.components.attributes.AttributeInstance
       *  - (AttributeType arg0): zombie.entity.components.attributes.AttributeInstance
       */
      getAttribute(arg0: number | zombie.entity.components.attributes.AttributeType): zombie.entity.components.attributes.AttributeInstance<any, any>;
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
       *  - (Numeric arg0): number
       *  - (Numeric arg0, float arg1): number
       */
      getFloatValue(arg0: zombie.entity.components.attributes.AttributeType$Numeric<any, any>, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getGameEntity(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.components.attributes.AttributeType
       */
      getKey(arg0: number): zombie.entity.components.attributes.AttributeType;
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
       *  - (AttributeContainer arg0): boolean
       */
      isIdenticalTo(arg0: zombie.entity.components.attributes.AttributeContainer): boolean;
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
       *  - (Bool arg0, boolean arg1): void
       *  - (Byte arg0, byte arg1): void
       *  - (Double arg0, double arg1): void
       *  - (Enum arg0, Enum arg1): void
       *  - (EnumSet arg0, EnumSet arg1): void
       *  - (EnumStringSet arg0, EnumStringObj arg1): void
       *  - (Float arg0, float arg1): void
       *  - (Int arg0, int arg1): void
       *  - (Long arg0, long arg1): void
       *  - (Short arg0, short arg1): void
       *  - (String arg0, String arg1): void
       */
      put<E>(arg0: zombie.entity.components.attributes.AttributeType$Bool | zombie.entity.components.attributes.AttributeType$Byte | zombie.entity.components.attributes.AttributeType$Double | zombie.entity.components.attributes.AttributeType$Enum<E> | zombie.entity.components.attributes.AttributeType$EnumSet<E> | zombie.entity.components.attributes.AttributeType$EnumStringSet<E> | zombie.entity.components.attributes.AttributeType$Float | zombie.entity.components.attributes.AttributeType$Int | zombie.entity.components.attributes.AttributeType$Long | zombie.entity.components.attributes.AttributeType$Short | zombie.entity.components.attributes.AttributeType$String, arg1: boolean | number | E<any> | java.util.EnumSet<E> | zombie.entity.components.attributes.EnumStringObj<E> | string): void;
      /**
       * Method Parameters: 
       *  - (Numeric arg0, float arg1): void
       */
      putFloatValue(arg0: zombie.entity.components.attributes.AttributeType$Numeric<any, any>, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (AttributeType arg0, String arg1): boolean
       */
      putFromScript(arg0: zombie.entity.components.attributes.AttributeType, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (AttributeType arg0): void
       */
      remove(arg0: zombie.entity.components.attributes.AttributeType): void;
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
       *  - (Bool arg0, boolean arg1): void
       *  - (Byte arg0, byte arg1): void
       *  - (Double arg0, double arg1): void
       *  - (Enum arg0, Enum arg1): void
       *  - (EnumSet arg0, EnumSet arg1): void
       *  - (EnumStringSet arg0, EnumStringObj arg1): void
       *  - (Float arg0, float arg1): void
       *  - (Int arg0, int arg1): void
       *  - (Long arg0, long arg1): void
       *  - (Short arg0, short arg1): void
       *  - (String arg0, String arg1): void
       */
      set<E>(arg0: zombie.entity.components.attributes.AttributeType$Bool | zombie.entity.components.attributes.AttributeType$Byte | zombie.entity.components.attributes.AttributeType$Double | zombie.entity.components.attributes.AttributeType$Enum<E> | zombie.entity.components.attributes.AttributeType$EnumSet<E> | zombie.entity.components.attributes.AttributeType$EnumStringSet<E> | zombie.entity.components.attributes.AttributeType$Float | zombie.entity.components.attributes.AttributeType$Int | zombie.entity.components.attributes.AttributeType$Long | zombie.entity.components.attributes.AttributeType$Short | zombie.entity.components.attributes.AttributeType$String, arg1: boolean | number | E<any> | java.util.EnumSet<E> | zombie.entity.components.attributes.EnumStringObj<E> | string): void;
      /**
       * Method Parameters: 
       *  - (Numeric arg0, float arg1): void
       */
      setFloatValue(arg0: zombie.entity.components.attributes.AttributeType$Numeric<any, any>, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AttributeContainer arg0, AttributeContainer arg1): void
       */
      static Copy(arg0: zombie.entity.components.attributes.AttributeContainer, arg1: zombie.entity.components.attributes.AttributeContainer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AttributeContainer arg0, AttributeContainer arg1): void
       */
      static Merge(arg0: zombie.entity.components.attributes.AttributeContainer, arg1: zombie.entity.components.attributes.AttributeContainer): void;
    }
    /**
     * @customConstructor AttributeInstance.new
     * @
     * [ABSTRACT CLASS] zombie.entity.components.attributes.AttributeInstance
     */
    export class AttributeInstance<C, T> {

      /**
       * Method Parameters: 
       *  - (Empty): C
       */
      copy(): C<any, any>;
      /**
       * Method Parameters: 
       *  - (AttributeInstance arg0): boolean
       */
      equalTo(arg0: C<any, any>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayAsBarUnit(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFloatValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getType(): T;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisplayAsBar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresValidation(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      setValueFromScriptString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      stringValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor Bool.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeInstance$Bool extends zombie.entity.components.attributes.AttributeInstance<zombie.entity.components.attributes.AttributeInstance$Bool, zombie.entity.components.attributes.AttributeType$Bool>
     */
    export class AttributeInstance$Bool {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance$Bool
       */
      copy(): zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Bool;
      /**
       * Method Parameters: 
       *  - (AttributeInstance arg0): boolean
       *  - (Bool arg0): boolean
       */
      equalTo(arg0: zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Bool): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayAsBarUnit(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFloatValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getType(): zombie.entity.components.attributes.AttributeType$Bool;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisplayAsBar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresValidation(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setValue(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      setValueFromScriptString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      stringValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor Byte.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeInstance$Byte extends zombie.entity.components.attributes.AttributeInstance$Numeric<zombie.entity.components.attributes.AttributeInstance$Byte, zombie.entity.components.attributes.AttributeType$Byte>
     */
    export class AttributeInstance$Byte {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance$Byte
       */
      copy(): zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Byte;
      /**
       * Method Parameters: 
       *  - (AttributeInstance arg0): boolean
       *  - (Byte arg0): boolean
       */
      equalTo(arg0: zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Byte): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      floatValue(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      fromFloat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayAsBarUnit(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFloatValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getType(): zombie.entity.components.attributes.AttributeType$Byte;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisplayAsBar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresValidation(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (byte arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      setValueFromScriptString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      stringValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor Double.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeInstance$Double extends zombie.entity.components.attributes.AttributeInstance$Numeric<zombie.entity.components.attributes.AttributeInstance$Double, zombie.entity.components.attributes.AttributeType$Double>
     */
    export class AttributeInstance$Double {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance$Double
       */
      copy(): zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Double;
      /**
       * Method Parameters: 
       *  - (AttributeInstance arg0): boolean
       *  - (Double arg0): boolean
       */
      equalTo(arg0: zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Double): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      floatValue(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      fromFloat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayAsBarUnit(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFloatValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getType(): zombie.entity.components.attributes.AttributeType$Double;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisplayAsBar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresValidation(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      setValueFromScriptString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      stringValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor Enum.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeInstance$Enum extends zombie.entity.components.attributes.AttributeInstance<zombie.entity.components.attributes.AttributeInstance$Enum<E>, zombie.entity.components.attributes.AttributeType$Enum<E>>
     */
    export class AttributeInstance$Enum<E> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance$Enum<E>
       */
      copy(): zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Enum<E>;
      /**
       * Method Parameters: 
       *  - (AttributeInstance arg0): boolean
       *  - (Enum arg0): boolean
       */
      equalTo(arg0: zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Enum<E>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayAsBarUnit(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFloatValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getType(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      getValue(): E<any>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisplayAsBar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresValidation(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Enum arg0): void
       */
      setValue(arg0: E<any>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      setValueFromScriptString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      stringValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor EnumSet.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeInstance$EnumSet extends zombie.entity.components.attributes.AttributeInstance<zombie.entity.components.attributes.AttributeInstance$EnumSet<E>, zombie.entity.components.attributes.AttributeType$EnumSet<E>>
     */
    export class AttributeInstance$EnumSet<E> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addValueFromString(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance$EnumSet<E>
       */
      copy(): zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$EnumSet<E>;
      /**
       * Method Parameters: 
       *  - (AttributeInstance arg0): boolean
       *  - (EnumSet arg0): boolean
       */
      equalTo(arg0: zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$EnumSet<E>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayAsBarUnit(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFloatValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getType(): any;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.EnumSet<E>
       */
      getValue(): java.util.EnumSet<E>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisplayAsBar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresValidation(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      removeValueFromString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (EnumSet arg0): void
       */
      setValue(arg0: java.util.EnumSet<E>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      setValueFromScriptString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      stringValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor EnumStringSet.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeInstance$EnumStringSet extends zombie.entity.components.attributes.AttributeInstance<zombie.entity.components.attributes.AttributeInstance$EnumStringSet<E>, zombie.entity.components.attributes.AttributeType$EnumStringSet<E>>
     */
    export class AttributeInstance$EnumStringSet<E> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addEnumValueFromString(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addStringValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance$EnumStringSet<E>
       */
      copy(): zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$EnumStringSet<E>;
      /**
       * Method Parameters: 
       *  - (AttributeInstance arg0): boolean
       *  - (EnumStringSet arg0): boolean
       */
      equalTo(arg0: zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$EnumStringSet<E>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayAsBarUnit(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFloatValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getType(): any;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.EnumStringObj<E>
       */
      getValue(): zombie.entity.components.attributes.EnumStringObj<E>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisplayAsBar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresValidation(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      removeEnumValueFromString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      removeStringValue(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (EnumStringObj arg0): void
       */
      setValue(arg0: zombie.entity.components.attributes.EnumStringObj<E>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      setValueFromScriptString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      stringValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor Float.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeInstance$Float extends zombie.entity.components.attributes.AttributeInstance$Numeric<zombie.entity.components.attributes.AttributeInstance$Float, zombie.entity.components.attributes.AttributeType$Float>
     */
    export class AttributeInstance$Float {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance$Float
       */
      copy(): zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Float;
      /**
       * Method Parameters: 
       *  - (AttributeInstance arg0): boolean
       *  - (Float arg0): boolean
       */
      equalTo(arg0: zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Float): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      floatValue(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      fromFloat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayAsBarUnit(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFloatValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getType(): zombie.entity.components.attributes.AttributeType$Float;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisplayAsBar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresValidation(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      setValueFromScriptString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      stringValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor Int.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeInstance$Int extends zombie.entity.components.attributes.AttributeInstance$Numeric<zombie.entity.components.attributes.AttributeInstance$Int, zombie.entity.components.attributes.AttributeType$Int>
     */
    export class AttributeInstance$Int {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance$Int
       */
      copy(): zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Int;
      /**
       * Method Parameters: 
       *  - (AttributeInstance arg0): boolean
       *  - (Int arg0): boolean
       */
      equalTo(arg0: zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Int): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      floatValue(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      fromFloat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayAsBarUnit(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFloatValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getType(): zombie.entity.components.attributes.AttributeType$Int;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisplayAsBar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresValidation(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      setValueFromScriptString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      stringValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor Long.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeInstance$Long extends zombie.entity.components.attributes.AttributeInstance$Numeric<zombie.entity.components.attributes.AttributeInstance$Long, zombie.entity.components.attributes.AttributeType$Long>
     */
    export class AttributeInstance$Long {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance$Long
       */
      copy(): zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Long;
      /**
       * Method Parameters: 
       *  - (AttributeInstance arg0): boolean
       *  - (Long arg0): boolean
       */
      equalTo(arg0: zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Long): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      floatValue(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      fromFloat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayAsBarUnit(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFloatValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getType(): zombie.entity.components.attributes.AttributeType$Long;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisplayAsBar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresValidation(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      setValueFromScriptString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      stringValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor Numeric.new
     * @
     * [ABSTRACT CLASS] zombie.entity.components.attributes.AttributeInstance$Numeric extends zombie.entity.components.attributes.AttributeInstance<C, T>
     */
    export class AttributeInstance$Numeric<C, T> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): C
       */
      copy(): any<any, any>;
      /**
       * Method Parameters: 
       *  - (AttributeInstance arg0): boolean
       */
      equalTo(arg0: any<any, any>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      floatValue(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      fromFloat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayAsBarUnit(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFloatValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getType(): any;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisplayAsBar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresValidation(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      setValueFromScriptString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      stringValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor Short.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeInstance$Short extends zombie.entity.components.attributes.AttributeInstance$Numeric<zombie.entity.components.attributes.AttributeInstance$Short, zombie.entity.components.attributes.AttributeType$Short>
     */
    export class AttributeInstance$Short {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance$Short
       */
      copy(): zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Short;
      /**
       * Method Parameters: 
       *  - (AttributeInstance arg0): boolean
       *  - (Short arg0): boolean
       */
      equalTo(arg0: zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$Short): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      floatValue(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      fromFloat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayAsBarUnit(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFloatValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getType(): zombie.entity.components.attributes.AttributeType$Short;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisplayAsBar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresValidation(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (short arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      setValueFromScriptString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      stringValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor String.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeInstance$String extends zombie.entity.components.attributes.AttributeInstance<zombie.entity.components.attributes.AttributeInstance$String, zombie.entity.components.attributes.AttributeType$String>
     */
    export class AttributeInstance$String {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance
       *  - (Empty): zombie.entity.components.attributes.AttributeInstance$String
       */
      copy(): zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$String;
      /**
       * Method Parameters: 
       *  - (AttributeInstance arg0): boolean
       *  - (String arg0): boolean
       */
      equalTo(arg0: zombie.entity.components.attributes.AttributeInstance<any, any> | zombie.entity.components.attributes.AttributeInstance$String): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayAsBarUnit(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFloatValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIntValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getType(): zombie.entity.components.attributes.AttributeType$String;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisplayAsBar(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresValidation(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      setValueFromScriptString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      stringValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor AttributeType.new
     * @
     * [ABSTRACT CLASS] zombie.entity.components.attributes.AttributeType
     */
    export class AttributeType {

      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslateKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDecimal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNumeric(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor Bool.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeType$Bool extends zombie.entity.components.attributes.AttributeType
     */
    export class AttributeType$Bool {

      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getInitialValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslateKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDecimal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNumeric(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor Byte.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeType$Byte extends zombie.entity.components.attributes.AttributeType$Numeric<zombie.entity.components.attributes.AttributeType$Byte, java.lang.Byte>
     */
    export class AttributeType$Byte {

      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getInitialValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (Empty): java.lang.Number
       */
      getMax(): number | java.lang.Number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (Empty): java.lang.Number
       */
      getMin(): number | java.lang.Number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslateKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasBounds(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDecimal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNumeric(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Byte arg0): number
       *  - (Number arg0): java.lang.Number
       */
      validate(arg0: number | java.lang.Number): number | java.lang.Number;
    }
    /**
     * @customConstructor Double.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeType$Double extends zombie.entity.components.attributes.AttributeType$Numeric<zombie.entity.components.attributes.AttributeType$Double, java.lang.Double>
     */
    export class AttributeType$Double {

      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getInitialValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (Empty): java.lang.Number
       */
      getMax(): number | java.lang.Number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (Empty): java.lang.Number
       */
      getMin(): number | java.lang.Number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslateKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasBounds(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDecimal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNumeric(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Double arg0): number
       *  - (Number arg0): java.lang.Number
       */
      validate(arg0: number | java.lang.Number): number | java.lang.Number;
    }
    /**
     * @customConstructor Enum.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeType$Enum extends zombie.entity.components.attributes.AttributeType
     */
    export class AttributeType$Enum<E> {

      /**
       * Method Parameters: 
       *  - (byte arg0): E
       */
      enumValueFromByteID(arg0: number): E<any>;
      /**
       * Method Parameters: 
       *  - (String arg0): E
       */
      enumValueFromString(arg0: string): E<any>;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      getInitialValue(): E<any>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslateKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDecimal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNumeric(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor EnumSet.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeType$EnumSet extends zombie.entity.components.attributes.AttributeType
     */
    export class AttributeType$EnumSet<E> {

      /**
       * Method Parameters: 
       *  - (byte arg0): E
       */
      enumValueFromByteID(arg0: number): E<any>;
      /**
       * Method Parameters: 
       *  - (String arg0): E
       */
      enumValueFromString(arg0: string): E<any>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.EnumSet<E>
       */
      getInitialValue(): java.util.EnumSet<E>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslateKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDecimal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNumeric(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor EnumStringSet.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeType$EnumStringSet extends zombie.entity.components.attributes.AttributeType
     */
    export class AttributeType$EnumStringSet<E> {

      /**
       * Method Parameters: 
       *  - (byte arg0): E
       */
      enumValueFromByteID(arg0: number): E<any>;
      /**
       * Method Parameters: 
       *  - (String arg0): E
       */
      enumValueFromString(arg0: string): E<any>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.EnumStringObj<E>
       */
      getInitialValue(): zombie.entity.components.attributes.EnumStringObj<E>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslateKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDecimal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNumeric(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor Float.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeType$Float extends zombie.entity.components.attributes.AttributeType$Numeric<zombie.entity.components.attributes.AttributeType$Float, java.lang.Float>
     */
    export class AttributeType$Float {

      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getInitialValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (Empty): java.lang.Number
       */
      getMax(): number | java.lang.Number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (Empty): java.lang.Number
       */
      getMin(): number | java.lang.Number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslateKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasBounds(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDecimal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNumeric(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Float arg0): number
       *  - (Number arg0): java.lang.Number
       */
      validate(arg0: number | java.lang.Number): number | java.lang.Number;
    }
    /**
     * @customConstructor Int.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeType$Int extends zombie.entity.components.attributes.AttributeType$Numeric<zombie.entity.components.attributes.AttributeType$Int, java.lang.Integer>
     */
    export class AttributeType$Int {

      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getInitialValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (Empty): java.lang.Number
       */
      getMax(): number | java.lang.Number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (Empty): java.lang.Number
       */
      getMin(): number | java.lang.Number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslateKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasBounds(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDecimal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNumeric(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Integer arg0): number
       *  - (Number arg0): java.lang.Number
       */
      validate(arg0: number | java.lang.Number): number | java.lang.Number;
    }
    /**
     * @customConstructor Long.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeType$Long extends zombie.entity.components.attributes.AttributeType$Numeric<zombie.entity.components.attributes.AttributeType$Long, java.lang.Long>
     */
    export class AttributeType$Long {

      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getInitialValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (Empty): java.lang.Number
       */
      getMax(): number | java.lang.Number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (Empty): java.lang.Number
       */
      getMin(): number | java.lang.Number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslateKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasBounds(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDecimal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNumeric(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Long arg0): number
       *  - (Number arg0): java.lang.Number
       */
      validate(arg0: number | java.lang.Number): number | java.lang.Number;
    }
    /**
     * @customConstructor Numeric.new
     * @
     * [ABSTRACT CLASS] zombie.entity.components.attributes.AttributeType$Numeric extends zombie.entity.components.attributes.AttributeType
     */
    export class AttributeType$Numeric<C, T> {

      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getInitialValue(): T;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getMax(): T;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getMin(): T;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslateKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasBounds(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDecimal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNumeric(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Number arg0): T
       */
      validate(arg0: T): T;
    }
    /**
     * @customConstructor Short.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeType$Short extends zombie.entity.components.attributes.AttributeType$Numeric<zombie.entity.components.attributes.AttributeType$Short, java.lang.Short>
     */
    export class AttributeType$Short {

      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      getInitialValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Number
       *  - (Empty): number
       */
      getMax(): java.lang.Number | number;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Number
       *  - (Empty): number
       */
      getMin(): java.lang.Number | number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslateKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasBounds(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDecimal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNumeric(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Number arg0): java.lang.Number
       *  - (Short arg0): number
       */
      validate(arg0: java.lang.Number | number): java.lang.Number | number;
    }
    /**
     * @customConstructor String.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeType$String extends zombie.entity.components.attributes.AttributeType
     */
    export class AttributeType$String {

      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getInitialValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNameUI(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslateKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType
       */
      getValueType(): zombie.entity.components.attributes.AttributeValueType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDecimal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHiddenUI(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNumeric(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReadOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor AttributeUtil.new
     * @
     * [CLASS] zombie.entity.components.attributes.AttributeUtil
     */
    export class AttributeUtil {
      /** java.lang.String */
      static readonly enum_prefix?: string;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<number>
       */
      static allocDoubleList(): java.util.ArrayList<number>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      static allocItemList(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, AttributeType arg1, AttributeType arg2): number
       */
      static convertAttribute(arg0: zombie.inventory.InventoryItem, arg1: zombie.entity.components.attributes.AttributeType, arg2: zombie.entity.components.attributes.AttributeType): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, AttributeType arg1, float arg2, float arg3): number
       */
      static convertAttributeToRange(arg0: zombie.inventory.InventoryItem, arg1: zombie.entity.components.attributes.AttributeType, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, AttributeType arg1): number
       */
      static convertAttributeToUnit(arg0: zombie.inventory.InventoryItem, arg1: zombie.entity.components.attributes.AttributeType): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Class arg0, String arg1): E
       */
      static enumValueFromScriptString<E>(arg0: java.lang.Class<E>, arg1: string): E<any>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0, AttributeType arg1): number
       */
      static getAttributeAverage(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>, arg1: zombie.entity.components.attributes.AttributeType): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, ArrayList arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      static getItemsFromList(arg0: string, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>, arg2: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static isEnumString(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      static releaseDoubleList(arg0: java.util.ArrayList<number>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      static releaseItemList(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Class arg0, String arg1): E
       */
      static tryEnumValueFromScriptString<E>(arg0: java.lang.Class<E>, arg1: string): E<any>;
    }
    /** [ENUM] zombie.entity.components.attributes.AttributeValueType */
    export class AttributeValueType {
      protected constructor();
      static readonly Boolean: zombie.entity.components.attributes.AttributeValueType;
      static readonly Byte: zombie.entity.components.attributes.AttributeValueType;
      static readonly Double: zombie.entity.components.attributes.AttributeValueType;
      static readonly Enum: zombie.entity.components.attributes.AttributeValueType;
      static readonly EnumSet: zombie.entity.components.attributes.AttributeValueType;
      static readonly EnumStringSet: zombie.entity.components.attributes.AttributeValueType;
      static readonly Float: zombie.entity.components.attributes.AttributeValueType;
      static readonly Int: zombie.entity.components.attributes.AttributeValueType;
      static readonly Long: zombie.entity.components.attributes.AttributeValueType;
      static readonly Short: zombie.entity.components.attributes.AttributeValueType;
      static readonly String: zombie.entity.components.attributes.AttributeValueType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.attributes.AttributeValueType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getByteIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.components.attributes.AttributeValueType>;
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
       *  - (AttributeValueType arg0): boolean
       */
      static IsDecimal(arg0: zombie.entity.components.attributes.AttributeValueType): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AttributeValueType arg0): boolean
       */
      static IsNumeric(arg0: zombie.entity.components.attributes.AttributeValueType): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.entity.components.attributes.AttributeValueType
       */
      static fromByteIndex(arg0: number): zombie.entity.components.attributes.AttributeValueType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.attributes.AttributeValueType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.attributes.AttributeValueType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.components.attributes.AttributeValueType
       */
      static valueOfIgnoreCase(arg0: string): zombie.entity.components.attributes.AttributeValueType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeValueType[]
       */
      static values(): zombie.entity.components.attributes.AttributeValueType[];
    }
    /**
     * @customConstructor EnumStringObj.new
     * @
     * [CLASS] zombie.entity.components.attributes.EnumStringObj
     */
    export class EnumStringObj<E> {

      /**
       * Method Parameters: 
       *  - (Enum arg0): void
       *  - (String arg0): void
       */
      add(arg0: E<any> | string): void;
      /**
       * Method Parameters: 
       *  - (EnumStringObj arg0): void
       *  - (boolean arg0, EnumStringObj arg1): void
       */
      addAll(arg0: zombie.entity.components.attributes.EnumStringObj<E> | boolean, arg1?: zombie.entity.components.attributes.EnumStringObj<E>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Enum arg0): boolean
       *  - (String arg0): boolean
       */
      contains(arg0: E<any> | string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.EnumStringObj<E>
       */
      copy(): zombie.entity.components.attributes.EnumStringObj<E>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      getSortedNames(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Enum arg0): boolean
       *  - (String arg0): boolean
       */
      remove(arg0: E<any> | string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllEnums(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllStrings(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      sizeEnums(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      sizeStrings(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /** [ENUM] zombie.entity.components.attributes.TestEnum */
    export class TestEnum {
      protected constructor();
      static readonly TestValueA: zombie.entity.components.attributes.TestEnum;
      static readonly TestValueB: zombie.entity.components.attributes.TestEnum;
      static readonly TestValueC: zombie.entity.components.attributes.TestEnum;
      static readonly TestValueD: zombie.entity.components.attributes.TestEnum;
      static readonly TestValueE: zombie.entity.components.attributes.TestEnum;
      static readonly TestValueF: zombie.entity.components.attributes.TestEnum;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.components.attributes.TestEnum>>;
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
      getDeclaringClass(): java.lang.Class<zombie.entity.components.attributes.TestEnum>;
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
       *  - (String arg0): zombie.entity.components.attributes.TestEnum
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.components.attributes.TestEnum | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.TestEnum[]
       */
      static values(): zombie.entity.components.attributes.TestEnum[];
    }
  }
}
