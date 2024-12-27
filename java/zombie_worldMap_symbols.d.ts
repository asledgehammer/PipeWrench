/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.worldMap.symbols {
    /**
     * @customConstructor IWorldMapSymbolListener.new
     * @
     * [INTERFACE] zombie.worldMap.symbols.IWorldMapSymbolListener
     */
    export class IWorldMapSymbolListener {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (WorldMapBaseSymbol arg0): void
       */
      onAdd(arg0: zombie.worldMap.symbols.WorldMapBaseSymbol): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onAfterClear(): void;
      /**
       * Method Parameters: 
       *  - (WorldMapBaseSymbol arg0): void
       */
      onAfterRemove(arg0: zombie.worldMap.symbols.WorldMapBaseSymbol): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onBeforeClear(): void;
      /**
       * Method Parameters: 
       *  - (WorldMapBaseSymbol arg0): void
       */
      onBeforeRemove(arg0: zombie.worldMap.symbols.WorldMapBaseSymbol): void;
    }
    /**
     * @customConstructor MapSymbolDefinitions.new
     * @
     * [CLASS] zombie.worldMap.symbols.MapSymbolDefinitions
     */
    export class MapSymbolDefinitions {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String arg1, String arg2): void
       *  - (String arg0, String arg1, int arg2, int arg3, String arg4): void
       */
      addTexture(arg0: string, arg1: string, arg2?: string | number, arg3?: number, arg4?: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.worldMap.symbols.MapSymbolDefinitions$MapSymbolDefinition
       */
      getSymbolById(arg0: string): zombie.worldMap.symbols.MapSymbolDefinitions$MapSymbolDefinition;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.worldMap.symbols.MapSymbolDefinitions$MapSymbolDefinition
       */
      getSymbolByIndex(arg0: number): zombie.worldMap.symbols.MapSymbolDefinitions$MapSymbolDefinition;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSymbolCount(): number;
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
       *  - (Empty): zombie.worldMap.symbols.MapSymbolDefinitions
       */
      static getInstance(): zombie.worldMap.symbols.MapSymbolDefinitions;
    }
    /**
     * @customConstructor MapSymbolDefinition.new
     * @
     * [CLASS] zombie.worldMap.symbols.MapSymbolDefinitions$MapSymbolDefinition
     */
    export class MapSymbolDefinitions$MapSymbolDefinition {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTab(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTexturePath(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
    }
    /**
     * @customConstructor WorldMapBaseSymbol.new
     * @
     * [ABSTRACT CLASS] zombie.worldMap.symbols.WorldMapBaseSymbol
     */
    export class WorldMapBaseSymbol {
      /** float */
      static DEFAULT_SCALE: number;

      /**
       * Constructors: 
       *  - (WorldMapSymbols arg0)
       */
      protected constructor(arg0: zombie.worldMap.symbols.WorldMapSymbols);
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      getDisplayScale(arg0: zombie.worldMap.UIWorldMap): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.network.WorldMapSymbolNetworkInfo
       */
      getNetworkInfo(): zombie.worldMap.network.WorldMapSymbolNetworkInfo;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType
       */
      getType(): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      heightScaled(arg0: zombie.worldMap.UIWorldMap): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAuthorLocalPlayer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPrivate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShared(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0, WorldMapSymbolCollisions arg1, float arg2, float arg3): void
       */
      layout(arg0: zombie.worldMap.UIWorldMap, arg1: zombie.worldMap.symbols.WorldMapSymbolCollisions, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, int arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0, float arg1, float arg2): void
       */
      render(arg0: zombie.worldMap.UIWorldMap, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setAnchor(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (WorldMapSymbolNetworkInfo arg0): void
       */
      setNetworkInfo(arg0: zombie.worldMap.network.WorldMapSymbolNetworkInfo): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setPrivate(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      widthScaled(arg0: zombie.worldMap.UIWorldMap): number;
    }
    /**
     * @customConstructor WorldMapSymbolCollisions.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbolCollisions
     */
    export class WorldMapSymbolCollisions {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor WorldMapSymbols.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbols
     */
    export class WorldMapSymbols {
      /** float */
      static readonly COLLAPSED_RADIUS: number;
      /** int */
      static readonly SAVEFILE_VERSION: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IWorldMapSymbolListener arg0): void
       */
      addListener(arg0: zombie.worldMap.symbols.IWorldMapSymbolListener): void;
      /**
       * Method Parameters: 
       *  - (WorldMapBaseSymbol arg0): void
       */
      addSymbol(arg0: zombie.worldMap.symbols.WorldMapBaseSymbol): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, UIFont arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11): zombie.worldMap.symbols.WorldMapTextSymbol
       */
      addText(arg0: string, arg1: boolean, arg2: zombie.ui.UIFont, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): zombie.worldMap.symbols.WorldMapTextSymbol;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6): zombie.worldMap.symbols.WorldMapTextureSymbol
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9): zombie.worldMap.symbols.WorldMapTextureSymbol
       */
      addTexture(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7?: number, arg8?: number, arg9?: number): zombie.worldMap.symbols.WorldMapTextureSymbol;
      /**
       * Method Parameters: 
       *  - (String arg0, UIFont arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): zombie.worldMap.symbols.WorldMapTextSymbol
       */
      addTranslatedText(arg0: string, arg1: zombie.ui.UIFont, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): zombie.worldMap.symbols.WorldMapTextSymbol;
      /**
       * Method Parameters: 
       *  - (String arg0, UIFont arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): zombie.worldMap.symbols.WorldMapTextSymbol
       */
      addUntranslatedText(arg0: string, arg1: zombie.ui.UIFont, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): zombie.worldMap.symbols.WorldMapTextSymbol;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLayoutWorldScale(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getMiniMapSymbols(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.worldMap.symbols.WorldMapBaseSymbol
       */
      getSymbolByIndex(arg0: number): zombie.worldMap.symbols.WorldMapBaseSymbol;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSymbolCount(): number;
      /**
       * Method Parameters: 
       *  - (WorldMapBaseSymbol arg0): number
       */
      indexOf(arg0: zombie.worldMap.symbols.WorldMapBaseSymbol): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      invalidateLayout(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (WorldMapBaseSymbol arg0): void
       */
      removeSymbol(arg0: zombie.worldMap.symbols.WorldMapBaseSymbol): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeSymbolByIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): void
       */
      render(arg0: zombie.worldMap.UIWorldMap): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
    }
    /** [ENUM] zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType */
    export class WorldMapSymbols$WorldMapSymbolType {
      protected constructor();
      static readonly NONE: zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType;
      static readonly Text: zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType;
      static readonly Texture: zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType>;
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
       *  - (String arg0): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType[]
       */
      static values(): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType[];
    }
    /**
     * @customConstructor WorldMapSymbolsV1.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbolsV1
     */
    export class WorldMapSymbolsV1 {
      /**
       * Constructors: 
       *  - (UIWorldMap arg0, WorldMapSymbols arg1)
       */
      constructor(arg0: zombie.worldMap.UIWorldMap, arg1: zombie.worldMap.symbols.WorldMapSymbols);
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextureSymbolV1
       */
      addTexture(arg0: string, arg1: number, arg2: number): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextureSymbolV1;
      /**
       * Method Parameters: 
       *  - (String arg0, UIFont arg1, float arg2, float arg3): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextSymbolV1
       */
      addTranslatedText(arg0: string, arg1: zombie.ui.UIFont, arg2: number, arg3: number): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextSymbolV1;
      /**
       * Method Parameters: 
       *  - (String arg0, UIFont arg1, float arg2, float arg3): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextSymbolV1
       */
      addUntranslatedText(arg0: string, arg1: zombie.ui.UIFont, arg2: number, arg3: number): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextSymbolV1;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapBaseSymbolV1
       */
      getSymbolByIndex(arg0: number): zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapBaseSymbolV1;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSymbolCount(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      hitTest(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeSymbolByIndex(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Exposer arg0): void
       */
      static setExposed(arg0: zombie.Lua.LuaManager$Exposer): void;
    }
    /**
     * @customConstructor WorldMapBaseSymbolV1.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapBaseSymbolV1 extends zombie.util.PooledObject
     */
    export class WorldMapSymbolsV1$WorldMapBaseSymbolV1 {

      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGreen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool$PoolReference
       */
      getPoolReference(): zombie.util.Pool$PoolReference;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isText(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTexture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setAnchor(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
    }
    /**
     * @customConstructor WorldMapTextSymbolV1.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextSymbolV1 extends zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapBaseSymbolV1
     */
    export class WorldMapSymbolsV1$WorldMapTextSymbolV1 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGreen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool$PoolReference
       */
      getPoolReference(): zombie.util.Pool$PoolReference;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUntranslatedText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isText(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTexture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setAnchor(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTranslatedText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUntranslatedText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
    }
    /**
     * @customConstructor WorldMapTextureSymbolV1.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextureSymbolV1 extends zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapBaseSymbolV1
     */
    export class WorldMapSymbolsV1$WorldMapTextureSymbolV1 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGreen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool$PoolReference
       */
      getPoolReference(): zombie.util.Pool$PoolReference;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSymbolID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isText(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTexture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setAnchor(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
    }
    /**
     * @customConstructor WorldMapSymbolsV2.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbolsV2
     */
    export class WorldMapSymbolsV2 {
      /**
       * Constructors: 
       *  - (UIWorldMap arg0, WorldMapSymbols arg1)
       */
      constructor(arg0: zombie.worldMap.UIWorldMap, arg1: zombie.worldMap.symbols.WorldMapSymbols);
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1, float arg2): zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapTextureSymbolV2
       */
      addTexture(arg0: string, arg1: number, arg2: number): zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapTextureSymbolV2;
      /**
       * Method Parameters: 
       *  - (String arg0, UIFont arg1, float arg2, float arg3): zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapTextSymbolV2
       */
      addTranslatedText(arg0: string, arg1: zombie.ui.UIFont, arg2: number, arg3: number): zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapTextSymbolV2;
      /**
       * Method Parameters: 
       *  - (String arg0, UIFont arg1, float arg2, float arg3): zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapTextSymbolV2
       */
      addUntranslatedText(arg0: string, arg1: zombie.ui.UIFont, arg2: number, arg3: number): zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapTextSymbolV2;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapBaseSymbolV2
       */
      getSymbolByIndex(arg0: number): zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapBaseSymbolV2;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSymbolCount(): number;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      hitTest(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeSymbolByIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (WorldMapBaseSymbolV2 arg0): void
       */
      sendModifySymbol(arg0: zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapBaseSymbolV2): void;
      /**
       * Method Parameters: 
       *  - (WorldMapBaseSymbolV2 arg0): void
       */
      sendRemoveSymbol(arg0: zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapBaseSymbolV2): void;
      /**
       * Method Parameters: 
       *  - (WorldMapBaseSymbolV2 arg0): void
       */
      sendSetPrivateSymbol(arg0: zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapBaseSymbolV2): void;
      /**
       * Method Parameters: 
       *  - (WorldMapBaseSymbolV2 arg0, WorldMapSymbolNetworkInfo arg1): void
       */
      sendShareSymbol(arg0: zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapBaseSymbolV2, arg1: zombie.worldMap.network.WorldMapSymbolNetworkInfo): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Exposer arg0): void
       */
      static setExposed(arg0: zombie.Lua.LuaManager$Exposer): void;
    }
    /**
     * @customConstructor WorldMapBaseSymbolV2.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapBaseSymbolV2 extends zombie.util.PooledObject
     */
    export class WorldMapSymbolsV2$WorldMapBaseSymbolV2 {

      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canClientModify(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAuthor(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGreen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool$PoolReference
       */
      getPoolReference(): zombie.util.Pool$PoolReference;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRed(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getVisibleToPlayerByIndex(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVisibleToPlayerCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPrivate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShared(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isText(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTexture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisibleToEveryone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisibleToFaction(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisibleToSafehouse(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setAnchor(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setSharing(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
    }
    /**
     * @customConstructor WorldMapTextSymbolV2.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapTextSymbolV2 extends zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapBaseSymbolV2
     */
    export class WorldMapSymbolsV2$WorldMapTextSymbolV2 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canClientModify(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAuthor(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGreen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool$PoolReference
       */
      getPoolReference(): zombie.util.Pool$PoolReference;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUntranslatedText(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getVisibleToPlayerByIndex(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVisibleToPlayerCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPrivate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShared(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isText(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTexture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisibleToEveryone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisibleToFaction(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisibleToSafehouse(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setAnchor(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setSharing(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTranslatedText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUntranslatedText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
    }
    /**
     * @customConstructor WorldMapTextureSymbolV2.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapTextureSymbolV2 extends zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapBaseSymbolV2
     */
    export class WorldMapSymbolsV2$WorldMapTextureSymbolV2 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canClientModify(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAuthor(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDisplayY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGreen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool$PoolReference
       */
      getPoolReference(): zombie.util.Pool$PoolReference;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRed(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSymbolID(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getVisibleToPlayerByIndex(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVisibleToPlayerCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWorldY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPrivate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShared(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isText(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTexture(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisibleToEveryone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisibleToFaction(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisibleToSafehouse(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setAnchor(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setSharing(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
    }
    /**
     * @customConstructor WorldMapTextSymbol.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapTextSymbol extends zombie.worldMap.symbols.WorldMapBaseSymbol
     */
    export class WorldMapTextSymbol {
      /**
       * Constructors: 
       *  - (WorldMapSymbols arg0)
       */
      constructor(arg0: zombie.worldMap.symbols.WorldMapSymbols);
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      getDisplayScale(arg0: zombie.worldMap.UIWorldMap): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.network.WorldMapSymbolNetworkInfo
       */
      getNetworkInfo(): zombie.worldMap.network.WorldMapSymbolNetworkInfo;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTranslatedText(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType
       */
      getType(): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUntranslatedText(): string;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      heightScaled(arg0: zombie.worldMap.UIWorldMap): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAuthorLocalPlayer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPrivate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShared(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0, WorldMapSymbolCollisions arg1, float arg2, float arg3): void
       */
      layout(arg0: zombie.worldMap.UIWorldMap, arg1: zombie.worldMap.symbols.WorldMapSymbolCollisions, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, int arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0, float arg1, float arg2): void
       */
      render(arg0: zombie.worldMap.UIWorldMap, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setAnchor(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (WorldMapSymbolNetworkInfo arg0): void
       */
      setNetworkInfo(arg0: zombie.worldMap.network.WorldMapSymbolNetworkInfo): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setPrivate(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTranslatedText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUntranslatedText(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      widthScaled(arg0: zombie.worldMap.UIWorldMap): number;
    }
    /**
     * @customConstructor WorldMapTextureSymbol.new
     * @
     * [CLASS] zombie.worldMap.symbols.WorldMapTextureSymbol extends zombie.worldMap.symbols.WorldMapBaseSymbol
     */
    export class WorldMapTextureSymbol {
      /**
       * Constructors: 
       *  - (WorldMapSymbols arg0)
       */
      constructor(arg0: zombie.worldMap.symbols.WorldMapSymbols);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkTexture(): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      getDisplayScale(arg0: zombie.worldMap.UIWorldMap): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.network.WorldMapSymbolNetworkInfo
       */
      getNetworkInfo(): zombie.worldMap.network.WorldMapSymbolNetworkInfo;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSymbolID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType
       */
      getType(): zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      heightScaled(arg0: zombie.worldMap.UIWorldMap): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAuthorLocalPlayer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPrivate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isShared(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisible(): boolean;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0, WorldMapSymbolCollisions arg1, float arg2, float arg3): void
       */
      layout(arg0: zombie.worldMap.UIWorldMap, arg1: zombie.worldMap.symbols.WorldMapSymbolCollisions, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1, int arg2): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0, float arg1, float arg2): void
       */
      render(arg0: zombie.worldMap.UIWorldMap, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setAnchor(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCollide(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (WorldMapSymbolNetworkInfo arg0): void
       */
      setNetworkInfo(arg0: zombie.worldMap.network.WorldMapSymbolNetworkInfo): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1): void
       */
      setPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setPrivate(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setRGBA(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setSymbolID(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setVisible(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (UIWorldMap arg0): number
       */
      widthScaled(arg0: zombie.worldMap.UIWorldMap): number;
    }
  }
}
