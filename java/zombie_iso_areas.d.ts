/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.areas {
    /**
     * @customConstructor BuildingScore.new
     * @
     * [CLASS] zombie.iso.areas.BuildingScore
     */
    export class BuildingScore {
      /**
       * Constructors: 
       *  - (IsoBuilding arg0)
       */
      constructor(arg0: zombie.iso.areas.IsoBuilding);
    }
    /**
     * @customConstructor DesignationZone.new
     * @
     * [CLASS] zombie.iso.areas.DesignationZone
     */
    export class DesignationZone {
      /** java.util.ArrayList<zombie.iso.areas.DesignationZone> */
      static readonly allZones?: java.util.ArrayList<zombie.iso.areas.DesignationZone>;
      /** long */
      static lastUpdate: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6)
       */
      constructor(arg0?: string, arg1?: string, arg2?: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      check(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      doMeta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getH(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getW(): number;
      /**
       * Method Parameters: 
       *  - (Double arg0): zombie.iso.areas.DesignationZone
       */
      getZoneById(arg0: number): zombie.iso.areas.DesignationZone;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFullyStreamed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStillStreamed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      loading(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      unloading(): void;
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
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6): zombie.iso.areas.DesignationZone
       */
      static addZone(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): zombie.iso.areas.DesignationZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.iso.areas.DesignationZone>
       */
      static getAllZonesByType(arg0: string): java.util.ArrayList<zombie.iso.areas.DesignationZone>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): zombie.iso.areas.DesignationZone
       */
      static getZone(arg0: number, arg1: number, arg2: number): zombie.iso.areas.DesignationZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.iso.areas.DesignationZone
       */
      static getZoneByName(arg0: string): zombie.iso.areas.DesignationZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.iso.areas.DesignationZone
       */
      static getZoneByNameAndType(arg0: string, arg1: string): zombie.iso.areas.DesignationZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2, int arg3): zombie.iso.areas.DesignationZone
       */
      static getZoneByType(arg0: string, arg1: number, arg2: number, arg3: number): zombie.iso.areas.DesignationZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      static load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DesignationZone arg0): void
       *  - (String arg0, String arg1): void
       */
      static removeZone(arg0: zombie.iso.areas.DesignationZone | string, arg1?: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static update(): void;
    }
    /**
     * @customConstructor DesignationZoneAnimal.new
     * @
     * [CLASS] zombie.iso.areas.DesignationZoneAnimal extends zombie.iso.areas.DesignationZone
     */
    export class DesignationZoneAnimal {
      /** java.lang.String */
      static readonly FENCE_NORTH?: string;
      /** java.lang.String */
      static readonly FENCE_NORTHCORNER?: string;
      /** java.lang.String */
      static readonly FENCE_WEST?: string;
      /** float */
      static ZONECOLORB: number;
      /** float */
      static ZONECOLORG: number;
      /** float */
      static ZONECOLORR: number;
      /** float */
      static ZONESELECTEDCOLORB: number;
      /** float */
      static ZONESELECTEDCOLORG: number;
      /** float */
      static ZONESELECTEDCOLORR: number;
      /** java.lang.String */
      static readonly ZONE_TYPE?: string;
      /** java.util.ArrayList<zombie.iso.areas.DesignationZoneAnimal> */
      static readonly designationAnimalZoneList?: java.util.ArrayList<zombie.iso.areas.DesignationZoneAnimal>;

      /**
       * Constructors: 
       *  - (String arg0, int arg1, int arg2, int arg3, int arg4, int arg5)
       */
      constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      check(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      createSurroundingFence(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      doMeta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.animals.IsoAnimal>
       */
      getAnimals(): java.util.ArrayList<zombie.characters.animals.IsoAnimal>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.animals.IsoAnimal>
       */
      getAnimalsConnected(): java.util.ArrayList<zombie.characters.animals.IsoAnimal>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoWorldInventoryObject>
       */
      getFoodOnGround(): java.util.ArrayList<zombie.iso.objects.IsoWorldInventoryObject>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoWorldInventoryObject>
       */
      getFoodOnGroundConnected(): java.util.ArrayList<zombie.iso.objects.IsoWorldInventoryObject>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFullZoneSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getH(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoHutch>
       */
      getHutchs(): java.util.ArrayList<zombie.iso.objects.IsoHutch>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoHutch>
       */
      getHutchsConnected(): java.util.ArrayList<zombie.iso.objects.IsoHutch>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.Position3D>
       */
      getRoofAreas(): java.util.ArrayList<zombie.characters.Position3D>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.Position3D>
       */
      getRoofAreasConnected(): java.util.ArrayList<zombie.characters.Position3D>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoFeedingTrough>
       */
      getTroughs(): java.util.ArrayList<zombie.iso.objects.IsoFeedingTrough>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoFeedingTrough>
       */
      getTroughsConnected(): java.util.ArrayList<zombie.iso.objects.IsoFeedingTrough>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getW(): number;
      /**
       * Method Parameters: 
       *  - (Double arg0): zombie.iso.areas.DesignationZone
       */
      getZoneById(arg0: number): zombie.iso.areas.DesignationZone;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFullyStreamed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStillStreamed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      loading(): void;
      /**
       * Method Parameters: 
       *  - (IsoAnimal arg0): void
       */
      removeAnimal(arg0: zombie.characters.animals.IsoAnimal): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      unloading(): void;
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
       *  - (IsoWorldInventoryObject arg0, IsoGridSquare arg1): void
       */
      static addFoodOnGround(arg0: zombie.iso.objects.IsoWorldInventoryObject, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      static addNewRoof(arg0: number, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6): zombie.iso.areas.DesignationZone
       */
      static addZone(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): zombie.iso.areas.DesignationZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0, DesignationZoneAnimal arg1, DesignationZoneAnimal arg2): java.util.ArrayList<zombie.iso.areas.DesignationZoneAnimal>
       */
      static getAllDZones(arg0: java.util.ArrayList<zombie.iso.areas.DesignationZoneAnimal>, arg1: zombie.iso.areas.DesignationZoneAnimal, arg2: zombie.iso.areas.DesignationZoneAnimal): java.util.ArrayList<zombie.iso.areas.DesignationZoneAnimal>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.DesignationZoneAnimal>
       */
      static getAllZones(): java.util.ArrayList<zombie.iso.areas.DesignationZoneAnimal>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.iso.areas.DesignationZone>
       */
      static getAllZonesByType(arg0: string): java.util.ArrayList<zombie.iso.areas.DesignationZone>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getType(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.areas.DesignationZoneAnimal
       *  - (int arg0, int arg1, int arg2): zombie.iso.areas.DesignationZone
       *  - (int arg0, int arg1, int arg2): zombie.iso.areas.DesignationZoneAnimal
       */
      static getZone(arg0: number, arg1: number, arg2?: number): zombie.iso.areas.DesignationZoneAnimal | zombie.iso.areas.DesignationZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.iso.areas.DesignationZone
       */
      static getZoneByName(arg0: string): zombie.iso.areas.DesignationZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.iso.areas.DesignationZone
       */
      static getZoneByNameAndType(arg0: string, arg1: string): zombie.iso.areas.DesignationZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2, int arg3): zombie.iso.areas.DesignationZone
       */
      static getZoneByType(arg0: string, arg1: number, arg2: number, arg3: number): zombie.iso.areas.DesignationZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      static load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoWorldInventoryObject arg0): void
       */
      static removeFoodFromGround(arg0: zombie.iso.objects.IsoWorldInventoryObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DesignationZone arg0): void
       *  - (DesignationZoneAnimal arg0): void
       *  - (String arg0, String arg1): void
       */
      static removeZone(arg0: zombie.iso.areas.DesignationZone | zombie.iso.areas.DesignationZoneAnimal | string, arg1?: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static update(): void;
    }
    /**
     * @customConstructor IsoBuilding.new
     * @
     * [CLASS] zombie.iso.areas.IsoBuilding extends zombie.iso.areas.IsoArea
     */
    export class IsoBuilding {
      /** float */
      static GoodBuildingScore: number;
      /** int */
      static IDMax: number;
      /** float */
      static PoorBuildingScore: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (IsoCell arg0)
       */
      constructor(arg0?: zombie.iso.IsoCell);
      /**
       * Method Parameters: 
       *  - (IsoRoom arg0): void
       */
      AddRoom(arg0: zombie.iso.areas.IsoRoom): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CalculateExits(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CalculateWindows(): void;
      /**
       * Method Parameters: 
       *  - (Stack arg0): boolean
       */
      ContainsAllItems(arg0: java.util.Stack<string>): boolean;
      /**
       * Method Parameters: 
       *  - (BuildingDef arg0, LotHeader arg1): void
       */
      CreateFrom(arg0: zombie.iso.BuildingDef, arg1: zombie.iso.LotHeader): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      FillContainers(): void;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0, boolean arg1): number
       */
      ScoreBuildingPersonSpecific(arg0: zombie.characters.SurvivorDesc, arg1: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      TriggerAlarm(): void;
      /**
       * Method Parameters: 
       *  - (IsoDoor arg0, boolean arg1): void
       *  - (IsoDoor arg0, boolean arg1, IsoGridSquare arg2, IsoBuilding arg3): void
       */
      addDoor(arg0: zombie.iso.objects.IsoDoor, arg1: boolean, arg2?: zombie.iso.IsoGridSquare, arg3?: zombie.iso.areas.IsoBuilding): void;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0, boolean arg1): void
       *  - (IsoWindow arg0, boolean arg1, IsoGridSquare arg2, IsoBuilding arg3): void
       */
      addWindow(arg0: zombie.iso.objects.IsoWindow, arg1: boolean, arg2?: zombie.iso.IsoGridSquare, arg3?: zombie.iso.areas.IsoBuilding): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsRoom(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceAwake(): void;
      /**
       * Method Parameters: 
       *  - (ItemType arg0): zombie.inventory.ItemContainer
       */
      getContainerWith(arg0: zombie.inventory.ItemType): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.BuildingDef
       */
      getDef(): zombie.iso.BuildingDef;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getFreeTile(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.ItemContainer
       */
      getRandomContainer(arg0: string): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.ItemContainer
       */
      getRandomContainerSingle(arg0: string): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoWindow
       */
      getRandomFirstFloorWindow(): zombie.iso.objects.IsoWindow;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoRoom
       *  - (String arg0): zombie.iso.areas.IsoRoom
       */
      getRandomRoom(arg0?: string): zombie.iso.areas.IsoRoom;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRoomsNumber(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasBasement(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasRoom(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasWater(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllExplored(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEntirelyEmptyOutside(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isResidential(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isToxic(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllExplored(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setToxic(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static Ardo(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static Thigglewhat(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      static Thigglewhat2(arg0: string, arg1: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static Thigglewhat22(arg0: string): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number[]
       */
      static asasa(arg0: string): number[];
    }
    /**
     * @customConstructor IsoRoom.new
     * @
     * [CLASS] zombie.iso.areas.IsoRoom
     */
    export class IsoRoom {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IsoCell arg0): zombie.iso.areas.IsoBuilding
       */
      CreateBuilding(arg0: zombie.iso.IsoCell): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, String arg3, String arg4, boolean arg5): boolean
       */
      add2TileBench(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      addMetalWorkbench(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      addModernPotteryWheel(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      addOldPotteryWheel(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      addPotteryWheel(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      createLights(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.IsoRoomLight
       */
      findRoomLightByID(arg0: number): zombie.iso.IsoRoomLight;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoBuilding
       */
      getBuilding(): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.ItemContainer>
       */
      getContainer(): java.util.ArrayList<zombie.inventory.ItemContainer>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getFreeTile(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoLightSwitch>
       */
      getLightSwitches(): java.util.ArrayList<zombie.iso.objects.IsoLightSwitch>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomDoorAndWallFreeSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomDoorFreeSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, boolean arg1): zombie.iso.IsoGridSquare
       */
      getRandomWallFreePairSquare(arg0: zombie.iso.IsoDirections, arg1: boolean): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomWallFreeSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomWallSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.RoomDef
       */
      getRoomDef(): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoGridSquare>
       */
      getSquares(): java.util.ArrayList<zombie.iso.IsoGridSquare>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Vector<zombie.iso.IsoGridSquare>
       */
      getTileList(): java.util.Vector<zombie.iso.IsoGridSquare>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoObject>
       */
      getWaterSources(): java.util.ArrayList<zombie.iso.IsoObject>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoWindow>
       */
      getWindows(): java.util.ArrayList<zombie.iso.objects.IsoWindow>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasLightSwitches(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasWater(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      isInside(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onSee(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      refreshSquares(): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      removeSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setWaterSources(arg0: java.util.ArrayList<zombie.iso.IsoObject>): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      spawnRandom2TileWorkstation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      spawnRandomWorkstation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      spawnZombies(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      useWater(): void;
    }
    /**
     * @customConstructor NonPvpZone.new
     * @
     * [CLASS] zombie.iso.areas.NonPvpZone
     */
    export class NonPvpZone {
      /** java.util.ArrayList<zombie.iso.areas.NonPvpZone> */
      static readonly nonPvpZoneList?: java.util.ArrayList<zombie.iso.areas.NonPvpZone>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (String arg0, int arg1, int arg2, int arg3, int arg4)
       */
      constructor(arg0?: string, arg1?: number, arg2?: number, arg3?: number, arg4?: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTitle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX2(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY2(): number;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSize(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTitle(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setX2(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setY2(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      syncNonPvpZone(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1, int arg2, int arg3, int arg4): zombie.iso.areas.NonPvpZone
       */
      static addNonPvpZone(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number): zombie.iso.areas.NonPvpZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.NonPvpZone>
       */
      static getAllZones(): java.util.ArrayList<zombie.iso.areas.NonPvpZone>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.areas.NonPvpZone
       */
      static getNonPvpZone(arg0: number, arg1: number): zombie.iso.areas.NonPvpZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.iso.areas.NonPvpZone
       */
      static getZoneByTitle(arg0: string): zombie.iso.areas.NonPvpZone;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static removeNonPvpZone(arg0: string): void;
    }
    /**
     * @customConstructor SafeHouse.new
     * @
     * [CLASS] zombie.iso.areas.SafeHouse
     */
    export class SafeHouse {
      /**
       * Constructors: 
       *  - (int arg0, int arg1, int arg2, int arg3, String arg4)
       */
      constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addInvite(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addPlayer(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.iso.areas.SafeHouse
       *  - (IsoPlayer arg0): zombie.iso.areas.SafeHouse
       */
      alreadyHaveSafehouse(arg0: string | zombie.characters.IsoPlayer): zombie.iso.areas.SafeHouse;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      checkTrespass(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): boolean
       */
      containsLocation(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getH(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHitPoints(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastVisited(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOnlineID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOpenTimer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOwner(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerConnected(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPlayers(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getPlayersRespawn(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTitle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getW(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX2(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY2(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      haveInvite(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (IsoPlayer arg0): boolean
       */
      isOwner(arg0: string | zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isRespawnInSafehouse(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (IsoPlayer arg0): boolean
       */
      playerAllowed(arg0: string | zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      removeInvite(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      removePlayer(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setH(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHitPoints(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      setLastVisited(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOnlineID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOpenTimer(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOwner(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPlayerConnected(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setPlayers(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, String arg1): void
       */
      setRespawnInSafehouse(arg0: boolean, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTitle(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setW(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updatePlayersConnected(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      updateSafehouse(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, IsoPlayer arg1): zombie.iso.areas.SafeHouse
       *  - (int arg0, int arg1, int arg2, int arg3, String arg4): zombie.iso.areas.SafeHouse
       */
      static addSafeHouse(arg0: zombie.iso.IsoGridSquare | number, arg1: zombie.characters.IsoPlayer | number, arg2?: number, arg3?: number, arg4?: string): zombie.iso.areas.SafeHouse;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      static allowSafeHouse(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, IsoPlayer arg1): string
       */
      static canBeSafehouse(arg0: zombie.iso.IsoGridSquare, arg1: zombie.characters.IsoPlayer): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static clearSafehouseList(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      static getOnlineID(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.iso.areas.SafeHouse
       *  - (String arg0): zombie.iso.areas.SafeHouse
       *  - (IsoGridSquare arg0): zombie.iso.areas.SafeHouse
       *  - (int arg0, int arg1, int arg2, int arg3): zombie.iso.areas.SafeHouse
       */
      static getSafeHouse(arg0: number | string | zombie.iso.IsoGridSquare, arg1?: number, arg2?: number, arg3?: number): zombie.iso.areas.SafeHouse;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.iso.areas.SafeHouse
       */
      static getSafehouseByOwner(arg0: string): zombie.iso.areas.SafeHouse;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.areas.SafeHouse>
       */
      static getSafehouseList(): java.util.ArrayList<zombie.iso.areas.SafeHouse>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): zombie.iso.areas.SafeHouse
       *  - (int arg0, int arg1, int arg2, int arg3, SafeHouse arg4): zombie.iso.areas.SafeHouse
       */
      static getSafehouseOverlapping(arg0: number, arg1: number, arg2: number, arg3: number, arg4?: zombie.iso.areas.SafeHouse): zombie.iso.areas.SafeHouse;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.iso.areas.SafeHouse
       *  - (IsoPlayer arg0): zombie.iso.areas.SafeHouse
       */
      static hasSafehouse(arg0: string | zombie.characters.IsoPlayer): zombie.iso.areas.SafeHouse;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static hitPoint(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static init(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): boolean
       */
      static intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      static isInSameSafehouse(arg0: string, arg1: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0, IsoGridSquare arg1): boolean
       */
      static isPlayerAllowedOnSquare(arg0: zombie.characters.IsoPlayer, arg1: zombie.iso.IsoGridSquare): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1, boolean arg2): zombie.iso.areas.SafeHouse
       */
      static isSafeHouse(arg0: zombie.iso.IsoGridSquare, arg1: string, arg2: boolean): zombie.iso.areas.SafeHouse;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (SafeHouse arg0, IsoPlayer arg1): boolean
       */
      static isSafehouseAllowClaim(arg0: zombie.iso.areas.SafeHouse, arg1: zombie.characters.IsoPlayer): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, IsoPlayer arg1): boolean
       */
      static isSafehouseAllowInteract(arg0: zombie.iso.IsoGridSquare, arg1: zombie.characters.IsoPlayer): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, IsoPlayer arg1): boolean
       */
      static isSafehouseAllowLoot(arg0: zombie.iso.IsoGridSquare, arg1: zombie.characters.IsoPlayer): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, IsoPlayer arg1): boolean
       */
      static isSafehouseAllowTrepass(arg0: zombie.iso.IsoGridSquare, arg1: zombie.characters.IsoPlayer): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): zombie.iso.areas.SafeHouse
       */
      static load(arg0: java.nio.ByteBuffer, arg1: number): zombie.iso.areas.SafeHouse;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (SafeHouse arg0): void
       */
      static removeSafeHouse(arg0: zombie.iso.areas.SafeHouse): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static updateSafehousePlayersConnected(): void;
    }
  }
}
