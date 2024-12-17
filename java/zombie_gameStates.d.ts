/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.gameStates {
    /**
     * @customConstructor AnimationViewerState.new
     * @
     * [CLASS] zombie.gameStates.AnimationViewerState extends zombie.gameStates.GameState
     */
    export class AnimationViewerState {
      /** zombie.gameStates.AnimationViewerState */
      static instance?: zombie.gameStates.AnimationViewerState;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      fromLua0(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): any
       */
      fromLua1(arg0: string, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.config.ConfigOption
       */
      getOptionByName(arg0: string): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setBoolean(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.AnimationViewerState
       */
      static checkInstance(): zombie.gameStates.AnimationViewerState;
    }
    /**
     * @customConstructor BooleanDebugOption.new
     * @
     * [CLASS] zombie.gameStates.AnimationViewerState$BooleanDebugOption extends zombie.config.BooleanConfigOption
     */
    export class AnimationViewerState$BooleanDebugOption {
      /**
       * Constructors: 
       *  - (AnimationViewerState arg0, String arg1, boolean arg2)
       */
      constructor(arg0: zombie.gameStates.AnimationViewerState, arg1: string, arg2: boolean);
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
     * @customConstructor AttachmentEditorState.new
     * @
     * [CLASS] zombie.gameStates.AttachmentEditorState extends zombie.gameStates.GameState
     */
    export class AttachmentEditorState {
      /** zombie.gameStates.AttachmentEditorState */
      static instance?: zombie.gameStates.AttachmentEditorState;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      fromLua0(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): any
       */
      fromLua1(arg0: string, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.AttachmentEditorState
       */
      static checkInstance(): zombie.gameStates.AttachmentEditorState;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<string>
       */
      static readScript(arg0: string): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, ArrayList arg1, ModelScript arg2): boolean
       */
      static updateScript(arg0: string, arg1: java.util.ArrayList<string>, arg2: zombie.scripting.objects.ModelScript): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, ArrayList arg1): boolean
       */
      static writeScript(arg0: string, arg1: java.util.ArrayList<string>): boolean;
    }
    /**
     * @customConstructor ChooseGameInfo.new
     * @
     * [CLASS] zombie.gameStates.ChooseGameInfo
     */
    export class ChooseGameInfo {

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
       *  - (String arg0): zombie.gameStates.ChooseGameInfo$Mod
       */
      static getAvailableModDetails(arg0: string): zombie.gameStates.ChooseGameInfo$Mod;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.gameStates.ChooseGameInfo$Map
       */
      static getMapDetails(arg0: string): zombie.gameStates.ChooseGameInfo$Map;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.gameStates.ChooseGameInfo$Mod
       */
      static getModDetails(arg0: string): zombie.gameStates.ChooseGameInfo$Mod;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.gameStates.ChooseGameInfo$Mod
       */
      static readModInfo(arg0: string): zombie.gameStates.ChooseGameInfo$Mod;
    }
    /**
     * @customConstructor Map.new
     * @
     * [CLASS] zombie.gameStates.ChooseGameInfo$Map
     */
    export class ChooseGameInfo$Map {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDemoVideo(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDirectory(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLotDirectories(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSpawnSelectImagePyramid(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getThumbnail(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTitle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getWorldmap(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZoomS(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZoomX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getZoomY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFixed2x(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDemoVideo(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDescription(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDirectory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFixed2x(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setThumbnail(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTitle(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setWorldmap(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setZoomS(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setZoomX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setZoomY(arg0: number): void;
    }
    /**
     * @customConstructor Mod.new
     * @
     * [CLASS] zombie.gameStates.ChooseGameInfo$Mod
     */
    export class ChooseGameInfo$Mod {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      addPack(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      addTileDef(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAuthor(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCategory(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCommonDir(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDir(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getIcon(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getId(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getIncompatible(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLoadAfter(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLoadBefore(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModVersion(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.gameStates.ChooseGameInfo$PackFile>
       */
      getPacks(): java.util.ArrayList<zombie.gameStates.ChooseGameInfo$PackFile>;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      getPoster(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPosterCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRequire(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.gameStates.ChooseGameInfo$TileDef>
       */
      getTileDefs(): java.util.ArrayList<zombie.gameStates.ChooseGameInfo$TileDef>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUrl(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getVersionDir(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.GameVersion
       */
      getVersionMax(): zombie.core.GameVersion;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.GameVersion
       */
      getVersionMin(): zombie.core.GameVersion;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWorkshopID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAvailable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAvailableSelf(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAuthor(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAvailable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCategory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setIcon(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setId(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setIncompatible(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setLoadAfter(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setLoadBefore(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setModVersion(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setRequire(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setTexture(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUrl(arg0: string): void;
    }
    /**
     * @customConstructor PackFile.new
     * @
     * [CLASS] zombie.gameStates.ChooseGameInfo$PackFile
     */
    export class ChooseGameInfo$PackFile {
      /**
       * Constructors: 
       *  - (String arg0, int arg1)
       */
      constructor(arg0: string, arg1: number);
    }
    /**
     * @customConstructor SpawnOrigin.new
     * @
     * [CLASS] zombie.gameStates.ChooseGameInfo$SpawnOrigin
     */
    export class ChooseGameInfo$SpawnOrigin {
      /**
       * Constructors: 
       *  - (int arg0, int arg1, int arg2, int arg3)
       */
      constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    /**
     * @customConstructor TileDef.new
     * @
     * [CLASS] zombie.gameStates.ChooseGameInfo$TileDef
     */
    export class ChooseGameInfo$TileDef {
      /**
       * Constructors: 
       *  - (String arg0, int arg1)
       */
      constructor(arg0: string, arg1: number);
    }
    /**
     * @customConstructor ConnectToServerState.new
     * @
     * [CLASS] zombie.gameStates.ConnectToServerState extends zombie.gameStates.GameState
     */
    export class ConnectToServerState {
      /** zombie.gameStates.ConnectToServerState */
      static instance?: zombie.gameStates.ConnectToServerState;

      /**
       * Constructors: 
       *  - (ByteBuffer arg0)
       */
      constructor(arg0: java.nio.ByteBuffer);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      FromLua(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
    }
    /**
     * @customConstructor DebugChunkState.new
     * @
     * [CLASS] zombie.gameStates.DebugChunkState extends zombie.gameStates.GameState
     */
    export class DebugChunkState {
      /** zombie.gameStates.DebugChunkState */
      static instance?: zombie.gameStates.DebugChunkState;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      drawObjectAtCursor(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      fromLua0(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): any
       */
      fromLua1(arg0: string, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1, Object arg2): any
       */
      fromLua2(arg0: string, arg1: any, arg2: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.config.ConfigOption
       */
      getOptionByName(arg0: string): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (IsoCell arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6, boolean arg7): zombie.iso.LosUtil$TestResults
       */
      lineClearCached(arg0: zombie.iso.IsoCell, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean): zombie.iso.LosUtil$TestResults;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderScene(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setBoolean(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      updateScene(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.DebugChunkState
       */
      static checkInstance(): zombie.gameStates.DebugChunkState;
    }
    /**
     * @customConstructor BooleanDebugOption.new
     * @
     * [CLASS] zombie.gameStates.DebugChunkState$BooleanDebugOption extends zombie.config.BooleanConfigOption
     */
    export class DebugChunkState$BooleanDebugOption {
      /**
       * Constructors: 
       *  - (DebugChunkState arg0, String arg1, boolean arg2)
       */
      constructor(arg0: zombie.gameStates.DebugChunkState, arg1: string, arg2: boolean);
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
     * @customConstructor DoubleDebugOption.new
     * @
     * [CLASS] zombie.gameStates.DebugChunkState$DoubleDebugOption extends zombie.config.DoubleConfigOption
     */
    export class DebugChunkState$DoubleDebugOption {
      /**
       * Constructors: 
       *  - (DebugChunkState arg0, String arg1, double arg2, double arg3, double arg4)
       */
      constructor(arg0: zombie.gameStates.DebugChunkState, arg1: string, arg2: number, arg3: number, arg4: number);
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
     * @customConstructor IntegerDebugOption.new
     * @
     * [CLASS] zombie.gameStates.DebugChunkState$IntegerDebugOption extends zombie.config.IntegerConfigOption
     */
    export class DebugChunkState$IntegerDebugOption {
      /**
       * Constructors: 
       *  - (DebugChunkState arg0, String arg1, int arg2, int arg3, int arg4)
       */
      constructor(arg0: zombie.gameStates.DebugChunkState, arg1: string, arg2: number, arg3: number, arg4: number);
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
     * @customConstructor StringDebugOption.new
     * @
     * [CLASS] zombie.gameStates.DebugChunkState$StringDebugOption extends zombie.config.StringConfigOption
     */
    export class DebugChunkState$StringDebugOption {
      /**
       * Constructors: 
       *  - (DebugChunkState arg0, String arg1, String arg2)
       */
      constructor(arg0: zombie.gameStates.DebugChunkState, arg1: string, arg2: string);
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
     * @customConstructor DebugGlobalObjectState.new
     * @
     * [CLASS] zombie.gameStates.DebugGlobalObjectState extends zombie.gameStates.GameState
     */
    export class DebugGlobalObjectState {
      /** zombie.gameStates.DebugGlobalObjectState */
      static instance?: zombie.gameStates.DebugGlobalObjectState;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      fromLua0(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): any
       */
      fromLua1(arg0: string, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1, Object arg2): any
       */
      fromLua2(arg0: string, arg1: any, arg2: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderScene(): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      updateScene(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
    }
    /**
     * @customConstructor GameLoadingState.new
     * @
     * [CLASS] zombie.gameStates.GameLoadingState extends zombie.gameStates.GameState
     */
    export class GameLoadingState {
      /** java.lang.String */
      static GameLoadingString?: string;
      /** boolean */
      static bDone: boolean;
      /** int */
      static convertingFileCount: number;
      /** int */
      static convertingFileMax: number;
      /** boolean */
      static convertingWorld: boolean;
      /** java.lang.Thread */
      static loader?: java.lang.Thread;
      /** boolean */
      static mapDownloadFailed: boolean;
      /** boolean */
      static newGame: boolean;
      /** boolean */
      static playerCreated: boolean;
      /** boolean */
      static playerWrongIP: boolean;
      /** boolean */
      static unexpectedError: boolean;
      /** boolean */
      static worldVersionError: boolean;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Done(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static SendDone(): void;
    }
    /**
     * @customConstructor GameState.new
     * @
     * [CLASS] zombie.gameStates.GameState
     */
    export class GameState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
    }
    /**
     * @customConstructor GameStateMachine.new
     * @
     * [CLASS] zombie.gameStates.GameStateMachine
     */
    export class GameStateMachine {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (GameState arg0): void
       */
      forceNextState(arg0: zombie.gameStates.GameState): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /** [ENUM] zombie.gameStates.GameStateMachine$StateAction */
    export class GameStateMachine$StateAction {
      protected constructor();
      static readonly Continue: zombie.gameStates.GameStateMachine$StateAction;
      static readonly Remain: zombie.gameStates.GameStateMachine$StateAction;
      static readonly Yield: zombie.gameStates.GameStateMachine$StateAction;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.gameStates.GameStateMachine$StateAction>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.gameStates.GameStateMachine$StateAction>;
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
       *  - (String arg0): zombie.gameStates.GameStateMachine$StateAction
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.gameStates.GameStateMachine$StateAction | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction[]
       */
      static values(): zombie.gameStates.GameStateMachine$StateAction[];
    }
    /**
     * @customConstructor LoadingQueueState.new
     * @
     * [CLASS] zombie.gameStates.LoadingQueueState extends zombie.gameStates.GameState
     */
    export class LoadingQueueState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static onConnectionImmediate(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, HashMap arg1): void
       */
      static onPlaceInQueue(arg0: number, arg1: java.util.HashMap<string, any>): void;
    }
    /**
     * @customConstructor MainScreenState.new
     * @
     * [CLASS] zombie.gameStates.MainScreenState extends zombie.gameStates.GameState
     */
    export class MainScreenState {
      /** java.lang.String */
      static Version?: string;
      /** fmod.fmod.Audio */
      static ambient?: fmod.fmod.Audio;
      /** zombie.gameStates.MainScreenState */
      static instance?: zombie.gameStates.MainScreenState;
      /** float */
      static totalScale: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      ShouldShowLogo(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderBackground(): void;
      /**
       * Method Parameters: 
       *  - (ConnectToServerState arg0): void
       */
      setConnectToServerState(arg0: zombie.gameStates.ConnectToServerState): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Texture arg0, int arg1, int arg2, int arg3, int arg4, float arg5): void
       *  - (Texture arg0, int arg1, int arg2, int arg3, int arg4, Color arg5): void
       */
      static DrawTexture(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number | zombie.core.Color): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      static getCustomBackgroundImage(): zombie.core.textures.Texture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Texture arg0, int[] arg1): void
       */
      static getCustomBackgroundImageBounds(arg0: zombie.core.textures.Texture, arg1: number[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.MainScreenState
       */
      static getInstance(): zombie.gameStates.MainScreenState;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): org.lwjgl.glfw.GLFWImage$Buffer
       */
      static loadIcons(): org.lwjgl.glfw.GLFWImage$Buffer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String[] arg0): void
       */
      static main(arg0: string[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static preloadBackgroundTextures(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static renderCustomBackground(): boolean;
    }
    /**
     * @customConstructor Credit.new
     * @
     * [CLASS] zombie.gameStates.MainScreenState$Credit
     */
    export class MainScreenState$Credit {
      /**
       * Constructors: 
       *  - (MainScreenState arg0, Texture arg1, Texture arg2)
       */
      constructor(arg0: zombie.gameStates.MainScreenState, arg1: zombie.core.textures.Texture, arg2: zombie.core.textures.Texture);
    }
    /**
     * @customConstructor ScreenElement.new
     * @
     * [CLASS] zombie.gameStates.MainScreenState$ScreenElement
     */
    export class MainScreenState$ScreenElement {
      /**
       * Constructors: 
       *  - (Texture arg0, int arg1, int arg2, float arg3, float arg4, int arg5)
       */
      constructor(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
    }
    /**
     * @customConstructor SeamEditorState.new
     * @
     * [CLASS] zombie.gameStates.SeamEditorState extends zombie.gameStates.GameState
     */
    export class SeamEditorState {
      /** zombie.gameStates.SeamEditorState */
      static instance?: zombie.gameStates.SeamEditorState;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      fromLua0(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): any
       */
      fromLua1(arg0: string, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.config.ConfigOption
       */
      getOptionByName(arg0: string): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setBoolean(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.SeamEditorState
       */
      static checkInstance(): zombie.gameStates.SeamEditorState;
    }
    /**
     * @customConstructor BooleanDebugOption.new
     * @
     * [CLASS] zombie.gameStates.SeamEditorState$BooleanDebugOption extends zombie.config.BooleanConfigOption
     */
    export class SeamEditorState$BooleanDebugOption {
      /**
       * Constructors: 
       *  - (SeamEditorState arg0, String arg1, boolean arg2)
       */
      constructor(arg0: zombie.gameStates.SeamEditorState, arg1: string, arg2: boolean);
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
     * @customConstructor SpriteModelEditorState.new
     * @
     * [CLASS] zombie.gameStates.SpriteModelEditorState extends zombie.gameStates.GameState
     */
    export class SpriteModelEditorState {
      /** zombie.gameStates.SpriteModelEditorState */
      static instance?: zombie.gameStates.SpriteModelEditorState;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      fromLua0(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): any
       */
      fromLua1(arg0: string, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1, Object arg2): any
       */
      fromLua2(arg0: string, arg1: any, arg2: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1, Object arg2, Object arg3): any
       */
      fromLua3(arg0: string, arg1: any, arg2: any, arg3: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): any
       */
      fromLua4(arg0: string, arg1: any, arg2: any, arg3: any, arg4: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4, Object arg5): any
       */
      fromLua5(arg0: string, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.config.ConfigOption
       */
      getOptionByName(arg0: string): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setBoolean(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.SpriteModelEditorState
       */
      static checkInstance(): zombie.gameStates.SpriteModelEditorState;
    }
    /**
     * @customConstructor BooleanDebugOption.new
     * @
     * [CLASS] zombie.gameStates.SpriteModelEditorState$BooleanDebugOption extends zombie.config.BooleanConfigOption
     */
    export class SpriteModelEditorState$BooleanDebugOption {
      /**
       * Constructors: 
       *  - (SpriteModelEditorState arg0, String arg1, boolean arg2)
       */
      constructor(arg0: zombie.gameStates.SpriteModelEditorState, arg1: string, arg2: boolean);
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
     * @customConstructor TermsOfServiceState.new
     * @
     * [CLASS] zombie.gameStates.TermsOfServiceState extends zombie.gameStates.GameState
     */
    export class TermsOfServiceState {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      fromLua0(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
    }
    /**
     * @customConstructor TileGeometryState.new
     * @
     * [CLASS] zombie.gameStates.TileGeometryState extends zombie.gameStates.GameState
     */
    export class TileGeometryState {
      /** zombie.gameStates.TileGeometryState */
      static instance?: zombie.gameStates.TileGeometryState;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      fromLua0(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): any
       */
      fromLua1(arg0: string, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1, Object arg2): any
       */
      fromLua2(arg0: string, arg1: any, arg2: any): any;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.config.ConfigOption
       */
      getOptionByName(arg0: string): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setBoolean(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.TileGeometryState
       */
      static checkInstance(): zombie.gameStates.TileGeometryState;
    }
    /**
     * @customConstructor BooleanDebugOption.new
     * @
     * [CLASS] zombie.gameStates.TileGeometryState$BooleanDebugOption extends zombie.config.BooleanConfigOption
     */
    export class TileGeometryState$BooleanDebugOption {
      /**
       * Constructors: 
       *  - (TileGeometryState arg0, String arg1, boolean arg2)
       */
      constructor(arg0: zombie.gameStates.TileGeometryState, arg1: string, arg2: boolean);
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
  }
}
