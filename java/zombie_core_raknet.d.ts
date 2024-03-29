/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.raknet {
    /**
     * @customConstructor RakNetPeerInterface.new
     * @
     * [CLASS] zombie.core.raknet.RakNetPeerInterface
     */
    export class RakNetPeerInterface {
      /** byte */
      static readonly ConnectionType_Disconnected: number;
      /** byte */
      static readonly ConnectionType_Steam: number;
      /** byte */
      static readonly ConnectionType_UDPRakNet: number;
      /** int */
      static readonly ID_ALREADY_CONNECTED: number;
      /** int */
      static readonly ID_CONNECTED_PING: number;
      /** int */
      static readonly ID_CONNECTION_ATTEMPT_FAILED: number;
      /** int */
      static readonly ID_CONNECTION_BANNED: number;
      /** int */
      static readonly ID_CONNECTION_LOST: number;
      /** int */
      static readonly ID_CONNECTION_REQUEST_ACCEPTED: number;
      /** int */
      static readonly ID_DISCONNECTION_NOTIFICATION: number;
      /** int */
      static readonly ID_INCOMPATIBLE_PROTOCOL_VERSION: number;
      /** int */
      static readonly ID_INVALID_PASSWORD: number;
      /** int */
      static readonly ID_NEW_INCOMING_CONNECTION: number;
      /** int */
      static readonly ID_NO_FREE_INCOMING_CONNECTIONS: number;
      /** int */
      static readonly ID_PING: number;
      /** int */
      static readonly ID_RAKVOICE_CLOSE_CHANNEL: number;
      /** int */
      static readonly ID_RAKVOICE_OPEN_CHANNEL_REPLY: number;
      /** int */
      static readonly ID_RAKVOICE_OPEN_CHANNEL_REQUEST: number;
      /** int */
      static readonly ID_REMOTE_CONNECTION_LOST: number;
      /** int */
      static readonly ID_REMOTE_DISCONNECTION_NOTIFICATION: number;
      /** int */
      static readonly ID_REMOTE_NEW_INCOMING_CONNECTION: number;
      /** int */
      static readonly ID_UNCONNECTED_PING: number;
      /** int */
      static readonly ID_USER_PACKET_ENUM: number;
      /** int */
      static readonly PacketPriority_HIGH: number;
      /** int */
      static readonly PacketPriority_IMMEDIATE: number;
      /** int */
      static readonly PacketPriority_LOW: number;
      /** int */
      static readonly PacketPriority_MEDIUM: number;
      /** int */
      static readonly PacketReliability_RELIABLE: number;
      /** int */
      static readonly PacketReliability_RELIABLE_ORDERED: number;
      /** int */
      static readonly PacketReliability_RELIABLE_ORDERED_WITH_ACK_RECEIPT: number;
      /** int */
      static readonly PacketReliability_RELIABLE_SEQUENCED: number;
      /** int */
      static readonly PacketReliability_RELIABLE_WITH_ACK_RECEIPT: number;
      /** int */
      static readonly PacketReliability_UNRELIABLE: number;
      /** int */
      static readonly PacketReliability_UNRELIABLE_SEQUENCED: number;
      /** int */
      static readonly PacketReliability_UNRELIABLE_WITH_ACK_RECEIPT: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, String arg2, boolean arg3): number
       */
      Connect(arg0: string, arg1: number, arg2: string, arg3: boolean): number;
      /**
       * Method Parameters: 
       *  - (long arg0, String arg1, boolean arg2): number
       */
      ConnectToSteamServer(arg0: number, arg1: string, arg2: boolean): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      GetAveragePing(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      GetClientOwnerSteamID(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      GetClientSteamID(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      GetConnectionType(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetConnectionsNumber(): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      GetLastPing(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      GetLowestPing(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      GetMTUSize(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): zombie.core.znet.ZNetStatistics
       */
      GetNetStatistics(arg0: number): zombie.core.znet.ZNetStatistics;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetServerIP(): string;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      Init(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): boolean
       */
      Receive(arg0: java.nio.ByteBuffer): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, int arg2, byte arg3, long arg4, boolean arg5): number
       */
      Send(arg0: java.nio.ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, int arg2, byte arg3, long arg4, boolean arg5): number
       */
      SendRaw(arg0: java.nio.ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetClientPort(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      SetIncomingPassword(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetMaximumIncomingConnections(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      SetOccasionalPing(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      SetServerIP(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      SetServerPort(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetTimeoutTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetUnreliableTimeout(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Shutdown(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      Startup(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0, String arg1): void
       */
      disconnect(arg0: number, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getGuidFromIndex(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGuidOfPacket(): number;
      /**
       * Method Parameters: 
       *  - (long arg0): string
       */
      getIPFromGUID(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static init(): void;
    }
    /**
     * @customConstructor UdpConnection.new
     * @
     * [CLASS] zombie.core.raknet.UdpConnection
     */
    export class UdpConnection {
      /** long */
      static readonly CONNECTION_GRACE_INTERVAL: number;

      /**
       * Constructors: 
       *  - (UdpEngine arg0, long arg1, int arg2)
       */
      constructor(arg0: zombie.core.raknet.UdpEngine, arg1: number, arg2: number);
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): boolean
       *  - (float arg0, float arg1, float arg2): boolean
       */
      RelevantTo(arg0: number, arg1: number, arg2?: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1, float arg2): boolean
       */
      RelevantToPlayerIndex(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      calcCountPlayersInRelevantPosition(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      cancelPacket(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (int arg0, int arg1, byte arg2): void
       */
      endPacket(arg0?: number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endPacketImmediate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endPacketSuperHighUnreliable(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endPacketUnordered(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endPacketUnreliable(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endPingPacket(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      forceDisconnect(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAveragePing(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBufferPosition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getConnectedGUID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.raknet.UdpConnection$ConnectionType
       */
      getConnectionType(): zombie.core.raknet.UdpConnection$ConnectionType;
      /**
       * Method Parameters: 
       *  - (Empty): java.net.InetSocketAddress
       */
      getInetSocketAddress(): java.net.InetSocketAddress;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastPing(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLowestPing(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMTUSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.raknet.RakNetPeerInterface
       */
      getPeer(): zombie.core.raknet.RakNetPeerInterface;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      getRelevantAndDistance(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getServerIP(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.znet.ZNetStatistics
       */
      getStatistics(): zombie.core.znet.ZNetStatistics;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      havePlayer(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConnectionAttemptTimeout(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConnectionGraceIntervalTimeout(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFullyConnected(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setConnectionTimestamp(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setFullyConnected(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.network.ByteBufferWriter
       */
      startPacket(): zombie.core.network.ByteBufferWriter;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.network.ByteBufferWriter
       */
      startPingPacket(): zombie.core.network.ByteBufferWriter;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /** [ENUM] zombie.core.raknet.UdpConnection$ChecksumState */
    export class UdpConnection$ChecksumState {
      protected constructor();
      static readonly Different: zombie.core.raknet.UdpConnection$ChecksumState;
      static readonly Done: zombie.core.raknet.UdpConnection$ChecksumState;
      static readonly Init: zombie.core.raknet.UdpConnection$ChecksumState;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.raknet.UdpConnection$ChecksumState>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.raknet.UdpConnection$ChecksumState>;
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
       *  - (String arg0): zombie.core.raknet.UdpConnection$ChecksumState
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.raknet.UdpConnection$ChecksumState | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.raknet.UdpConnection$ChecksumState[]
       */
      static values(): zombie.core.raknet.UdpConnection$ChecksumState[];
    }
    /** [ENUM] zombie.core.raknet.UdpConnection$ConnectionType */
    export class UdpConnection$ConnectionType {
      protected constructor();
      static readonly Disconnected: zombie.core.raknet.UdpConnection$ConnectionType;
      static readonly Steam: zombie.core.raknet.UdpConnection$ConnectionType;
      static readonly UDPRakNet: zombie.core.raknet.UdpConnection$ConnectionType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.raknet.UdpConnection$ConnectionType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.raknet.UdpConnection$ConnectionType>;
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
       *  - (String arg0): zombie.core.raknet.UdpConnection$ConnectionType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.raknet.UdpConnection$ConnectionType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.raknet.UdpConnection$ConnectionType[]
       */
      static values(): zombie.core.raknet.UdpConnection$ConnectionType[];
    }
    /**
     * @customConstructor MPClientStatistic.new
     * @
     * [CLASS] zombie.core.raknet.UdpConnection$MPClientStatistic
     */
    export class UdpConnection$MPClientStatistic {
      /**
       * Constructors: 
       *  - (UdpConnection arg0)
       */
      constructor(arg0: zombie.core.raknet.UdpConnection);
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      parse(arg0: java.nio.ByteBuffer): void;
    }
    /**
     * @customConstructor UdpEngine.new
     * @
     * [CLASS] zombie.core.raknet.UdpEngine
     */
    export class UdpEngine {
      /**
       * Constructors: 
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4)
       */
      constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: boolean);
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, String arg2, boolean arg3): void
       */
      Connect(arg0: string, arg1: number, arg2: string, arg3: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.nio.ByteBuffer
       */
      Receive(): java.nio.ByteBuffer;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      SetServerPassword(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Shutdown(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      connected(): void;
      /**
       * Method Parameters: 
       *  - (PacketType arg0): void
       */
      endPacketBroadcast(arg0: zombie.network.PacketTypes$PacketType): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, UdpConnection arg2): void
       */
      endPacketBroadcastExcept(arg0: number, arg1: number, arg2: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (long arg0, String arg1): void
       */
      forceDisconnect(arg0: number, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (long arg0): zombie.core.raknet.UdpConnection
       */
      getActiveConnection(arg0: number): zombie.core.raknet.UdpConnection;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      getClientOwnerSteamID(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (long arg0): number
       */
      getClientSteamID(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxConnections(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.raknet.RakNetPeerInterface
       */
      getPeer(): zombie.core.raknet.RakNetPeerInterface;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getServerIP(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      hashServerPassword(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.network.ByteBufferWriter
       */
      startPacket(): zombie.core.network.ByteBufferWriter;
    }
  }
}
