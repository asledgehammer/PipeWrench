/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.zones {
    /**
     * @customConstructor Trigger.new
     * @
     * [CLASS] zombie.iso.zones.Trigger
     */
    export class Trigger {
      /**
       * Constructors: 
       *  - (BuildingDef arg0, int arg1, int arg2, String arg3)
       */
      constructor(arg0: zombie.iso.BuildingDef, arg1: number, arg2: number, arg3: string);
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
    }
    /**
     * @customConstructor VehicleZone.new
     * @
     * [CLASS] zombie.iso.zones.VehicleZone extends zombie.iso.zones.Zone
     */
    export class VehicleZone {
      /** short */
      static readonly VZF_FaceDirection: number;

      /**
       * Constructors: 
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6, KahluaTable arg7)
       */
      constructor(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: se.krka.kahlua.vm.KahluaTable);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
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
       *  - (int arg0, int arg1, int arg2, int arg3, double[] arg4): number
       */
      getClippedSegmentOfPolyline(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number;
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
      isFaceDirection(): boolean;
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
       *  - (ByteBuffer arg0, int arg1): zombie.iso.zones.Zone
       *  - (ByteBuffer arg0, int arg1, Map arg2, SharedStrings arg3): zombie.iso.zones.Zone
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2?: java.util.Map<number, string>, arg3?: zombie.util.SharedStrings): zombie.iso.zones.Zone;
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
     * @customConstructor Zone.new
     * @
     * [CLASS] zombie.iso.zones.Zone
     */
    export class Zone {
      /** zombie.vehicles.Clipper */
      static s_clipper?: zombie.vehicles.Clipper;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6)
       *  - (String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6, ZoneGeometryType arg7, TIntArrayList arg8, int arg9)
       */
      constructor(arg0?: string, arg1?: string, arg2?: number, arg3?: number, arg4?: number, arg5?: number, arg6?: number, arg7?: zombie.iso.zones.ZoneGeometryType, arg8?: gnu.trove.list.array.TIntArrayList, arg9?: number);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Dispose(): void;
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
       *  - (int arg0, int arg1, int arg2, int arg3, double[] arg4): number
       */
      getClippedSegmentOfPolyline(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number;
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
       *  - (ByteBuffer arg0, int arg1): zombie.iso.zones.Zone
       *  - (ByteBuffer arg0, int arg1, Map arg2, SharedStrings arg3): zombie.iso.zones.Zone
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2?: java.util.Map<number, string>, arg3?: zombie.util.SharedStrings): zombie.iso.zones.Zone;
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
    /** [ENUM] zombie.iso.zones.ZoneGeometryType */
    export class ZoneGeometryType {
      protected constructor();
      static readonly INVALID: zombie.iso.zones.ZoneGeometryType;
      static readonly Point: zombie.iso.zones.ZoneGeometryType;
      static readonly Polygon: zombie.iso.zones.ZoneGeometryType;
      static readonly Polyline: zombie.iso.zones.ZoneGeometryType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.iso.zones.ZoneGeometryType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.iso.zones.ZoneGeometryType>;
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
       *  - (String arg0): zombie.iso.zones.ZoneGeometryType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.iso.zones.ZoneGeometryType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.zones.ZoneGeometryType[]
       */
      static values(): zombie.iso.zones.ZoneGeometryType[];
    }
  }
}
