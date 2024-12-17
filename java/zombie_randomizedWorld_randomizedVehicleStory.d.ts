/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.randomizedWorld.randomizedVehicleStory {
    /**
     * @customConstructor RVSAmbulanceCrash.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSAmbulanceCrash extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSAmbulanceCrash {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSAnimalOnRoad.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSAnimalOnRoad extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSAnimalOnRoad {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getBreeds(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSAnimalTrailerOnRoad.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSAnimalTrailerOnRoad extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSAnimalTrailerOnRoad {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSBanditRoad.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSBanditRoad extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSBanditRoad {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSBurntCar.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSBurntCar extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSBurntCar {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSCarCrash.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSCarCrash extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSCarCrash {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSCarCrashCorpse.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSCarCrashCorpse extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSCarCrashCorpse {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSCarCrashDeer.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSCarCrashDeer extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSCarCrashDeer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSChangingTire.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSChangingTire extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSChangingTire {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSConstructionSite.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSConstructionSite extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSConstructionSite {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSCrashHorde.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSCrashHorde extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSCrashHorde {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSDeadEnd.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSDeadEnd extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSDeadEnd {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSFlippedCrash.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSFlippedCrash extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSFlippedCrash {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSHerdOnRoad.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSHerdOnRoad extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSHerdOnRoad {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getBreeds(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSPlonkies.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSPlonkies extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSPlonkies {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSPoliceBlockade.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSPoliceBlockade extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSPoliceBlockade {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSPoliceBlockadeShooting.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSPoliceBlockadeShooting extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSPoliceBlockadeShooting {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSRegionalProfessionVehicle.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSRegionalProfessionVehicle extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSRegionalProfessionVehicle {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSRichJerk.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSRichJerk extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSRichJerk {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSRoadKill.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSRoadKill extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSRoadKill {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getBreeds(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSRoadKillSmall.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSRoadKillSmall extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSRoadKillSmall {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getBreeds(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSTrailerCrash.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSTrailerCrash extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSTrailerCrash {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RVSUtilityVehicle.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RVSUtilityVehicle extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
     */
    export class RVSUtilityVehicle {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, String arg2, String arg3, String arg4, Integer arg5, String arg6, ArrayList arg7, int arg8, boolean arg9): void
       */
      doUtilityVehicle(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: string, arg3: string, arg4: string, arg5: number, arg6: string, arg7: java.util.ArrayList<string>, arg8: number, arg9: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor RandomizedVehicleStoryBase.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase extends zombie.randomizedWorld.RandomizedWorldBase
     */
    export class RandomizedVehicleStoryBase {
      /** int */
      static baseChance: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): void
       */
      addBloodSplat(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addBrazier(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCampfireOrPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCharcoalBurner(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addGrindstone(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      addItemOnGroundNoLoot(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoObject arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1: zombie.iso.IsoObject): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addMattressWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addRandomFirepit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      addRandomItemOnGround(arg0: zombie.iso.IsoGridSquare, arg1: java.util.ArrayList<string>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (RoomDef arg0, String arg1, int arg2): void
       *  - (RoomDef arg0, ArrayList arg1, int arg2): void
       */
      addRandomItemsOnGround(arg0: zombie.iso.RoomDef, arg1: string | java.util.ArrayList<string>, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addRandomTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addShelterWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleCookingPit(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSimpleFire(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagOrTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addSleepingBagWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, BaseVehicle arg1, int arg2, int arg3, boolean arg4, boolean arg5): zombie.vehicles.BaseVehicle[]
       */
      addSmashedOverlay(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle, arg2: number, arg3: number, arg4: boolean, arg5: boolean): zombie.vehicles.BaseVehicle[];
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addStoneAnvil(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouth(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentNorthSouthNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEast(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      addTentWestEastNew(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, IsoObject arg1, boolean arg2): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2, String arg3, boolean arg4): zombie.iso.IsoObject
       */
      addTileObject(arg0: zombie.iso.IsoGridSquare | number, arg1: string | zombie.iso.IsoObject | number, arg2?: boolean | number, arg3?: string, arg4?: boolean): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
       */
      addTrailOfBlood(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, Zone arg1, IsoChunk arg2, String arg3, String arg4, String arg5): zombie.vehicles.BaseVehicle
       */
      addTrailer(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoChunk, arg3: string, arg4: string, arg5: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, int arg1, int arg2, int arg3, int arg4): void
       */
      addTraitOfBlood(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, IsoDirections arg5): zombie.vehicles.BaseVehicle
       *  - (IsoGridSquare arg0, IsoChunk arg1, String arg2, String arg3, Integer arg4, IsoDirections arg5, String arg6): zombie.vehicles.BaseVehicle
       *  - (float arg0, float arg1, float arg2, float arg3, String arg4, String arg5, Integer arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicle(arg0: zombie.iso.zones.Zone | zombie.iso.IsoGridSquare | number, arg1: zombie.iso.IsoGridSquare | zombie.iso.IsoChunk | number, arg2: zombie.iso.IsoChunk | string | number, arg3: string | number, arg4: string | number, arg5: zombie.iso.IsoDirections | string | number, arg6?: string | number | zombie.iso.IsoDirections, arg7?: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoGridSquare arg1, IsoChunk arg2, String arg3, String arg4, Integer arg5, IsoDirections arg6, String arg7): zombie.vehicles.BaseVehicle
       *  - (Zone arg0, float arg1, float arg2, float arg3, float arg4, String arg5, String arg6, Integer arg7, String arg8): zombie.vehicles.BaseVehicle
       */
      addVehicleFlipped(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoGridSquare | number, arg2: zombie.iso.IsoChunk | number, arg3: string | number, arg4: string | number, arg5: number | string, arg6: zombie.iso.IsoDirections | string, arg7: string | number, arg8?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.inventory.types.HandWeapon
       */
      addWeapon(arg0: string, arg1: boolean): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, GameEntityScript arg1, String arg2): void
       *  - (IsoThumpable arg0, IsoGridSquare arg1, GameEntityScript arg2, String arg3): void
       */
      addWorkstationEntity(arg0: zombie.iso.IsoGridSquare | zombie.iso.objects.IsoThumpable, arg1: zombie.scripting.entity.GameEntityScript | zombie.iso.IsoGridSquare, arg2: string | zombie.scripting.entity.GameEntityScript, arg3?: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, IsoGridSquare arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnSquare(arg0: number, arg1: string, arg2: number, arg3: zombie.iso.IsoGridSquare): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (int arg0, String arg1, Integer arg2, BaseVehicle arg3): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      addZombiesOnVehicle(arg0: number, arg1: string, arg2: number, arg3: zombie.vehicles.BaseVehicle): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float arg2): boolean
       */
      callVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      checkAreaForCarsSpawn(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, int arg1): boolean
       */
      checkRadiusForCarSpawn(arg0: zombie.iso.IsoGridSquare, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      cleanSquareAndNeighbors(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       *  - (RoomDef arg0): zombie.iso.objects.IsoDeadBody
       */
      createSkeletonCorpse(arg0: zombie.iso.IsoGridSquare | zombie.iso.RoomDef): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      dirtBomb(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBBQClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBBQClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBarnClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBathroomSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBathroomSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getBedClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCafeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCarpentryToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCarpentryToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.iso.IsoGridSquare
       */
      getCenterOfChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChance(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.HashMap<number, string>
       */
      getClutterCopy(arg0: java.util.ArrayList<string>): java.util.HashMap<number, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDeadEndClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDebugLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getDormClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFarmStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFootballNightSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGarageStorageClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGigamartClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGroceryClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHairSalonClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHallClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoDrinks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHenDoSnacks(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHoedownClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHoedownClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getHousePartyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHousePartyClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getJudgeClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKidClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKidClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenCounterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenCounterClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenSinkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenSinkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getKitchenStoveClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getKitchenStoveClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLaundryRoomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLaundryRoomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0): zombie.iso.RoomDef
       */
      getLivingRoomOrKitchen(arg0: zombie.iso.BuildingDef): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLivingroomClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLivingroomClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaximumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMedicalClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinZoneWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinimumDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeCarDealerClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeOtherClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePaperworkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficePenClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOfficeTreatClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOldShelterClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getOvenFoodClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOvenFoodClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPillowClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPillowClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPokerNightClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPokerNightClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getPolylineSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoom(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, int arg1): zombie.iso.RoomDef
       */
      getRandomRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: number): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getRectangleSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRichJerkClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRichJerkClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoom(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, String arg1): zombie.iso.RoomDef
       */
      getRoomNoKids(arg0: zombie.iso.BuildingDef, arg1: string): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSadCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSadCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSidetableClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSidetableClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, float[] arg2): boolean
       */
      getSpawnPoint(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: number[]): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getSurvivalistCampsiteClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurvivalistCampsiteClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTwiggyClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getUtilityToolClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUtilityToolClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWatchClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWatchClutterItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWoodcraftClutter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1): void
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): void
       */
      graffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean | string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
       */
      initSpawnDataForChunk(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      initVehicleStorySpawner(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isChunkLoaded(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      isFullyStreamedIn(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRat(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isTimeValid(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnique(): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, boolean arg1, boolean arg2): boolean
       */
      isValidGraffSquare(arg0: zombie.iso.IsoGridSquare, arg1: boolean, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      randomizeVehicleStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      registerCustomOutfits(): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0, String arg1, String arg2, String arg3): void
       */
      setAttachedItem(arg0: zombie.characters.IsoZombie, arg1: string, arg2: string, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDebugLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaximumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMinimumDays(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnique(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, BuildingDef arg1): zombie.vehicles.BaseVehicle
       *  - (String arg0, BuildingDef arg1, String arg2): zombie.vehicles.BaseVehicle
       */
      spawnCarOnNearestNav(arg0: string, arg1: zombie.iso.BuildingDef, arg2?: string): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawnElement(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      trashSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): zombie.inventory.InventoryItem
       *  - (IsoGridSquare arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      static addItemOnGroundStatic(arg0: zombie.iso.IsoGridSquare, arg1: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, IsoGridSquare arg1): void
       */
      static alignCorpseToSquare(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.IsoDeadBody
       */
      static createBodyFromZombie(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0, int arg1): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, int arg2, int arg3, String arg4): zombie.iso.objects.IsoDeadBody
       *  - (int arg0, int arg1, int arg2, IsoDirections arg3, int arg4, int arg5): zombie.iso.objects.IsoDeadBody
       *  - (IsoGridSquare arg0, IsoDirections arg1, boolean arg2, int arg3, int arg4, String arg5, Integer arg6): zombie.iso.objects.IsoDeadBody
       *  - (float arg0, float arg1, float arg2, float arg3, boolean arg4, int arg5, int arg6, String arg7): zombie.iso.objects.IsoDeadBody
       */
      static createRandomDeadBody(arg0: zombie.iso.RoomDef | number | zombie.iso.IsoGridSquare, arg1: number | zombie.iso.IsoDirections, arg2?: number | boolean, arg3?: zombie.iso.IsoDirections | number, arg4?: number | string | boolean, arg5?: number | string, arg6?: number, arg7?: string): zombie.iso.objects.IsoDeadBody;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       *  - (int arg0, int arg1, int arg2): zombie.characters.IsoGameCharacter
       */
      static createRandomZombie(arg0: zombie.iso.RoomDef | number, arg1?: number, arg2?: number): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.characters.IsoGameCharacter
       */
      static createRandomZombieForCorpse(arg0: zombie.iso.RoomDef): zombie.characters.IsoGameCharacter;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1, boolean arg2): boolean
       */
      static doRandomStory(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk, arg2: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getBarnClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getCafeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): string
       */
      static getClutterItem(arg0: java.util.ArrayList<string>): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDeadEndClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDormClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFarmStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getFootballNightSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGarageStorageClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGigamartClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getGroceryClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHairSalonClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHallClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoDrinkItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getHenDoSnackItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getJudgeClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getMedicallutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeCarDealerClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeOtherClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePaperworkClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficePenClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOfficeTreatClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getOldShelterClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, IsoGridSquare arg2): zombie.iso.IsoGridSquare
       */
      static getRandomFreeUnoccupiedSquare(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: zombie.iso.IsoGridSquare): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSpawnSquare(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (RoomDef arg0): zombie.iso.IsoGridSquare
       */
      static getRandomSquareForCorpse(arg0: zombie.iso.RoomDef): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoGridSquare
       */
      static getSq(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getTwiggyClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getWoodcraftClutterItem(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): void
       */
      static initAllRVSMapChance(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x1or1x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      static is2x2AreaClear(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Zone arg0): void
       */
      static removeAllVehiclesOnZone(arg0: zombie.iso.zones.Zone): void;
    }
    /**
     * @customConstructor VehicleStorySpawnData.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData
     */
    export class VehicleStorySpawnData {
      /**
       * Constructors: 
       *  - (RandomizedVehicleStoryBase arg0, Zone arg1, float arg2, float arg3, float arg4, int arg5, int arg6, int arg7, int arg8)
       */
      constructor(arg0: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase, arg1: zombie.iso.zones.Zone, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number);
      /**
       * Method Parameters: 
       *  - (Zone arg0, IsoChunk arg1): boolean
       */
      isValid(arg0: zombie.iso.zones.Zone, arg1: zombie.iso.IsoChunk): boolean;
    }
    /**
     * @customConstructor VehicleStorySpawner.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner
     */
    export class VehicleStorySpawner {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4, float arg5): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element
       */
      addElement(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, int[] arg5): void
       */
      getAABB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Class arg1): E
       */
      getParameter<E>(arg0: string, arg1: java.lang.Class<E>): any;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getParameterBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getParameterFloat(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getParameterInteger(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getParameterString(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): void
       */
      render(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, Vector2 arg2, float arg3): zombie.iso.Vector2
       */
      rotate(arg0: number, arg1: number, arg2: zombie.iso.Vector2, arg3: number): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       *  - (String arg0, float arg1): void
       *  - (String arg0, int arg1): void
       *  - (String arg0, Object arg1): void
       */
      setParameter(arg0: string, arg1: any): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, IElementSpawner arg4): void
       */
      spawn(arg0: number, arg1: number, arg2: number, arg3: number, arg4: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$IElementSpawner): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner
       */
      static getInstance(): zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner;
    }
    /**
     * @customConstructor Element.new
     * @
     * [CLASS] zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element
     */
    export class VehicleStorySpawner$Element {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor IElementSpawner.new
     * @
     * [INTERFACE] zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$IElementSpawner
     */
    export class VehicleStorySpawner$IElementSpawner {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (VehicleStorySpawner arg0, Element arg1): void
       */
      spawn(arg0: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner, arg1: zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element): void;
    }
  }
}
