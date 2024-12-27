/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.network.packets.hit {
    /**
     * @customConstructor VehicleHit.new
     * @
     * [ABSTRACT CLASS] zombie.network.packets.hit.VehicleHit
     */
    export class VehicleHit {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      attack(): void;
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
       *  - (UdpConnection arg0): boolean
       */
      isRelevant(arg0: zombie.core.raknet.UdpConnection): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      log(): void;
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
      postProcess(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postpone(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      preProcess(): void;
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
       *  - (Empty): void
       */
      react(): void;
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
       *  - (Empty): void
       */
      tryProcessInternal(): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
    }
  }
}
