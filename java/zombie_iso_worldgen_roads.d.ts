/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.worldgen.roads {
    /**
     * @customConstructor Road.new
     * @
     * [CLASS] zombie.iso.worldgen.roads.Road
     */
    export class Road {
      /**
       * Constructors: 
       *  - (Vector2i arg0, Vector2i arg1, List arg2, double arg3)
       */
      constructor(arg0: org.joml.Vector2i, arg1: org.joml.Vector2i, arg2: java.util.List<zombie.iso.worldgen.biomes.TileGroup>, arg3: number);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector2i
       */
      getA(): org.joml.Vector2i;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector2i
       */
      getB(): org.joml.Vector2i;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.worldgen.utils.ChunkCoord
       */
      getCA(): zombie.iso.worldgen.utils.ChunkCoord;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.worldgen.utils.ChunkCoord
       */
      getCB(): zombie.iso.worldgen.utils.ChunkCoord;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.worldgen.roads.RoadDirection
       */
      getDirection(): zombie.iso.worldgen.roads.RoadDirection;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getProbability(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.iso.worldgen.biomes.TileGroup>
       */
      getSingleFeatures(): java.util.List<zombie.iso.worldgen.biomes.TileGroup>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor RoadConfig.new
     * @
     * [CLASS] zombie.iso.worldgen.roads.RoadConfig extends java.lang.Record
     */
    export class RoadConfig {
      /**
       * Constructors: 
       *  - (List tiles, double probaRoads, double probability, double filter)
       */
      constructor(arg0: java.util.List<zombie.iso.worldgen.biomes.TileGroup>, arg1: number, arg2: number, arg3: number);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      filter(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      probaRoads(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      probability(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.iso.worldgen.biomes.TileGroup>
       */
      tiles(): java.util.List<zombie.iso.worldgen.biomes.TileGroup>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /** [ENUM] zombie.iso.worldgen.roads.RoadDirection */
    export class RoadDirection {
      protected constructor();
      static readonly NS: zombie.iso.worldgen.roads.RoadDirection;
      static readonly WE: zombie.iso.worldgen.roads.RoadDirection;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.iso.worldgen.roads.RoadDirection>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.iso.worldgen.roads.RoadDirection>;
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
       *  - (String arg0): zombie.iso.worldgen.roads.RoadDirection
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.iso.worldgen.roads.RoadDirection | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.iso.worldgen.roads.RoadDirection[]
       */
      static values(): zombie.iso.worldgen.roads.RoadDirection[];
    }
    /**
     * @customConstructor RoadEdge.new
     * @
     * [CLASS] zombie.iso.worldgen.roads.RoadEdge
     */
    export class RoadEdge {
      /**
       * Constructors: 
       *  - (Vector2i arg0, Vector2i arg1, List arg2, double arg3)
       */
      constructor(arg0: org.joml.Vector2i, arg1: org.joml.Vector2i, arg2: java.util.List<zombie.iso.worldgen.biomes.TileGroup>, arg3: number);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
    }
    /**
     * @customConstructor RoadGenerator.new
     * @
     * [CLASS] zombie.iso.worldgen.roads.RoadGenerator
     */
    export class RoadGenerator {
      /**
       * Constructors: 
       *  - (long arg0, RoadConfig arg1, long arg2)
       */
      constructor(arg0: number, arg1: zombie.iso.worldgen.roads.RoadConfig, arg2: number);
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.iso.worldgen.roads.RoadNexus>
       */
      getRoadNexus(): java.util.List<zombie.iso.worldgen.roads.RoadNexus>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.Set<zombie.iso.worldgen.roads.Road>
       */
      getRoads(arg0: number, arg1: number): java.util.Set<zombie.iso.worldgen.roads.Road>;
    }
    /**
     * @customConstructor RoadNexus.new
     * @
     * [CLASS] zombie.iso.worldgen.roads.RoadNexus
     */
    export class RoadNexus {
      /**
       * Constructors: 
       *  - (Vector2i arg0, List arg1, List arg2, double arg3)
       */
      constructor(arg0: org.joml.Vector2i, arg1: java.util.List<org.joml.Vector2i>, arg2: java.util.List<zombie.iso.worldgen.biomes.TileGroup>, arg3: number);
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector2i
       */
      getDelaunayPoint(): org.joml.Vector2i;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<org.joml.Vector2i>
       */
      getDelaunayRemotes(): java.util.List<org.joml.Vector2i>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<zombie.iso.worldgen.roads.RoadEdge>
       */
      getRoadEdges(): java.util.List<zombie.iso.worldgen.roads.RoadEdge>;
    }
  }
}
