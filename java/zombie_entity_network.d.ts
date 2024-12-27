/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.entity.network {
    /**
     * @customConstructor EntityPacketData.new
     * @
     * [CLASS] zombie.entity.network.EntityPacketData
     */
    export class EntityPacketData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.network.EntityPacketType
       */
      getEntityPacketType(): zombie.entity.network.EntityPacketType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (EntityPacketType arg0): zombie.entity.network.EntityPacketData
       */
      static alloc(arg0: zombie.entity.network.EntityPacketType): zombie.entity.network.EntityPacketData;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (EntityPacketData arg0): void
       */
      static release(arg0: zombie.entity.network.EntityPacketData): void;
    }
    /** [ENUM] zombie.entity.network.EntityPacketType */
    export class EntityPacketType {
      protected constructor();
      static readonly CraftLogicStartRequest: zombie.entity.network.EntityPacketType;
      static readonly CraftLogicStopRequest: zombie.entity.network.EntityPacketType;
      static readonly CraftLogicSync: zombie.entity.network.EntityPacketType;
      static readonly CraftLogicSyncFull: zombie.entity.network.EntityPacketType;
      static readonly MashingLogicStartRequest: zombie.entity.network.EntityPacketType;
      static readonly MashingLogicStopRequest: zombie.entity.network.EntityPacketType;
      static readonly MashingLogicSync: zombie.entity.network.EntityPacketType;
      static readonly MashingLogicSyncFull: zombie.entity.network.EntityPacketType;
      static readonly RequestSyncGameEntity: zombie.entity.network.EntityPacketType;
      static readonly ResourcesSync: zombie.entity.network.EntityPacketType;
      static readonly SyncGameEntity: zombie.entity.network.EntityPacketType;
      static readonly UpdateUsingPlayer: zombie.entity.network.EntityPacketType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.network.EntityPacketType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.network.EntityPacketType>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.network.PacketGroup
       */
      getGroup(): zombie.entity.network.PacketGroup;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isComponentPacket(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEntityPacket(): boolean;
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
       *  - (ByteBuffer arg0): void
       *  - (ByteBufferWriter arg0): void
       */
      saveToByteBuffer(arg0: java.nio.ByteBuffer | zombie.core.network.ByteBufferWriter): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0): zombie.entity.network.EntityPacketType
       */
      static FromByteBuffer(arg0: java.nio.ByteBuffer): zombie.entity.network.EntityPacketType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.network.EntityPacketType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.network.EntityPacketType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.network.EntityPacketType[]
       */
      static values(): zombie.entity.network.EntityPacketType[];
    }
    /** [ENUM] zombie.entity.network.PacketGroup */
    export class PacketGroup {
      protected constructor();
      static readonly CraftLogic: zombie.entity.network.PacketGroup;
      static readonly GameEntity: zombie.entity.network.PacketGroup;
      static readonly Generic: zombie.entity.network.PacketGroup;
      static readonly MashingLogic: zombie.entity.network.PacketGroup;
      static readonly Resources: zombie.entity.network.PacketGroup;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.network.PacketGroup>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.network.PacketGroup>;
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
       *  - (String arg0): zombie.entity.network.PacketGroup
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.network.PacketGroup | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.network.PacketGroup[]
       */
      static values(): zombie.entity.network.PacketGroup[];
    }
  }
}
