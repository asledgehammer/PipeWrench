/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.network.packets.character {
    /**
     * @customConstructor AnimalPacket.new
     * @
     * [CLASS] zombie.network.packets.character.AnimalPacket
     */
    export class AnimalPacket {
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
       *  - (Empty): number
       */
      getPacketSizeBytes(): number;
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
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parseClient(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parseClientLoading(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parseServer(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      processClient(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      processClientLoading(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1): void
       */
      processServer(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      reset(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1): void
       */
      sendToClient(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1): void
       */
      sendToClients(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1): void
       */
      sendToConnection(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1, float arg2, float arg3): void
       */
      sendToRelativeClients(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0): void
       */
      sendToServer(arg0: zombie.network.PacketTypes$PacketType): void;
      /**
       * Method Parameters: 
       *  - (Object... arg0): void
       */
      setData(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1): void
       */
      sync(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
    }
    /** [ENUM] zombie.network.packets.character.AnimalPacket$Existences */
    export class AnimalPacket$Existences {
      protected constructor();
      static readonly isInHutch: zombie.network.packets.character.AnimalPacket$Existences;
      static readonly isInVehicle: zombie.network.packets.character.AnimalPacket$Existences;
      static readonly isInWorld: zombie.network.packets.character.AnimalPacket$Existences;
      static readonly isItem: zombie.network.packets.character.AnimalPacket$Existences;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.network.packets.character.AnimalPacket$Existences>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.network.packets.character.AnimalPacket$Existences>;
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
       *  - (String arg0): zombie.network.packets.character.AnimalPacket$Existences
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.network.packets.character.AnimalPacket$Existences | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.network.packets.character.AnimalPacket$Existences[]
       */
      static values(): zombie.network.packets.character.AnimalPacket$Existences[];
    }
    /**
     * @customConstructor DeadCharacterPacket.new
     * @
     * [ABSTRACT CLASS] zombie.network.packets.character.DeadCharacterPacket
     */
    export class DeadCharacterPacket {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
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
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parseClient(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parseClientLoading(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parseServer(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      process(): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      processClient(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      processClientLoading(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1): void
       */
      processServer(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1): void
       */
      sendToClient(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1): void
       */
      sendToClients(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1): void
       */
      sendToConnection(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1, float arg2, float arg3): void
       */
      sendToRelativeClients(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0): void
       */
      sendToServer(arg0: zombie.network.PacketTypes$PacketType): void;
      /**
       * Method Parameters: 
       *  - (Object... arg0): void
       */
      setData(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1): void
       */
      sync(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
    }
    /**
     * @customConstructor PlayerPacket.new
     * @
     * [CLASS] zombie.network.packets.character.PlayerPacket
     */
    export class PlayerPacket {
      /** int */
      static readonly PACKET_SIZE_BYTES: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (PlayerPacket arg0): void
       */
      copy(arg0: zombie.network.packets.character.PlayerPacket): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBooleanVariables(): number;
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
       *  - (Empty): zombie.network.fields.IMovable
       */
      getMovable(): zombie.network.fields.IMovable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPacketSizeBytes(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      getPlayer(): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerIndex(): number;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.iso.Vector3
       */
      getPosition(arg0: zombie.iso.Vector3): zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRoleID(): number;
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
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parseClient(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parseClientLoading(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parseServer(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      processClient(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      processClientLoading(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1): void
       */
      processServer(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1): void
       */
      sendToClient(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1): void
       */
      sendToClients(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1): void
       */
      sendToConnection(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1, float arg2, float arg3): void
       */
      sendToRelativeClients(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0): void
       */
      sendToServer(arg0: zombie.network.PacketTypes$PacketType): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      set(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (Object... arg0): void
       */
      setData(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1): void
       */
      sync(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
    }
  }
}
