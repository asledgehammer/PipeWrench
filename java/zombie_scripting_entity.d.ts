/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.scripting.entity {
    /**
     * @customConstructor ComponentScript.new
     * @
     * [ABSTRACT CLASS] zombie.scripting.entity.ComponentScript extends zombie.scripting.objects.BaseScriptObject
     */
    export class ComponentScript {

      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      InitLoadPP(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      Load(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (Block arg0): void
       */
      LoadCommonBlock(arg0: string | zombie.scripting.ScriptParser$Block): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      OnLoadedAfterLua(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      OnPostWorldDictionaryInit(): void;
      /**
       * Method Parameters: 
       *  - (ScriptLoadMode arg0): void
       */
      OnScriptsLoaded(arg0: zombie.scripting.ScriptLoadMode): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      PreReload(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      addLoadedScriptBody(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      calculateScriptVersion(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      debugString(): string;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.ArrayList<string>
       */
      getAllScriptLines(arg0: java.util.ArrayList<string>): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (int arg0, ArrayList arg1): java.util.ArrayList<string>
       */
      getBodyScriptLines(arg0: number, arg1: java.util.ArrayList<string>): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLoadedScriptBodies(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLoadedScriptBodyCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getObsolete(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.BaseScriptObject
       */
      getParent(): zombie.scripting.objects.BaseScriptObject;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getScriptLines(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptObjectFullType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptObjectName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ScriptType
       */
      getScriptObjectType(): zombie.scripting.ScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScriptVersion(): number;
      /**
       * Method Parameters: 
       *  - (IVersionHash arg0): void
       */
      getVersion(arg0: zombie.world.scripts.IVersionHash): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDebugOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isoMasterOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetLoadedScriptBodies(): void;
      /**
       * Method Parameters: 
       *  - (ScriptModule arg0): void
       */
      setModule(arg0: zombie.scripting.objects.ScriptModule): void;
      /**
       * Method Parameters: 
       *  - (BaseScriptObject arg0): void
       */
      setParent(arg0: zombie.scripting.objects.BaseScriptObject): void;
    }
    /**
     * @customConstructor GameEntityScript.new
     * @
     * [CLASS] zombie.scripting.entity.GameEntityScript extends zombie.scripting.objects.BaseScriptObject
     */
    export class GameEntityScript {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      InitLoadPP(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      Load(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      LoadAttribute(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (Block arg0): void
       */
      LoadCommonBlock(arg0: string | zombie.scripting.ScriptParser$Block): void;
      /**
       * Method Parameters: 
       *  - (Block arg0): void
       */
      LoadComponentBlock(arg0: zombie.scripting.ScriptParser$Block): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      OnLoadedAfterLua(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      OnPostWorldDictionaryInit(): void;
      /**
       * Method Parameters: 
       *  - (ScriptLoadMode arg0): void
       */
      OnScriptsLoaded(arg0: zombie.scripting.ScriptLoadMode): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      PreReload(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      addLoadedScriptBody(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      calculateScriptVersion(): void;
      /**
       * Method Parameters: 
       *  - (ComponentType arg0): boolean
       */
      containsComponent(arg0: zombie.entity.ComponentType): boolean;
      /**
       * Method Parameters: 
       *  - (GameEntityScript arg0): void
       */
      copyFrom(arg0: zombie.scripting.entity.GameEntityScript): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      debugString(): string;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.ArrayList<string>
       */
      getAllScriptLines(arg0: java.util.ArrayList<string>): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (int arg0, ArrayList arg1): java.util.ArrayList<string>
       */
      getBodyScriptLines(arg0: number, arg1: java.util.ArrayList<string>): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (ComponentType arg0): T
       */
      getComponentScriptFor<T>(arg0: zombie.entity.ComponentType): T;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.entity.ComponentScript>
       */
      getComponentScripts(): java.util.ArrayList<zombie.scripting.entity.ComponentScript>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDisplayNameDebug(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getExistsAsVanilla(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFileAbsPath(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFullName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLoadedScriptBodies(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLoadedScriptBodyCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModuleName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getObsolete(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.BaseScriptObject
       */
      getParent(): zombie.scripting.objects.BaseScriptObject;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRegistry_id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getScriptLines(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptObjectFullType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptObjectName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ScriptType
       */
      getScriptObjectType(): zombie.scripting.ScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScriptVersion(): number;
      /**
       * Method Parameters: 
       *  - (IVersionHash arg0): void
       */
      getVersion(arg0: zombie.world.scripts.IVersionHash): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasComponents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDebugOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetLoadedScriptBodies(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setModID(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ScriptModule arg0): void
       */
      setModule(arg0: zombie.scripting.objects.ScriptModule): void;
      /**
       * Method Parameters: 
       *  - (BaseScriptObject arg0): void
       */
      setParent(arg0: zombie.scripting.objects.BaseScriptObject): void;
      /**
       * Method Parameters: 
       *  - (short arg0): void
       */
      setRegistry_id(arg0: number): void;
    }
    /**
     * @customConstructor GameEntityTemplate.new
     * @
     * [CLASS] zombie.scripting.entity.GameEntityTemplate extends zombie.scripting.objects.BaseScriptObject
     */
    export class GameEntityTemplate {
      /**
       * Constructors: 
       *  - (ScriptModule arg0, String arg1, String arg2)
       */
      constructor(arg0: zombie.scripting.objects.ScriptModule, arg1: string, arg2: string);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      InitLoadPP(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      Load(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (Block arg0): void
       */
      LoadCommonBlock(arg0: string | zombie.scripting.ScriptParser$Block): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      OnLoadedAfterLua(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      OnPostWorldDictionaryInit(): void;
      /**
       * Method Parameters: 
       *  - (ScriptLoadMode arg0): void
       */
      OnScriptsLoaded(arg0: zombie.scripting.ScriptLoadMode): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      PreReload(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       */
      addLoadedScriptBody(arg0: string, arg1: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      calculateScriptVersion(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      debugString(): string;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.ArrayList<string>
       */
      getAllScriptLines(arg0: java.util.ArrayList<string>): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (int arg0, ArrayList arg1): java.util.ArrayList<string>
       */
      getBodyScriptLines(arg0: number, arg1: java.util.ArrayList<string>): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getLoadedScriptBodies(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLoadedScriptBodyCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getObsolete(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.BaseScriptObject
       */
      getParent(): zombie.scripting.objects.BaseScriptObject;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.GameEntityScript
       */
      getScript(): zombie.scripting.entity.GameEntityScript;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getScriptLines(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptObjectFullType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getScriptObjectName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ScriptType
       */
      getScriptObjectType(): zombie.scripting.ScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getScriptVersion(): number;
      /**
       * Method Parameters: 
       *  - (IVersionHash arg0): void
       */
      getVersion(arg0: zombie.world.scripts.IVersionHash): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDebugOnly(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetLoadedScriptBodies(): void;
      /**
       * Method Parameters: 
       *  - (ScriptModule arg0): void
       */
      setModule(arg0: zombie.scripting.objects.ScriptModule): void;
      /**
       * Method Parameters: 
       *  - (BaseScriptObject arg0): void
       */
      setParent(arg0: zombie.scripting.objects.BaseScriptObject): void;
    }
  }
}
