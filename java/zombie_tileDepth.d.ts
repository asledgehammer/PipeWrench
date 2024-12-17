/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.tileDepth {
    /**
     * @customConstructor TileDepthTexture.new
     * @
     * [CLASS] zombie.tileDepth.TileDepthTexture
     */
    export class TileDepthTexture {
      /**
       * Constructors: 
       *  - (TilesetDepthTexture arg0, int arg1)
       */
      constructor(arg0: zombie.tileDepth.TilesetDepthTexture, arg1: number);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      fileExists(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColumn(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      getPixel(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      getPixels(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRow(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TilesetDepthTexture
       */
      getTileset(): zombie.tileDepth.TilesetDepthTexture;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      index(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reload(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, float arg4, float arg5): void
       */
      replacePixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2): void
       */
      setMinPixel(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, float arg2): void
       */
      setPixel(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, float arg4): void
       */
      setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateGPUTexture(): void;
    }
    /**
     * @customConstructor TileDepthTextureAssignmentManager.new
     * @
     * [CLASS] zombie.tileDepth.TileDepthTextureAssignmentManager
     */
    export class TileDepthTextureAssignmentManager {

      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      assignDepthTextureToSprite(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): void
       */
      assignTileName(arg0: string, arg1: string, arg2: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      clearAssignedTileName(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): string
       */
      getAssignedTileName(arg0: string, arg1: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initGameData(): void;
      /**
       * Method Parameters: 
       *  - (Mod arg0): void
       */
      initModData(arg0: zombie.gameStates.ChooseGameInfo$Mod): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initSprites(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      save(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileDepthTextureAssignmentManager
       */
      static getInstance(): zombie.tileDepth.TileDepthTextureAssignmentManager;
    }
    /**
     * @customConstructor TileDepthTextureManager.new
     * @
     * [CLASS] zombie.tileDepth.TileDepthTextureManager
     */
    export class TileDepthTextureManager {
      /** boolean */
      static readonly DELAYED_LOADING: boolean;


      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addedLoadTask(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      finishedLoadTask(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileDepthTexture
       */
      getDefaultDepthTexture(): zombie.tileDepth.TileDepthTexture;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.tileDepth.TileDepthTexture
       */
      getPresetDepthTexture(arg0: number, arg1: number): zombie.tileDepth.TileDepthTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TilesetDepthTexture
       */
      getPresetTilesetDepthTexture(): zombie.tileDepth.TilesetDepthTexture;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): zombie.tileDepth.TileDepthTexture
       *  - (String arg0, String arg1, int arg2): zombie.tileDepth.TileDepthTexture
       */
      getTexture(arg0: string, arg1: number | string, arg2?: number): zombie.tileDepth.TileDepthTexture;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.tileDepth.TileDepthTexture
       *  - (String arg0, String arg1): zombie.tileDepth.TileDepthTexture
       */
      getTextureFromTileName(arg0: string, arg1?: string): zombie.tileDepth.TileDepthTexture;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initGameData(): void;
      /**
       * Method Parameters: 
       *  - (Mod arg0): void
       */
      initModData(arg0: zombie.gameStates.ChooseGameInfo$Mod): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (String arg0): void
       */
      initSprites(arg0?: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLoadingFinished(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      loadTilesetPixelsIfNeeded(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      loadedTileDefinitions(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      mergeAfterEditing(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      reloadTileset(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      saveTileset(arg0: string, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileDepthTextureManager
       */
      static getInstance(): zombie.tileDepth.TileDepthTextureManager;
    }
    /**
     * @customConstructor TileDepthTextures.new
     * @
     * [CLASS] zombie.tileDepth.TileDepthTextures
     */
    export class TileDepthTextures {
      /**
       * Constructors: 
       *  - (String arg0, String arg1)
       */
      constructor(arg0: string, arg1: string);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.tileDepth.TilesetDepthTexture
       */
      getExistingTileset(arg0: string): zombie.tileDepth.TilesetDepthTexture;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): zombie.tileDepth.TileDepthTexture
       */
      getTexture(arg0: string, arg1: number): zombie.tileDepth.TileDepthTexture;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.tileDepth.TileDepthTexture
       */
      getTextureFromTileName(arg0: string): zombie.tileDepth.TileDepthTexture;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (String arg0): void
       */
      initSprites(arg0?: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      loadDepthTextureImages(): void;
      /**
       * Method Parameters: 
       *  - (TilesetDepthTexture arg0): void
       */
      mergeTileset(arg0: zombie.tileDepth.TilesetDepthTexture): void;
      /**
       * Method Parameters: 
       *  - (TileDepthTextures arg0): void
       */
      mergeTilesets(arg0: zombie.tileDepth.TileDepthTextures): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      saveTileset(arg0: string): void;
    }
    /**
     * @customConstructor TileGeometryFile.new
     * @
     * [CLASS] zombie.tileDepth.TileGeometryFile
     */
    export class TileGeometryFile {
      /** int */
      static readonly VERSION1: number;
      /** int */
      static readonly VERSION2: number;
      /** int */
      static readonly VERSION_LATEST: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Box.new
     * @
     * [CLASS] zombie.tileDepth.TileGeometryFile$Box extends zombie.tileDepth.TileGeometryFile$Geometry
     */
    export class TileGeometryFile$Box {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileGeometryFile$Box
       */
      asBox(): zombie.tileDepth.TileGeometryFile$Box;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileGeometryFile$Cylinder
       */
      asCylinder(): zombie.tileDepth.TileGeometryFile$Cylinder;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileGeometryFile$Polygon
       */
      asPolygon(): zombie.tileDepth.TileGeometryFile$Polygon;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBox(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCylinder(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPolygon(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      offset(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (StringBuilder arg0): zombie.scripting.ScriptParser$Block
       */
      toBlock(arg0: java.lang.StringBuilder): zombie.scripting.ScriptParser$Block;
    }
    /**
     * @customConstructor Cylinder.new
     * @
     * [CLASS] zombie.tileDepth.TileGeometryFile$Cylinder extends zombie.tileDepth.TileGeometryFile$Geometry
     */
    export class TileGeometryFile$Cylinder {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileGeometryFile$Box
       */
      asBox(): zombie.tileDepth.TileGeometryFile$Box;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileGeometryFile$Cylinder
       */
      asCylinder(): zombie.tileDepth.TileGeometryFile$Cylinder;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileGeometryFile$Polygon
       */
      asPolygon(): zombie.tileDepth.TileGeometryFile$Polygon;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBox(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCylinder(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPolygon(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      offset(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (StringBuilder arg0): zombie.scripting.ScriptParser$Block
       */
      toBlock(arg0: java.lang.StringBuilder): zombie.scripting.ScriptParser$Block;
    }
    /**
     * @customConstructor Geometry.new
     * @
     * [CLASS] zombie.tileDepth.TileGeometryFile$Geometry
     */
    export class TileGeometryFile$Geometry {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileGeometryFile$Box
       */
      asBox(): zombie.tileDepth.TileGeometryFile$Box;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileGeometryFile$Cylinder
       */
      asCylinder(): zombie.tileDepth.TileGeometryFile$Cylinder;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileGeometryFile$Polygon
       */
      asPolygon(): zombie.tileDepth.TileGeometryFile$Polygon;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBox(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCylinder(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPolygon(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      offset(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (StringBuilder arg0): zombie.scripting.ScriptParser$Block
       */
      toBlock(arg0: java.lang.StringBuilder): zombie.scripting.ScriptParser$Block;
    }
    /** [ENUM] zombie.tileDepth.TileGeometryFile$Plane */
    export class TileGeometryFile$Plane {
      protected constructor();
      static readonly XY: zombie.tileDepth.TileGeometryFile$Plane;
      static readonly XZ: zombie.tileDepth.TileGeometryFile$Plane;
      static readonly YZ: zombie.tileDepth.TileGeometryFile$Plane;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.tileDepth.TileGeometryFile$Plane>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.tileDepth.TileGeometryFile$Plane>;
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
       *  - (String arg0): zombie.tileDepth.TileGeometryFile$Plane
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.tileDepth.TileGeometryFile$Plane | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileGeometryFile$Plane[]
       */
      static values(): zombie.tileDepth.TileGeometryFile$Plane[];
    }
    /**
     * @customConstructor Polygon.new
     * @
     * [CLASS] zombie.tileDepth.TileGeometryFile$Polygon extends zombie.tileDepth.TileGeometryFile$Geometry
     */
    export class TileGeometryFile$Polygon {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileGeometryFile$Box
       */
      asBox(): zombie.tileDepth.TileGeometryFile$Box;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileGeometryFile$Cylinder
       */
      asCylinder(): zombie.tileDepth.TileGeometryFile$Cylinder;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileGeometryFile$Polygon
       */
      asPolygon(): zombie.tileDepth.TileGeometryFile$Polygon;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBox(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCylinder(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPolygon(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      offset(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (BiConsumer arg0): void
       */
      rasterize(arg0: java.util._function_.BiConsumer<number, number>): void;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0): number
       *  - (float arg0, float arg1, float arg2): number
       */
      sceneToUIX(arg0: org.joml.Vector3f | number, arg1?: number, arg2?: number): number;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0): number
       *  - (float arg0, float arg1, float arg2): number
       */
      sceneToUIY(arg0: org.joml.Vector3f | number, arg1?: number, arg2?: number): number;
      /**
       * Method Parameters: 
       *  - (StringBuilder arg0): zombie.scripting.ScriptParser$Block
       */
      toBlock(arg0: java.lang.StringBuilder): zombie.scripting.ScriptParser$Block;
    }
    /**
     * @customConstructor Tile.new
     * @
     * [CLASS] zombie.tileDepth.TileGeometryFile$Tile
     */
    export class TileGeometryFile$Tile {

    }
    /**
     * @customConstructor TileGeometryManager.new
     * @
     * [CLASS] zombie.tileDepth.TileGeometryManager
     */
    export class TileGeometryManager {
      /** boolean */
      static readonly ONE_PIXEL_OFFSET: boolean;


      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, ArrayList arg4): void
       */
      copyGeometry(arg0: string, arg1: string, arg2: number, arg3: number, arg4: java.util.ArrayList<zombie.tileDepth.TileGeometryFile$Geometry>): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3): java.util.ArrayList<zombie.tileDepth.TileGeometryFile$Geometry>
       */
      getGeometry(arg0: string, arg1: string, arg2: number, arg3: number): java.util.ArrayList<zombie.tileDepth.TileGeometryFile$Geometry>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getModIDs(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3): zombie.tileDepth.TileGeometryFile$Tile
       */
      getOrCreateTile(arg0: string, arg1: string, arg2: number, arg3: number): zombie.tileDepth.TileGeometryFile$Tile;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3): zombie.tileDepth.TileGeometryFile$Tile
       */
      getTile(arg0: string, arg1: string, arg2: number, arg3: number): zombie.tileDepth.TileGeometryFile$Tile;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, String arg4): string
       */
      getTileProperty(arg0: string, arg1: string, arg2: number, arg3: number, arg4: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initGameData(): void;
      /**
       * Method Parameters: 
       *  - (Mod arg0): void
       */
      initModData(arg0: zombie.gameStates.ChooseGameInfo$Mod): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initSpriteProperties(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, ArrayList arg4): void
       */
      setGeometry(arg0: string, arg1: string, arg2: number, arg3: number, arg4: java.util.ArrayList<zombie.tileDepth.TileGeometryFile$Geometry>): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, int arg2, int arg3, String arg4, String arg5): void
       */
      setTileProperty(arg0: string, arg1: string, arg2: number, arg3: number, arg4: string, arg5: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      write(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileGeometryManager
       */
      static getInstance(): zombie.tileDepth.TileGeometryManager;
    }
    /** [ENUM] zombie.tileDepth.TileSeamManager$Tiles */
    export class TileSeamManager$Tiles {
      protected constructor();
      static readonly FloorEast: zombie.tileDepth.TileSeamManager$Tiles;
      static readonly FloorEastOneThird: zombie.tileDepth.TileSeamManager$Tiles;
      static readonly FloorEastTwoThirds: zombie.tileDepth.TileSeamManager$Tiles;
      static readonly FloorSouth: zombie.tileDepth.TileSeamManager$Tiles;
      static readonly FloorSouthOneThird: zombie.tileDepth.TileSeamManager$Tiles;
      static readonly FloorSouthTwoThirds: zombie.tileDepth.TileSeamManager$Tiles;
      static readonly WallEast: zombie.tileDepth.TileSeamManager$Tiles;
      static readonly WallSouth: zombie.tileDepth.TileSeamManager$Tiles;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.tileDepth.TileSeamManager$Tiles>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.tileDepth.TileSeamManager$Tiles>;
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
       *  - (String arg0): zombie.tileDepth.TileSeamManager$Tiles
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.tileDepth.TileSeamManager$Tiles | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.tileDepth.TileSeamManager$Tiles[]
       */
      static values(): zombie.tileDepth.TileSeamManager$Tiles[];
    }
    /**
     * @customConstructor TilesetDepthTexture.new
     * @
     * [CLASS] zombie.tileDepth.TilesetDepthTexture
     */
    export class TilesetDepthTexture {
      /**
       * Constructors: 
       *  - (TileDepthTextures arg0, String arg1, int arg2, int arg3, boolean arg4)
       */
      constructor(arg0: zombie.tileDepth.TileDepthTextures, arg1: string, arg2: number, arg3: number, arg4: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clearTiles(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      fileExists(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAbsoluteFileName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColumns(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.tileDepth.TileDepthTexture
       *  - (int arg0, int arg1): zombie.tileDepth.TileDepthTexture
       */
      getOrCreateTile(arg0: number, arg1?: number): zombie.tileDepth.TileDepthTexture;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRelativeFileName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRows(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTileCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTileHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTileWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initSprites(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      is2x(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isKeepPixels(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (TilesetDepthTexture arg0): void
       */
      mergeTileset(arg0: zombie.tileDepth.TilesetDepthTexture): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reload(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeFile(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setKeepPixels(arg0: boolean): void;
    }
  }
}
