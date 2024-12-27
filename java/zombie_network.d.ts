/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.network {
    /**
     * @customConstructor BodyDamageSync.new
     * @
     * [CLASS] zombie.network.BodyDamageSync
     */
    export class BodyDamageSync {
      /** byte */
      static readonly BD_BodyDamage: number;
      /** byte */
      static readonly BD_END: number;
      /** byte */
      static readonly BD_Health: number;
      /** byte */
      static readonly BD_IsBleedingStemmed: number;
      /** byte */
      static readonly BD_IsCauterized: number;
      /** byte */
      static readonly BD_IsFakeInfected: number;
      /** byte */
      static readonly BD_IsInfected: number;
      /** byte */
      static readonly BD_MaxParam: number;
      /** byte */
      static readonly BD_START: number;
      /** byte */
      static readonly BD_additionalPain: number;
      /** byte */
      static readonly BD_alcoholLevel: number;
      /** byte */
      static readonly BD_alcoholicBandage: number;
      /** byte */
      static readonly BD_bandageLife: number;
      /** byte */
      static readonly BD_bandageType: number;
      /** byte */
      static readonly BD_bandaged: number;
      /** byte */
      static readonly BD_biteTime: number;
      /** byte */
      static readonly BD_bitten: number;
      /** byte */
      static readonly BD_bleeding: number;
      /** byte */
      static readonly BD_bleedingTime: number;
      /** byte */
      static readonly BD_burnTime: number;
      /** byte */
      static readonly BD_comfreyFactor: number;
      /** byte */
      static readonly BD_cut: number;
      /** byte */
      static readonly BD_cutTime: number;
      /** byte */
      static readonly BD_deepWoundTime: number;
      /** byte */
      static readonly BD_deepWounded: number;
      /** byte */
      static readonly BD_fractureTime: number;
      /** byte */
      static readonly BD_garlicFactor: number;
      /** byte */
      static readonly BD_getBandageXp: number;
      /** byte */
      static readonly BD_getSplintXp: number;
      /** byte */
      static readonly BD_getStitchXp: number;
      /** byte */
      static readonly BD_haveBullet: number;
      /** byte */
      static readonly BD_haveGlass: number;
      /** byte */
      static readonly BD_infectedWound: number;
      /** byte */
      static readonly BD_lastTimeBurnWash: number;
      /** byte */
      static readonly BD_needBurnWash: number;
      /** byte */
      static readonly BD_plantainFactor: number;
      /** byte */
      static readonly BD_scratchTime: number;
      /** byte */
      static readonly BD_scratched: number;
      /** byte */
      static readonly BD_splint: number;
      /** byte */
      static readonly BD_splintFactor: number;
      /** byte */
      static readonly BD_splintItem: number;
      /** byte */
      static readonly BD_stiffness: number;
      /** byte */
      static readonly BD_stitchTime: number;
      /** byte */
      static readonly BD_stitched: number;
      /** byte */
      static readonly BD_woundInfectionLevel: number;
      /** zombie.network.BodyDamageSync */
      static instance?: zombie.network.BodyDamageSync;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      startReceivingUpdates(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (short arg0, short arg1): void
       */
      startSendingUpdates(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      stopReceivingUpdates(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (short arg0, short arg1): void
       */
      stopSendingUpdates(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor Updater.new
     * @
     * [CLASS] zombie.network.BodyDamageSync$Updater
     */
    export class BodyDamageSync$Updater {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (byte arg0, boolean arg1): void
       *  - (byte arg0, String arg1): void
       *  - (byte arg0, float arg1, float arg2): boolean
       */
      updateField(arg0: number, arg1: boolean | string | number, arg2?: number): void | boolean;
    }
    /**
     * @customConstructor ClientChunkRequest.new
     * @
     * [CLASS] zombie.network.ClientChunkRequest
     */
    export class ClientChunkRequest {
      /** java.util.concurrent.ConcurrentLinkedQueue<java.nio.ByteBuffer> */
      static readonly freeBuffers?: java.util.concurrent.ConcurrentLinkedQueue<java.nio.ByteBuffer>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Chunk arg0): void
       */
      getByteBuffer(arg0: zombie.network.ClientChunkRequest$Chunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.network.ClientChunkRequest$Chunk
       */
      getChunk(): zombie.network.ClientChunkRequest$Chunk;
      /**
       * Method Parameters: 
       *  - (Chunk arg0): void
       */
      releaseBuffer(arg0: zombie.network.ClientChunkRequest$Chunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      releaseBuffers(): void;
      /**
       * Method Parameters: 
       *  - (Chunk arg0): void
       */
      releaseChunk(arg0: zombie.network.ClientChunkRequest$Chunk): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      unpack(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      unpackLargeArea(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
    }
    /**
     * @customConstructor Chunk.new
     * @
     * [CLASS] zombie.network.ClientChunkRequest$Chunk
     */
    export class ClientChunkRequest$Chunk {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ClientServerMap.new
     * @
     * [CLASS] zombie.network.ClientServerMap
     */
    export class ClientServerMap {
      /**
       * Constructors: 
       *  - (int arg0, int arg1, int arg2, int arg3)
       */
      constructor(arg0: number, arg1: number, arg2: number, arg3: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinY(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isValidCell(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      sendPacket(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      setLoaded(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      setPlayerPosition(arg0: number, arg1: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (UdpConnection arg0, int arg1): void
       */
      static characterIn(arg0: zombie.core.raknet.UdpConnection, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      static isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static render(arg0: number): void;
    }
    /**
     * @customConstructor DBResult.new
     * @
     * [CLASS] zombie.network.DBResult
     */
    export class DBResult {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getColumns(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTableName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<string, string>
       */
      getValues(): java.util.HashMap<string, string>;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setColumns(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTableName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setType(arg0: string): void;
    }
    /**
     * @customConstructor DBTicket.new
     * @
     * [CLASS] zombie.network.DBTicket
     */
    export class DBTicket {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, int arg2)
       */
      constructor(arg0: string, arg1: string, arg2: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.network.DBTicket
       */
      getAnswer(): zombie.network.DBTicket;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAuthor(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMessage(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTicketID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnswer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isViewed(): boolean;
      /**
       * Method Parameters: 
       *  - (DBTicket arg0): void
       */
      setAnswer(arg0: zombie.network.DBTicket): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAuthor(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsAnswer(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setMessage(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTicketID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setViewed(arg0: boolean): void;
    }
    /**
     * @customConstructor GameClient.new
     * @
     * [CLASS] zombie.network.GameClient
     */
    export class GameClient {
      /** int */
      static readonly DEFAULT_PORT: number;
      /** java.lang.String */
      static GameMap?: string;
      /** java.util.HashMap<java.lang.Short, zombie.characters.IsoPlayer> */
      static readonly IDToPlayerMap?: java.util.HashMap<number, zombie.characters.IsoPlayer>;
      /** gnu.trove.map.hash.TShortObjectHashMap<zombie.characters.IsoZombie> */
      static readonly IDToZombieMap?: gnu.trove.map.hash.TShortObjectHashMap<zombie.characters.IsoZombie>;
      /** java.lang.String */
      static ServerName?: string;
      /** float */
      static ServerPredictedAhead: number;
      /** boolean */
      static allChatMuted: boolean;
      /** boolean */
      static askCustomizationData: boolean;
      /** boolean */
      static askPing: boolean;
      /** int */
      static authType: number;
      /** boolean */
      static bClient: boolean;
      /** boolean */
      static bCoopInvite: boolean;
      /** boolean */
      static bFastForward: boolean;
      /** boolean */
      static bIngame: boolean;
      /** java.lang.String */
      static checksum?: string;
      /** boolean */
      static checksumValid: boolean;
      /** zombie.core.raknet.UdpConnection */
      static connection?: zombie.core.raknet.UdpConnection;
      /** int */
      static count: number;
      /** java.lang.String */
      static googleKey?: string;
      /** zombie.network.GameClient */
      static readonly instance?: zombie.network.GameClient;
      /** java.lang.String */
      static ip?: string;
      /** zombie.network.ClientServerMap[] */
      static readonly loadedCells?: zombie.network.ClientServerMap[];
      /** java.lang.String */
      static localIP?: string;
      /** java.lang.String */
      static password?: string;
      /** java.util.List<java.lang.Long> */
      static pingsList?: java.util.List<number>;
      /** java.lang.String */
      static poisonousBerry?: string;
      /** java.lang.String */
      static poisonousMushroom?: string;
      /** int */
      static port: number;
      /** java.util.Map<java.lang.Short, zombie.iso.Vector2> */
      static readonly positions?: java.util.Map<number, zombie.iso.Vector2>;
      /** boolean */
      static sendQR: boolean;
      /** java.lang.String */
      static serverPassword?: string;
      /** java.util.Calendar */
      static startAuth?: java.util.Calendar;
      /** long */
      static steamID: number;
      /** boolean */
      static useSteamRelay: boolean;
      /** java.lang.String */
      static username?: string;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      GameLoadingRequestData(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, IsoMovingObject arg2): void
       */
      PlaySound(arg0: string, arg1: boolean, arg2: zombie.iso.IsoMovingObject): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2, byte arg3): void
       */
      PlayWorldSound(arg0: string, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Shutdown(): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, String arg1, boolean arg2): void
       */
      StopSound(arg0: zombie.iso.IsoMovingObject, arg1: string, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1, boolean arg2): void
       */
      acceptTrading(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      addDisconnectPacket(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (short arg0, ByteBuffer arg1): void
       */
      addIncoming(arg0: number, arg1: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, ItemContainer arg1, InventoryItem arg2): void
       */
      addToItemRemoveSendBuffer(arg0: zombie.iso.IsoObject, arg1: zombie.inventory.ItemContainer, arg2: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, ItemContainer arg1, InventoryItem arg2): void
       */
      addToItemSendBuffer(arg0: zombie.iso.IsoObject, arg1: zombie.inventory.ItemContainer, arg2: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): void
       */
      addUserlog(arg0: string, arg1: string, arg2: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): void
       */
      addWarningPoint(arg0: string, arg1: string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canConnect(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      checkAddedRemovedItems(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      connectionLost(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      delayPacket(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      disconnect(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, boolean arg7, int arg8): void
       *  - (String arg0, String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, boolean arg7, int arg8, String arg9): void
       */
      doConnect(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, arg7: boolean, arg8: number, arg9?: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      doConnectCoop(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      doDisconnect(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, float arg1): void
       */
      drink(arg0: zombie.characters.IsoPlayer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, Food arg1, float arg2): void
       */
      eatFood(arg0: zombie.characters.IsoPlayer, arg1: zombie.inventory.types.Food, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, KahluaTable arg1): void
       */
      executeQuery(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      generateSecretKey(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoPlayer>
       */
      getConnectedPlayers(): java.util.ArrayList<zombie.characters.IsoPlayer>;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      getDBSchema(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): string
       */
      getGoogleAuthenticatorBarCode(arg0: string, arg1: string, arg2: string): string;
      /**
       * Method Parameters: 
       *  - (short arg0): zombie.characters.IsoPlayer
       */
      getPlayerByOnlineID(arg0: number): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.IsoPlayer
       */
      getPlayerFromUsername(arg0: string): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoPlayer>
       */
      getPlayers(): java.util.ArrayList<zombie.characters.IsoPlayer>;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): string
       */
      getQR(arg0: string, arg1: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReconnectCountdownTimer(): string;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getServerSpawnRegions(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      getTableResult(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      heartBeat(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      loadResetID(): void;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0): void
       */
      removeBrokenGlass(arg0: zombie.iso.objects.IsoWindow): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): void
       */
      removeUserlog(arg0: string, arg1: string, arg2: string): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      removeZombieFromCache(arg0: zombie.characters.IsoZombie): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      requestPacketCounts(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1): void
       */
      requestTrading(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      requestUserlog(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetDisconnectTimer(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      scoreboardUpdate(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, Perk arg1, float arg2, boolean arg3): void
       */
      sendAddXp(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.skills.PerkFactory$Perk, arg2: number, arg3: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      sendAddedRemovedItems(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1, InventoryItem arg2): void
       */
      sendAttachedItem(arg0: zombie.characters.IsoPlayer, arg1: string, arg2: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendChangedPlayerStats(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1, String arg2, KahluaTable arg3): void
       */
      sendClientCommand(arg0: zombie.characters.IsoPlayer, arg1: string, arg2: string, arg3: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1, String arg2, Object... arg3): void
       */
      sendClientCommandV(arg0: zombie.characters.IsoPlayer, arg1: string, arg2: string, arg3: any): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      sendGetAnimalTracks(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      sendItemStats(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      sendLoginQueueDone(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      sendLoginQueueRequest(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendPersonalColor(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendPlayer(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendPlayer2(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendPlayerConnect(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (SandboxOptions arg0): void
       */
      sendSandboxOptionsToServer(arg0: zombie.SandboxOptions): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendSyncXp(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      sendVisual(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, HandWeapon arg1, IsoObject arg2): void
       */
      sendWeaponHit(arg0: zombie.characters.IsoPlayer, arg1: zombie.inventory.types.HandWeapon, arg2: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      sendWorldMessage(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (WorldSound arg0): void
       */
      sendWorldSound(arg0: zombie.WorldSoundManager$WorldSound): void;
      /**
       * Method Parameters: 
       *  - (RequestState arg0): void
       */
      setRequest(arg0: zombie.network.GameClient$RequestState): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setResetID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0): void
       */
      smashWindow(arg0: zombie.iso.objects.IsoWindow): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      startClient(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      startLocalServer(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1, InventoryItem arg2): void
       */
      tradingUISendAddItem(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1, InventoryItem arg2): void
       */
      tradingUISendRemoveItem(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1, int arg2): void
       */
      tradingUISendUpdateState(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static IsClientPaused(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static SendCommandToServer(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Faction arg0, String arg1): void
       */
      static acceptFactionInvite(arg0: zombie.characters.Faction, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2): void
       */
      static addTicket(arg0: string, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static canSeePlayerStats(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      static destroy(arg0: zombie.iso.IsoObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getServerStatisticEnable(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static getTickets(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (short arg0): zombie.characters.IsoZombie
       */
      static getZombie(arg0: number): zombie.characters.IsoZombie;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, String arg1, short arg2, String arg3): void
       */
      static invMngRequestItem(arg0: number, arg1: string, arg2: number, arg3: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, short arg1, String arg2): void
       */
      static invMngRequestRemoveItem(arg0: number, arg1: number, arg2: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, short arg1): void
       */
      static receiveEatBody(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (short arg0): void
       */
      static receivePlayerTimeout(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, short arg1): void
       */
      static receiveRadioDeviceDataState(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, short arg1): void
       */
      static receiveRadioPostSilence(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, short arg1): void
       */
      static receiveRadioServerData(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, short arg1): void
       */
      static receiveSyncRadioData(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, short arg1): void
       */
      static receiveThump(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, float arg1, float arg2): void
       */
      static rememberPlayerPosition(arg0: zombie.characters.IsoPlayer, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static removeTicket(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BaseAction arg0, boolean arg1): void
       */
      static sendAction(arg0: zombie.characters.CharacterTimedActions.BaseAction, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoAnimal arg0): void
       */
      static sendAnimalDeath(arg0: zombie.characters.animals.IsoAnimal): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoMovingObject arg1, float arg2, boolean arg3): void
       */
      static sendAnimalHitAnimal(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoMovingObject, arg2: number, arg3: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoMovingObject arg1, float arg2, boolean arg3): void
       */
      static sendAnimalHitPlayer(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoMovingObject, arg2: number, arg3: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      static sendAnimalHitThumpable(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2, float arg3): void
       */
      static sendBigWaterSplash(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Safety arg0): void
       */
      static sendChangeSafety(arg0: zombie.characters.Safety): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoCompost arg0): void
       */
      static sendCompost(arg0: zombie.iso.objects.IsoCompost): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (byte arg0): void
       */
      static sendCreatePlayer(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoZombie arg0, IsoMovingObject arg1): void
       */
      static sendEatBody(arg0: zombie.characters.IsoZombie, arg1: zombie.iso.IsoMovingObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendEquippedRadioFreq(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1): void
       */
      static sendEvent(arg0: zombie.characters.IsoPlayer, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Faction arg0, boolean arg1): void
       */
      static sendFaction(arg0: zombie.characters.Faction, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Faction arg0, IsoPlayer arg1, String arg2): void
       */
      static sendFactionInvite(arg0: zombie.characters.Faction, arg1: zombie.characters.IsoPlayer, arg2: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static sendFishingDataRequest(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1, float arg2): void
       */
      static sendForageItemFound(arg0: zombie.characters.IsoPlayer, arg1: string, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static sendIsoRegionDataRequest(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, String arg3, String arg4, String arg5, float arg6, float arg7, float arg8, int arg9, boolean arg10): void
       */
      static sendIsoWaveSignal(arg0: number, arg1: number, arg2: number, arg3: string, arg4: string, arg5: string, arg6: number, arg7: number, arg8: number, arg9: number, arg10: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, ArrayList arg1, IsoPlayer arg2, String arg3, String arg4): boolean
       */
      static sendItemListNet(arg0: zombie.characters.IsoPlayer, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>, arg2: zombie.characters.IsoPlayer, arg3: string, arg4: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (NonPvpZone arg0, boolean arg1): void
       */
      static sendNonPvpZone(arg0: zombie.iso.areas.NonPvpZone, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendPerks(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static sendPing(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendPlayerDamage(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendPlayerDeath(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendPlayerExtraInfo(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoObject arg1, HandWeapon arg2, float arg3, boolean arg4, float arg5, boolean arg6, boolean arg7, boolean arg8): boolean
       */
      static sendPlayerHit(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoObject, arg2: zombie.inventory.types.HandWeapon, arg3: number, arg4: boolean, arg5: number, arg6: boolean, arg7: boolean, arg8: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendPlayerInjuries(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, boolean arg1, boolean arg2): void
       */
      static sendPlayerListensChannel(arg0: number, arg1: boolean, arg2: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static sendRadioServerDataRequest(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoDeadBody arg0): void
       */
      static sendRemoveCorpseFromMap(arg0: zombie.iso.objects.IsoDeadBody): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0): void
       */
      static sendServerPing(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, int arg1, byte arg2): void
       */
      static sendSneezingCoughing(arg0: zombie.characters.IsoPlayer, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      static sendStopFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, Thumpable arg1): void
       */
      static sendThump(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.objects.interfaces.Thumpable): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoGameCharacter arg1, BaseVehicle arg2, float arg3, boolean arg4, int arg5, float arg6, boolean arg7): void
       */
      static sendVehicleHit(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.vehicles.BaseVehicle, arg3: number, arg4: boolean, arg5: number, arg6: number, arg7: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendWeight(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      static sendZombieDeath(arg0: zombie.characters.IsoZombie): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoZombie arg0, IsoPlayer arg1): void
       */
      static sendZombieHit(arg0: zombie.characters.IsoZombie, arg1: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setIsClientPaused(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setServerStatisticEnable(arg0: boolean): void;
    }
    /** [ENUM] zombie.network.GameClient$RequestState */
    export class GameClient$RequestState {
      protected constructor();
      static readonly Complete: zombie.network.GameClient$RequestState;
      static readonly Loading: zombie.network.GameClient$RequestState;
      static readonly Start: zombie.network.GameClient$RequestState;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.network.GameClient$RequestState>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.network.GameClient$RequestState>;
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
       *  - (String arg0): zombie.network.GameClient$RequestState
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.network.GameClient$RequestState | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.network.GameClient$RequestState[]
       */
      static values(): zombie.network.GameClient$RequestState[];
    }
    /**
     * @customConstructor NetworkAIParams.new
     * @
     * [CLASS] zombie.network.NetworkAIParams
     */
    export class NetworkAIParams {
      /** int */
      static readonly ANIMAL_PREDICT_INTERVAL: number;
      /** float */
      static readonly ANIMAL_PREDICT_UPDATE_LIMIT: number;
      /** int */
      static readonly CHARACTER_EXTRAPOLATION_UPDATE_INTERVAL_MS: number;
      /** int */
      static readonly CHARACTER_PREDICTION_INTERVAL_MS: number;
      /** int */
      static readonly CHARACTER_UPDATE_RATE_MS: number;
      /** int */
      static readonly MAX_CONNECTIONS: number;
      /** float */
      static readonly MAX_RECONNECT_DISTANCE_SQ: number;
      /** float */
      static readonly MAX_TOWING_CAR_DISTANCE_SQ: number;
      /** float */
      static readonly MAX_TOWING_TRAILER_DISTANCE_SQ: number;
      /** float */
      static readonly TOWING_DISTANCE: number;
      /** int */
      static readonly VEHICLE_BUFFER_DELAY_MS: number;
      /** int */
      static readonly VEHICLE_BUFFER_HISTORY_MS: number;
      /** float */
      static readonly VEHICLE_DELAY_HIGH_PING_MULTIPLIXER: number;
      /** float */
      static readonly VEHICLE_DELAY_NORMALISE_PER_SEC: number;
      /** float */
      static readonly VEHICLE_DELAY_SLOWING_DOWN_DELAY_MULTIPLIXER: number;
      /** float */
      static readonly VEHICLE_DELAY_TUNE_MULTIPLIXER: number;
      /** float */
      static readonly VEHICLE_DELAY_TUNE_PER_SEC: number;
      /** int */
      static readonly VEHICLE_HIGH_PING_COUNT: number;
      /** int */
      static readonly VEHICLE_MOVING_MP_PHYSIC_UPDATE_RATE: number;
      /** int */
      static readonly VEHICLE_MP_PHYSIC_UPDATE_RATE: number;
      /** int */
      static readonly VEHICLE_SPEED_CAP: number;
      /** float */
      static readonly ZOMBIE_ANTICIPATORY_UPDATE_MULTIPLIER: number;
      /** int */
      static readonly ZOMBIE_MAX_UPDATE_INTERVAL_MS: number;
      /** int */
      static readonly ZOMBIE_MIN_UPDATE_INTERVAL_MS: number;
      /** int */
      static readonly ZOMBIE_OWNERSHIP_INTERVAL: number;
      /** int */
      static readonly ZOMBIE_REMOVE_INTERVAL_MS: number;
      /** int */
      static readonly ZOMBIE_TELEPORT_DISTANCE_SQ: number;
      /** int */
      static readonly ZOMBIE_TELEPORT_PLAYER: number;
      /** int */
      static readonly ZOMBIE_UPDATE_INFO_BUNCH_RATE_MS: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Init(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isShowConnectionInfo(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isShowServerInfo(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setShowConnectionInfo(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setShowServerInfo(arg0: boolean): void;
    }
    /** [ENUM] zombie.network.NetworkVariables$PredictionTypes */
    export class NetworkVariables$PredictionTypes {
      protected constructor();
      static readonly Climb: zombie.network.NetworkVariables$PredictionTypes;
      static readonly Lunge: zombie.network.NetworkVariables$PredictionTypes;
      static readonly LungeHalf: zombie.network.NetworkVariables$PredictionTypes;
      static readonly Moving: zombie.network.NetworkVariables$PredictionTypes;
      static readonly None: zombie.network.NetworkVariables$PredictionTypes;
      static readonly PathFind: zombie.network.NetworkVariables$PredictionTypes;
      static readonly Static: zombie.network.NetworkVariables$PredictionTypes;
      static readonly Thump: zombie.network.NetworkVariables$PredictionTypes;
      static readonly Walk: zombie.network.NetworkVariables$PredictionTypes;
      static readonly WalkHalf: zombie.network.NetworkVariables$PredictionTypes;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.network.NetworkVariables$PredictionTypes>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.network.NetworkVariables$PredictionTypes>;
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
       *  - (byte arg0): zombie.network.NetworkVariables$PredictionTypes
       */
      static fromByte(arg0: number): zombie.network.NetworkVariables$PredictionTypes;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.network.NetworkVariables$PredictionTypes
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.network.NetworkVariables$PredictionTypes | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.network.NetworkVariables$PredictionTypes[]
       */
      static values(): zombie.network.NetworkVariables$PredictionTypes[];
    }
    /**
     * @customConstructor PVPLogTool.new
     * @
     * [CLASS] zombie.network.PVPLogTool
     */
    export class PVPLogTool {

      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static clearEvents(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.network.PVPLogTool$PVPEvent>
       */
      static getEvents(): java.util.ArrayList<zombie.network.PVPLogTool$PVPEvent>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, String arg3, float arg4, float arg5, float arg6, String arg7, float arg8): void
       */
      static logCombat(arg0: string, arg1: string, arg2: string, arg3: string, arg4: number, arg5: number, arg6: number, arg7: string, arg8: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoPlayer arg1): void
       */
      static logKill(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1): void
       */
      static logSafety(arg0: zombie.characters.IsoPlayer, arg1: string): void;
    }
    /**
     * @customConstructor PVPEvent.new
     * @
     * [CLASS] zombie.network.PVPLogTool$PVPEvent
     */
    export class PVPLogTool$PVPEvent {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, float arg2, float arg3, float arg4)
       */
      constructor(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSet(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, float arg2, float arg3, float arg4): void
       *  - (String arg0, String arg1, String arg2, float arg3, float arg4, float arg5): void
       */
      reset(arg0: string, arg1: string, arg2: number | string, arg3: number, arg4: number, arg5?: number): void;
    }
    /** [ENUM] zombie.network.PacketTypes$PacketType */
    export class PacketTypes$PacketType {
      protected constructor();
      static readonly AcceptedFactionInvite: zombie.network.PacketTypes$PacketType;
      static readonly AccessDenied: zombie.network.PacketTypes$PacketType;
      static readonly ActionPacket: zombie.network.PacketTypes$PacketType;
      static readonly AddAlarm: zombie.network.PacketTypes$PacketType;
      static readonly AddAmbient: zombie.network.PacketTypes$PacketType;
      static readonly AddBrokenGlass: zombie.network.PacketTypes$PacketType;
      static readonly AddChatTab: zombie.network.PacketTypes$PacketType;
      static readonly AddCorpseToMap: zombie.network.PacketTypes$PacketType;
      static readonly AddExplosiveTrap: zombie.network.PacketTypes$PacketType;
      static readonly AddInventoryItemToContainer: zombie.network.PacketTypes$PacketType;
      static readonly AddItemInInventory: zombie.network.PacketTypes$PacketType;
      static readonly AddItemToMap: zombie.network.PacketTypes$PacketType;
      static readonly AddTicket: zombie.network.PacketTypes$PacketType;
      static readonly AddUserlog: zombie.network.PacketTypes$PacketType;
      static readonly AddWarningPoint: zombie.network.PacketTypes$PacketType;
      static readonly AddXP: zombie.network.PacketTypes$PacketType;
      static readonly AddXPMultiplier: zombie.network.PacketTypes$PacketType;
      static readonly AnimalCommand: zombie.network.PacketTypes$PacketType;
      static readonly AnimalDeath: zombie.network.PacketTypes$PacketType;
      static readonly AnimalEvent: zombie.network.PacketTypes$PacketType;
      static readonly AnimalHitAnimal: zombie.network.PacketTypes$PacketType;
      static readonly AnimalHitPlayer: zombie.network.PacketTypes$PacketType;
      static readonly AnimalHitThumpable: zombie.network.PacketTypes$PacketType;
      static readonly AnimalOwnership: zombie.network.PacketTypes$PacketType;
      static readonly AnimalPacket: zombie.network.PacketTypes$PacketType;
      static readonly AnimalTracks: zombie.network.PacketTypes$PacketType;
      static readonly AnimalUpdateReliable: zombie.network.PacketTypes$PacketType;
      static readonly AnimalUpdateUnreliable: zombie.network.PacketTypes$PacketType;
      static readonly BecomeCorpse: zombie.network.PacketTypes$PacketType;
      static readonly BloodSplatter: zombie.network.PacketTypes$PacketType;
      static readonly BodyDamageUpdate: zombie.network.PacketTypes$PacketType;
      static readonly BodyPartSync: zombie.network.PacketTypes$PacketType;
      static readonly BuildAction: zombie.network.PacketTypes$PacketType;
      static readonly BurnCorpse: zombie.network.PacketTypes$PacketType;
      static readonly ChangePlayerStats: zombie.network.PacketTypes$PacketType;
      static readonly ChangeSafety: zombie.network.PacketTypes$PacketType;
      static readonly ChangeTextColor: zombie.network.PacketTypes$PacketType;
      static readonly ChatMessageFromPlayer: zombie.network.PacketTypes$PacketType;
      static readonly ChatMessageToPlayer: zombie.network.PacketTypes$PacketType;
      static readonly Checksum: zombie.network.PacketTypes$PacketType;
      static readonly ChunkObjectState: zombie.network.PacketTypes$PacketType;
      static readonly ClientCommand: zombie.network.PacketTypes$PacketType;
      static readonly ClimateManagerPacket: zombie.network.PacketTypes$PacketType;
      static readonly ConnectCoop: zombie.network.PacketTypes$PacketType;
      static readonly ConnectedCoop: zombie.network.PacketTypes$PacketType;
      static readonly ConnectedPlayer: zombie.network.PacketTypes$PacketType;
      static readonly ConstructedZone: zombie.network.PacketTypes$PacketType;
      static readonly CreatePlayer: zombie.network.PacketTypes$PacketType;
      static readonly DebugStory: zombie.network.PacketTypes$PacketType;
      static readonly Drink: zombie.network.PacketTypes$PacketType;
      static readonly EatBody: zombie.network.PacketTypes$PacketType;
      static readonly EatFood: zombie.network.PacketTypes$PacketType;
      static readonly Equip: zombie.network.PacketTypes$PacketType;
      static readonly EventPacket: zombie.network.PacketTypes$PacketType;
      static readonly ExecuteQuery: zombie.network.PacketTypes$PacketType;
      static readonly ExtraInfo: zombie.network.PacketTypes$PacketType;
      static readonly FishingAction: zombie.network.PacketTypes$PacketType;
      static readonly FishingData: zombie.network.PacketTypes$PacketType;
      static readonly ForageItemFound: zombie.network.PacketTypes$PacketType;
      static readonly GameEntity: zombie.network.PacketTypes$PacketType;
      static readonly GeneralAction: zombie.network.PacketTypes$PacketType;
      static readonly GetDBSchema: zombie.network.PacketTypes$PacketType;
      static readonly GetModData: zombie.network.PacketTypes$PacketType;
      static readonly GetTableResult: zombie.network.PacketTypes$PacketType;
      static readonly GlobalModData: zombie.network.PacketTypes$PacketType;
      static readonly GlobalModDataRequest: zombie.network.PacketTypes$PacketType;
      static readonly GlobalObjects: zombie.network.PacketTypes$PacketType;
      static readonly GoogleAuth: zombie.network.PacketTypes$PacketType;
      static readonly GoogleAuthKey: zombie.network.PacketTypes$PacketType;
      static readonly GoogleAuthRequest: zombie.network.PacketTypes$PacketType;
      static readonly Helicopter: zombie.network.PacketTypes$PacketType;
      static readonly HumanVisual: zombie.network.PacketTypes$PacketType;
      static readonly InitPlayerChat: zombie.network.PacketTypes$PacketType;
      static readonly InvMngGetItem: zombie.network.PacketTypes$PacketType;
      static readonly InvMngRemoveItem: zombie.network.PacketTypes$PacketType;
      static readonly InvMngReqItem: zombie.network.PacketTypes$PacketType;
      static readonly IsoRegionClientRequestFullUpdate: zombie.network.PacketTypes$PacketType;
      static readonly IsoRegionServerPacket: zombie.network.PacketTypes$PacketType;
      static readonly ItemStats: zombie.network.PacketTypes$PacketType;
      static readonly ItemTransaction: zombie.network.PacketTypes$PacketType;
      static readonly Kicked: zombie.network.PacketTypes$PacketType;
      static readonly LoadPlayerProfile: zombie.network.PacketTypes$PacketType;
      static readonly Login: zombie.network.PacketTypes$PacketType;
      static readonly LoginQueueDone: zombie.network.PacketTypes$PacketType;
      static readonly LoginQueueRequest: zombie.network.PacketTypes$PacketType;
      static readonly MessageForAdmin: zombie.network.PacketTypes$PacketType;
      static readonly MetaGrid: zombie.network.PacketTypes$PacketType;
      static readonly NetTimedAction: zombie.network.PacketTypes$PacketType;
      static readonly NetworkUserAction: zombie.network.PacketTypes$PacketType;
      static readonly NetworkUsers: zombie.network.PacketTypes$PacketType;
      static readonly NotRequiredInZip: zombie.network.PacketTypes$PacketType;
      static readonly ObjectChange: zombie.network.PacketTypes$PacketType;
      static readonly ObjectModData: zombie.network.PacketTypes$PacketType;
      static readonly PVPEvents: zombie.network.PacketTypes$PacketType;
      static readonly PacketCounts: zombie.network.PacketTypes$PacketType;
      static readonly PassengerMap: zombie.network.PacketTypes$PacketType;
      static readonly Ping: zombie.network.PacketTypes$PacketType;
      static readonly PingFromClient: zombie.network.PacketTypes$PacketType;
      static readonly PlaySound: zombie.network.PacketTypes$PacketType;
      static readonly PlaySoundEveryPlayer: zombie.network.PacketTypes$PacketType;
      static readonly PlayWorldSound: zombie.network.PacketTypes$PacketType;
      static readonly PlayerAttachedItem: zombie.network.PacketTypes$PacketType;
      static readonly PlayerConnect: zombie.network.PacketTypes$PacketType;
      static readonly PlayerConnectedToChat: zombie.network.PacketTypes$PacketType;
      static readonly PlayerDamage: zombie.network.PacketTypes$PacketType;
      static readonly PlayerDamageFromCarCrash: zombie.network.PacketTypes$PacketType;
      static readonly PlayerDamageFromWeapon: zombie.network.PacketTypes$PacketType;
      static readonly PlayerDataRequest: zombie.network.PacketTypes$PacketType;
      static readonly PlayerDeath: zombie.network.PacketTypes$PacketType;
      static readonly PlayerEffectsSync: zombie.network.PacketTypes$PacketType;
      static readonly PlayerHitAnimal: zombie.network.PacketTypes$PacketType;
      static readonly PlayerHitObject: zombie.network.PacketTypes$PacketType;
      static readonly PlayerHitPlayer: zombie.network.PacketTypes$PacketType;
      static readonly PlayerHitSquare: zombie.network.PacketTypes$PacketType;
      static readonly PlayerHitVehicle: zombie.network.PacketTypes$PacketType;
      static readonly PlayerHitZombie: zombie.network.PacketTypes$PacketType;
      static readonly PlayerInventory: zombie.network.PacketTypes$PacketType;
      static readonly PlayerJoinChat: zombie.network.PacketTypes$PacketType;
      static readonly PlayerLeaveChat: zombie.network.PacketTypes$PacketType;
      static readonly PlayerListensChannel: zombie.network.PacketTypes$PacketType;
      static readonly PlayerNotFound: zombie.network.PacketTypes$PacketType;
      static readonly PlayerStartPMChat: zombie.network.PacketTypes$PacketType;
      static readonly PlayerTimeout: zombie.network.PacketTypes$PacketType;
      static readonly PlayerUpdateReliable: zombie.network.PacketTypes$PacketType;
      static readonly PlayerUpdateUnreliable: zombie.network.PacketTypes$PacketType;
      static readonly PopmanDebugCommand: zombie.network.PacketTypes$PacketType;
      static readonly RadioDeviceDataState: zombie.network.PacketTypes$PacketType;
      static readonly RadioPostSilenceEvent: zombie.network.PacketTypes$PacketType;
      static readonly RadioServerData: zombie.network.PacketTypes$PacketType;
      static readonly ReadAnnotedMap: zombie.network.PacketTypes$PacketType;
      static readonly ReceiveCommand: zombie.network.PacketTypes$PacketType;
      static readonly ReceiveModData: zombie.network.PacketTypes$PacketType;
      static readonly RegisterZone: zombie.network.PacketTypes$PacketType;
      static readonly ReloadOptions: zombie.network.PacketTypes$PacketType;
      static readonly RemoveBlood: zombie.network.PacketTypes$PacketType;
      static readonly RemoveChatTab: zombie.network.PacketTypes$PacketType;
      static readonly RemoveContestedItemsFromInventory: zombie.network.PacketTypes$PacketType;
      static readonly RemoveCorpseFromMap: zombie.network.PacketTypes$PacketType;
      static readonly RemoveInventoryItemFromContainer: zombie.network.PacketTypes$PacketType;
      static readonly RemoveItemFromSquare: zombie.network.PacketTypes$PacketType;
      static readonly RemoveTicket: zombie.network.PacketTypes$PacketType;
      static readonly RemoveUserlog: zombie.network.PacketTypes$PacketType;
      static readonly ReplaceInventoryItemInContainer: zombie.network.PacketTypes$PacketType;
      static readonly RequestData: zombie.network.PacketTypes$PacketType;
      static readonly RequestItemsForContainer: zombie.network.PacketTypes$PacketType;
      static readonly RequestLargeAreaZip: zombie.network.PacketTypes$PacketType;
      static readonly RequestNetworkUsers: zombie.network.PacketTypes$PacketType;
      static readonly RequestRoles: zombie.network.PacketTypes$PacketType;
      static readonly RequestTrading: zombie.network.PacketTypes$PacketType;
      static readonly RequestUserLog: zombie.network.PacketTypes$PacketType;
      static readonly RequestZipList: zombie.network.PacketTypes$PacketType;
      static readonly Roles: zombie.network.PacketTypes$PacketType;
      static readonly RolesEdit: zombie.network.PacketTypes$PacketType;
      static readonly SafehouseAccept: zombie.network.PacketTypes$PacketType;
      static readonly SafehouseChangeMember: zombie.network.PacketTypes$PacketType;
      static readonly SafehouseChangeOwner: zombie.network.PacketTypes$PacketType;
      static readonly SafehouseChangeRespawn: zombie.network.PacketTypes$PacketType;
      static readonly SafehouseChangeTitle: zombie.network.PacketTypes$PacketType;
      static readonly SafehouseClaim: zombie.network.PacketTypes$PacketType;
      static readonly SafehouseInvite: zombie.network.PacketTypes$PacketType;
      static readonly SafehouseRelease: zombie.network.PacketTypes$PacketType;
      static readonly SafehouseSync: zombie.network.PacketTypes$PacketType;
      static readonly SafezoneClaim: zombie.network.PacketTypes$PacketType;
      static readonly SandboxOptions: zombie.network.PacketTypes$PacketType;
      static readonly ScoreboardUpdate: zombie.network.PacketTypes$PacketType;
      static readonly SendCustomColor: zombie.network.PacketTypes$PacketType;
      static readonly SendFactionInvite: zombie.network.PacketTypes$PacketType;
      static readonly SendItemListNet: zombie.network.PacketTypes$PacketType;
      static readonly SentChunk: zombie.network.PacketTypes$PacketType;
      static readonly ServerCustomization: zombie.network.PacketTypes$PacketType;
      static readonly ServerDebugInfo: zombie.network.PacketTypes$PacketType;
      static readonly ServerLOS: zombie.network.PacketTypes$PacketType;
      static readonly ServerMap: zombie.network.PacketTypes$PacketType;
      static readonly ServerQuit: zombie.network.PacketTypes$PacketType;
      static readonly SetMultiplier: zombie.network.PacketTypes$PacketType;
      static readonly SledgehammerDestroy: zombie.network.PacketTypes$PacketType;
      static readonly SlowFactor: zombie.network.PacketTypes$PacketType;
      static readonly SmashWindow: zombie.network.PacketTypes$PacketType;
      static readonly SneezeCough: zombie.network.PacketTypes$PacketType;
      static readonly SpawnRegion: zombie.network.PacketTypes$PacketType;
      static readonly StartFire: zombie.network.PacketTypes$PacketType;
      static readonly StartFishSplash: zombie.network.PacketTypes$PacketType;
      static readonly StartPause: zombie.network.PacketTypes$PacketType;
      static readonly StartRain: zombie.network.PacketTypes$PacketType;
      static readonly Statistic: zombie.network.PacketTypes$PacketType;
      static readonly StatisticRequest: zombie.network.PacketTypes$PacketType;
      static readonly StopFire: zombie.network.PacketTypes$PacketType;
      static readonly StopPause: zombie.network.PacketTypes$PacketType;
      static readonly StopRain: zombie.network.PacketTypes$PacketType;
      static readonly StopSound: zombie.network.PacketTypes$PacketType;
      static readonly SyncClock: zombie.network.PacketTypes$PacketType;
      static readonly SyncClothing: zombie.network.PacketTypes$PacketType;
      static readonly SyncCompost: zombie.network.PacketTypes$PacketType;
      static readonly SyncCustomLightSettings: zombie.network.PacketTypes$PacketType;
      static readonly SyncDoorGarage: zombie.network.PacketTypes$PacketType;
      static readonly SyncDoorKey: zombie.network.PacketTypes$PacketType;
      static readonly SyncEquippedRadioFreq: zombie.network.PacketTypes$PacketType;
      static readonly SyncFaction: zombie.network.PacketTypes$PacketType;
      static readonly SyncHandWeaponFields: zombie.network.PacketTypes$PacketType;
      static readonly SyncInjuries: zombie.network.PacketTypes$PacketType;
      static readonly SyncInventory: zombie.network.PacketTypes$PacketType;
      static readonly SyncIsoObject: zombie.network.PacketTypes$PacketType;
      static readonly SyncItemFields: zombie.network.PacketTypes$PacketType;
      static readonly SyncItemModData: zombie.network.PacketTypes$PacketType;
      static readonly SyncNonPvpZone: zombie.network.PacketTypes$PacketType;
      static readonly SyncPerks: zombie.network.PacketTypes$PacketType;
      static readonly SyncPlayerAlarmClock: zombie.network.PacketTypes$PacketType;
      static readonly SyncPlayerStats: zombie.network.PacketTypes$PacketType;
      static readonly SyncRadioData: zombie.network.PacketTypes$PacketType;
      static readonly SyncThumpable: zombie.network.PacketTypes$PacketType;
      static readonly SyncVisuals: zombie.network.PacketTypes$PacketType;
      static readonly SyncWeight: zombie.network.PacketTypes$PacketType;
      static readonly SyncWorldAlarmClock: zombie.network.PacketTypes$PacketType;
      static readonly SyncXP: zombie.network.PacketTypes$PacketType;
      static readonly SyncZone: zombie.network.PacketTypes$PacketType;
      static readonly Teleport: zombie.network.PacketTypes$PacketType;
      static readonly Thump: zombie.network.PacketTypes$PacketType;
      static readonly TimeSync: zombie.network.PacketTypes$PacketType;
      static readonly TradingUIAddItem: zombie.network.PacketTypes$PacketType;
      static readonly TradingUIRemoveItem: zombie.network.PacketTypes$PacketType;
      static readonly TradingUIUpdateState: zombie.network.PacketTypes$PacketType;
      static readonly UpdateItemSprite: zombie.network.PacketTypes$PacketType;
      static readonly UpdateOverlaySprite: zombie.network.PacketTypes$PacketType;
      static readonly Validate: zombie.network.PacketTypes$PacketType;
      static readonly VariableSync: zombie.network.PacketTypes$PacketType;
      static readonly VehicleAuthorization: zombie.network.PacketTypes$PacketType;
      static readonly VehicleHitPlayer: zombie.network.PacketTypes$PacketType;
      static readonly VehicleHitZombie: zombie.network.PacketTypes$PacketType;
      static readonly Vehicles: zombie.network.PacketTypes$PacketType;
      static readonly VehiclesUnreliable: zombie.network.PacketTypes$PacketType;
      static readonly ViewTickets: zombie.network.PacketTypes$PacketType;
      static readonly WakeUpPlayer: zombie.network.PacketTypes$PacketType;
      static readonly WarStateSync: zombie.network.PacketTypes$PacketType;
      static readonly WarSync: zombie.network.PacketTypes$PacketType;
      static readonly WaveSignal: zombie.network.PacketTypes$PacketType;
      static readonly WeaponHit: zombie.network.PacketTypes$PacketType;
      static readonly Weather: zombie.network.PacketTypes$PacketType;
      static readonly WorldMap: zombie.network.PacketTypes$PacketType;
      static readonly WorldMapPlayerPosition: zombie.network.PacketTypes$PacketType;
      static readonly WorldMessage: zombie.network.PacketTypes$PacketType;
      static readonly WorldSoundPacket: zombie.network.PacketTypes$PacketType;
      static readonly ZombieControl: zombie.network.PacketTypes$PacketType;
      static readonly ZombieDeath: zombie.network.PacketTypes$PacketType;
      static readonly ZombieDescriptors: zombie.network.PacketTypes$PacketType;
      static readonly ZombieHelmetFalling: zombie.network.PacketTypes$PacketType;
      static readonly ZombieHitPlayer: zombie.network.PacketTypes$PacketType;
      static readonly ZombieSimulation: zombie.network.PacketTypes$PacketType;
      static readonly ZombieSimulationReliable: zombie.network.PacketTypes$PacketType;
      static readonly ZombieSound: zombie.network.PacketTypes$PacketType;
      static readonly syncPlayerFields: zombie.network.PacketTypes$PacketType;

      /* FIELDS */

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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.network.PacketTypes$PacketType>>;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      doPacket(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.network.PacketTypes$PacketType>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getId(): number;
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
       *  - (ByteBuffer arg0): boolean
       */
      onClientLoadingPacket(arg0: java.nio.ByteBuffer): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      onClientPacket(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, UdpConnection arg1): void
       */
      onServerPacket(arg0: java.nio.ByteBuffer, arg1: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      ordinal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetStatistics(): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      send(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.network.PacketTypes$PacketType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.network.PacketTypes$PacketType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.network.PacketTypes$PacketType[]
       */
      static values(): zombie.network.PacketTypes$PacketType[];
    }
    /**
     * @customConstructor Server.new
     * @
     * [CLASS] zombie.network.Server
     */
    export class Server {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAuthType(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getIp(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastUpdate(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLocalIP(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLoginScreenId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMaxPlayers(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMods(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getNeedSave(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPing(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPlayers(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPort(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPwd(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getServerCustomizationLastUpdate(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getServerIcon(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getServerLoadingScreen(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getServerLoginScreen(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getServerPassword(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSteamId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeFromServerCustomizationLastUpdate(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getUseSteamRelay(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUserName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getVersion(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHosted(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOpen(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPasswordProtected(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPublic(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSavePwd(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAuthType(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDescription(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHosted(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setIp(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLastUpdate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setLocalIP(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLoginScreenId(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setMaxPlayers(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setMods(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNeedSave(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOpen(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPasswordProtected(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPing(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPlayers(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPort(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPublic(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, boolean arg1): void
       */
      setPwd(arg0: string, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSavePwd(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setServerCustomizationLastUpdate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setServerIcon(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setServerLoadingScreen(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setServerLoginScreen(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setServerPassword(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSteamId(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUseSteamRelay(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUserName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setVersion(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateServerCustomizationLastUpdate(): void;
    }
    /**
     * @customConstructor ServerOptions.new
     * @
     * [CLASS] zombie.network.ServerOptions
     */
    export class ServerOptions {
      /** int */
      static readonly MAX_PORT: number;
      /** java.util.ArrayList<java.lang.String> */
      static cardList?: java.util.ArrayList<string>;
      /** java.util.HashMap<java.lang.String, java.lang.String> */
      static clientOptionsList?: java.util.HashMap<string, string>;
      /** zombie.network.ServerOptions */
      static readonly instance?: zombie.network.ServerOptions;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ServerOption arg0): void
       */
      addOption(arg0: zombie.network.ServerOptions$ServerOption): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): string
       */
      changeOption(arg0: string, arg1: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getDouble(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getFloat(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getInteger(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxPlayers(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxPlayersForEstablishingConnection(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumOptions(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getOption(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.network.ServerOptions$ServerOption
       */
      getOptionByIndex(arg0: number): zombie.network.ServerOptions$ServerOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.network.ServerOptions$ServerOption
       */
      getOptionByName(arg0: string): zombie.network.ServerOptions$ServerOption;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.network.ServerOptions$ServerOption>
       */
      getOptions(): java.util.ArrayList<zombie.network.ServerOptions$ServerOption>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPublicOptions(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      loadServerTextFile(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      putOption(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      putSaveOption(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetRegionFile(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      saveServerTextFile(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): java.util.ArrayList<string>
       */
      static getClientCommandList(arg0: boolean): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.network.ServerOptions
       */
      static getInstance(): zombie.network.ServerOptions;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getRandomCard(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static initClientCommandsHelp(): void;
    }
    /**
     * @customConstructor BooleanServerOption.new
     * @
     * [CLASS] zombie.network.ServerOptions$BooleanServerOption extends zombie.config.BooleanConfigOption
     */
    export class ServerOptions$BooleanServerOption {
      /**
       * Constructors: 
       *  - (ServerOptions arg0, String arg1, boolean arg2)
       */
      constructor(arg0: zombie.network.ServerOptions, arg1: string, arg2: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getDefaultValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      makeCopy(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setValue(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor DoubleServerOption.new
     * @
     * [CLASS] zombie.network.ServerOptions$DoubleServerOption extends zombie.config.DoubleConfigOption
     */
    export class ServerOptions$DoubleServerOption {
      /**
       * Constructors: 
       *  - (ServerOptions arg0, String arg1, double arg2, double arg3, double arg4)
       */
      constructor(arg0: zombie.network.ServerOptions, arg1: string, arg2: number, arg3: number, arg4: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDefaultValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      makeCopy(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor EnumServerOption.new
     * @
     * [CLASS] zombie.network.ServerOptions$EnumServerOption extends zombie.config.EnumConfigOption
     */
    export class ServerOptions$EnumServerOption {
      /**
       * Constructors: 
       *  - (ServerOptions arg0, String arg1, int arg2, int arg3)
       */
      constructor(arg0: zombie.network.ServerOptions, arg1: string, arg2: number, arg3: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDefaultValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumValues(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getValueTranslationByIndex(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      makeCopy(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor IntegerServerOption.new
     * @
     * [CLASS] zombie.network.ServerOptions$IntegerServerOption extends zombie.config.IntegerConfigOption
     */
    export class ServerOptions$IntegerServerOption {
      /**
       * Constructors: 
       *  - (ServerOptions arg0, String arg1, int arg2, int arg3, int arg4)
       */
      constructor(arg0: zombie.network.ServerOptions, arg1: string, arg2: number, arg3: number, arg4: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDefaultValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMin(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      makeCopy(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor ServerOption.new
     * @
     * [INTERFACE] zombie.network.ServerOptions$ServerOption
     */
    export class ServerOptions$ServerOption {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
    }
    /**
     * @customConstructor StringServerOption.new
     * @
     * [CLASS] zombie.network.ServerOptions$StringServerOption extends zombie.config.StringConfigOption
     */
    export class ServerOptions$StringServerOption {
      /**
       * Constructors: 
       *  - (ServerOptions arg0, String arg1, String arg2, int arg3)
       */
      constructor(arg0: zombie.network.ServerOptions, arg1: string, arg2: string, arg3: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDefaultValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSplitCSVList(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      makeCopy(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor TextServerOption.new
     * @
     * [CLASS] zombie.network.ServerOptions$TextServerOption extends zombie.config.StringConfigOption
     */
    export class ServerOptions$TextServerOption {
      /**
       * Constructors: 
       *  - (ServerOptions arg0, String arg1, String arg2, int arg3)
       */
      constructor(arg0: zombie.network.ServerOptions, arg1: string, arg2: string, arg3: number);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      asConfigOption(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDefaultValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSplitCSVList(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValue(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      makeCopy(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setValue(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor ServerSettings.new
     * @
     * [CLASS] zombie.network.ServerSettings
     */
    export class ServerSettings {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      addSpawnRegion(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearSpawnRegions(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      deleteFiles(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      duplicateFiles(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getErrorMsg(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumSpawnRegions(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.SandboxOptions
       */
      getSandboxOptions(): zombie.SandboxOptions;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.network.ServerOptions
       */
      getServerOptions(): zombie.network.ServerOptions;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getSpawnRegionFile(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getSpawnRegionName(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      loadFiles(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): se.krka.kahlua.vm.KahluaTable
       */
      loadSpawnPointsFile(arg0: string): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeSpawnRegion(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      rename(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      saveFiles(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, KahluaTable arg1): boolean
       */
      saveSpawnPointsFile(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable): boolean;
    }
    /**
     * @customConstructor ServerSettingsManager.new
     * @
     * [CLASS] zombie.network.ServerSettingsManager
     */
    export class ServerSettingsManager {
      /** zombie.network.ServerSettingsManager */
      static readonly instance?: zombie.network.ServerSettingsManager;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getNameInSettingsFolder(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.network.ServerSettings
       */
      getSettingsByIndex(arg0: number): zombie.network.ServerSettings;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSettingsCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSettingsFolder(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSuffixes(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidName(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidNewName(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      readAllSettings(): void;
    }
    /**
     * @customConstructor Userlog.new
     * @
     * [CLASS] zombie.network.Userlog
     */
    export class Userlog {
      /**
       * Constructors: 
       *  - (ByteBuffer arg0)
       *  - (String arg0, String arg1, String arg2, String arg3, int arg4, String arg5)
       */
      constructor(arg0: java.nio.ByteBuffer | string, arg1?: string, arg2?: string, arg3?: string, arg4?: number, arg5?: string);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getIssuedBy(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLastUpdate(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUsername(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAmount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      write(arg0: java.nio.ByteBuffer): void;
    }
    /** [ENUM] zombie.network.Userlog$UserlogType */
    export class Userlog$UserlogType {
      protected constructor();
      static readonly AdminLog: zombie.network.Userlog$UserlogType;
      static readonly Banned: zombie.network.Userlog$UserlogType;
      static readonly DupeItem: zombie.network.Userlog$UserlogType;
      static readonly Kicked: zombie.network.Userlog$UserlogType;
      static readonly LuaChecksum: zombie.network.Userlog$UserlogType;
      static readonly SuspiciousActivity: zombie.network.Userlog$UserlogType;
      static readonly UnauthorizedPacket: zombie.network.Userlog$UserlogType;
      static readonly WarningPoint: zombie.network.Userlog$UserlogType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.network.Userlog$UserlogType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.network.Userlog$UserlogType>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      index(): number;
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
       *  - (String arg0): zombie.network.Userlog$UserlogType
       */
      static FromString(arg0: string): zombie.network.Userlog$UserlogType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.network.Userlog$UserlogType
       */
      static fromIndex(arg0: number): zombie.network.Userlog$UserlogType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.network.Userlog$UserlogType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.network.Userlog$UserlogType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.network.Userlog$UserlogType[]
       */
      static values(): zombie.network.Userlog$UserlogType[];
    }
    /**
     * @customConstructor WarManager.new
     * @
     * [CLASS] zombie.network.WarManager
     */
    export class WarManager {

      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static clear(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getStartDelay(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, String arg1): zombie.network.WarManager$War
       */
      static getWar(arg0: number, arg1: string): zombie.network.WarManager$War;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getWarDuration(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): zombie.network.WarManager$War
       */
      static getWarNearest(arg0: zombie.characters.IsoPlayer): zombie.network.WarManager$War;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): java.util.ArrayList<zombie.network.WarManager$War>
       */
      static getWarRelevent(arg0: zombie.characters.IsoPlayer): java.util.ArrayList<zombie.network.WarManager$War>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): boolean
       *  - (String arg0): boolean
       */
      static isWarClaimed(arg0: number | string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, String arg1): boolean
       */
      static isWarStarted(arg0: number, arg1: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, String arg1): void
       */
      static removeWar(arg0: number, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static sendWarToPlayer(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, String arg1, State arg2, long arg3): void
       */
      static updateWar(arg0: number, arg1: string, arg2: zombie.network.WarManager$State, arg3: number): void;
    }
    /** [ENUM] zombie.network.WarManager$State */
    export class WarManager$State {
      protected constructor();
      static readonly Accepted: zombie.network.WarManager$State;
      static readonly Blocked: zombie.network.WarManager$State;
      static readonly Canceled: zombie.network.WarManager$State;
      static readonly Claimed: zombie.network.WarManager$State;
      static readonly Ended: zombie.network.WarManager$State;
      static readonly Refused: zombie.network.WarManager$State;
      static readonly Started: zombie.network.WarManager$State;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.network.WarManager$State>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.network.WarManager$State>;
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
       *  - (int arg0): zombie.network.WarManager$State
       *  - (String arg0): zombie.network.WarManager$State
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: number | string | java.lang.Class<T>, arg1?: string): zombie.network.WarManager$State | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.network.WarManager$State[]
       */
      static values(): zombie.network.WarManager$State[];
    }
    /**
     * @customConstructor War.new
     * @
     * [CLASS] zombie.network.WarManager$War
     */
    export class WarManager$War {
      /**
       * Constructors: 
       *  - (int arg0, String arg1, State arg2, long arg3)
       */
      constructor(arg0: number, arg1: string, arg2: zombie.network.WarManager$State, arg3: number);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAttacker(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDefender(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOnlineID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.network.WarManager$State
       */
      getState(): zombie.network.WarManager$State;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTime(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimestamp(): number;
      /**
       * Method Parameters: 
       *  - (State arg0): boolean
       */
      isValidState(arg0: zombie.network.WarManager$State): boolean;
      /**
       * Method Parameters: 
       *  - (State arg0): void
       */
      setState(arg0: zombie.network.WarManager$State): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      setTimestamp(arg0: number): void;
    }
  }
}
