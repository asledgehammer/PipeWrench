/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.characters.animals {
    /**
     * @customConstructor AnimalAllele.new
     * @
     * [CLASS] zombie.characters.animals.AnimalAllele
     */
    export class AnimalAllele {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGeneticDisorder(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTrueRatioValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDominant(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUsed(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, boolean arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      save(arg0: java.nio.ByteBuffer, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCurrentValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDominant(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setGeneticDisorder(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTrueRatioValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUsed(arg0: boolean): void;
    }
    /**
     * @customConstructor AnimalChunk.new
     * @
     * [CLASS] zombie.characters.animals.AnimalChunk
     */
    export class AnimalChunk {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (VirtualAnimal arg0, AnimalTracksType arg1): void
       */
      addTracks(arg0: zombie.characters.animals.VirtualAnimal, arg1: zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType): void;
      /**
       * Method Parameters: 
       *  - (VirtualAnimal arg0, String arg1): void
       */
      addTracksStr(arg0: zombie.characters.animals.VirtualAnimal, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      deleteTracks(): void;
      /**
       * Method Parameters: 
       *  - (double arg0): zombie.characters.animals.VirtualAnimal
       */
      findAnimalByID(arg0: number): zombie.characters.animals.VirtualAnimal;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.animals.AnimalTracks>
       */
      getAnimalsTracks(): java.util.ArrayList<zombie.characters.animals.AnimalTracks>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.animals.VirtualAnimal>
       */
      getVirtualAnimals(): java.util.ArrayList<zombie.characters.animals.VirtualAnimal>;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateTracks(): void;
    }
    /**
     * @customConstructor AnimalDefinitions.new
     * @
     * [CLASS] zombie.characters.animals.AnimalDefinitions
     */
    export class AnimalDefinitions {
      /** java.util.HashMap<java.lang.String, zombie.characters.animals.AnimalDefinitions> */
      static animalDefs?: java.util.HashMap<string, zombie.characters.animals.AnimalDefinitions>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeSkeleton(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAnimalType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBabyType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBodyModelStr(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.animals.datas.AnimalBreed
       */
      getBreedByName(arg0: string): zombie.characters.animals.datas.AnimalBreed;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.animals.datas.AnimalBreed>
       */
      getBreeds(): java.util.ArrayList<zombie.characters.animals.datas.AnimalBreed>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGroup(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxBaby(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinBaby(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.datas.AnimalBreed
       */
      getRandomBreed(): zombie.characters.animals.datas.AnimalBreed;
      /**
       * Method Parameters: 
       *  - (Integer arg0): boolean
       */
      isInsideHutchTime(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOutsideHutchTime(): boolean;
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
       *  - (Empty): java.util.HashMap<string, zombie.characters.animals.AnimalDefinitions>
       */
      static getAnimalDefs(): java.util.HashMap<string, zombie.characters.animals.AnimalDefinitions>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.animals.AnimalDefinitions>
       */
      static getAnimalDefsArray(): java.util.ArrayList<zombie.characters.animals.AnimalDefinitions>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characters.animals.AnimalDefinitions
       *  - (IsoAnimal arg0): zombie.characters.animals.AnimalDefinitions
       */
      static getDef(arg0: string | zombie.characters.animals.IsoAnimal): zombie.characters.animals.AnimalDefinitions;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static loadAnimalDefinitions(): void;
    }
    /**
     * @customConstructor AnimalGene.new
     * @
     * [CLASS] zombie.characters.animals.AnimalGene
     */
    export class AnimalGene {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.AnimalAllele
       */
      getAllele1(): zombie.characters.animals.AnimalAllele;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.AnimalAllele
       */
      getAllele2(): zombie.characters.animals.AnimalAllele;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.AnimalAllele
       */
      getUsedGene(): zombie.characters.animals.AnimalAllele;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initUsedGene(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, boolean arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      save(arg0: java.nio.ByteBuffer, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoAnimal arg0): void
       */
      static checkGeneticDisorder(arg0: zombie.characters.animals.IsoAnimal): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AnimalAllele arg0): void
       */
      static doMutation(arg0: zombie.characters.animals.AnimalAllele): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AnimalGenomeDefinitions arg0, HashMap arg1, AnimalAllele arg2): void
       */
      static doRatio(arg0: zombie.characters.animals.AnimalGenomeDefinitions, arg1: java.util.HashMap<string, zombie.characters.animals.AnimalGene>, arg2: zombie.characters.animals.AnimalAllele): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (HashMap arg0, HashMap arg1): java.util.HashMap<string, zombie.characters.animals.AnimalGene>
       */
      static initGenesFromParents(arg0: java.util.HashMap<string, zombie.characters.animals.AnimalGene>, arg1: java.util.HashMap<string, zombie.characters.animals.AnimalGene>): java.util.HashMap<string, zombie.characters.animals.AnimalGene>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoAnimal arg0): void
       */
      static initGenome(arg0: zombie.characters.animals.IsoAnimal): void;
    }
    /**
     * @customConstructor AnimalGenomeDefinitions.new
     * @
     * [CLASS] zombie.characters.animals.AnimalGenomeDefinitions
     */
    export class AnimalGenomeDefinitions {
      /** java.util.HashMap<java.lang.String, zombie.characters.animals.AnimalGenomeDefinitions> */
      static fullGenomeDef?: java.util.HashMap<string, zombie.characters.animals.AnimalGenomeDefinitions>;
      /** java.util.ArrayList<java.lang.String> */
      static geneticDisorder?: java.util.ArrayList<string>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getGeneticDisorderList(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static loadGenomeDefinition(): void;
    }
    /**
     * @customConstructor AnimalPart.new
     * @
     * [CLASS] zombie.characters.animals.AnimalPart
     */
    export class AnimalPart {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (KahluaTableImpl arg0)
       */
      constructor(arg0?: se.krka.kahlua.j2se.KahluaTableImpl);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxNb(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinNb(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNb(): number;
    }
    /**
     * @customConstructor AnimalPartsDefinitions.new
     * @
     * [CLASS] zombie.characters.animals.AnimalPartsDefinitions
     */
    export class AnimalPartsDefinitions {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.characters.animals.AnimalPart>
       */
      static getAllBonesDef(arg0: string): java.util.ArrayList<zombie.characters.animals.AnimalPart>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.characters.animals.AnimalPart>
       */
      static getAllPartsDef(arg0: string): java.util.ArrayList<zombie.characters.animals.AnimalPart>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): se.krka.kahlua.j2se.KahluaTableImpl
       */
      static getAnimalDef(arg0: string): se.krka.kahlua.j2se.KahluaTableImpl;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (KahluaTableImpl arg0, String arg1): java.util.ArrayList<zombie.characters.animals.AnimalPart>
       */
      static getDef(arg0: se.krka.kahlua.j2se.KahluaTableImpl, arg1: string): java.util.ArrayList<zombie.characters.animals.AnimalPart>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getLeather(arg0: string): string;
    }
    /**
     * @customConstructor AnimalSoundState.new
     * @
     * [CLASS] zombie.characters.animals.AnimalSoundState
     */
    export class AnimalSoundState {
      /**
       * Constructors: 
       *  - (IsoAnimal arg0)
       */
      constructor(arg0: zombie.characters.animals.IsoAnimal);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.IsoAnimal
       */
      getAnimal(): zombie.characters.animals.IsoAnimal;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDesiredSoundName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDesiredSoundPriority(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEventInstance(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getIntervalExpireTime(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getLastPlayedTimeMS(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPriority(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (String arg0): boolean
       */
      isPlaying(arg0?: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPlayingDesiredSound(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDesiredSoundName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDesiredSoundPriority(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, long arg1): void
       */
      setIntervalExpireTime(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldPlay(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): number
       */
      start(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stop(): void;
    }
    /**
     * @customConstructor AnimalTracks.new
     * @
     * [CLASS] zombie.characters.animals.AnimalTracks
     */
    export class AnimalTracks {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      addItemToWorld(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoAnimalTrack>
       */
      addToWorld(): java.util.ArrayList<zombie.iso.objects.IsoAnimalTrack>;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, boolean arg1): void
       */
      addTrackingExp(arg0: zombie.characters.IsoGameCharacter, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      canFindTrack(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.objects.IsoAnimalTrack>
       */
      getAllIsoTracks(): java.util.ArrayList<zombie.iso.objects.IsoAnimalTrack>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAnimalType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoDirections
       */
      getDir(): zombie.iso.IsoDirections;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getFreshnessString(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoAnimalTrack
       */
      getIsoAnimalTrack(): zombie.iso.objects.IsoAnimalTrack;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinSkill(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTimestamp(): string;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): string
       */
      getTrackAge(arg0: zombie.characters.IsoGameCharacter): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTrackAgeDays(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTrackHours(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTrackItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTrackSprite(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTrackType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAddedToWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDiscovered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isItem(): boolean;
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
       *  - (boolean arg0): void
       */
      setAddedToWorld(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDiscovered(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (VirtualAnimal arg0, AnimalTracksType arg1): zombie.characters.animals.AnimalTracks
       */
      static addAnimalTrack(arg0: zombie.characters.animals.VirtualAnimal, arg1: zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType): zombie.characters.animals.AnimalTracks;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (VirtualAnimal arg0, int arg1, int arg2, AnimalTracksType arg3, long arg4): zombie.characters.animals.AnimalTracks
       */
      static addAnimalTrackAtPos(arg0: zombie.characters.animals.VirtualAnimal, arg1: number, arg2: number, arg3: zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType, arg4: number): zombie.characters.animals.AnimalTracks;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): java.util.ArrayList<zombie.characters.animals.AnimalTracks>
       */
      static getAndFindNearestTracks(arg0: zombie.characters.IsoGameCharacter): java.util.ArrayList<zombie.characters.animals.AnimalTracks>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): java.util.ArrayList<zombie.characters.animals.AnimalTracks>
       */
      static getNearestTracks(arg0: number, arg1: number, arg2: number): java.util.ArrayList<zombie.characters.animals.AnimalTracks>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       */
      static getTrackStr(arg0: string): string;
    }
    /**
     * @customConstructor AnimalTracksDefinitions.new
     * @
     * [CLASS] zombie.characters.animals.AnimalTracksDefinitions
     */
    export class AnimalTracksDefinitions {
      /** java.util.HashMap<java.lang.String, zombie.characters.animals.AnimalTracksDefinitions> */
      static tracksDefinitions?: java.util.HashMap<string, zombie.characters.animals.AnimalTracksDefinitions>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType
       */
      static getRandomTrack(arg0: string, arg1: string): zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType
       */
      static getTrackType(arg0: string, arg1: string): zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<string, zombie.characters.animals.AnimalTracksDefinitions>
       */
      static getTracksDefinition(): java.util.HashMap<string, zombie.characters.animals.AnimalTracksDefinitions>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static loadTracksDefinitions(): void;
    }
    /**
     * @customConstructor AnimalTracksType.new
     * @
     * [CLASS] zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType
     */
    export class AnimalTracksDefinitions$AnimalTracksType {
      /**
       * Constructors: 
       *  - (AnimalTracksDefinitions arg0)
       */
      constructor(arg0: zombie.characters.animals.AnimalTracksDefinitions);
    }
    /**
     * @customConstructor AnimalZone.new
     * @
     * [CLASS] zombie.characters.animals.AnimalZone extends zombie.iso.zones.Zone
     */
    export class AnimalZone {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6, KahluaTable arg7)
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6, String arg7, String arg8, boolean arg9)
       */
      constructor(arg0?: string, arg1?: string, arg2?: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number, arg7?: se.krka.kahlua.vm.KahluaTable | string, arg8?: string, arg9?: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
      /**
       * Method Parameters: 
       *  - (AnimalZoneJunction arg0): void
       *  - (int arg0, AnimalZone arg1, int arg2): void
       */
      addJunction(arg0: zombie.characters.animals.AnimalZoneJunction | number, arg1?: zombie.characters.animals.AnimalZone, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (AnimalZone arg0): void
       */
      addJunctionsWithOtherZone(arg0: zombie.characters.animals.AnimalZone): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      addSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): boolean
       */
      contains(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4, ArrayList arg5): boolean
       */
      difference(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: java.util.ArrayList<zombie.iso.zones.Zone>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAction(): string;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, double[] arg4): number
       */
      getClippedSegmentOfPolyline(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getClosedPolylineLength(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, Vector2f arg2): number
       */
      getClosestPointOnPolyline(arg0: number, arg1: number, arg2: org.joml.Vector2f): number;
      /**
       * Method Parameters: 
       *  - (float arg0, Vector2f arg1): boolean
       */
      getDirectionOnPolyline(arg0: number, arg1: org.joml.Vector2f): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getDistanceOfPointFromStart(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHoursSinceLastSeen(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      getIndexOfPoint(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, ArrayList arg2): void
       */
      getJunctionsBetween(arg0: number, arg1: number, arg2: java.util.ArrayList<zombie.characters.animals.AnimalZoneJunction>): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastActionTimestamp(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOriginalName(): string;
      /**
       * Method Parameters: 
       *  - (float arg0, Vector2f arg1): boolean
       */
      getPointOnPolyline(arg0: number, arg1: org.joml.Vector2f): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      getPolygonTriangles(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPolylineLength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      getPolylineOutlineTriangles(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomFreeSquareInZone(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomSquareInZone(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomUnseenSquareInZone(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoGridSquare>
       */
      getSquares(): java.util.ArrayList<zombie.iso.IsoGridSquare>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalArea(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
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
       *  - (Empty): number
       */
      getZombieDensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveCons(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, int arg4): boolean
       */
      intersects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFullyStreamed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPoint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPolygon(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPolyline(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRectangle(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): zombie.characters.animals.AnimalZone
       *  - (ByteBuffer arg0, int arg1): zombie.iso.zones.Zone
       *  - (ByteBuffer arg0, int arg1, Map arg2, SharedStrings arg3): zombie.iso.zones.Zone
       *  - (ByteBuffer arg0, int arg1, Map arg2, SharedStrings arg3): zombie.characters.animals.AnimalZone
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2?: java.util.Map<any, any> | java.util.Map<number, string>, arg3?: zombie.util.SharedStrings): zombie.characters.animals.AnimalZone | zombie.iso.zones.Zone;
      /**
       * Method Parameters: 
       *  - (Location arg0): zombie.characters.IsoGameCharacter$Location
       */
      pickRandomLocation(arg0: zombie.characters.IsoGameCharacter$Location): zombie.characters.IsoGameCharacter$Location;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      removeSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       *  - (ByteBuffer arg0, Map arg1): void
       */
      save(arg0: java.nio.ByteBuffer, arg1?: java.util.Map<string, number>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      sendToServer(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setH(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHaveConstruction(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setHourSeenToCurrent(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLastActionTimestamp(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOriginalName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPickedXForZoneStory(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPickedYForZoneStory(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setType(arg0: string): void;
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
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static isPreferredZoneForSquare(arg0: string): boolean;
    }
    /**
     * @customConstructor AnimalZoneJunction.new
     * @
     * [CLASS] zombie.characters.animals.AnimalZoneJunction
     */
    export class AnimalZoneJunction {
      /**
       * Constructors: 
       *  - (AnimalZone arg0, int arg1, AnimalZone arg2, int arg3)
       */
      constructor(arg0: zombie.characters.animals.AnimalZone, arg1: number, arg2: zombie.characters.animals.AnimalZone, arg3: number);
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      getJunctionsAtSamePoint(arg0: java.util.ArrayList<zombie.characters.animals.AnimalZoneJunction>): void;
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
       *  - (Empty): boolean
       */
      isFirstPointOnZone1(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFirstPointOnZone2(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLastPointOnZone1(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLastPointOnZone2(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): zombie.characters.animals.AnimalZoneJunction
       */
      static load(arg0: java.nio.ByteBuffer, arg1: number): zombie.characters.animals.AnimalZoneJunction;
    }
    /**
     * @customConstructor IsoAnimal.new
     * @
     * [CLASS] zombie.characters.animals.IsoAnimal extends zombie.characters.IsoPlayer
     */
    export class IsoAnimal {
      /** java.lang.Boolean */
      static DISPLAY_EXTRA_VALUES?: boolean;
      /** zombie.iso.Vector2 */
      static readonly tempVector2?: zombie.iso.Vector2;

      /**
       * Constructors: 
       *  - (IsoCell arg0)
       *  - (IsoCell arg0, int arg1, int arg2, int arg3, String arg4, String arg5)
       *  - (IsoCell arg0, int arg1, int arg2, int arg3, String arg4, AnimalBreed arg5)
       *  - (IsoCell arg0, int arg1, int arg2, int arg3, String arg4, String arg5, boolean arg6)
       *  - (IsoCell arg0, int arg1, int arg2, int arg3, String arg4, AnimalBreed arg5, boolean arg6)
       */
      constructor(arg0: zombie.iso.IsoCell, arg1?: number, arg2?: number, arg3?: number, arg4?: string, arg5?: string | zombie.characters.animals.datas.AnimalBreed, arg6?: boolean);
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0, String arg1): void
       */
      AcceptGrapple(arg0: zombie.core.skinnedmodel.IGrappleable, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      Anger(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      ApplyInBedOffset(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, float arg3, int arg4, int arg5, boolean arg6, int arg7, boolean arg8, float arg9, ColorInfo arg10): void
       */
      AttachAnim(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: number, arg8: boolean, arg9: number, arg10: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (IsoSprite arg0, int arg1, int arg2, boolean arg3, int arg4, boolean arg5, float arg6): void
       *  - (IsoSprite arg0, int arg1, int arg2, boolean arg3, int arg4, boolean arg5, float arg6, ColorInfo arg7): void
       */
      AttachExistingAnim(arg0: zombie.iso.sprite.IsoSprite, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: boolean, arg6: number, arg7?: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      AttackObject(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (float arg0): boolean
       */
      AttemptAttack(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      BetaAntiDepress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      BetaBlockers(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      CacheEquipped(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      Callout(arg0?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      CanAttack(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): boolean
       */
      CanSee(arg0: zombie.iso.IsoMovingObject): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ClearEquippedCache(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      ClearVariable(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0, IsoObject arg1): void
       */
      Collision(arg0: zombie.iso.Vector2, arg1: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      Damage(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Despawn(): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      DirectionFromVector(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DirtySlice(): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       *  - (int arg0, int arg1): number
       */
      DistTo(arg0: zombie.iso.IsoMovingObject | number, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): number
       */
      DistToProper(arg0: zombie.iso.IsoObject): number;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       *  - (float arg0, float arg1): number
       */
      DistToSquared(arg0: zombie.iso.IsoMovingObject | number, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): boolean
       *  - (float arg0, boolean arg1, String arg2): boolean
       */
      DoAttack(arg0: number, arg1?: boolean, arg2?: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DoCollideNorS(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DoCollideWorE(): void;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0, IsoGameCharacter arg1): void
       *  - (HandWeapon arg0, IsoGameCharacter arg1, boolean arg2): void
       */
      DoDeath(arg0: zombie.inventory.types.HandWeapon, arg1: zombie.characters.IsoGameCharacter, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1, boolean arg2, float arg3, float arg4): void
       */
      DoFloorSplat(arg0: zombie.iso.IsoGridSquare, arg1: string, arg2: boolean, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (String arg0): void
       */
      DoFootstepSound(arg0: number | string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DoSneezeText(): void;
      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0, IsoGridSquare arg1): void
       */
      DoSpecialTooltip(arg0: zombie.ui.ObjectTooltip, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1, float arg2): boolean
       */
      DoSwingCollisionBoneCheck(arg0: zombie.characters.IsoGameCharacter, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      DrawSneezeText(): void;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): void
       */
      Dressup(arg0: zombie.characters.SurvivorDesc): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       *  - (InventoryItem arg0, float arg1): boolean
       *  - (InventoryItem arg0, float arg1, boolean arg2): boolean
       */
      DrinkFluid(arg0: zombie.inventory.InventoryItem, arg1?: number, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       *  - (InventoryItem arg0, float arg1): boolean
       *  - (InventoryItem arg0, float arg1, boolean arg2): boolean
       */
      Eat(arg0: zombie.inventory.InventoryItem, arg1?: number, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0, float arg1): boolean
       */
      EatOnClient(arg0: zombie.inventory.InventoryItem, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      FireCheck(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      GetAnimSetName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      GetPrimaryEquippedCache(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      GetSecondaryEquippedCache(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      GetVariable(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): number
       */
      GetVehicleSlowFactor(arg0: zombie.vehicles.BaseVehicle): number;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0, HandWeapon arg1, float arg2, String arg3): void
       */
      Grappled(arg0: zombie.core.skinnedmodel.IGrappleable, arg1: zombie.inventory.types.HandWeapon, arg2: number, arg3: string): void;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0, String arg1): void
       */
      GrapplerLetGo(arg0: zombie.core.skinnedmodel.IGrappleable, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      HasItem(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasTooltip(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      HasTrait(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0, IsoObject arg1, float arg2): void
       *  - (BaseVehicle arg0, float arg1, boolean arg2, Vector2 arg3): number
       *  - (HandWeapon arg0, IsoGameCharacter arg1, float arg2, boolean arg3, float arg4): number
       *  - (BaseVehicle arg0, float arg1, boolean arg2, float arg3, float arg4): number
       *  - (HandWeapon arg0, IsoGameCharacter arg1, float arg2, boolean arg3, float arg4, boolean arg5): number
       */
      Hit(arg0: zombie.iso.Vector2 | zombie.vehicles.BaseVehicle | zombie.inventory.types.HandWeapon, arg1: zombie.iso.IsoObject | number | zombie.characters.IsoGameCharacter, arg2: number | boolean, arg3?: zombie.iso.Vector2 | boolean | number, arg4?: number, arg5?: boolean): void | number;
      /**
       * Method Parameters: 
       *  - (IsoAnimal arg0, boolean arg1): void
       */
      HitByAnimal(arg0: zombie.characters.animals.IsoAnimal, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, float arg1): void
       */
      HitByVehicle(arg0: zombie.vehicles.BaseVehicle, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (SurvivorDesc arg0): void
       */
      InitSpriteParts(arg0?: zombie.characters.SurvivorDesc): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsAiming(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): boolean
       *  - (HandWeapon arg0, IsoMovingObject arg1, Vector3 arg2, boolean arg3): boolean
       */
      IsAttackRange(arg0: number | zombie.inventory.types.HandWeapon, arg1: number | zombie.iso.IsoMovingObject, arg2: number | zombie.iso.Vector3, arg3?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsInMeleeAttack(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsRunning(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsSpeaking(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsSpeakingNPC(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsUsingAimWeapon(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      Kill(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      LetGoOfGrappled(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Perk arg0): void
       *  - (Perk arg0, boolean arg1): void
       */
      LevelPerk(arg0: zombie.characters.skills.PerkFactory$Perk, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Perk arg0): void
       */
      LoseLevel(arg0: zombie.characters.skills.PerkFactory$Perk): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      Move(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      MoveForward(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      MoveUnmodded(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      NPCGetAiming(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      NPCGetRunning(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      NPCSetAiming(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      NPCSetAttack(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      NPCSetJustMoved(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      NPCSetMelee(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      NPCSetRunning(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (AnimLayer arg0, AnimEvent arg1): void
       */
      OnAnimEvent(arg0: zombie.core.skinnedmodel.advancedanimation.AnimLayer, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      OnClothingUpdated(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      OnDeath(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      OnEquipmentUpdated(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      PainMeds(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      PlayAnim(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      PlayAnimUnlooped(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): void
       */
      PlayAnimWithSpeed(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (BaseAction arg0): void
       */
      QueueAction(arg0: zombie.characters.CharacterTimedActions.BaseAction): void;
      /**
       * Method Parameters: 
       *  - (Literature arg0): void
       */
      ReadLiterature(arg0: zombie.inventory.types.Literature): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ReduceHealthWhenBurning(): void;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0): void
       */
      RejectGrapple(arg0: zombie.core.skinnedmodel.IGrappleable): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      RemoveAttachedAnim(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      RemoveAttachedAnims(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, float arg1, float arg2, float arg3, UIFont arg4, float arg5, String arg6): void
       */
      Say(arg0: string, arg1?: number, arg2?: number, arg3?: number, arg4?: zombie.ui.UIFont, arg5?: number, arg6?: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (int arg0, String arg1): void
       */
      SayDebug(arg0: string | number, arg1?: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2, float arg3, UIFont arg4, float arg5, int arg6, String arg7): void
       */
      SayRadio(arg0: string, arg1: number, arg2: number, arg3: number, arg4: zombie.ui.UIFont, arg5: number, arg6: number, arg7: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      SayShout(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      SayWhisper(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Stack arg0): void
       */
      Seen(arg0: java.util.Stack<zombie.iso.IsoMovingObject>): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      Serialize(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      SetName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      SetOnFire(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      SetVariable(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      SleepingTablet(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      SpreadFire(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      SpreadFireMP(): void;
      /**
       * Method Parameters: 
       *  - (BaseAction arg0): void
       */
      StartAction(arg0: zombie.characters.CharacterTimedActions.BaseAction): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, String arg1): void
       */
      StartTimedActionAnim(arg0: string, arg1?: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopAllActionQueue(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopAllActionQueueAiming(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopAllActionQueueRunning(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopAllActionQueueWalking(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopBurning(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StopTimedActionAnim(): void;
      /**
       * Method Parameters: 
       *  - (IsoAnimal arg0): void
       */
      TestAnimalSpotPlayer(arg0: zombie.characters.animals.IsoAnimal): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, IsoGridSquare arg1, IsoGridSquare arg2): boolean
       */
      TestCollide(arg0: zombie.iso.IsoMovingObject, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, IsoGridSquare arg1, IsoGridSquare arg2): boolean
       */
      TestPathfindCollide(arg0: zombie.iso.IsoMovingObject, arg1: zombie.iso.IsoGridSquare, arg2: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0, IsoGridSquare arg1): zombie.iso.IsoObject$VisionResult
       */
      TestVision(arg0: zombie.iso.IsoGridSquare, arg1: zombie.iso.IsoGridSquare): zombie.iso.IsoObject$VisionResult;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): void
       */
      TestZombieSpotPlayer(arg0: zombie.iso.IsoMovingObject): void;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0): void
       */
      Throw(arg0: zombie.inventory.types.HandWeapon): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): void
       */
      Thump(arg0: zombie.iso.IsoMovingObject): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      UnCollision(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, HandWeapon arg1): void
       */
      WeaponHit(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.types.HandWeapon): void;
      /**
       * Method Parameters: 
       *  - (ActionContext arg0): void
       */
      actionStateChanged(arg0: zombie.characters.action.ActionContext): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, float arg1): void
       */
      addAcceptance(arg0: zombie.characters.IsoPlayer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IAnimEventListenerSetVariableString arg0): void
       *  - (String arg0, IAnimEventListener arg1): void
       *  - (String arg0, IAnimEventListenerBoolean arg1): void
       *  - (String arg0, IAnimEventListenerFloat arg1): void
       *  - (String arg0, IAnimEventListenerNoParam arg1): void
       *  - (String arg0, IAnimEventListenerString arg1): void
       */
      addAnimEventListener(arg0: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString | string, arg1?: zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam | zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      addArmMuscleStrain(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoSprite arg0): void
       */
      addAttachedAnimSprite(arg0: zombie.iso.sprite.IsoSprite): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addAttachedAnimSpriteByName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoSpriteInstance arg0): void
       */
      addAttachedAnimSpriteInstance(arg0: zombie.iso.sprite.IsoSpriteInstance): void;
      /**
       * Method Parameters: 
       *  - (IsoAnimal arg0): void
       */
      addAttachedAnimal(arg0: zombie.characters.animals.IsoAnimal): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.IsoAnimal
       */
      addBaby(): zombie.characters.animals.IsoAnimal;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      addBackMuscleStrain(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): void
       */
      addBasicPatch(arg0: zombie.characterTextures.BloodBodyPartType): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (BloodBodyPartType arg0, boolean arg1, boolean arg2, boolean arg3): void
       */
      addBlood(arg0: number | zombie.characterTextures.BloodBodyPartType, arg1?: boolean, arg2?: boolean, arg3?: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.visual.ItemVisual
       */
      addBodyVisualFromItemType(arg0: string): zombie.core.skinnedmodel.visual.ItemVisual;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      addBothArmMuscleStrain(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      addChild(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0): void
       *  - (HandWeapon arg0, int arg1): void
       *  - (HandWeapon arg0, int arg1, float arg2): void
       */
      addCombatMuscleStrain(arg0: zombie.inventory.types.HandWeapon, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.inventory.InventoryItem
       */
      addDebugBucketOfMilk(arg0: zombie.characters.IsoGameCharacter): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0, Integer arg1, boolean arg2): void
       */
      addDirt(arg0: zombie.characterTextures.BloodBodyPartType, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      addEgg(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): boolean
       *  - (BloodBodyPartType arg0, boolean arg1): boolean
       */
      addHole(arg0: zombie.characterTextures.BloodBodyPartType, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0, boolean arg1): boolean
       */
      addHoleFromZombieAttacks(arg0: zombie.characterTextures.BloodBodyPartType, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       *  - (String arg0, boolean arg1): zombie.inventory.InventoryItem
       */
      addItemToObjectSurface(arg0: string, arg1?: boolean): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addKnownMediaLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      addLeftArmMuscleStrain(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, float arg1, float arg2, float arg3): void
       *  - (String arg0, float arg1, float arg2, float arg3, UIFont arg4, float arg5, String arg6): void
       *  - (String arg0, float arg1, float arg2, float arg3, UIFont arg4, float arg5, String arg6, boolean arg7, boolean arg8, boolean arg9, boolean arg10, boolean arg11, boolean arg12): void
       */
      addLineChatElement(arg0: string, arg1?: number, arg2?: number, arg3?: number, arg4?: zombie.ui.UIFont, arg5?: number, arg6?: string, arg7?: boolean, arg8?: boolean, arg9?: boolean, arg10?: boolean, arg11?: boolean, arg12?: boolean): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0, Integer arg1, boolean arg2): void
       */
      addLotsOfDirt(arg0: zombie.characterTextures.BloodBodyPartType, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, VehiclePart arg1, Long arg2): void
       */
      addMechanicsItem(arg0: string, arg1: zombie.vehicles.VehiclePart, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      addNeckMuscleStrain(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, int arg1): void
       */
      addReadLiterature(arg0: string, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      addRightLegMuscleStrain(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      addSecondaryContainer(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (Double arg0): void
       */
      addSelectedZoneForHighlight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, String arg1): boolean
       */
      addSheetRope(arg0: zombie.characters.IsoPlayer, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0, float arg1): void
       */
      addStiffness(arg0: zombie.characters.BodyDamage.BodyPartType, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addToWorld(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addVisualDamage(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2): void
       */
      addWorldSoundUnlessInvisible(arg0: number, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, boolean arg1): void
       */
      alertOtherAnimals(arg0: zombie.iso.IsoMovingObject, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      allowsTwist(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, AnimEvent arg1): void
       */
      animEvent(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimEvent): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      animalShouldThump(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      applyDamage(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      applyDamageFromVehicle(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      applyTraits(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      attackFromWindowsLunge(arg0: zombie.characters.IsoZombie): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      attackOtherMales(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeContainer
       */
      attrib(): zombie.entity.components.attributes.AttributeContainer;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      autoDrink(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      avoidDamage(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      becomeCorpse(): void;
      /**
       * Method Parameters: 
       *  - (Integer arg0, String arg1): boolean
       */
      bodyPartHasTag(arg0: number, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (Integer arg0): boolean
       */
      bodyPartIsSpiked(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Integer arg0): boolean
       */
      bodyPartIsSpikedBehind(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoDeadBody arg0): void
       */
      burnCorpse(arg0: zombie.iso.objects.IsoDeadBody): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      calcCarForwardVector(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.iso.Vector2
       */
      calcCarPositionOffset(arg0: boolean): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      calcCarSpeedVector(arg0?: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.Vector2
       *  - (IsoGameCharacter arg0, Vector2 arg1): zombie.iso.Vector2
       */
      calcCarToPlayerVector(arg0: zombie.characters.IsoGameCharacter, arg1?: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, boolean arg1): number
       */
      calcConeAngleMultiplier(arg0: zombie.characters.IsoGameCharacter, arg1: boolean): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, boolean arg1): number
       */
      calcConeAngleOffset(arg0: zombie.characters.IsoGameCharacter, arg1: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      calcDamage(): number;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       *  - (IsoGameCharacter arg0, HandWeapon arg1, Vector2 arg2): number
       */
      calcHitDir(arg0: zombie.iso.Vector2 | zombie.characters.IsoGameCharacter, arg1?: zombie.inventory.types.HandWeapon, arg2?: zombie.iso.Vector2): void | number;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0, boolean arg1): number
       */
      calcLengthMultiplier(arg0: zombie.iso.Vector2, arg1: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      calculateBaseSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      calculateCombatSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      calculateContext(): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       */
      calculateCritChance(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      calculateGrappleEffectivenessFromTraits(): number;
      /**
       * Method Parameters: 
       *  - (ShadowParams arg0): zombie.iso.objects.ShadowParams
       */
      calculateShadowParams(arg0: zombie.iso.objects.ShadowParams): zombie.iso.objects.ShadowParams;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canAddSheetRope(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeFeedByHand(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeGrappled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeMilked(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBePet(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      canBePicked(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (IsoHutch arg0): boolean
       */
      canBePutInHutch(arg0: zombie.iso.objects.IsoHutch): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeSheared(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      canClimbDownSheetRope(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canClimbDownSheetRopeInCurrentSquare(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canClimbFences(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): boolean
       */
      canClimbOverWall(arg0: zombie.iso.IsoDirections): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      canClimbSheetRope(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canClimbStairs(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canDoAction(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoFeedingTrough arg0): zombie.inventory.InventoryItem
       */
      canEatFromTrough(arg0: zombie.iso.objects.IsoFeedingTrough): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      canGoThere(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canHaveEggs(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      canHaveMultipleHits(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canPerformHandToHandCombat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canPoop(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canRagdoll(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      canReachTo(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canSprint(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): boolean
       */
      canStandAt(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      canTransitionToState(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): boolean
       */
      canUseAsGenericCraftingSurface(arg0: zombie.iso.IsoObject): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      cancelLuring(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, boolean arg1): void
       */
      carCrash(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): boolean
       */
      carMovingBackward(arg0: zombie.iso.Vector2): boolean;
      /**
       * Method Parameters: 
       *  - (State arg0): void
       */
      changeState(arg0: zombie.ai.State): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      changeStress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkActionGroup(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      checkAlphaAndTargetAlpha(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkAmbientSound(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       *  - (UdpConnection arg0): boolean
       */
      checkCanSeeClient(arg0: zombie.characters.IsoPlayer | zombie.core.raknet.UdpConnection): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkHaveElectricity(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      checkIsNearVehicle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      checkIsNearWall(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      checkKilledByMetaPredator(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkLightSourceActive(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkUpdateModelTextures(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      checkWalkTo(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      cleanWallBlood(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearAttachedAnimSprite(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearAttachedItems(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearHandToHandAttack(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearKnownMediaLines(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearNetworkEvents(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearOnOverlay(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      clearVariable(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearVariables(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearWornItems(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      climbDownSheetRope(): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       */
      climbOverFence(arg0: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): boolean
       */
      climbOverWall(arg0: zombie.iso.IsoDirections): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      climbSheetRope(): void;
      /**
       * Method Parameters: 
       *  - (IsoThumpable arg0): void
       *  - (IsoWindow arg0): void
       *  - (IsoThumpable arg0, Integer arg1): void
       *  - (IsoWindow arg0, Integer arg1): void
       */
      climbThroughWindow(arg0: zombie.iso.objects.IsoThumpable | zombie.iso.objects.IsoWindow, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (IsoWindowFrame arg0): void
       */
      climbThroughWindowFrame(arg0: zombie.iso.objects.IsoWindowFrame): void;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0): void
       */
      closeWindow(arg0: zombie.iso.objects.IsoWindow): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      clothingItemChanged(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      collideWith(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       */
      compareMovePriority(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       */
      compareToY(arg0: zombie.iso.IsoMovingObject): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      componentSize(): number;
      /**
       * Method Parameters: 
       *  - (Component arg0): boolean
       */
      containsComponent(arg0: zombie.entity.Component): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsVariable(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (IsoAnimal arg0): void
       */
      copyFrom(arg0: zombie.characters.animals.IsoAnimal): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      countAddSheetRope(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      createContainersFromSpriteProperties(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.types.Food
       */
      createEgg(): zombie.inventory.types.Food;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      createKeyRing(arg0?: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0, String arg1): zombie.core.network.ByteBufferWriter
       */
      createPlayerStats(arg0: zombie.core.network.ByteBufferWriter, arg1: string): zombie.core.network.ByteBufferWriter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      customHashCode(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.core.skinnedmodel.animation.AnimationTrack
       */
      dbgGetAnimTrack(arg0: number, arg1: number): zombie.core.skinnedmodel.animation.AnimationTrack;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): string
       */
      dbgGetAnimTrackName(arg0: number, arg1: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      dbgGetAnimTrackTime(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      dbgGetAnimTrackWeight(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      debugAgeAway(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debugForceEgg(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debugForceSit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debugPrintout(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debugRandomHappyAnim(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debugRandomIdleAnim(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      delete(): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       */
      destroyFence(arg0: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      die(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      distToNearestCamCharacter(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      doBeatenVehicle(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): boolean
       */
      doContext(arg0: zombie.iso.IsoDirections): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doFindExternalWaterSource(): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, HitVars arg1): void
       */
      doHitByVehicle(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.vehicles.BaseVehicle$HitVars): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doStairs(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      drawDebugTextBelow(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      drawDirectionLine(arg0: zombie.iso.Vector2, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0, Vector2 arg1, float arg2, float arg3, float arg4, float arg5): void
       */
      drawLine(arg0: zombie.iso.Vector2, arg1: zombie.iso.Vector2, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      drawRope(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      dressInClothingItem(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      dressInNamedOutfit(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      dressInPersistentOutfit(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      dressInPersistentOutfitID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      dressInRandomNonSillyOutfit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      dressInRandomOutfit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      dropHandItems(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      dropHeavyItems(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, InventoryItem arg1): void
       */
      eatFromLured(arg0: zombie.characters.IsoPlayer, arg1: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (AnimationVariableSource arg0): void
       */
      endPlaybackGameVariables(arg0: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.core.physics.BallisticsTarget
       */
      ensureExitsBallisticsTarget(arg0: zombie.characters.IsoGameCharacter): zombie.core.physics.BallisticsTarget;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ensureOnTile(): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0, int arg1, Vector3f arg2): void
       */
      enterVehicle(arg0: zombie.vehicles.BaseVehicle, arg1: number, arg2: org.joml.Vector3f): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      exert(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       */
      faceDirection(arg0: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      faceLocation(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      faceLocationF(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      facePosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      faceThisObject(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      faceThisObjectAlt(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      fallFromRope(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      fallenOnKnees(arg0?: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, InventoryItem arg1): void
       */
      feedFromHand(arg0: zombie.characters.IsoPlayer, arg1: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoAnimal arg0, boolean arg1): void
       */
      fertilize(arg0: zombie.characters.animals.IsoAnimal, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      fleeTo(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceAwake(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceWanderNow(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAbsoluteExcessTwist(): number;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): number
       */
      getAcceptanceLevel(arg0: zombie.characters.IsoPlayer): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAccessLevel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.action.ActionContext
       */
      getActionContext(): zombie.characters.action.ActionContext;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getActionStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getActiveLightItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getActiveLightItems(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.AnimalDefinitions
       */
      getAdef(): zombie.characters.animals.AnimalDefinitions;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator
       */
      getAdvancedAnimator(): zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAge(): number;
      /**
       * Method Parameters: 
       *  - (boolean arg0, int arg1): string
       */
      getAgeText(arg0: boolean, arg1: number): string;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getAimVector(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAimingDelay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAimingMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAimingRangeMod(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllPossibleFoodFromInv(arg0: zombie.characters.IsoGameCharacter): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       */
      getAlpha(arg0?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getAlreadyReadBook(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getAlreadyReadPages(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAnimAngle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAnimAngleRadians(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAnimAngleStepDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAnimAngleTwistDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster
       */
      getAnimEventBroadcaster(): zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getAnimForwardDirection(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getAnimVector(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAnimalID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAnimalSize(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.animals.AnimalSoundState
       */
      getAnimalSoundState(arg0: string): zombie.characters.animals.AnimalSoundState;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAnimalTrailerSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAnimalType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.AnimalVisual
       */
      getAnimalVisual(): zombie.core.skinnedmodel.visual.AnimalVisual;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.AnimalZone
       */
      getAnimalZone(): zombie.characters.animals.AnimalZone;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.IAnimatable
       */
      getAnimatable(): zombie.core.skinnedmodel.advancedanimation.IAnimatable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAnimationDebug(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.AnimationPlayer
       */
      getAnimationPlayer(): zombie.core.skinnedmodel.animation.AnimationPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder
       */
      getAnimationPlayerRecorder(): zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAnimationStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAnimationTimeDelta(): number;
      /**
       * Method Parameters: 
       *  - (boolean arg0): string
       */
      getAppearanceText(arg0: boolean): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAsleepTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>
       */
      getAttachedAnimSprite(): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAttachedAnimSpriteCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.animals.IsoAnimal>
       */
      getAttachedAnimals(): java.util.ArrayList<zombie.characters.animals.IsoAnimal>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getAttachedItem(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.AttachedItems.AttachedItems
       */
      getAttachedItems(): zombie.characters.AttachedItems.AttachedItems;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.AttachedItems.AttachedLocationGroup
       */
      getAttachedLocationGroup(): zombie.characters.AttachedItems.AttachedLocationGroup;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.Position3D
       */
      getAttachmentWorldPos(arg0: string): zombie.characters.Position3D;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getAttackTargetSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAttackType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.network.fields.AttackVars
       */
      getAttackVars(): zombie.network.fields.AttackVars;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getAttackedBy(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.types.HandWeapon
       */
      getAttackingWeapon(): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeContainer
       */
      getAttributes(): zombie.entity.components.attributes.AttributeContainer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      getAutoWalkDirection(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.animals.IsoAnimal>
       */
      getBabies(): java.util.ArrayList<zombie.characters.animals.IsoAnimal>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBabyType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.physics.BallisticsController
       */
      getBallisticsController(): zombie.core.physics.BallisticsController;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.physics.BallisticsTarget
       */
      getBallisticsTarget(): zombie.core.physics.BallisticsTarget;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBarricadeStrengthMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBarricadeTimeMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBearingFromGrappledTarget(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBearingToGrappledTarget(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getBed(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBedType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBeenMovingFor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBeenSprintingFor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.behavior.BaseAnimalBehavior
       */
      getBehavior(): zombie.characters.animals.behavior.BaseAnimalBehavior;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBetaDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBetaEffect(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBloodImpactX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBloodImpactY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBloodImpactZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBloodQuantity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite
       */
      getBloodSplat(): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlurFactor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.BodyDamage.BodyDamage
       */
      getBodyDamage(): zombie.characters.BodyDamage.BodyDamage;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.BodyDamage.BodyDamage
       */
      getBodyDamageRemote(): zombie.characters.BodyDamage.BodyDamage;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.WornItems.BodyLocationGroup
       */
      getBodyLocationGroup(): zombie.characters.WornItems.BodyLocationGroup;
      /**
       * Method Parameters: 
       *  - (Integer arg0, boolean arg1, boolean arg2): number
       */
      getBodyPartClothingDefense(arg0: number, arg1: boolean, arg2: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.datas.AnimalBreed
       */
      getBreed(): zombie.characters.animals.datas.AnimalBreed;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoBuilding
       */
      getBuilding(): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBumpFallType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBumpType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getBumpedChr(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): string
       */
      getBumpedType(arg0: zombie.characters.IsoGameCharacter): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoCell
       */
      getCell(): zombie.iso.IsoCell;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.characters.CharacterTimedActions.BaseAction>
       */
      getCharacterActions(): java.util.Stack<zombie.characters.CharacterTimedActions.BaseAction>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.traits.CharacterTraits
       */
      getCharacterTraits(): zombie.characters.traits.CharacterTraits;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.chat.ChatElement
       */
      getChatElement(): zombie.chat.ChatElement;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>
       */
      getChildSprites(): java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChopTreeSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoChunk
       */
      getChunk(): zombie.iso.IsoChunk;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getClearSpottedTimer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClickSound(): string;
      /**
       * Method Parameters: 
       *  - (boolean arg0): number
       */
      getClimbRopeSpeed(arg0: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getClimbRopeTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getClimbingFailChanceFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getClimbingFailChanceInt(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getClosestZombieDist(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): zombie.characters.IsoZombie
       */
      getClosestZombieToOtherZombie(arg0: zombie.characters.IsoZombie): zombie.characters.IsoZombie;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getClothingDiscomfortModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getClothingItem_Back(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getClothingItem_Feet(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getClothingItem_Hands(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getClothingItem_Head(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getClothingItem_Legs(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getClothingItem_Torso(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.ClothingWetness
       */
      getClothingWetness(): zombie.characters.ClothingWetness;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCollideType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getCollidedObject(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCombatSpeed(): number;
      /**
       * Method Parameters: 
       *  - (ComponentType arg0): T
       */
      getComponent<T>(arg0: zombie.entity.ComponentType): T;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.Component
       */
      getComponentForIndex(arg0: number): zombie.entity.Component;
      /**
       * Method Parameters: 
       *  - (short arg0): zombie.entity.Component
       */
      getComponentFromID(arg0: number): zombie.entity.Component;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.inventory.ItemContainer
       */
      getContainerByEitherType(arg0: string, arg1: string): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.ItemContainer
       */
      getContainerByIndex(arg0: number): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.ItemContainer
       */
      getContainerByType(arg0: string): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getContainerCount(): number;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): number
       */
      getContainerIndex(arg0: zombie.inventory.ItemContainer): number;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): zombie.iso.IsoObject
       */
      getContextDoorOrWindowOrWindowFrame(arg0: zombie.iso.IsoDirections): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getControllerAimDir(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCorpseLength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0): number
       *  - (float arg0, boolean arg1): number
       */
      getCorpseSicknessDefense(arg0?: number, arg1?: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCorpseSicknessRate(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCorpseSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCurrentActionContextStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.IsoBuilding
       */
      getCurrentBuilding(): zombie.iso.areas.IsoBuilding;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.BuildingDef
       */
      getCurrentBuildingDef(): zombie.iso.BuildingDef;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentClutchSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getCurrentFrameTex(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.RoomDef
       */
      getCurrentRoomDef(): zombie.iso.RoomDef;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getCurrentSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.State
       */
      getCurrentState(): zombie.ai.State;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCurrentStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.zones.Zone
       */
      getCurrentZone(): zombie.iso.zones.Zone;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getCustomColor(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCustomName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.DesignationZoneAnimal
       */
      getDZone(): zombie.iso.areas.DesignationZoneAnimal;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDamage(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      getDamageFromHitByACar(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDangerLevels(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.datas.AnimalData
       */
      getData(): zombie.characters.animals.datas.AnimalData;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor
       */
      getDebugMonitor(): zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.State
       */
      getDefaultState(): zombie.ai.State;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeferredAngleDelta(): number;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getDeferredMovement(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getDeferredMovementFromRagdoll(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeferredRotationWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDepressDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDepressEffect(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getDescription(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.SurvivorDesc
       */
      getDescriptor(): zombie.characters.SurvivorDesc;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDialogMood(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDieCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoDirections
       */
      getDir(): zombie.iso.IsoDirections;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDirectionAngle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDisplayName(): string;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): number
       */
      getDistanceSq(arg0: zombie.iso.IsoMovingObject): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getDoRender(): boolean;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): number
       *  - (float arg0, float arg1): number
       */
      getDotWithForwardDirection(arg0: zombie.iso.Vector3 | number, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoSurvivor
       */
      getDragCharacter(): zombie.characters.IsoSurvivor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoMovingObject
       */
      getDragObject(): zombie.iso.IsoMovingObject;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getEatTypePossibleFromHand(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoZombie>
       */
      getEatingZombies(): java.util.ArrayList<zombie.characters.IsoZombie>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEggGeneMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEggsPerDay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.BaseCharacterSoundEmitter
       */
      getEmitter(): zombie.characters.BaseCharacterSoundEmitter;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.characters.IsoGameCharacter>
       */
      getEnemyList(): java.util.Stack<zombie.characters.IsoGameCharacter>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEntityDisplayName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEntityFullTypeDebug(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEntityNetID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.types.Radio
       */
      getEquipedRadio(): zombie.inventory.types.Radio;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getExceptionCompatibleString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getExcessTwist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getExtraInfoFlags(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.audio.FMODParameterList
       */
      getFMODParameters(): zombie.audio.FMODParameterList;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoDirections
       */
      getFacing(): zombie.iso.IsoDirections;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getFacingPosition(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getFacingPositionAlt(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFallTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFallTimeAdjusted(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.iso.areas.IsoBuilding>
       */
      getFamiliarBuildings(): java.util.Stack<zombie.iso.areas.IsoBuilding>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getFasciaAttachedSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFatigueMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFatiqueMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFeatherItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFeatherNumber(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): zombie.iso.IsoGridSquare
       */
      getFeelerTile(arg0: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFeelersize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFertilizedTimeMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.astar.AStarPathFinderResult
       */
      getFinder(): zombie.ai.astar.AStarPathFinderResult;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFireKillRate(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFireMode(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFireSpreadProbability(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.BodyDamage.Fitness
       */
      getFitness(): zombie.characters.BodyDamage.Fitness;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidContainer
       */
      getFluidContainer(): zombie.entity.components.fluids.FluidContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFollowID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getFollowingTarget(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getForceWakeUpTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getForname(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getForwardDirection(arg0?: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<string, zombie.characters.animals.AnimalGene>
       */
      getFullGenome(): java.util.HashMap<string, zombie.characters.animals.AnimalGene>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.animals.AnimalGene>
       */
      getFullGenomeList(): java.util.ArrayList<zombie.characters.animals.AnimalGene>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFullName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getFuturWalkedSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.GameCharacterAIBrain
       */
      getGameCharacterAIBrain(): zombie.ai.GameCharacterAIBrain;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntityType
       */
      getGameEntityType(): zombie.entity.GameEntityType;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>
       */
      getGameVariables(): java.lang.Iterable<zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getGeneticDisorder(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (boolean arg0): number
       */
      getGlobalMovementMod(arg0?: boolean): number;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.core.math.Vector3
       *  - (Vector3 arg0): zombie.iso.Vector3
       */
      getGrappleOffset(arg0: zombie.core.math.Vector3 | zombie.iso.Vector3): zombie.core.math.Vector3 | zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour
       */
      getGrappleOffsetBehaviour(): zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGrapplePosOffsetForward(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGrappleResult(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGrappleRotOffsetYaw(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.IGrappleable
       */
      getGrappleable(): zombie.core.skinnedmodel.IGrappleable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.IGrappleable
       */
      getGrappledBy(): zombie.core.skinnedmodel.IGrappleable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGrappledByString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGrappledByType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.IGrappleable
       */
      getGrapplingTarget(): zombie.core.skinnedmodel.IGrappleable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHaloTimerCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHammerSoundMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHealth(): number;
      /**
       * Method Parameters: 
       *  - (boolean arg0, int arg1): string
       */
      getHealthText(arg0: boolean, arg1: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHearDistanceModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeartDelay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeartDelayMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightAboveFloor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getHighlightColor(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHitChancesMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      getHitDir(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHitDirEnum(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHitForce(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHitFromAngle(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.network.fields.HitInfo>
       */
      getHitInfoList(): java.util.ArrayList<zombie.network.fields.HitInfo>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHitReaction(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.HitReactionNetworkAI
       */
      getHitReactionNetworkAI(): zombie.characters.HitReactionNetworkAI;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHittingMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoButcherHook
       */
      getHook(): zombie.iso.IsoButcherHook;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHoursSurvived(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.HumanVisual
       */
      getHumanVisual(): zombie.core.skinnedmodel.visual.HumanVisual;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHunger(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHungerBoost(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHungerMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getHurtSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoHutch
       */
      getHutch(): zombie.iso.objects.IsoHutch;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHyperthermiaMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIgnoreMovement(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getImpulsex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getImpulsey(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInvAimingMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInvAimingRangeMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getInventory(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInventoryWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsNPC(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsSurfaceNormalOffset(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getItemContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.ItemVisuals
       *  - (ItemVisuals arg0): void
       */
      getItemVisuals(arg0?: zombie.core.skinnedmodel.visual.ItemVisuals): zombie.core.skinnedmodel.visual.ItemVisuals | void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getJoypadBind(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getKeyId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<string>
       */
      getKnownRecipes(): java.util.List<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      getLastAngle(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastBump(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.chat.ChatMessage
       */
      getLastChatMessage(): zombie.chat.ChatMessage;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastCollideTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastFallSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter$Location
       */
      getLastHeardSound(): zombie.characters.IsoGameCharacter$Location;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getLastHitCharacter(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastHitCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastHourSleeped(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<string, zombie.characters.IsoGameCharacter$Location>
       */
      getLastKnownLocation(): java.util.HashMap<string, zombie.characters.IsoGameCharacter$Location>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.IsoGameCharacter$Location
       */
      getLastKnownLocationOf(arg0: string): zombie.characters.IsoGameCharacter$Location;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastLocalEnemies(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastSeenZomboidTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLastSpokenLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.iso.IsoMovingObject>
       */
      getLastSpotted(): java.util.Stack<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getLastSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoZombie
       */
      getLastTargettedBy(): zombie.characters.IsoZombie;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastZombieKills(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLeaveBodyTimedown(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite
       */
      getLegsSprite(): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLevelMaxForXp(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getLevelUpLevels(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLevelUpMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightDistance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter$LightInfo
       */
      getLightInfo2(): zombie.characters.IsoGameCharacter$LightInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoLightSource
       */
      getLightSource(): zombie.iso.IsoLightSource;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightfootMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLimpulsex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLimpulsey(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLlx(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLly(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLlz(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.characters.IsoGameCharacter>
       */
      getLocalEnemyList(): java.util.Stack<zombie.characters.IsoGameCharacter>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoMovingObject>
       */
      getLocalGroupList(): java.util.ArrayList<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoMovingObject>
       */
      getLocalList(): java.util.ArrayList<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoMovingObject>
       */
      getLocalNeutralList(): java.util.ArrayList<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoMovingObject>
       */
      getLocalRelevantEnemyList(): java.util.ArrayList<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLookAngleRadians(): number;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getLookVector(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.iso.IsoGridSquare
       */
      getLowDangerInVicinity(arg0: number, arg1: number): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.animals.IsoAnimal>
       */
      getLuredAnimals(): java.util.ArrayList<zombie.characters.animals.IsoAnimal>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaintenanceMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.MapKnowledge
       */
      getMapKnowledge(): zombie.ai.MapKnowledge;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2): number
       */
      getMaskClickedY(arg0: number, arg1: number, arg2: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getMasterObject(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.areas.isoregion.regions.IWorldRegion
       */
      getMasterRegion(): zombie.iso.areas.isoregion.regions.IWorldRegion;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMate(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxChatLines(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxClutchSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxTwist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxWeightBase(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxWeightDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMeatRatio(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getMechanicsItem(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMeleeCombatMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMeleeDelay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMetalBarricadeStrengthMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMilkAnimPreset(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMilkType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinAgeForBaby(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinClutchSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstance
       */
      getModel(): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstance
       */
      getModelInstance(): zombie.core.skinnedmodel.model.ModelInstance;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMomentumScalar(): number;
      /**
       * Method Parameters: 
       *  - (MoodleType arg0): number
       */
      getMoodleLevel(arg0: zombie.characters.Moodles.MoodleType): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.Moodles.Moodles
       */
      getMoodles(): zombie.characters.Moodles.Moodles;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.IsoAnimal
       */
      getMother(): zombie.characters.animals.IsoAnimal;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getMouseAimVector(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMoveDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      getMoveForwardVec(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMoveSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      getMovementLastFrame(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMovementSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMovingObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      getMusicIntensityEventModData(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.audio.MusicIntensityEvents
       */
      getMusicIntensityEvents(): zombie.audio.MusicIntensityEvents;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.audio.MusicThreatStatuses
       */
      getMusicThreatStatuses(): zombie.audio.MusicThreatStatuses;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.BaseVehicle
       */
      getNearVehicle(): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.NetworkCharacterAI
       */
      getNetworkCharacterAI(): zombie.characters.NetworkCharacterAI;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNextAnimationTranslationLength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNextStageAnimalType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNextWander(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNextX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNextY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNimbleMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getNoDamage(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumSurvivorsInVicinity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNumTwistBones(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.BodyDamage.Nutrition
       */
      getNutrition(): zombie.characters.BodyDamage.Nutrition;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getObjectName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.ObjectRenderEffects
       */
      getObjectRenderEffects(): zombie.iso.objects.ObjectRenderEffects;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.ObjectRenderEffects
       */
      getObjectRenderEffectsToApply(): zombie.iso.objects.ObjectRenderEffects;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffSetXUI(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffSetYUI(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffsetX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffsetY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSpriteInstance
       */
      getOnOverlay(): zombie.iso.sprite.IsoSpriteInstance;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOnlineID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.sadisticAIDirector.SleepingEventData
       */
      getOrCreateSleepingEventData(): zombie.ai.sadisticAIDirector.SleepingEventData;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOutfitName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       */
      getOutlineHighlightCol(arg0?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOutlineThickness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite
       */
      getOverlaySprite(): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getOverlaySpriteColor(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.raknet.UdpConnection
       */
      getOwner(): zombie.core.raknet.UdpConnection;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      getOwnerPlayer(): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPacingMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPainDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPainEffect(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.audio.parameters.ParameterCharacterMovementSpeed
       */
      getParameterCharacterMovementSpeed(): zombie.audio.parameters.ParameterCharacterMovementSpeed;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.pathfind.Path
       */
      getPath2(): zombie.pathfind.Path;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.pathfind.PathFindBehavior2
       */
      getPathFindBehavior2(): zombie.pathfind.PathFindBehavior2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPathFindIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPathIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPathSpeed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPathTargetX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPathTargetY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPathTargetZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPatience(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPatienceMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPatienceMin(): number;
      /**
       * Method Parameters: 
       *  - (Perk arg0): zombie.characters.IsoGameCharacter$PerkInfo
       */
      getPerkInfo(arg0: zombie.characters.skills.PerkFactory$Perk): zombie.characters.IsoGameCharacter$PerkInfo;
      /**
       * Method Parameters: 
       *  - (Perk arg0): number
       */
      getPerkLevel(arg0: zombie.characters.skills.PerkFactory$Perk): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoGameCharacter$PerkInfo>
       */
      getPerkList(): java.util.ArrayList<zombie.characters.IsoGameCharacter$PerkInfo>;
      /**
       * Method Parameters: 
       *  - (Perk arg0): number
       */
      getPerkToUnit(arg0: zombie.characters.skills.PerkFactory$Perk): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPersistentOutfitID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPetTimer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPing(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPipedFuelAmount(): number;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): number
       */
      getPlayerAcceptance(arg0: zombie.characters.IsoPlayer): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerClothingInsulation(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerClothingTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      getPlayerMoveDir(): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPlayerNum(): number;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0): org.lwjgl.util.vector.Vector3f
       *  - (Vector3 arg0): zombie.iso.Vector3
       */
      getPosition(arg0: org.lwjgl.util.vector.Vector3f | zombie.iso.Vector3): org.lwjgl.util.vector.Vector3f | zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getPossibleLuringItems(arg0: zombie.characters.IsoGameCharacter): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPreviousActionContextStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPreviousStateName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getPrimaryHandItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPrimaryHandType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.properties.PropertyContainer
       */
      getProperties(): zombie.core.properties.PropertyContainer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.physics.RagdollController
       */
      getRagdollController(): zombie.core.physics.RagdollController;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.population.Outfit
       */
      getRandomDefaultOutfit(): zombie.core.skinnedmodel.population.Outfit;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRandomSquareInZone(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<string, number>
       */
      getReadLiterature(): java.util.HashMap<string, number>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.core.skinnedmodel.model.ModelInstance>
       */
      getReadyModelData(): java.util.ArrayList<zombie.core.skinnedmodel.model.ModelInstance>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getReanimAnimDelay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getReanimAnimFrame(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getReanimateTimer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getReanimatedCorpse(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRecoilDelay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRecoilVarX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRecoilVarY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRecoveryMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getReduceInfectionPower(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      getRelevantAndDistance(arg0: number, arg1: number, arg2: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getReloadingMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRemoteID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getRenderEffectMaster(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.IsoObject
       */
      getRenderEffectObjectByIndex(arg0: number): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderEffectObjectCount(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.fboRenderChunk.ObjectRenderInfo
       */
      getRenderInfo(arg0: number): zombie.iso.fboRenderChunk.ObjectRenderInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getRenderSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderYOffset(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getRerouteCollide(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getRerouteMask(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getRerouteMaskObject(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.Role
       */
      getRole(): zombie.characters.Role;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRunSpeedModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.Safety
       */
      getSafety(): zombie.characters.Safety;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSayLine(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScreenX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScreenY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptModule(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScriptNextX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScriptNextY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScriptnx(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScriptny(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getSecondaryHandItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSecondaryHandType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSeeNearbyCharacterDistance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSelectedZoneForHighlight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<number>
       */
      getSelectedZonesForHighlight(): java.util.ArrayList<number>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSharedGrappleAnimNode(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSharedGrappleAnimTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSharedGrappleType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShoulderTwist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShoulderTwistWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getShoutItemModel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getShoutType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShovingMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoDirections
       */
      getSitOnFurnitureDirection(): zombie.iso.IsoDirections;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getSitOnFurnitureObject(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSleepingPillsTaken(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSleepingTabletDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSleepingTabletEffect(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSlowFactor(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSlowTimer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSneakSpotMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getSpeakColour(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSpeakTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSpecialObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSpeedMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<zombie.iso.IsoMovingObject>
       */
      getSpottedList(): java.util.Stack<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSprintMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSprite
       */
      getSprite(): zombie.iso.sprite.IsoSprite;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.spriteconfig.SpriteConfig
       */
      getSpriteConfig(): zombie.entity.components.spriteconfig.SpriteConfig;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSpriteInstance
       */
      getSpriteDef(): zombie.iso.sprite.IsoSpriteInstance;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.sprite.IsoSpriteGrid
       */
      getSpriteGrid(): zombie.iso.sprite.IsoSpriteGrid;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       *  - (ArrayList arg0, boolean arg1): void
       */
      getSpriteGridObjects(arg0: java.util.ArrayList<zombie.iso.IsoObject>, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      getSpriteGridObjectsExcludingSelf(arg0: java.util.ArrayList<zombie.iso.IsoObject>): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      getSpriteGridObjectsIncludingSelf(arg0: java.util.ArrayList<zombie.iso.IsoObject>): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.SpriteModel
       */
      getSpriteModel(): zombie.iso.SpriteModel;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSpriteName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStaggerTimeMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStateEventDelayTimer(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.ai.StateMachine
       */
      getStateMachine(): zombie.ai.StateMachine;
      /**
       * Method Parameters: 
       *  - (State arg0): java.util.HashMap<any, any>
       */
      getStateMachineParams(arg0: zombie.ai.State): java.util.HashMap<any, any>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStaticMovingObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.Stats
       */
      getStats(): zombie.characters.Stats;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSteamID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStress(): number;
      /**
       * Method Parameters: 
       *  - (boolean arg0, int arg1): string
       */
      getStressTxt(arg0: boolean, arg1: number): string;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource
       */
      getSubVariableSource(arg0: string): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSurfaceNormalOffset(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSurfaceOffset(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSurfaceOffsetNoTable(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSurname(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (boolean arg0): number
       */
      getSurroundingAttackingZombies(arg0?: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSurvivorKills(): number;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getTable(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getTagColor(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTagPrefix(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTalkerType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (int arg0): number
       */
      getTargetAlpha(arg0?: number): number;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): zombie.core.math.Vector3
       *  - (Vector3 arg0): zombie.iso.Vector3
       */
      getTargetGrapplePos(arg0: zombie.core.math.Vector3 | zombie.iso.Vector3): zombie.core.math.Vector3 | zombie.iso.Vector3;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getTargetGrappleRotation(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTargetTwist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.NetworkTeleport
       */
      getTeleport(): zombie.characters.NetworkTeleport;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTemperature(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.model.ModelInstanceTextureCreator
       */
      getTextureCreator(): zombie.core.skinnedmodel.model.ModelInstanceTextureCreator;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTextureName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThirst(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThirstBoost(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThirstMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThreatLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThumpCondition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getThumpDelay(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.interfaces.Thumpable
       */
      getThumpTarget(): zombie.iso.objects.interfaces.Thumpable;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): zombie.iso.objects.interfaces.Thumpable
       */
      getThumpableFor(arg0: zombie.characters.IsoGameCharacter): zombie.iso.objects.interfaces.Thumpable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTicksSinceSeenZombie(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTile(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTileName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeSinceLastSmoke(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeSinceLastStab(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeSinceZombieAttack(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTimeSurvived(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimeThumping(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimedActionTimeModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTorchDot(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTorchStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTotalBlood(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.traits.TraitCollection
       */
      getTraits(): zombie.characters.traits.TraitCollection;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTurnDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTwist(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.SpriteDetails.IsoObjectType
       */
      getType(): zombie.iso.SpriteDetails.IsoObjectType;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTypeAndBreed(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.types.HandWeapon
       */
      getUseHandWeapon(): zombie.inventory.types.HandWeapon;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.IsoAnimal
       */
      getUseableAnimal(): zombie.characters.animals.IsoAnimal;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.BaseVehicle
       */
      getUseableVehicle(): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.characters.animals.AnimalAllele
       */
      getUsedGene(arg0: string): zombie.characters.animals.AnimalAllele;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<string>
       */
      getUsedItemsOn(): java.util.Stack<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUserNameHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       *  - (Boolean arg0): string
       *  - (Boolean arg0, Boolean arg1): string
       */
      getUsername(arg0?: boolean, arg1?: boolean): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getUsesExternalWaterSource(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      getUsingPlayer(): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       *  - (AnimationVariableHandle arg0): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot
       */
      getVariable(arg0: string | zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle): zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (String arg0, boolean arg1): boolean
       */
      getVariableBoolean(arg0: string, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): number
       */
      getVariableFloat(arg0: string, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getVariableString(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): zombie.iso.Vector2
       */
      getVectorFromDirection(arg0: zombie.iso.Vector2): zombie.iso.Vector2;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.BaseVehicle
       */
      getVehicle(): zombie.vehicles.BaseVehicle;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoMovingObject>
       */
      getVeryCloseEnemyList(): java.util.ArrayList<zombie.iso.IsoMovingObject>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.BaseVisual
       */
      getVisual(): zombie.core.skinnedmodel.visual.BaseVisual;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVoicePitch(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVoiceType(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWaterAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWaterMax(): number;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): zombie.inventory.InventoryItem
       */
      getWaterSource(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (HandWeapon arg0): number
       */
      getWeaponLevel(arg0?: zombie.inventory.types.HandWeapon): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeatherHearingMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (float arg0, float arg1): number
       */
      getWeight(arg0?: number, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeightMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeldingSoundMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.ObjectRenderEffects
       */
      getWindRenderEffects(): zombie.iso.objects.ObjectRenderEffects;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldObjectIndex(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getWornItem(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.WornItems.WornItems
       */
      getWornItems(): zombie.characters.WornItems.WornItems;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWornItemsHearingModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWornItemsHearingMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWornItemsVisionModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWornItemsVisionMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.BaseGrappleable
       *  - (Empty): zombie.core.skinnedmodel.IGrappleable
       */
      getWrappedGrappleable(): zombie.core.skinnedmodel.BaseGrappleable | zombie.core.skinnedmodel.IGrappleable;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter$XP
       */
      getXp(): zombie.characters.IsoGameCharacter$XP;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getXpForLevel(arg0: number): number;
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
       *  - (Empty): number
       */
      getZombieKills(): number;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): number
       */
      getZombieRelevenceScore(arg0: zombie.characters.IsoZombie): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZoneAcceptance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasActiveModel(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasAnimalZone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasAnimatedAttachments(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasAnimationPlayer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasAttachedAnimSprites(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasAwkwardHands(): boolean;
      /**
       * Method Parameters: 
       *  - (Integer arg0): boolean
       */
      hasBloodyClothing(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (ComponentType arg0): boolean
       */
      hasComponent(arg0: zombie.entity.ComponentType): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasComponents(): boolean;
      /**
       * Method Parameters: 
       *  - (Integer arg0): boolean
       */
      hasDirtyClothing(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasEquipped(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasEquippedTag(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasExternalWaterSource(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasFootInjury(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasGeneticDisorder(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasHitReaction(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): boolean
       */
      hasItems(arg0: string, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasModData(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasOverlaySprite(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasPath(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasRenderers(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasSpriteGrid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasTimedActions(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasUdder(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasWater(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasWornTag(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveEnoughMilkToFeedFrom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveHappyAnim(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveMatingSeason(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveSheetRope(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveSpecialTooltip(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      helmetFall(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0, IsoGameCharacter arg1, boolean arg2, float arg3, boolean arg4): void
       */
      hitConsequences(arg0: zombie.inventory.types.HandWeapon, arg1: zombie.characters.IsoGameCharacter, arg2: boolean, arg3: number, arg4: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, boolean arg1): boolean
       */
      hopFence(arg0: zombie.iso.IsoDirections, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (AnimalBreed arg0): void
       */
      init(arg0: zombie.characters.animals.datas.AnimalBreed): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      initAttachedItems(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter$LightInfo
       */
      initLightInfo2(): zombie.characters.IsoGameCharacter$LightInfo;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initSpritePartsEmpty(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      initWornItems(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initializeStates(): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      invalidateRenderChunkLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      invalidateVispolyChunkLevel(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAboveTopOfStairs(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isAccessLevel(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isActuallyAttackingWithMeleeWeapon(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAddedToEngine(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAimAtFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAimControlActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAimKeyDown(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAiming(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlerted(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllChatMuted(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowConversation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowRun(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAllowSprint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      isAlphaAndTargetZero(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      isAlphaZero(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimForecasted(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimRecorderActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimalAttacking(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimalEating(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimalMoving(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimalSitting(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimating(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimatingBackwards(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimationRecorderActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimationUpdatingThisFrame(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAsleep(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isAttachedItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAttackAnimThrowTimeOut(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAttackFromBehind(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAttackStarted(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAttackWasSuperAttack(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAttacking(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAuthorizeMeleeAction(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAuthorizeShoveStomp(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAuthorizedHandToHand(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAuthorizedHandToHandAction(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAutoWalk(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBaby(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBannedAttacking(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBehaviourMoving(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isBehind(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBeingGrappled(): boolean;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0): boolean
       */
      isBeingGrappledBy(arg0: zombie.core.skinnedmodel.IGrappleable): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBeingSteppedOn(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBlink(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBlockMovement(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBuildCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBumpDone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBumpFall(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBumpStaggered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBumped(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBush(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanHearAll(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanPath(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanSeeAll(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanShout(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanUseBrushTool(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCharacter(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCheatPlayerSeeEveryone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isClimbOverWallStruggle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isClimbOverWallSuccess(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isClimbing(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isClimbingRope(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0): boolean
       */
      isClimbingThroughWindow(arg0: zombie.iso.objects.IsoWindow): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCloseKilled(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0): boolean
       */
      isClosingWindow(arg0: zombie.iso.objects.IsoWindow): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollided(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedE(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedN(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedS(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedThisFrame(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedW(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedWithDoor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedWithPushableThisFrame(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCollidedWithVehicle(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): boolean
       */
      isConnectedSpriteGridObject(arg0: zombie.iso.IsoObject): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCriticalHit(): boolean;
      /**
       * Method Parameters: 
       *  - (State arg0): boolean
       */
      isCurrentState(arg0: zombie.ai.State): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDead(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDeaf(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDeathDragDown(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDeferredMovementEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDestroyed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisguised(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoContinueGrapple(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoDeathSound(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoGrapple(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoHandToHandAttack(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoShove(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDoingActionThatCanBeCancelled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDraggingCorpse(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isDraggingCorpseStateName(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDriving(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): boolean
       */
      isEatingOther(arg0: zombie.iso.IsoMovingObject): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEditingRagdoll(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEntityValid(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isEquipped(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isEquippedClothing(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isExistInTheWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): boolean
       */
      isFacingLocation(arg0: number, arg1: number, arg2: number): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0, float arg1): boolean
       */
      isFacingObject(arg0: zombie.iso.IsoObject, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFactionPvp(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFallOnFront(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFarming(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFarmingCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFascia(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFastMoveCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFemale(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFirstUpdate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFishingCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceAim(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceOverrideAnim(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceRun(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceShove(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isForceSprint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGenericCraftingSurface(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGeriatric(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGhostMode(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGodMod(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGrapplePressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGrappleThrowOutWindow(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGrappling(): boolean;
      /**
       * Method Parameters: 
       *  - (IGrappleable arg0): boolean
       */
      isGrapplingTarget(arg0: zombie.core.skinnedmodel.IGrappleable): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGrapplingWhileAiming(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isGrave(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isHandItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHappy(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHealthCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isHeavyItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHeld(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHideWeaponModel(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHighlighted(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHitFromBehind(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHoppable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreAutoVault(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreContextKey(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreInputsForDirection(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreMovementForDirection(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStaggerBack(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoringAimingInput(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInARoom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInMatingSeason(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInTrees(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isInTrees2(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInTreesNoBush(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInvPageDirty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInvincible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInvisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInvulnerable(): boolean;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, InventoryItem arg1): boolean
       */
      isItemAllowedInContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isItemInBothHands(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isJustMoved(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isKilledByFall(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isKilledBySlicingWeapon(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isKnockedDown(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isKnownMediaLine(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       *  - (Item arg0): boolean
       */
      isKnownPoison(arg0: zombie.inventory.InventoryItem | zombie.scripting.objects.Item): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLBPressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLastCollidedN(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLastCollidedW(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isLiteratureRead(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLocal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLocalPlayer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLookingWhileInVehicle(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       *  - (int arg0, int arg1, boolean arg2): boolean
       */
      isMaskClicked(arg0: number, arg1: number, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMechanicsCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMeleePressed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMeta(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMovablesCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMoveForwardOnZone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMovedThumpable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMoving(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMuzzleFlash(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNPC(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNearSirenVehicle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNearVehicle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNetworkTeleportEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNoClip(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNoPicking(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isNorthHoppable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnBack(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnBed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnDeathDone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnFire(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnFloor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnHook(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnKillDone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnScreen(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOnlyPlayerAsleep(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      isOutlineHighlight(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      isOutlineHlAttached(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       */
      isOutlineHlBlink(arg0?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOutlineOnMouseover(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOutside(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isOverEncumbered(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPathfindRunning(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPathing(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPerformingAnAction(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPerformingAnyGrappleAnimation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPerformingAttackAnimation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPerformingGrappleAnimation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPerformingGrappleGrabAnimation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPerformingHostileAnimation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPerformingShoveAnimation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPerformingStompAnimation(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPersistentOutfitInit(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPickingUpBody(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPlayerMoving(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPlayingDeathSound(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isPrimaryEquipped(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isPrimaryHandItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isProne(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (boolean arg0): boolean
       */
      isProtectedFromToxic(arg0?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPushableForSeparate(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): boolean
       */
      isPushedByForSeparate(arg0: zombie.iso.IsoMovingObject): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPuttingDownBody(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRagdoll(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRagdollFall(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRagdollSimulationActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRangedWeaponEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReading(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isReanim(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (CraftRecipe arg0): boolean
       */
      isRecipeActuallyKnown(arg0: string | zombie.scripting.entity.components.crafting.CraftRecipe): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (CraftRecipe arg0): boolean
       *  - (Recipe arg0): boolean
       *  - (String arg0, boolean arg1): boolean
       *  - (CraftRecipe arg0, boolean arg1): boolean
       */
      isRecipeKnown(arg0: string | zombie.scripting.entity.components.crafting.CraftRecipe | zombie.scripting.objects.Recipe, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemoteAndHasObstacleOnPath(): boolean;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0, InventoryItem arg1): boolean
       */
      isRemoveItemAllowedFromContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemovingFromEngine(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isResting(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRunning(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): boolean
       */
      isSafeToClimbOver(arg0: zombie.iso.IsoDirections): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSatChair(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSaveFileIPValid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSaveFileInUse(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSceneCulled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScheduledForBucketUpdate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScheduledForEngineRemoval(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSeatedInVehicle(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isSecondaryHandItem(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSeeDesignationZone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSeeEveryone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSeeNonPvpZone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShootable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShoving(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShovingWhileAiming(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowAdminTag(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowMPInfos(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShowTag(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): boolean
       */
      isSitOnFurnitureObject(arg0: zombie.iso.IsoObject): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSitOnGround(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSittingOnFurniture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSkeleton(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSkipResolveCollision(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSneaking(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSolid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSolidForSeparate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSpeaking(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSprinting(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSpriteInvisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStairsNorth(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStairsObject(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStairsWest(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStomping(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStrafing(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSuperAttack(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTableSurface(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTableTopObject(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTaintedWater(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isTargetAlphaZero(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTargetedByZombie(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTeleporting(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTimedActionInstant(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTimedActionInstantCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTorchCone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTurning(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTurning90(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTurningAround(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTwisting(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnderVehicle(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): boolean
       */
      isUnderVehicleRadius(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnlimitedCarry(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUnlimitedEndurance(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUpright(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      isUsingPlayer(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUsingWornItems(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValidEngineEntity(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      isVariable(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVehicleCollision(): boolean;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): boolean
       */
      isVehicleCollisionActive(arg0: zombie.vehicles.BaseVehicle): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisibleToNPCs(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWaiting(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWalking(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWearingAwkwardGloves(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWearingGlasses(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWearingGloves(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWearingNightVisionGoggles(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isWearingTag(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWild(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isZombie(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (IsoMovingObject arg0): boolean
       */
      isZombieAttacking(arg0?: zombie.iso.IsoMovingObject): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isZombiesDontAttack(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isbAltCollide(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isbChangeCharacterDebounce(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isbCouldBeSeenThisFrame(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isbDoDefer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isbFalling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isbOnBed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isbSeenThisFrame(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isbUseParts(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      killed(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (String arg0, boolean arg1): boolean
       */
      learnRecipe(arg0: string, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Perk arg0): void
       */
      level0(arg0: zombie.characters.skills.PerkFactory$Perk): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (ByteBuffer arg0, int arg1): void
       *  - (ByteBuffer arg0, int arg1, boolean arg2): void
       */
      load(arg0: string | java.nio.ByteBuffer, arg1?: number, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, ByteBuffer arg1): void
       */
      loadChange(arg0: string, arg1: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      loadEntity(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      loadFromRemoteBuffer(arg0: java.nio.ByteBuffer, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      loadState(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      lureAnimal(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, InventoryItem arg1): zombie.inventory.InventoryItem
       */
      milkAnimal(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      needHutch(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      needMom(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      nullifyAiming(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onAnimationFinished(): void;
      /**
       * Method Parameters: 
       *  - (ModelManager arg0, boolean arg1): void
       */
      onCullStateChanged(arg0: zombie.core.skinnedmodel.ModelManager, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0, IsoGameCharacter arg1, boolean arg2): boolean
       */
      onDeath_ShouldDoSplatterAndSounds(arg0: zombie.inventory.types.HandWeapon, arg1: zombie.characters.IsoGameCharacter, arg2: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      onEquip(arg0?: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      onMouseLeftClick(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      onMouseRightClick(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onMouseRightReleased(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      onPlayBreedSoundEvent(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onUnEquip(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onWornItemsChanged(): void;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0): void
       */
      openWindow(arg0: zombie.iso.objects.IsoWindow): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      pathFailed(): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      pathToCharacter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      pathToLocation(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      pathToLocationF(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      pathToSound(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoFeedingTrough arg0): void
       */
      pathToTrough(arg0: zombie.iso.objects.IsoFeedingTrough): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (IsoPlayer arg0): void
       */
      petAnimal(arg0?: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      petTimerDone(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoDeadBody arg0): void
       */
      pickUpCorpse(arg0: zombie.iso.objects.IsoDeadBody): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      playBloodSplatterSound(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playBreedSound(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      playDeadSound(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): number
       */
      playDropItemSound(arg0: zombie.inventory.InventoryItem): number;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      playEmote(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      playHurtSound(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      playNextFootstepSound(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playSound(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      playSoundDebug(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playSoundLocal(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      playStressedSound(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.action.ActionStateSnapshot
       */
      playbackRecordCurrentStateSnapshot(): zombie.characters.action.ActionStateSnapshot;
      /**
       * Method Parameters: 
       *  - (ActionStateSnapshot arg0): void
       */
      playbackSetCurrentStateSnapshot(arg0: zombie.characters.action.ActionStateSnapshot): void;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      playerVoiceSound(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postUpdateEquippedTextures(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postUpdateModelTextures(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postupdate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      pressedAim(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      pressedAttack(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      pressedCancelAction(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      pressedMovement(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      preupdate(): void;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0, IsoGameCharacter arg1, float arg2, boolean arg3, float arg4): number
       */
      processHitDamage(arg0: zombie.inventory.types.HandWeapon, arg1: zombie.characters.IsoGameCharacter, arg2: number, arg3: boolean, arg4: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      randomizeAge(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): string
       */
      readInventory(arg0: java.nio.ByteBuffer): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      readyToBeMilked(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      readyToBeSheared(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      releaseAnimationPlayer(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      releaseBallisticsController(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      releaseBallisticsTarget(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      releaseRagdollController(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reloadOutfit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      remove(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllAttachedAnimals(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllContainers(): void;
      /**
       * Method Parameters: 
       *  - (IsoAnimal arg0): void
       */
      removeAttachedAnimal(arg0: zombie.characters.animals.IsoAnimal): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      removeAttachedItem(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoAnimal arg0): void
       */
      removeBaby(arg0: zombie.characters.animals.IsoAnimal): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      removeFromHands(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeFromSquare(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      removeFromWorld(arg0?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeFromWorldToMeta(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      removeKnownMediaLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ObjectRenderEffects arg0): void
       */
      removeRenderEffect(arg0: zombie.iso.objects.ObjectRenderEffects): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeSaveFile(): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      removeSheetRope(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       *  - (InventoryItem arg0, boolean arg1): void
       */
      removeWornItem(arg0: zombie.inventory.InventoryItem, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3, boolean arg4, boolean arg5, Shader arg6): void
       */
      render(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo, arg4: boolean, arg5: boolean, arg6: zombie.core.opengl.Shader): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3): void
       */
      renderAnimatedAttachments(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, float arg1, float arg2, float arg3, ColorInfo arg4, boolean arg5, boolean arg6, Shader arg7, Consumer arg8): void
       */
      renderAttachedAndOverlaySprites(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: zombie.core.textures.ColorInfo, arg5: boolean, arg6: boolean, arg7: zombie.core.opengl.Shader, arg8: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3, boolean arg4, boolean arg5, Shader arg6, Consumer arg7, Consumer arg8): void
       */
      renderFloorTile(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo, arg4: boolean, arg5: boolean, arg6: zombie.core.opengl.Shader, arg7: java.util._function_.Consumer<zombie.core.textures.TextureDraw>, arg8: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, boolean arg3): void
       */
      renderFxMask(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, ColorInfo arg3): void
       */
      renderObjectPicker(arg0: number, arg1: number, arg2: number, arg3: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderServerGUI(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      renderShadow(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, float arg1, float arg2, float arg3, ColorInfo arg4, boolean arg5, boolean arg6, Shader arg7, Consumer arg8): void
       */
      renderWallTile(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: zombie.core.textures.ColorInfo, arg5: boolean, arg6: boolean, arg7: zombie.core.opengl.Shader, arg8: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, boolean arg1, boolean arg2, boolean arg3, int arg4, float arg5, float arg6, float arg7, ColorInfo arg8, Shader arg9, Consumer arg10): void
       */
      renderWallTileDepth(arg0: zombie.iso.IsoDirections, arg1: boolean, arg2: boolean, arg3: boolean, arg4: number, arg5: number, arg6: number, arg7: number, arg8: zombie.core.textures.ColorInfo, arg9: zombie.core.opengl.Shader, arg10: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0, float arg1, float arg2, float arg3, ColorInfo arg4, Shader arg5, Consumer arg6): void
       */
      renderWallTileOnly(arg0: zombie.iso.IsoDirections, arg1: number, arg2: number, arg3: number, arg4: zombie.core.textures.ColorInfo, arg5: zombie.core.opengl.Shader, arg6: java.util._function_.Consumer<zombie.core.textures.TextureDraw>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderlast(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderlastComponents(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       */
      replaceItem(arg0: zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      reportEvent(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      requiresEntitySave(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetAimingDelay(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetBeardGrowingTime(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetBodyDamageRemote(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetEquippedHandsModels(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetHairGrowingTime(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetModel(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetModelNextFrame(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetSelectedZonesForHighlight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetSleepingPillsTaken(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      respondToSound(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reuseGridSquare(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (String arg0): void
       *  - (ByteBuffer arg0): void
       *  - (ByteBuffer arg0, boolean arg1): void
       *  - (ByteBuffer arg0, boolean arg1, boolean arg2): void
       */
      save(arg0?: string | java.nio.ByteBuffer, arg1?: boolean, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, KahluaTable arg1, ByteBuffer arg2): void
       */
      saveChange(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable, arg2: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      saveEntity(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      saveState(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, Object... arg1): void
       *  - (String arg0, KahluaTable arg1): void
       */
      sendObjectChange(arg0: string, arg1?: any | se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      sendSyncEntity(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      separate(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAge(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAgeDebug(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAimAtFloor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAimingDelay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllChatMuted(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowConversation(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowRun(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAllowSprint(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (int arg0, float arg1): void
       */
      setAlpha(arg0: number, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (int arg0, float arg1): void
       */
      setAlphaAndTarget(arg0: number, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAlphaToTarget(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      setAlreadyReadPages(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setAngleFromAim(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAnimForecasted(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, boolean arg1): void
       */
      setAnimRecorderActive(arg0: boolean, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (AnimalZone arg0): void
       */
      setAnimalZone(arg0: zombie.characters.animals.AnimalZone): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnimated(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnimating(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAnimatingBackwards(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAsleep(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAsleepTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setAttachedAnimSprite(arg0: java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>): void;
      /**
       * Method Parameters: 
       *  - (String arg0, InventoryItem arg1): void
       */
      setAttachedItem(arg0: string, arg1: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (AttachedItems arg0): void
       */
      setAttachedItems(arg0: zombie.characters.AttachedItems.AttachedItems): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      setAttackAnimThrowTimer(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAttackFromBehind(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAttackStarted(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setAttackTargetSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAttackType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAttackVariationX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAttackVariationY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAttackWasSuperAttack(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setAttackedBy(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAuthorizeMeleeAction(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAuthorizeShoveStomp(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAuthorizedHandToHand(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAuthorizedHandToHandAction(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAutoWalk(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setAutoWalkDirection(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAvoidDamage(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBannedAttacking(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setBed(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBedType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBeenMovingFor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBeenSprintingFor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBetaDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBetaEffect(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBlink(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBlockMovement(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBloodImpactX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBloodImpactY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBloodImpactZ(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoSprite arg0): void
       */
      setBloodSplat(arg0: zombie.iso.sprite.IsoSprite): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBuildCheat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBumpDone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBumpFall(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBumpFallType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBumpStaggered(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBumpType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setBumpedChr(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanHearAll(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanSeeAll(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanShout(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanUseBrushTool(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setChildSprites(arg0: java.util.ArrayList<zombie.iso.sprite.IsoSpriteInstance>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setClearSpottedTimer(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setClickSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setClimbOverWallStruggle(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setClimbOverWallSuccess(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setClimbRopeTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCloseKilled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setClothingItem_Back(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setClothingItem_Feet(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setClothingItem_Hands(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setClothingItem_Head(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setClothingItem_Legs(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setClothingItem_Torso(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCollideType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedE(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedN(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setCollidedObject(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedS(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedThisFrame(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedW(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollidedWithDoor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCombatSpeed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      setContainer(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCorpseSicknessRate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCriticalHit(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setCurrent(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setCustomColor(arg0: zombie.core.textures.ColorInfo | number, arg1?: number, arg2?: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCustomName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (short arg0): void
       */
      setDamage(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDangerLevels(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (AnimalData arg0): void
       */
      setData(arg0: zombie.characters.animals.datas.AnimalData): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDeathDragDown(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, float arg1): void
       */
      setDebugAcceptance(arg0: zombie.characters.IsoPlayer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (AnimatorDebugMonitor arg0): void
       */
      setDebugMonitor(arg0: zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDebugStress(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (State arg0): void
       */
      setDefaultState(arg0?: zombie.ai.State): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDeferredMovementEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDelayToSleep(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDepressDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDepressEffect(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): void
       */
      setDescriptor(arg0: zombie.characters.SurvivorDesc): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDestroyed(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDialogMood(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setDieCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       *  - (IsoDirections arg0): void
       */
      setDir(arg0: number | zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDirectionAngle(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDisplayName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoContinueGrapple(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoDeathSound(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoGrapple(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDoGrappleLetGo(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoRender(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDoShove(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoSurvivor arg0): void
       */
      setDragCharacter(arg0: zombie.characters.IsoSurvivor): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): void
       */
      setDragObject(arg0: zombie.iso.IsoMovingObject): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setEatingZombies(arg0: java.util.ArrayList<zombie.characters.IsoZombie>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEditingRagdoll(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setExplored(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (byte arg0): void
       */
      setExtraInfoFlags(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Boolean arg0): void
       */
      setExtraValues(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFactionPvp(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFallOnFront(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFallTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFarmingCheat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFastMoveCheat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFeelersize(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFemale(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFireKillRate(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setFireMode(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setFireSpreadProbability(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFirstUpdate(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFishingCheat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setFishingStage(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setFitnessSpeed(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setFollowID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setFollowingTarget(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceAim(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceOverrideAnim(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceRun(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceShove(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setForceSprint(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setForceWakeUpTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setForceX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setForceY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setForname(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       *  - (float arg0, float arg1): void
       */
      setForwardDirection(arg0: zombie.iso.Vector2 | number, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setGhostMode(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setGodMod(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): void
       *  - (Vector3 arg0): void
       *  - (float arg0, float arg1, float arg2): void
       */
      setGrappleDeferredOffset(arg0: zombie.core.math.Vector3 | zombie.iso.Vector3 | number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setGrapplePosOffsetForward(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setGrappleResult(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setGrappleRotOffsetYaw(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setGrappleThrowOutWindow(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (GrappleOffsetBehaviour arg0): void
       */
      setGrappleoffsetBehaviour(arg0: zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, float arg1): void
       *  - (String arg0, int arg1, int arg2, int arg3, float arg4): void
       */
      setHaloNote(arg0: string, arg1?: number, arg2?: number, arg3?: number, arg4?: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHasObstacleOnPath(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHealth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHealthCheat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHeartDelay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHeartDelayMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHideWeaponModel(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setHighlightColor(arg0: zombie.core.textures.ColorInfo | number, arg1?: number, arg2?: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (boolean arg0, boolean arg1): void
       */
      setHighlighted(arg0: boolean, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setHitDir(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHitForce(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHitFromAngle(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHitFromBehind(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setHitReaction(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoButcherHook arg0): void
       */
      setHook(arg0: zombie.iso.IsoButcherHook): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      setHoursSurvived(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setHurtSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreAimingInput(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreAutoVault(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreContextKey(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreInputsForDirection(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreMovement(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIgnoreStaggerBack(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setImpulsex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setImpulsey(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setInitiateAttack(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setInvPageDirty(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      setInventory(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setInvincible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setInvisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setInvulnerable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsAiming(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsAlerted(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsAnimal(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsFarming(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsInvincible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsLuringAnimals(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsNPC(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsRagdoll(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsResting(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setItemID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setJoypadIgnoreAimUntilCentered(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setJustMoved(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setKeyId(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setKilledByFall(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setKnockedDown(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setLast(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setLastAngle(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLastAttackWasHandToHand(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      setLastBump(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ChatMessage arg0): void
       */
      setLastChatMessage(arg0: zombie.chat.ChatMessage): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLastCollideTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLastCollidedN(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setLastCollidedW(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLastFallSpeed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      setLastHeardSound(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setLastHitCharacter(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLastHitCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLastHourSleeped(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLastLocalEnemies(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setLastSpokenLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Stack arg0): void
       */
      setLastSpotted(arg0: java.util.Stack<zombie.iso.IsoMovingObject>): void;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): void
       */
      setLastTargettedBy(arg0: zombie.characters.IsoZombie): void;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      setLastX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      setLastY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      setLastZ(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLastZombieKills(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLeaveBodyTimedown(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoSprite arg0): void
       */
      setLegsSprite(arg0: zombie.iso.sprite.IsoSprite): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLevelUpMultiplier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoLightSource arg0): void
       */
      setLightSource(arg0: zombie.iso.IsoLightSource): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLimpulsex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLimpulsey(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLlx(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLly(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLlz(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setMaxSizeDebug(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMaxTwist(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxWeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxWeightBase(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMaxWeightDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMechanicsCheat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMeleeDelay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (Material arg0): void
       */
      setMeleeHitSurface(arg0: string | zombie.audio.parameters.ParameterMeleeHitSurface$Material): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (Metabolics arg0): void
       */
      setMetabolicTarget(arg0: number | zombie.characters.BodyDamage.Metabolics): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setModData(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMomentumScalar(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMoodleCantSprint(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoAnimal arg0): void
       */
      setMother(arg0: zombie.characters.animals.IsoAnimal): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMovablesCheat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMoveDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMoveForwardOnZone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setMoveForwardVec(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMoveSpeed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMovedThumpable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setMovementLastFrame(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setMoving(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setMovingSquareNow(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): void
       */
      setMusicIntensityEventModData(arg0: string, arg1: any): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      setMuzzleFlashDuration(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNPC(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNetworkTeleportEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setNextWander(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      setNextX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      setNextY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNoClip(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNoDamage(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setNoPicking(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setNumSurvivorsInVicinity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOffSetXUI(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOffSetYUI(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOffsetX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOffsetY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOnBed(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOnDeathDone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOnFire(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOnFloor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOnHook(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOnKillDone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoSpriteInstance arg0): void
       */
      setOnOverlay(arg0: zombie.iso.sprite.IsoSpriteInstance): void;
      /**
       * Method Parameters: 
       *  - (short arg0): void
       */
      setOnlineID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (int arg0, boolean arg1): void
       */
      setOutlineHighlight(arg0: boolean | number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       *  - (int arg0, ColorInfo arg1): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       *  - (int arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      setOutlineHighlightCol(arg0: zombie.core.textures.ColorInfo | number, arg1?: zombie.core.textures.ColorInfo | number, arg2?: number, arg3?: number, arg4?: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (int arg0, boolean arg1): void
       */
      setOutlineHlAttached(arg0: boolean | number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (int arg0, boolean arg1): void
       */
      setOutlineHlBlink(arg0: boolean | number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setOutlineOnMouseover(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setOutlineThickness(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, boolean arg1): void
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4): void
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4, boolean arg5): boolean
       */
      setOverlaySprite(arg0: string, arg1?: boolean | number, arg2?: number, arg3?: number, arg4?: number, arg5?: boolean): void | boolean;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setOverlaySpriteColor(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPainDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPainEffect(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Path arg0): void
       */
      setPath2(arg0: zombie.pathfind.Path): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPathFindIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPathIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPathSpeed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPathfindRunning(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPathing(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPatience(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPatienceMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPatienceMin(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPerformingAnAction(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPerformingAttackAnimation(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPerformingGrappleGrabAnimation(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPerformingShoveAnimation(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPerformingStompAnimation(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Perk arg0, int arg1): void
       */
      setPerkLevelDebug(arg0: zombie.characters.skills.PerkFactory$Perk, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       *  - (int arg0, boolean arg1): void
       */
      setPersistentOutfitID(arg0: number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPing(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setPipedFuelAmount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setPlayerMoveDir(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, String arg1): string
       */
      setPlayerStats(arg0: java.nio.ByteBuffer, arg1: string): string;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPlayingDeathSound(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       *  - (Vector3 arg0): void
       *  - (float arg0, float arg1): void
       *  - (float arg0, float arg1, float arg2): void
       */
      setPosition(arg0: zombie.iso.Vector2 | zombie.iso.Vector3 | number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setPrimaryHandItem(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRagdollFall(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRangedWeaponEmpty(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setReading(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setReanim(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setReanimAnimDelay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setReanimAnimFrame(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setReanimateTimer(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRecoilDelay(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRecoilVarX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRecoilVarY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setReduceInfectionPower(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRemoteID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (RenderEffectType arg0): void
       *  - (RenderEffectType arg0, boolean arg1): void
       */
      setRenderEffect(arg0: zombie.iso.objects.RenderEffectType, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setRenderYOffset(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setRerouteCollide(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setRerouteMask(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (Role arg0): void
       */
      setRole(arg0: string | zombie.characters.Role): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRunning(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Safety arg0): void
       */
      setSafety(arg0: zombie.characters.Safety): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSatChair(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSayLine(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSceneCulled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setScriptModule(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      setScriptNextX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      setScriptNextY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScriptnx(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScriptny(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setSecondaryHandItem(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSeeDesignationZone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSeeNonPvpZone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Double arg0): void
       */
      setSelectedZoneForHighlight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSharedGrappleAnimNode(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSharedGrappleAnimTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSharedGrappleType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShootable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShouldBeSkeleton(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShouldFollowWall(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowAdminTag(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowMPInfos(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setShowTag(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       */
      setSitOnFurnitureDirection(arg0: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setSitOnFurnitureObject(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSitOnGround(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSittingOnFurniture(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSleepingPillsTaken(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSleepingTabletDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSleepingTabletEffect(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSlowFactor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSlowTimer(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSneaking(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSolid(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Color arg0): void
       */
      setSpeakColour(arg0: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       */
      setSpeakColourInfo(arg0: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSpeakTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSpeaking(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSpecialTooltip(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSpeedMod(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSprinting(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (IsoSprite arg0): void
       */
      setSprite(arg0: string | zombie.iso.sprite.IsoSprite): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSpriteFromName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSpriteModelName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setSquare(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStaggerTimeMod(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStateEventDelayTimer(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setStateMachineLocked(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      setSteamID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setSuperAttack(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSurname(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSurvivorKills(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (ColorInfo arg0): void
       */
      setTagColor(arg0: zombie.core.textures.ColorInfo): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTagPrefix(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTaintedWater(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (int arg0, float arg1): void
       */
      setTargetAlpha(arg0: number, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       */
      setTargetAndCurrentDirection(arg0: zombie.iso.Vector2): void;
      /**
       * Method Parameters: 
       *  - (Vector3 arg0): void
       *  - (Vector3 arg0): void
       *  - (float arg0, float arg1, float arg2): void
       */
      setTargetGrapplePos(arg0: zombie.core.math.Vector3 | zombie.iso.Vector3 | number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (Vector2 arg0): void
       *  - (float arg0, float arg1): void
       */
      setTargetGrappleRotation(arg0: zombie.iso.Vector2 | number, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (NetworkTeleport arg0): void
       */
      setTeleport(arg0: zombie.characters.NetworkTeleport): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTemperature(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ModelInstanceTextureCreator arg0): void
       */
      setTextureCreator(arg0: zombie.core.skinnedmodel.model.ModelInstanceTextureCreator): void;
      /**
       * Method Parameters: 
       *  - (Thumpable arg0): void
       */
      setThumpTarget(arg0: zombie.iso.objects.interfaces.Thumpable): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTicksSinceSeenZombie(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTimeOfSleep(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTimeSinceLastSmoke(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTimeSinceLastStab(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTimeSinceZombieAttack(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTimeThumping(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTimedActionInstantCheat(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTurnDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoObjectType arg0): void
       */
      setType(arg0: zombie.iso.SpriteDetails.IsoObjectType): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnlimitedCarry(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUnlimitedEndurance(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (HandWeapon arg0): void
       */
      setUseHandWeapon(arg0: zombie.inventory.types.HandWeapon): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUsePhysicHitReaction(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUsername(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setUsesExternalWaterSource(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      setUsingPlayer(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (IAnimationVariableSlot arg0): void
       *  - (String arg0, boolean arg1): void
       *  - (String arg0, float arg1): void
       *  - (String arg0, String arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, CallbackGetStrongTyped arg1): void
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, CallbackGetStrongTyped arg1, CallbackSetStrongTyped arg2): void
       *  - (String arg0, boolean arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, float arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, int arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       *  - (String arg0, String arg1, CallbackGetStrongTyped arg2, CallbackSetStrongTyped arg3): void
       */
      setVariable(arg0: zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot | string, arg1?: boolean | number | string | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped, arg2?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackGetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped, arg3?: zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped | zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString$CallbackSetStrongTyped): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      setVehicle(arg0: zombie.vehicles.BaseVehicle): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      setVehicle4TestCollision(arg0: zombie.vehicles.BaseVehicle): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVehicleCollision(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): void
       */
      setVehicleHitLocation(arg0: zombie.vehicles.BaseVehicle): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisibleToNPCs(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setVoicePitch(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setVoiceType(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWaiting(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setWaterAmount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWearingNightVisionGoggles(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWidth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWild(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, InventoryItem arg1): void
       *  - (String arg0, InventoryItem arg1, boolean arg2): void
       */
      setWornItem(arg0: string, arg1: zombie.inventory.InventoryItem, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (WornItems arg0): void
       */
      setWornItems(arg0: zombie.characters.WornItems.WornItems): void;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      setX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (XP arg0): void
       */
      setXp(arg0: zombie.characters.IsoGameCharacter$XP): void;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      setY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      setZ(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setZombieKills(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setZombiesDontAttack(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbAltCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbChangeCharacterDebounce(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbClimbing(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbCouldBeSeenThisFrame(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbDoDefer(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbFalling(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbOnBed(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbSeenThisFrame(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setbUseParts(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, InventoryItem arg1): boolean
       */
      shearAnimal(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldAnimalStressAboveGround(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldBeFalling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldBeSkeleton(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldBeTurning(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldBeTurning90(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldBeTurningAround(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldBecomeCorpse(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldBecomeZombieAfterDeath(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldBreakObstaclesDuringPathfinding(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldCreateZone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldDoInventory(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldFollowWall(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      shouldIgnoreCollisionWithSquare(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldShowOnOverlay(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldStartFollowWall(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldWaitToStartTimedAction(): boolean;
      /**
       * Method Parameters: 
       *  - (VehiclePart arg0): void
       */
      smashCarWindow(arg0: zombie.vehicles.VehiclePart): void;
      /**
       * Method Parameters: 
       *  - (IsoWindow arg0): void
       */
      smashWindow(arg0: zombie.iso.objects.IsoWindow): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      softReset(): void;
      /**
       * Method Parameters: 
       *  - (BodyPartType arg0): void
       */
      spikePart(arg0: zombie.characters.BodyDamage.BodyPartType): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      spikePartIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      spinToZeroAllAnimNodes(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): void
       */
      splatBlood(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      splatBloodFloor(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      splatBloodFloorBig(): void;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0, boolean arg1): void
       *  - (IsoMovingObject arg0, boolean arg1, float arg2): void
       */
      spotted(arg0: zombie.iso.IsoMovingObject, arg1: boolean, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0, GameSoundClip arg1, BitSet arg2): void
       */
      startEvent(arg0: number, arg1: zombie.audio.GameSoundClip, arg2: java.util.BitSet): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      startMuzzleFlash(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource
       */
      startPlaybackGameVariables(): zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      startReceivingBodyDamageUpdates(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stopAllMovementNow(): void;
      /**
       * Method Parameters: 
       *  - (long arg0, GameSoundClip arg1, BitSet arg2): void
       */
      stopEvent(arg0: number, arg1: zombie.audio.GameSoundClip, arg2: java.util.BitSet): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      stopLuringAnimals(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      stopOrTriggerSound(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      stopPlayerVoiceSound(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      stopReceivingBodyDamageUpdates(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      sync(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, byte arg1, UdpConnection arg2, ByteBuffer arg3): void
       */
      syncIsoObject(arg0: boolean, arg1: number, arg2: zombie.core.raknet.UdpConnection, arg3: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      syncIsoObjectReceive(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      syncIsoObjectSend(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      test(): void;
      /**
       * Method Parameters: 
       *  - (BaseVehicle arg0): boolean
       */
      testCollideWithVehicles(arg0: zombie.vehicles.BaseVehicle): boolean;
      /**
       * Method Parameters: 
       *  - (IsoZombie arg0): boolean
       */
      testDefense(arg0: zombie.characters.IsoZombie): boolean;
      /**
       * Method Parameters: 
       *  - (IsoMovingObject arg0): string
       */
      testDotSide(arg0: zombie.iso.IsoMovingObject): string;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      throwGrappledTargetOutWindow(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      toggleForceAim(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      toggleForceRun(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      toggleForceSprint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      tooDarkToRead(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitCompleteItemToClients(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitCompleteItemToServer(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitCustomColorToClients(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitModData(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitUpdatedSprite(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (UdpConnection arg0): void
       */
      transmitUpdatedSpriteToClients(arg0?: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      transmitUpdatedSpriteToServer(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, Object arg1): void
       *  - (String arg0, Object arg1, Object arg2): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3): void
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): void
       */
      triggerContextualAction(arg0: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      triggerCough(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      triggerMusicIntensityEvent(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.ai.State
       */
      tryGetAIState(arg0: string): zombie.ai.State;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0, InventoryItem arg1): void
       */
      tryLure(arg0: zombie.characters.IsoPlayer, arg1: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): boolean
       */
      tryThump(arg0: zombie.iso.IsoGridSquare): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      unloaded(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      unsetOutlineHighlight(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateAimingDelay(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateAnimation(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateBallistics(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateDiscomfortModifiers(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateDisguisedState(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateEmitter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateEnduranceWhileSitting(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateEquippedItemSounds(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateEquippedRadioFreq(): void;
      /**
       * Method Parameters: 
       *  - (long arg0, GameSoundClip arg1): void
       */
      updateEvent(arg0: number, arg1: zombie.audio.GameSoundClip): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateHandEquips(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateLOS(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateLastTimeSinceUpdate(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateLightInfo(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateLoopingSounds(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateMovementRates(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateRecoilVar(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateRunLoopingSound(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateSpeedModifiers(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      updateStatsAway(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateStress(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateTextObjects(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateUsername(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateVisionEffectTargets(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateVisionEffects(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateVocalProperties(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateWalkLoopingSound(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateWornItemsHearingModifier(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateWornItemsVisionModifier(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      useBallistics(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      useItemOn(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      usePhysicHitReaction(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      useRagdoll(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      useRagdollVehicleCollision(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      useWater(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      wasLastAttackHandToHand(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      wasLocal(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      writeInventory(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBufferWriter arg0): void
       */
      writeToRemoteBuffer(arg0: zombie.core.network.ByteBufferWriter): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      zeroForwardDirectionX(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      zeroForwardDirectionY(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      zombiesSwitchOwnershipEachUpdate(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoObject
       *  - (int arg0, int arg1, int arg2): zombie.iso.IsoObject
       */
      static FindExternalWaterSource(arg0: zombie.iso.IsoGridSquare | number, arg1?: number, arg2?: number): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.IsoObject
       */
      static FindWaterSourceOnSquare(arg0: zombie.iso.IsoGridSquare): zombie.iso.IsoObject;
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
       *  - (Empty): void
       */
      static UpdateRemovedEmitters(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AnimalPart arg0, IsoPlayer arg1, IsoDeadBody arg2): void
       */
      static addAnimalPart(arg0: zombie.characters.animals.AnimalPart, arg1: zombie.characters.IsoPlayer, arg2: zombie.iso.objects.IsoDeadBody): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static allPlayersAsleep(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static allPlayersDead(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (AnimationPlayer arg0, float arg1, boolean arg2, ShadowParams arg3): zombie.iso.objects.ShadowParams
       */
      static calculateShadowParams(arg0: zombie.core.skinnedmodel.animation.AnimationPlayer, arg1: number, arg2: boolean, arg3: zombie.iso.objects.ShadowParams): zombie.iso.objects.ShadowParams;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoDeadBody arg0): zombie.characters.animals.IsoAnimal
       */
      static createAnimalFromCorpse(arg0: zombie.iso.objects.IsoDeadBody): zombie.characters.animals.IsoAnimal;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoCell arg0, int arg1): java.lang.Class
       */
      static factoryClassFromFileInput(arg0: zombie.iso.IsoCell, arg1: number): java.lang.Class<any>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoCell arg0, byte arg1): zombie.iso.IsoObject
       *  - (IsoCell arg0, ByteBuffer arg1): zombie.iso.IsoObject
       */
      static factoryFromFileInput(arg0: zombie.iso.IsoCell, arg1: number | java.nio.ByteBuffer): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoCell arg0, int arg1): zombie.iso.IsoObject
       */
      static factoryFromFileInput_OLD(arg0: zombie.iso.IsoCell, arg1: number): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static factoryGetClassID(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getAllFileNames(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoPlayer>
       */
      static getAllSavedPlayers(): java.util.ArrayList<zombie.characters.IsoPlayer>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static getCoopPVP(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDefaultEntityDisplayName(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject$IsoObjectFactory
       */
      static getFactoryVehicle(): zombie.iso.IsoObject$IsoObjectFactory;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getFollowDeadCount(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getIDCount(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      static getInf(): zombie.core.textures.ColorInfo;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      static getInstance(): zombie.characters.IsoPlayer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      static getLastRendered(): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      static getLastRenderedRendered(): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number[]
       */
      static getLevelUpLevels(): number[];
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (short arg0): zombie.characters.IsoPlayer
       */
      static getLocalPlayerByOnlineID(arg0: number): zombie.characters.IsoPlayer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       *  - (IsoGridSquare arg0, String arg1, String arg2, boolean arg3): zombie.iso.IsoObject
       */
      static getNew(arg0?: zombie.iso.IsoGridSquare, arg1?: string, arg2?: string, arg3?: boolean): zombie.iso.IsoObject;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getPlayerIndex(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.IsoPlayer>
       */
      static getPlayers(): java.util.ArrayList<zombie.characters.IsoPlayer>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.Stack<string>
       */
      static getStaticTraits(): java.util.Stack<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<number, zombie.characters.SurvivorDesc>
       */
      static getSurvivorMap(): java.util.HashMap<number, zombie.characters.SurvivorDesc>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      static getTempo(): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.Vector2
       */
      static getTempo2(): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getUniqueFileName(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector2 arg0, IsoDirections arg1): zombie.iso.Vector2
       */
      static getVectorFromDirection(arg0: zombie.iso.Vector2, arg1: zombie.iso.IsoDirections): zombie.iso.Vector2;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static hasInstance(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Runnable arg0): void
       */
      static invokeOnPlayerInstance(arg0: java.lang.Runnable): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isExtraValues(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (IsoGameCharacter arg0): boolean
       */
      static isLocalPlayer(arg0: any): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static isServerPlayerIDValid(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Food arg0, float arg1, float arg2): void
       */
      static modifyMeat(arg0: zombie.inventory.types.Food, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setCoopPVP(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static setDefaultCondition(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static setFollowDeadCount(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static setIDCount(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      static setInstance(arg0: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      static setLastRendered(arg0: zombie.iso.IsoObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      static setLastRenderedRendered(arg0: zombie.iso.IsoObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, IsoPlayer arg1): void
       */
      static setLocalPlayer(arg0: number, arg1: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static toggleExtraValues(): void;
    }
    /**
     * @customConstructor VirtualAnimal.new
     * @
     * [CLASS] zombie.characters.animals.VirtualAnimal
     */
    export class VirtualAnimal {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.characters.animals.IsoAnimal
       */
      findAnimalById(arg0: number): zombie.characters.animals.IsoAnimal;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceEat(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceRest(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceStopEat(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      forceWakeUp(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEndEatPeriod(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEndSleepPeriod(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNextEatPeriod(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getNextSleepPeriod(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.VirtualAnimalState
       */
      getState(): zombie.characters.animals.VirtualAnimalState;
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
      isEating(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemoved(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSleeping(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTimeToEat(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTimeToSleep(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRemoved(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (VirtualAnimalState arg0): void
       */
      setState(arg0: zombie.characters.animals.VirtualAnimalState): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setZ(arg0: number): void;
    }
    /**
     * @customConstructor VirtualAnimalState.new
     * @
     * [ABSTRACT CLASS] zombie.characters.animals.VirtualAnimalState
     */
    export class VirtualAnimalState {
      /**
       * Constructors: 
       *  - (VirtualAnimal arg0)
       */
      protected constructor(arg0: zombie.characters.animals.VirtualAnimal);
      /**
       * Method Parameters: 
       *  - (AnimalTracksType arg0): void
       */
      addAnimalTracks(arg0: zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor StateEat.new
     * @
     * [CLASS] zombie.characters.animals.VirtualAnimalState$StateEat extends zombie.characters.animals.VirtualAnimalState
     */
    export class VirtualAnimalState$StateEat {
      /**
       * Constructors: 
       *  - (VirtualAnimal arg0)
       */
      constructor(arg0: zombie.characters.animals.VirtualAnimal);
      /**
       * Method Parameters: 
       *  - (AnimalTracksType arg0): void
       */
      addAnimalTracks(arg0: zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor StateFollow.new
     * @
     * [CLASS] zombie.characters.animals.VirtualAnimalState$StateFollow extends zombie.characters.animals.VirtualAnimalState
     */
    export class VirtualAnimalState$StateFollow {
      /**
       * Constructors: 
       *  - (VirtualAnimal arg0)
       */
      constructor(arg0: zombie.characters.animals.VirtualAnimal);
      /**
       * Method Parameters: 
       *  - (AnimalTracksType arg0): void
       */
      addAnimalTracks(arg0: zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (AnimalZone arg0, boolean arg1, ArrayList arg2): zombie.characters.animals.AnimalZoneJunction
       */
      visitJunction(arg0: zombie.characters.animals.AnimalZone, arg1: boolean, arg2: java.util.ArrayList<zombie.characters.animals.AnimalZoneJunction>): zombie.characters.animals.AnimalZoneJunction;
    }
    /**
     * @customConstructor StateMoveFromEat.new
     * @
     * [CLASS] zombie.characters.animals.VirtualAnimalState$StateMoveFromEat extends zombie.characters.animals.VirtualAnimalState
     */
    export class VirtualAnimalState$StateMoveFromEat {
      /**
       * Constructors: 
       *  - (VirtualAnimal arg0)
       */
      constructor(arg0: zombie.characters.animals.VirtualAnimal);
      /**
       * Method Parameters: 
       *  - (AnimalTracksType arg0): void
       */
      addAnimalTracks(arg0: zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (AnimalZone arg0, boolean arg1, ArrayList arg2): zombie.characters.animals.AnimalZoneJunction
       */
      visitJunction(arg0: zombie.characters.animals.AnimalZone, arg1: boolean, arg2: java.util.ArrayList<zombie.characters.animals.AnimalZoneJunction>): zombie.characters.animals.AnimalZoneJunction;
    }
    /**
     * @customConstructor StateMoveFromSleep.new
     * @
     * [CLASS] zombie.characters.animals.VirtualAnimalState$StateMoveFromSleep extends zombie.characters.animals.VirtualAnimalState
     */
    export class VirtualAnimalState$StateMoveFromSleep {
      /**
       * Constructors: 
       *  - (VirtualAnimal arg0)
       */
      constructor(arg0: zombie.characters.animals.VirtualAnimal);
      /**
       * Method Parameters: 
       *  - (AnimalTracksType arg0): void
       */
      addAnimalTracks(arg0: zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (AnimalZone arg0, boolean arg1, ArrayList arg2): zombie.characters.animals.AnimalZoneJunction
       */
      visitJunction(arg0: zombie.characters.animals.AnimalZone, arg1: boolean, arg2: java.util.ArrayList<zombie.characters.animals.AnimalZoneJunction>): zombie.characters.animals.AnimalZoneJunction;
    }
    /**
     * @customConstructor StateMoveToEat.new
     * @
     * [CLASS] zombie.characters.animals.VirtualAnimalState$StateMoveToEat extends zombie.characters.animals.VirtualAnimalState
     */
    export class VirtualAnimalState$StateMoveToEat {
      /**
       * Constructors: 
       *  - (VirtualAnimal arg0)
       */
      constructor(arg0: zombie.characters.animals.VirtualAnimal);
      /**
       * Method Parameters: 
       *  - (AnimalTracksType arg0): void
       */
      addAnimalTracks(arg0: zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reachedEnd(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor StateMoveToSleep.new
     * @
     * [CLASS] zombie.characters.animals.VirtualAnimalState$StateMoveToSleep extends zombie.characters.animals.VirtualAnimalState
     */
    export class VirtualAnimalState$StateMoveToSleep {
      /**
       * Constructors: 
       *  - (VirtualAnimal arg0)
       */
      constructor(arg0: zombie.characters.animals.VirtualAnimal);
      /**
       * Method Parameters: 
       *  - (AnimalTracksType arg0): void
       */
      addAnimalTracks(arg0: zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reachedEnd(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor StateSleep.new
     * @
     * [CLASS] zombie.characters.animals.VirtualAnimalState$StateSleep extends zombie.characters.animals.VirtualAnimalState
     */
    export class VirtualAnimalState$StateSleep {
      /**
       * Constructors: 
       *  - (VirtualAnimal arg0)
       */
      constructor(arg0: zombie.characters.animals.VirtualAnimal);
      /**
       * Method Parameters: 
       *  - (AnimalTracksType arg0): void
       */
      addAnimalTracks(arg0: zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
  }
}
