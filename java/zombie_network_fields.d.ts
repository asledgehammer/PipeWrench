/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.network.fields {
    /**
     * @customConstructor AttackVars.new
     * @
     * [CLASS] zombie.network.fields.AttackVars
     */
    export class AttackVars {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (AttackVars arg0): void
       */
      copy(arg0: zombie.network.fields.AttackVars): void;
      /**
       * Method Parameters: 
       *  - (StringBuilder arg0, Class arg1, HashSet arg2): void
       */
      getClassDescription(arg0: java.lang.StringBuilder, arg1: java.lang.Class<any>, arg2: java.util.HashSet<any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       *  - (HashSet arg0): string
       */
      getDescription(arg0?: java.util.HashSet<any>): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPacketSizeBytes(): number;
      /**
       * Method Parameters: 
       *  - (IsoLivingCharacter arg0): zombie.inventory.types.HandWeapon
       */
      getWeapon(arg0: zombie.characters.IsoLivingCharacter): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): boolean
       */
      isConsistent(arg0: zombie.core.raknet.UdpConnection): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parse(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0): void
       */
      setWeapon(arg0: zombie.inventory.types.HandWeapon): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
    }
    /**
     * @customConstructor AttackFlags.new
     * @
     * [CLASS] zombie.network.fields.AttackVars$AttackFlags
     */
    export class AttackVars$AttackFlags {
      /** byte */
      static bAimAtFloor: number;
      /** byte */
      static bCloseKill: number;
      /** byte */
      static bDoGrapple: number;
      /** byte */
      static bDoShove: number;
      /** byte */
      static isBareHeadsWeapon: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (byte arg0, byte arg1): boolean
       */
      static anyFlagsSet(arg0: number, arg1: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (byte arg0, byte arg1): boolean
       */
      static isFlagSet(arg0: number, arg1: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (byte arg0, byte arg1, boolean arg2): number
       */
      static setFlagState(arg0: number, arg1: number, arg2: boolean): number;
    }
    /**
     * @customConstructor ContainerID.new
     * @
     * [CLASS] zombie.network.fields.ContainerID
     */
    export class ContainerID {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ContainerID arg0): void
       */
      copy(arg0: zombie.network.fields.ContainerID): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (StringBuilder arg0, Class arg1, HashSet arg2): void
       */
      getClassDescription(arg0: java.lang.StringBuilder, arg1: java.lang.Class<any>, arg2: java.util.HashSet<any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.network.fields.ContainerID$ContainerType
       */
      getContainerType(): zombie.network.fields.ContainerID$ContainerType;
      /**
       * Method Parameters: 
       *  - (Empty): string
       *  - (HashSet arg0): string
       */
      getDescription(arg0?: java.util.HashSet<any>): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getObject(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPacketSizeBytes(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.VehiclePart
       */
      getPart(): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): boolean
       */
      isConsistent(arg0: zombie.core.raknet.UdpConnection): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, ItemContainer arg1): boolean
       */
      isContainerTheSame(arg0: number, arg1: zombie.inventory.ItemContainer): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parse(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       *  - (ItemContainer arg0, IsoObject arg1): void
       */
      set(arg0: zombie.inventory.ItemContainer, arg1?: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, IsoGridSquare arg1): void
       */
      setFloor(arg0: zombie.inventory.ItemContainer, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, IsoPlayer arg1): void
       */
      setInventoryContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, IsoObject arg1, IsoGridSquare arg2): void
       */
      setObject(arg0: zombie.inventory.ItemContainer, arg1: zombie.iso.IsoObject, arg2: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: java.nio.ByteBuffer | zombie.core.network.ByteBufferWriter): void;
    }
    /** [ENUM] zombie.network.fields.ContainerID$ContainerType */
    export class ContainerID$ContainerType {
      protected constructor();
      static readonly DeadBody: zombie.network.fields.ContainerID$ContainerType;
      static readonly Floor: zombie.network.fields.ContainerID$ContainerType;
      static readonly InventoryContainer: zombie.network.fields.ContainerID$ContainerType;
      static readonly IsoObject: zombie.network.fields.ContainerID$ContainerType;
      static readonly ObjectContainer: zombie.network.fields.ContainerID$ContainerType;
      static readonly PlayerInventory: zombie.network.fields.ContainerID$ContainerType;
      static readonly Undefined: zombie.network.fields.ContainerID$ContainerType;
      static readonly Vehicle: zombie.network.fields.ContainerID$ContainerType;
      static readonly WorldObject: zombie.network.fields.ContainerID$ContainerType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.network.fields.ContainerID$ContainerType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.network.fields.ContainerID$ContainerType>;
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
       *  - (String arg0): zombie.network.fields.ContainerID$ContainerType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.network.fields.ContainerID$ContainerType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.network.fields.ContainerID$ContainerType[]
       */
      static values(): zombie.network.fields.ContainerID$ContainerType[];
    }
    /**
     * @customConstructor HitInfo.new
     * @
     * [CLASS] zombie.network.fields.HitInfo
     */
    export class HitInfo {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (StringBuilder arg0, Class arg1, HashSet arg2): void
       */
      getClassDescription(arg0: java.lang.StringBuilder, arg1: java.lang.Class<any>, arg2: java.util.HashSet<any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       *  - (HashSet arg0): string
       */
      getDescription(arg0?: java.util.HashSet<any>): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoMovingObject
       */
      getObject(): zombie.iso.IsoMovingObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPacketSizeBytes(): number;
      /**
       * Method Parameters: 
       *  - (HitInfo arg0): zombie.network.fields.HitInfo
       *  - (IsoWindow arg0, float arg1, float arg2): zombie.network.fields.HitInfo
       *  - (IsoMovingObject arg0, float arg1, float arg2, float arg3, float arg4, float arg5): zombie.network.fields.HitInfo
       */
      init(arg0: zombie.network.fields.HitInfo | zombie.iso.objects.IsoWindow | zombie.iso.IsoMovingObject, arg1?: number, arg2?: number, arg3?: number, arg4?: number, arg5?: number): zombie.network.fields.HitInfo;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): boolean
       */
      isConsistent(arg0: zombie.core.raknet.UdpConnection): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parse(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
    }
    /**
     * @customConstructor IMovable.new
     * @
     * [INTERFACE] zombie.network.fields.IMovable
     */
    export class IMovable {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVehicle(): boolean;
    }
  }
}
