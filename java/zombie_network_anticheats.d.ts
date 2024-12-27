/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.network.anticheats {
    /**
     * @customConstructor AbstractAntiCheat.new
     * @
     * [ABSTRACT CLASS] zombie.network.anticheats.AbstractAntiCheat
     */
    export class AbstractAntiCheat {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): boolean
       */
      preUpdate(arg0: zombie.core.raknet.UdpConnection): boolean;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0, INetworkPacket arg1): void
       */
      react(arg0: zombie.core.raknet.UdpConnection, arg1: zombie.network.packets.INetworkPacket): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): boolean
       */
      update(arg0: zombie.core.raknet.UdpConnection): boolean;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0, INetworkPacket arg1): string
       */
      validate(arg0: zombie.core.raknet.UdpConnection, arg1: zombie.network.packets.INetworkPacket): string;
    }
    /** [ENUM] zombie.network.anticheats.AntiCheat */
    export class AntiCheat {
      protected constructor();
      static readonly Capability: zombie.network.anticheats.AntiCheat;
      static readonly Checksum: zombie.network.anticheats.AntiCheat;
      static readonly ChecksumUpdate: zombie.network.anticheats.AntiCheat;
      static readonly Fire: zombie.network.anticheats.AntiCheat;
      static readonly HitDamage: zombie.network.anticheats.AntiCheat;
      static readonly HitLongDistance: zombie.network.anticheats.AntiCheat;
      static readonly HitShortDistance: zombie.network.anticheats.AntiCheat;
      static readonly HitWeaponAmmo: zombie.network.anticheats.AntiCheat;
      static readonly HitWeaponRange: zombie.network.anticheats.AntiCheat;
      static readonly HitWeaponRate: zombie.network.anticheats.AntiCheat;
      static readonly Item: zombie.network.anticheats.AntiCheat;
      static readonly NoClip: zombie.network.anticheats.AntiCheat;
      static readonly None: zombie.network.anticheats.AntiCheat;
      static readonly Owner: zombie.network.anticheats.AntiCheat;
      static readonly PacketException: zombie.network.anticheats.AntiCheat;
      static readonly PacketRakNet: zombie.network.anticheats.AntiCheat;
      static readonly PacketType: zombie.network.anticheats.AntiCheat;
      static readonly Player: zombie.network.anticheats.AntiCheat;
      static readonly PlayerUpdate: zombie.network.anticheats.AntiCheat;
      static readonly Power: zombie.network.anticheats.AntiCheat;
      static readonly Recipe: zombie.network.anticheats.AntiCheat;
      static readonly RecipeUpdate: zombie.network.anticheats.AntiCheat;
      static readonly Role: zombie.network.anticheats.AntiCheat;
      static readonly SafeHousePlayer: zombie.network.anticheats.AntiCheat;
      static readonly SafeHouseSurviving: zombie.network.anticheats.AntiCheat;
      static readonly Safety: zombie.network.anticheats.AntiCheat;
      static readonly ServerCustomizationDDOS: zombie.network.anticheats.AntiCheat;
      static readonly Smoke: zombie.network.anticheats.AntiCheat;
      static readonly Speed: zombie.network.anticheats.AntiCheat;
      static readonly Target: zombie.network.anticheats.AntiCheat;
      static readonly Time: zombie.network.anticheats.AntiCheat;
      static readonly TimeUpdate: zombie.network.anticheats.AntiCheat;
      static readonly Transaction: zombie.network.anticheats.AntiCheat;
      static readonly XP: zombie.network.anticheats.AntiCheat;
      static readonly XPPlayer: zombie.network.anticheats.AntiCheat;
      static readonly XPUpdate: zombie.network.anticheats.AntiCheat;

      /* FIELDS */

      name(): string;
      ordinal(): number;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0, String arg1): void
       */
      act(arg0: zombie.core.raknet.UdpConnection, arg1: string): void;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.network.anticheats.AntiCheat>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.network.anticheats.AntiCheat>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0, INetworkPacket arg1): boolean
       */
      isValid(arg0: zombie.core.raknet.UdpConnection, arg1: zombie.network.packets.INetworkPacket): boolean;
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
       *  - (UdpConnection arg0, String arg1, String arg2): void
       */
      static doBanUser(arg0: zombie.core.raknet.UdpConnection, arg1: string, arg2: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UdpConnection arg0, String arg1, String arg2): void
       */
      static doKickUser(arg0: zombie.core.raknet.UdpConnection, arg1: string, arg2: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UdpConnection arg0, String arg1, String arg2): void
       */
      static doLogUser(arg0: zombie.core.raknet.UdpConnection, arg1: string, arg2: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UdpConnection arg0, AntiCheat arg1, int arg2, String arg3): void
       */
      static log(arg0: zombie.core.raknet.UdpConnection, arg1: zombie.network.anticheats.AntiCheat, arg2: number, arg3: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      static preUpdate(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      static update(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.network.anticheats.AntiCheat
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.network.anticheats.AntiCheat | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.network.anticheats.AntiCheat[]
       */
      static values(): zombie.network.anticheats.AntiCheat[];
    }
  }
}
