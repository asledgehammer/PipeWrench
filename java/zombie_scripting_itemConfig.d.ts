/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.scripting.itemConfig {
    /**
     * @customConstructor ItemConfig.new
     * @
     * [CLASS] zombie.scripting.itemConfig.ItemConfig extends zombie.scripting.objects.BaseScriptObject
     */
    export class ItemConfig {
      /** java.lang.String */
      static readonly VARIABLE_PREFIX?: string;
      /** java.lang.String */
      static error_bucket?: string;
      /** java.lang.String */
      static error_item_config?: string;
      /** java.lang.String */
      static error_line?: string;
      /** java.lang.String */
      static error_root?: string;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      BuildBuckets(): void;
      /**
       * Method Parameters: 
       *  - (GameEntity arg0): void
       */
      ConfigureEntityOnCreate(arg0: zombie.entity.GameEntity): void;
      /**
       * Method Parameters: 
       *  - (GameEntity arg0, ItemPickInfo arg1): void
       */
      ConfigureEntitySpawned(arg0: zombie.entity.GameEntity, arg1: zombie.inventory.ItemPickInfo): void;
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
      isValid(): boolean;
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
     * @customConstructor ItemConfigException.new
     * @
     * [CLASS] zombie.scripting.itemConfig.ItemConfig$ItemConfigException extends java.lang.Exception
     */
    export class ItemConfig$ItemConfigException {
      /**
       * Constructors: 
       *  - (String arg0)
       *  - (String arg0, Throwable arg1)
       *  - (String arg0, Throwable arg1, boolean arg2)
       */
      constructor(arg0: string, arg1?: java.lang.Throwable, arg2?: boolean);
      /**
       * Method Parameters: 
       *  - (Throwable arg0): void
       */
      addSuppressed(arg0: java.lang.Throwable): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Throwable
       */
      fillInStackTrace(): java.lang.Throwable;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Throwable
       */
      getCause(): java.lang.Throwable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLocalizedMessage(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMessage(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.StackTraceElement[]
       */
      getStackTrace(): java.lang.StackTraceElement[];
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Throwable[]
       */
      getSuppressed(): java.lang.Throwable[];
      /**
       * Method Parameters: 
       *  - (Throwable arg0): java.lang.Throwable
       */
      initCause(arg0: java.lang.Throwable): java.lang.Throwable;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (PrintStream arg0): void
       *  - (PrintWriter arg0): void
       */
      printStackTrace(arg0?: java.io.PrintStream | java.io.PrintWriter): void;
      /**
       * Method Parameters: 
       *  - (StackTraceElement[] arg0): void
       */
      setStackTrace(arg0: java.lang.StackTraceElement[]): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor RandomGenerator.new
     * @
     * [ABSTRACT CLASS] zombie.scripting.itemConfig.RandomGenerator
     */
    export class RandomGenerator<T> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      copy(): T;
      /**
       * Method Parameters: 
       *  - (GameEntity arg0): boolean
       */
      execute(arg0: zombie.entity.GameEntity): boolean;
    }
    /**
     * @customConstructor Randomizer.new
     * @
     * [CLASS] zombie.scripting.itemConfig.Randomizer
     */
    export class Randomizer {
      /**
       * Constructors: 
       *  - (RandomGenerator[] arg0)
       *  - (Randomizer arg0)
       */
      constructor(arg0: zombie.scripting.itemConfig.RandomGenerator[] | zombie.scripting.itemConfig.Randomizer);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.itemConfig.Randomizer
       */
      copy(): zombie.scripting.itemConfig.Randomizer;
      /**
       * Method Parameters: 
       *  - (GameEntity arg0): boolean
       */
      execute(arg0: zombie.entity.GameEntity): boolean;
    }
    /**
     * @customConstructor SelectorBucket.new
     * @
     * [CLASS] zombie.scripting.itemConfig.SelectorBucket
     */
    export class SelectorBucket {
      /**
       * Constructors: 
       *  - (int[] arg0, SelectorBucketScript arg1, SelectorBucket[] arg2, Randomizer arg3)
       */
      constructor(arg0: number[], arg1: zombie.scripting.itemConfig.script.SelectorBucketScript, arg2: zombie.scripting.itemConfig.SelectorBucket[], arg3: zombie.scripting.itemConfig.Randomizer);
      /**
       * Method Parameters: 
       *  - (GameEntity arg0, ItemPickInfo arg1): boolean
       */
      Resolve(arg0: zombie.entity.GameEntity, arg1: zombie.inventory.ItemPickInfo): boolean;
      /**
       * Method Parameters: 
       *  - (GameEntity arg0): boolean
       */
      ResolveOnCreate(arg0: zombie.entity.GameEntity): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      containsSelectorID(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOrigSelectorString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.itemConfig.Randomizer
       */
      getRandomizer(): zombie.scripting.itemConfig.Randomizer;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      getSelectorIDs(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.itemConfig.enums.SituatedType
       */
      getSelectorSituated(): zombie.scripting.itemConfig.enums.SituatedType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.itemConfig.enums.SelectorType
       */
      getSelectorType(): zombie.scripting.itemConfig.enums.SelectorType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSelectorWorldAge(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasSelectorIDs(): boolean;
    }
  }
}
