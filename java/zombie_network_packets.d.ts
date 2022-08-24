/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.network.packets {
    /**
     * @customConstructor DeadCharacterPacket.new
     * @
     * [ABSTRACT CLASS] zombie.network.packets.DeadCharacterPacket
     */
    export class DeadCharacterPacket {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDeathDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPacketSizeBytes(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsistent(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      log(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parse(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      process(): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      set(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
    }
    /**
     * @customConstructor PlayerPacket.new
     * @
     * [CLASS] zombie.network.packets.PlayerPacket
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
      copy(arg0: zombie.network.packets.PlayerPacket): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPacketSizeBytes(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsistent(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      log(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parse(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      set(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
    }
    /**
     * @customConstructor l_receive.new
     * @
     * [CLASS] zombie.network.packets.PlayerPacket$l_receive
     */
    export class PlayerPacket$l_receive {
      /** zombie.network.packets.PlayerPacket */
      static playerPacket?: zombie.network.packets.PlayerPacket;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor l_send.new
     * @
     * [CLASS] zombie.network.packets.PlayerPacket$l_send
     */
    export class PlayerPacket$l_send {
      /** zombie.network.packets.PlayerPacket */
      static playerPacket?: zombie.network.packets.PlayerPacket;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ValidatePacket.new
     * @
     * [CLASS] zombie.network.packets.ValidatePacket
     */
    export class ValidatePacket {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPacketSizeBytes(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConsistent(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      log(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parse(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      process(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      setSalt(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UdpConnection arg0): boolean
       */
      static isUntouchable(arg0: zombie.core.raknet.UdpConnection): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      static update(arg0: zombie.core.raknet.UdpConnection): void;
    }
    /** [ENUM] zombie.network.packets.ValidatePacket$ValidateState */
    export class ValidatePacket$ValidateState {
      protected constructor();
      static readonly Request: zombie.network.packets.ValidatePacket$ValidateState;
      static readonly Success: zombie.network.packets.ValidatePacket$ValidateState;
      name(): string;
      ordinal(): number;
      /**
       * @noSelf
       *
       * (String arg0): ValidateState
       */
      static valueOf(arg0: string | null): zombie.network.packets.ValidatePacket$ValidateState;

      /** @noSelf */
      static values(): zombie.network.packets.ValidatePacket$ValidateState[];

    }
  }
}
