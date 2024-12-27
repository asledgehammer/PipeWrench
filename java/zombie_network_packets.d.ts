/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.network.packets {
    /**
     * @customConstructor BodyPartSyncPacket.new
     * @
     * [CLASS] zombie.network.packets.BodyPartSyncPacket
     */
    export class BodyPartSyncPacket {
      /** long */
      static readonly BD_BodyDamage: number;
      /** long */
      static readonly BD_Health: number;
      /** long */
      static readonly BD_IsBleedingStemmed: number;
      /** long */
      static readonly BD_IsCauterized: number;
      /** long */
      static readonly BD_IsFakeInfected: number;
      /** long */
      static readonly BD_IsInfected: number;
      /** long */
      static readonly BD_additionalPain: number;
      /** long */
      static readonly BD_alcoholLevel: number;
      /** long */
      static readonly BD_alcoholicBandage: number;
      /** long */
      static readonly BD_bandageLife: number;
      /** long */
      static readonly BD_bandageType: number;
      /** long */
      static readonly BD_bandaged: number;
      /** long */
      static readonly BD_biteTime: number;
      /** long */
      static readonly BD_bitten: number;
      /** long */
      static readonly BD_bleeding: number;
      /** long */
      static readonly BD_bleedingTime: number;
      /** long */
      static readonly BD_burnTime: number;
      /** long */
      static readonly BD_comfreyFactor: number;
      /** long */
      static readonly BD_cut: number;
      /** long */
      static readonly BD_cutTime: number;
      /** long */
      static readonly BD_deepWoundTime: number;
      /** long */
      static readonly BD_deepWounded: number;
      /** long */
      static readonly BD_fractureTime: number;
      /** long */
      static readonly BD_garlicFactor: number;
      /** long */
      static readonly BD_getBandageXp: number;
      /** long */
      static readonly BD_getSplintXp: number;
      /** long */
      static readonly BD_getStitchXp: number;
      /** long */
      static readonly BD_haveBullet: number;
      /** long */
      static readonly BD_haveGlass: number;
      /** long */
      static readonly BD_infectedWound: number;
      /** long */
      static readonly BD_lastTimeBurnWash: number;
      /** long */
      static readonly BD_needBurnWash: number;
      /** long */
      static readonly BD_plantainFactor: number;
      /** long */
      static readonly BD_scratchTime: number;
      /** long */
      static readonly BD_scratched: number;
      /** long */
      static readonly BD_splint: number;
      /** long */
      static readonly BD_splintFactor: number;
      /** long */
      static readonly BD_splintItem: number;
      /** long */
      static readonly BD_stiffness: number;
      /** long */
      static readonly BD_stitchTime: number;
      /** long */
      static readonly BD_stitched: number;
      /** long */
      static readonly BD_woundInfectionLevel: number;

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
     * @customConstructor INetworkPacket.new
     * @
     * [INTERFACE] zombie.network.packets.INetworkPacket
     */
    export class INetworkPacket {
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
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (PacketType arg0, Object... arg1): zombie.network.packets.INetworkPacket
       */
      static createPacket(arg0: zombie.network.PacketTypes$PacketType, arg1: any): zombie.network.packets.INetworkPacket;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1, Object... arg2): void
       */
      static processPacketOnServer(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection, arg2: any): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (PacketType arg0, Object... arg1): void
       *  - (IsoPlayer arg0, PacketType arg1, Object... arg2): void
       *  - (UdpConnection arg0, PacketType arg1, Object... arg2): void
       *  - (UdpConnection arg0, PacketType arg1, Object... arg2): void
       */
      static send(arg0: zombie.network.PacketTypes$PacketType | zombie.characters.IsoPlayer | zombie.core.raknet.UdpConnection | zombie.spnetwork.UdpConnection, arg1: any | zombie.network.PacketTypes$PacketType, arg2?: any): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (PacketType arg0, UdpConnection arg1, Object... arg2): void
       */
      static sendToAll(arg0: zombie.network.PacketTypes$PacketType, arg1: zombie.core.raknet.UdpConnection, arg2: any): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (PacketType arg0, float arg1, float arg2, Object... arg3): void
       *  - (PacketType arg0, UdpConnection arg1, float arg2, float arg3, Object... arg4): void
       */
      static sendToRelative(arg0: zombie.network.PacketTypes$PacketType, arg1: number | zombie.core.raknet.UdpConnection, arg2: number, arg3: any | number, arg4?: any): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (PacketType arg0, int arg1, int arg2, Object... arg3): void
       */
      static sendToRelativeAndProcess(arg0: zombie.network.PacketTypes$PacketType, arg1: number, arg2: number, arg3: any): void;
    }
    /**
     * @customConstructor NetTimedActionPacket.new
     * @
     * [CLASS] zombie.network.packets.NetTimedActionPacket extends zombie.core.NetTimedAction
     */
    export class NetTimedActionPacket {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      animEvent(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceComplete(): void;
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
       *  - (Empty): number
       */
      getProgress(): number;
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
       *  - (IsoPlayer arg0, KahluaTable arg1): void
       */
      set(arg0: zombie.characters.IsoPlayer, arg1?: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Object... arg0): void
       */
      setData(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      setDuration(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (TransactionState arg0): void
       */
      setState(arg0: zombie.core.Transaction$TransactionState): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setTimeData(): void;
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
     * @customConstructor SyncPlayerStatsPacket.new
     * @
     * [CLASS] zombie.network.packets.SyncPlayerStatsPacket
     */
    export class SyncPlayerStatsPacket {
      /** int */
      static readonly Stat_Anger: number;
      /** int */
      static readonly Stat_Boredom: number;
      /** int */
      static readonly Stat_Drunkennes: number;
      /** int */
      static readonly Stat_Endurance: number;
      /** int */
      static readonly Stat_Fatigue: number;
      /** int */
      static readonly Stat_Fear: number;
      /** int */
      static readonly Stat_Fitness: number;
      /** int */
      static readonly Stat_Hunger: number;
      /** int */
      static readonly Stat_Morale: number;
      /** int */
      static readonly Stat_Pain: number;
      /** int */
      static readonly Stat_Panic: number;
      /** int */
      static readonly Stat_Sanity: number;
      /** int */
      static readonly Stat_Sickness: number;
      /** int */
      static readonly Stat_Stress: number;
      /** int */
      static readonly Stat_StressFromCigarettes: number;
      /** int */
      static readonly Stat_Thirst: number;

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
  }
}
