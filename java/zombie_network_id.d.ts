/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.network.id {
    /**
     * @customConstructor IIdentifiable.new
     * @
     * [INTERFACE] zombie.network.id.IIdentifiable
     */
    export class IIdentifiable {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.network.id.ObjectID
       */
      getObjectID(): zombie.network.id.ObjectID;
    }
    /**
     * @customConstructor ObjectID.new
     * @
     * [ABSTRACT CLASS] zombie.network.id.ObjectID
     */
    export class ObjectID {

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
       *  - (Empty): string
       *  - (HashSet arg0): string
       */
      getDescription(arg0?: java.util.HashSet<any>): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.network.id.IIdentifiable
       */
      getObject(): zombie.network.id.IIdentifiable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPacketSizeBytes(): number;
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
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      parse(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ObjectID arg0): void
       */
      set(arg0: zombie.network.id.ObjectID): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      write(arg0: zombie.core.network.ByteBufferWriter): void;
    }
  }
}
