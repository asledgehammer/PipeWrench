/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.spnetwork {
    /**
     * @customConstructor UdpConnection.new
     * @
     * [CLASS] zombie.spnetwork.UdpConnection
     */
    export class UdpConnection {
      /**
       * Constructors: 
       *  - (UdpEngine arg0)
       */
      constructor(arg0: zombie.spnetwork.UdpEngine);
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): boolean
       */
      ReleventTo(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      cancelPacket(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endPacketImmediate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.network.ByteBufferWriter
       */
      startPacket(): zombie.core.network.ByteBufferWriter;
    }
    /**
     * @customConstructor UdpEngine.new
     * @
     * [ABSTRACT CLASS] zombie.spnetwork.UdpEngine
     */
    export class UdpEngine {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      Receive(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      Send(arg0: java.nio.ByteBuffer): void;
    }
  }
}
