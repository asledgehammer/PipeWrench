/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.debug {
    /**
     * @customConstructor BooleanDebugOption.new
     * @
     * [CLASS] zombie.debug.BooleanDebugOption extends zombie.config.BooleanConfigOption
     */
    export class BooleanDebugOption {
      /**
       * Constructors: 
       *  - (String arg0, boolean arg1, boolean arg2)
       */
      constructor(arg0: string, arg1: boolean, arg2: boolean);
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
       *  - (Empty): zombie.debug.options.IDebugOptionGroup
       */
      getParent(): zombie.debug.options.IDebugOptionGroup;
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
       *  - (Empty): boolean
       */
      isDebugOnly(): boolean;
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
       *  - (Empty): void
       */
      onFullPathChanged(): void;
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
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
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
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0, String arg1, boolean arg2): zombie.debug.BooleanDebugOption
       */
      static newDebugOnlyOption(arg0: zombie.debug.options.IDebugOptionGroup, arg1: string, arg2: boolean): zombie.debug.BooleanDebugOption;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0, String arg1, boolean arg2): zombie.debug.BooleanDebugOption
       */
      static newOption(arg0: zombie.debug.options.IDebugOptionGroup, arg1: string, arg2: boolean): zombie.debug.BooleanDebugOption;
    }
    /**
     * @customConstructor DebugLog.new
     * @
     * [CLASS] zombie.debug.DebugLog
     */
    export class DebugLog {
      /** zombie.debug.DebugLogStream */
      static readonly Action?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly ActionSystem?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Animal?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Animation?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly AnimationDetailed?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Asset?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Basement?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Clothing?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Combat?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly CraftLogic?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Damage?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Death?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly DetailedInfo?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Discord?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Energy?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Entity?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly FileIO?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Fireplace?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Fluid?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Foraging?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly General?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Grapple?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Input?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly IsoRegion?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly ItemPicker?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Lightning?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Lua?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly MapLoading?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Mod?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Moveable?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Multiplayer?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Network?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly NetworkFileDebug?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Objects?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Packet?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Physics?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Radio?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Recipe?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Saving?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Script?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Shader?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Sound?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Sprite?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Statistic?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Translation?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly UnitTests?: zombie.debug.DebugLogStream;
      /** int */
      static readonly VERSION: number;
      /** int */
      static readonly VERSION1: number;
      /** int */
      static readonly VERSION2: number;
      /** zombie.debug.DebugLogStream */
      static readonly Vehicle?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Voice?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly WorldGen?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Xml?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Zombie?: zombie.debug.DebugLogStream;
      /** zombie.debug.DebugLogStream */
      static readonly Zone?: zombie.debug.DebugLogStream;
      /** boolean */
      static printServerTime: boolean;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static enableDebugLogs(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DebugType arg0, LogSeverity arg1): void
       */
      static enableLog(arg0: zombie.debug.DebugType, arg1: zombie.debug.LogSeverity): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static enableServerLogs(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DebugType arg0, LogSeverity arg1, Object arg2, boolean arg3, String arg4): string
       *  - (DebugType arg0, LogSeverity arg1, Object arg2, boolean arg3, String arg4, Object... arg5): string
       */
      static formatString(arg0: zombie.debug.DebugType, arg1: zombie.debug.LogSeverity, arg2: any, arg3: boolean, arg4: string, arg5?: any): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DebugType arg0, LogSeverity arg1, Object arg2, boolean arg3, String arg4, Object... arg5): string
       */
      static formatStringVarArgs(arg0: zombie.debug.DebugType, arg1: zombie.debug.LogSeverity, arg2: any, arg3: boolean, arg4: string, arg5: any): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.debug.DebugType
       */
      static getAnimalLog(): zombie.debug.DebugType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.debug.DebugType>
       */
      static getDebugTypes(): java.util.ArrayList<zombie.debug.DebugType>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DebugType arg0): zombie.debug.LogSeverity
       */
      static getLogLevel(arg0: zombie.debug.DebugType): zombie.debug.LogSeverity;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DebugType arg0): zombie.debug.LogSeverity
       */
      static getLogSeverity(arg0: zombie.debug.DebugType): zombie.debug.LogSeverity;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.debug.LogSeverity
       */
      static getMinimumLogSeverity(): zombie.debug.LogSeverity;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DebugType arg0): zombie.debug.DebugLogStream
       */
      static getOrCreateDebugLogStream(arg0: zombie.debug.DebugType): zombie.debug.DebugLogStream;
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
       *  - (DebugType arg0): boolean
       */
      static isEnabled(arg0: zombie.debug.DebugType): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DebugType arg0, LogSeverity arg1): boolean
       */
      static isLogEnabled(arg0: zombie.debug.DebugType, arg1: zombie.debug.LogSeverity): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static isLogTraceFileLocationEnabled(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static load(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       */
      static loadDebugConfig(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       *  - (DebugType arg0, String arg1): void
       */
      static log(arg0: string | zombie.debug.DebugType, arg1?: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2): void
       */
      static nativeLog(arg0: string, arg1: string, arg2: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static printLogLevels(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static save(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DebugType arg0, boolean arg1): void
       */
      static setLogEnabled(arg0: zombie.debug.DebugType, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (DebugType arg0, LogSeverity arg1): void
       */
      static setLogSeverity(arg0: zombie.debug.DebugType, arg1: zombie.debug.LogSeverity): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (OutputStream arg0): void
       */
      static setStdErr(arg0: java.io.OutputStream): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (OutputStream arg0): void
       */
      static setStdOut(arg0: java.io.OutputStream): void;
    }
    /**
     * @customConstructor DebugLogStream.new
     * @
     * [CLASS] zombie.debug.DebugLogStream extends java.io.PrintStream
     */
    export class DebugLogStream {
      /**
       * Constructors: 
       *  - (PrintStream arg0, PrintStream arg1, PrintStream arg2, IDebugLogFormatter arg3)
       *  - (PrintStream arg0, PrintStream arg1, PrintStream arg2, IDebugLogFormatter arg3, LogSeverity arg4)
       */
      constructor(arg0: java.io.PrintStream, arg1: java.io.PrintStream, arg2: java.io.PrintStream, arg3: zombie.debug.IDebugLogFormatter, arg4?: zombie.debug.LogSeverity);
      /**
       * Method Parameters: 
       *  - (char arg0): java.io.PrintStream
       *  - (char arg0): java.lang.Appendable
       *  - (CharSequence arg0): java.io.PrintStream
       *  - (CharSequence arg0): java.lang.Appendable
       *  - (CharSequence arg0, int arg1, int arg2): java.io.PrintStream
       *  - (CharSequence arg0, int arg1, int arg2): java.lang.Appendable
       */
      append(arg0: string | java.lang.CharSequence, arg1?: number, arg2?: number): java.io.PrintStream | java.lang.Appendable;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      checkError(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      close(): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (int arg0, Object arg1): void
       *  - (String arg0, Object... arg1): void
       *  - (int arg0, String arg1, Object... arg2): void
       */
      debugOnceln(arg0: any, arg1?: any, arg2?: any): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (int arg0, Object arg1): void
       *  - (String arg0, Object... arg1): void
       *  - (int arg0, String arg1, Object... arg2): void
       */
      debugln(arg0: any, arg1?: any, arg2?: any): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (int arg0, Object arg1): void
       *  - (String arg0, Object... arg1): void
       *  - (int arg0, String arg1, Object... arg2): void
       */
      error(arg0: any, arg1?: any, arg2?: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      flush(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Object... arg1): java.io.PrintStream
       *  - (Locale arg0, String arg1, Object... arg2): java.io.PrintStream
       */
      format(arg0: string | java.util.Locale, arg1: any | string, arg2?: any): java.io.PrintStream;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.debug.IDebugLogFormatter
       */
      getFormatter(): zombie.debug.IDebugLogFormatter;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.debug.LogSeverity
       */
      getLogSeverity(): zombie.debug.LogSeverity;
      /**
       * Method Parameters: 
       *  - (Empty): java.io.PrintStream
       */
      getWrappedErrStream(): java.io.PrintStream;
      /**
       * Method Parameters: 
       *  - (Empty): java.io.PrintStream
       */
      getWrappedOutStream(): java.io.PrintStream;
      /**
       * Method Parameters: 
       *  - (Empty): java.io.PrintStream
       */
      getWrappedWarnStream(): java.io.PrintStream;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (LogSeverity arg0): boolean
       */
      isLogEnabled(arg0: zombie.debug.LogSeverity): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (int arg0, Object arg1): void
       *  - (String arg0, Object... arg1): void
       *  - (int arg0, String arg1, Object... arg2): void
       */
      noise(arg0: any, arg1?: any, arg2?: any): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (char arg0): void
       *  - (char[] arg0): void
       *  - (double arg0): void
       *  - (float arg0): void
       *  - (int arg0): void
       *  - (Object arg0): void
       *  - (String arg0): void
       *  - (long arg0): void
       */
      print(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Throwable arg0, String arg1, LogSeverity arg2): void
       *  - (Throwable arg0, String arg1, String arg2, LogSeverity arg3): void
       */
      printException(arg0: java.lang.Throwable, arg1: string, arg2: zombie.debug.LogSeverity | string, arg3?: zombie.debug.LogSeverity): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (int arg0): void
       *  - (String arg0): void
       *  - (String arg0, int arg1): void
       */
      printStackTrace(arg0?: number | string, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1, Object... arg2): void
       */
      printUnitTest(arg0: string, arg1: boolean, arg2: any): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Object... arg1): java.io.PrintStream
       *  - (Locale arg0, String arg1, Object... arg2): java.io.PrintStream
       */
      printf(arg0: string | java.util.Locale, arg1: any | string, arg2?: any): java.io.PrintStream;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       *  - (char arg0): void
       *  - (char[] arg0): void
       *  - (double arg0): void
       *  - (float arg0): void
       *  - (int arg0): void
       *  - (Object arg0): void
       *  - (String arg0): void
       *  - (long arg0): void
       *  - (String arg0, Object... arg1): void
       */
      println(arg0?: any, arg1?: any): void;
      /**
       * Method Parameters: 
       *  - (LogSeverity arg0): void
       */
      setLogSeverity(arg0: zombie.debug.LogSeverity): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (int arg0, Object arg1): void
       *  - (String arg0, Object... arg1): void
       *  - (int arg0, String arg1, Object... arg2): void
       */
      trace(arg0: any, arg1?: any, arg2?: any): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (int arg0, Object arg1): void
       *  - (String arg0, Object... arg1): void
       *  - (int arg0, String arg1, Object... arg2): void
       */
      warn(arg0: any, arg1?: any, arg2?: any): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (int arg0, Object arg1): void
       *  - (String arg0, Object... arg1): void
       *  - (int arg0, String arg1, Object... arg2): void
       */
      warnOnce(arg0: any, arg1?: any, arg2?: any): void;
      /**
       * Method Parameters: 
       *  - (byte[] arg0): void
       *  - (int arg0): void
       *  - (byte[] arg0, int arg1, int arg2): void
       */
      write(arg0: number[] | number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (byte[] arg0): void
       */
      writeBytes(arg0: number[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static generateCallerPrefix(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (StackTraceElement arg0, boolean arg1): string
       */
      static getStackTraceElementString(arg0: java.lang.StackTraceElement, arg1: boolean): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Throwable arg0): string
       */
      static getTopStackTraceString(arg0: java.lang.Throwable): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.io.OutputStream
       */
      static nullOutputStream(): java.io.OutputStream;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): java.lang.StackTraceElement
       */
      static tryGetCallerTraceElement(arg0: number): java.lang.StackTraceElement;
    }
    /**
     * @customConstructor DebugOptions.new
     * @
     * [CLASS] zombie.debug.DebugOptions
     */
    export class DebugOptions {
      /** int */
      static readonly VERSION: number;
      /** zombie.debug.DebugOptions */
      static readonly instance?: zombie.debug.DebugOptions;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      addChild(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.debug.options.IDebugOption>
       */
      getChildren(): java.lang.Iterable<zombie.debug.options.IDebugOption>;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getCombinedName(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.debug.BooleanDebugOption
       */
      getOptionByIndex(arg0: number): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.debug.BooleanDebugOption
       */
      getOptionByName(arg0: string): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.debug.options.IDebugOptionGroup
       */
      getParent(): zombie.debug.options.IDebugOptionGroup;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newDebugOnlyOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): E
       */
      newOptionGroup<E>(arg0: E): E;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      onChildAdded(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      onDescendantAdded(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onFullPathChanged(): void;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      removeChild(arg0: zombie.debug.options.IDebugOption): void;
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
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static testThreadCrash(arg0: number): void;
    }
    /**
     * @customConstructor Checks.new
     * @
     * [CLASS] zombie.debug.DebugOptions$Checks extends zombie.debug.options.OptionGroup
     */
    export class DebugOptions$Checks {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      addChild(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Iterable<zombie.debug.options.IDebugOption>
       */
      getChildren(): java.lang.Iterable<zombie.debug.options.IDebugOption>;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getCombinedName(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getGroupName(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.debug.options.IDebugOptionGroup
       */
      getParent(): zombie.debug.options.IDebugOptionGroup;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newDebugOnlyOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): E
       */
      newOptionGroup<E>(arg0: E): E;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      onChildAdded(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      onDescendantAdded(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onFullPathChanged(): void;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      removeChild(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0, String arg1): string
       */
      static getCombinedName(arg0: zombie.debug.options.IDebugOptionGroup, arg1: string): string;
    }
    /** [ENUM] zombie.debug.DebugType */
    export class DebugType {
      protected constructor();
      static readonly Action: zombie.debug.DebugType;
      static readonly ActionSystem: zombie.debug.DebugType;
      static readonly Animal: zombie.debug.DebugType;
      static readonly Animation: zombie.debug.DebugType;
      static readonly AnimationDetailed: zombie.debug.DebugType;
      static readonly Asset: zombie.debug.DebugType;
      static readonly Ballistics: zombie.debug.DebugType;
      static readonly Basement: zombie.debug.DebugType;
      static readonly BodyDamage: zombie.debug.DebugType;
      static readonly Checksum: zombie.debug.DebugType;
      static readonly Clothing: zombie.debug.DebugType;
      static readonly Combat: zombie.debug.DebugType;
      static readonly CraftLogic: zombie.debug.DebugType;
      static readonly Damage: zombie.debug.DebugType;
      static readonly Death: zombie.debug.DebugType;
      static readonly DetailedInfo: zombie.debug.DebugType;
      static readonly Discord: zombie.debug.DebugType;
      static readonly Energy: zombie.debug.DebugType;
      static readonly Entity: zombie.debug.DebugType;
      static readonly ExitDebug: zombie.debug.DebugType;
      static readonly FileIO: zombie.debug.DebugType;
      static readonly Fireplace: zombie.debug.DebugType;
      static readonly Fluid: zombie.debug.DebugType;
      static readonly Foraging: zombie.debug.DebugType;
      static readonly General: zombie.debug.DebugType;
      static readonly Grapple: zombie.debug.DebugType;
      static readonly Input: zombie.debug.DebugType;
      static readonly IsoRegion: zombie.debug.DebugType;
      static readonly ItemPicker: zombie.debug.DebugType;
      static readonly Lightning: zombie.debug.DebugType;
      static readonly LoadAnimation: zombie.debug.DebugType;
      static readonly Lua: zombie.debug.DebugType;
      static readonly MapLoading: zombie.debug.DebugType;
      static readonly Mod: zombie.debug.DebugType;
      static readonly ModelManager: zombie.debug.DebugType;
      static readonly Moveable: zombie.debug.DebugType;
      static readonly Multiplayer: zombie.debug.DebugType;
      static readonly Network: zombie.debug.DebugType;
      static readonly NetworkFileDebug: zombie.debug.DebugType;
      static readonly Objects: zombie.debug.DebugType;
      static readonly Ownership: zombie.debug.DebugType;
      static readonly PZBullet: zombie.debug.DebugType;
      static readonly Packet: zombie.debug.DebugType;
      static readonly Physics: zombie.debug.DebugType;
      static readonly Radio: zombie.debug.DebugType;
      static readonly Recipe: zombie.debug.DebugType;
      static readonly Saving: zombie.debug.DebugType;
      static readonly Script: zombie.debug.DebugType;
      static readonly Shader: zombie.debug.DebugType;
      static readonly Sound: zombie.debug.DebugType;
      static readonly Sprite: zombie.debug.DebugType;
      static readonly Statistic: zombie.debug.DebugType;
      static readonly Translation: zombie.debug.DebugType;
      static readonly UnitTests: zombie.debug.DebugType;
      static readonly Vehicle: zombie.debug.DebugType;
      static readonly Voice: zombie.debug.DebugType;
      static readonly WorldGen: zombie.debug.DebugType;
      static readonly Xml: zombie.debug.DebugType;
      static readonly Zombie: zombie.debug.DebugType;
      static readonly Zone: zombie.debug.DebugType;
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
       *  - (Object arg0): void
       *  - (String arg0, Object... arg1): void
       */
      debugOnceln(arg0: any, arg1?: any): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (String arg0, Object... arg1): void
       */
      debugln(arg0: any, arg1?: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Optional<java.lang.Enum$EnumDesc<E>>
       */
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.debug.DebugType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (String arg0, Object... arg1): void
       */
      error(arg0: any, arg1?: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.debug.DebugType>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.debug.DebugLogStream
       */
      getLogStream(): zombie.debug.DebugLogStream;
      /**
       * Method Parameters: 
       *  - (LogSeverity arg0, String arg1, int arg2): zombie.debug.StackTraceContainer
       *  - (LogSeverity arg0, String arg1, int arg2, int arg3): zombie.debug.StackTraceContainer
       */
      getStackTrace(arg0: zombie.debug.LogSeverity, arg1: string, arg2: number, arg3?: number): zombie.debug.StackTraceContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      name(): string;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (String arg0, Object... arg1): void
       */
      noise(arg0: any, arg1?: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      ordinal(): number;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       *  - (char arg0): void
       *  - (double arg0): void
       *  - (float arg0): void
       *  - (int arg0): void
       *  - (Object arg0): void
       *  - (String arg0): void
       *  - (long arg0): void
       */
      print(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Exception arg0, String arg1, LogSeverity arg2): void
       */
      printException(arg0: java.lang.Exception, arg1: string, arg2: zombie.debug.LogSeverity): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Object... arg1): java.io.PrintStream
       */
      printf(arg0: string, arg1: any): java.io.PrintStream;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       *  - (char arg0): void
       *  - (char[] arg0): void
       *  - (double arg0): void
       *  - (float arg0): void
       *  - (int arg0): void
       *  - (Object arg0): void
       *  - (String arg0): void
       *  - (long arg0): void
       *  - (String arg0, Object... arg1): void
       */
      println(arg0?: any, arg1?: any): void;
      /**
       * Method Parameters: 
       *  - (int arg0, LogSeverity arg1, String arg2): void
       */
      routedWrite(arg0: number, arg1: zombie.debug.LogSeverity, arg2: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (String arg0, Object... arg1): void
       */
      trace(arg0: any, arg1?: any): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (String arg0, Object... arg1): void
       */
      warn(arg0: any, arg1?: any): void;
      /**
       * Method Parameters: 
       *  - (LogSeverity arg0, String arg1): void
       */
      write(arg0: zombie.debug.LogSeverity, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.debug.DebugType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.debug.DebugType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.debug.DebugType[]
       */
      static values(): zombie.debug.DebugType[];
    }
    /**
     * @customConstructor IDebugLogFormatter.new
     * @
     * [INTERFACE] zombie.debug.IDebugLogFormatter
     */
    export class IDebugLogFormatter {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (LogSeverity arg0, String arg1, boolean arg2, String arg3): string
       *  - (LogSeverity arg0, String arg1, boolean arg2, String arg3, Object... arg4): string
       */
      format(arg0: zombie.debug.LogSeverity, arg1: string, arg2: boolean, arg3: string, arg4?: any): string;
    }
    /** [ENUM] zombie.debug.LogSeverity */
    export class LogSeverity {
      protected constructor();
      static readonly Debug: zombie.debug.LogSeverity;
      static readonly Error: zombie.debug.LogSeverity;
      static readonly General: zombie.debug.LogSeverity;
      static readonly Noise: zombie.debug.LogSeverity;
      static readonly Off: zombie.debug.LogSeverity;
      static readonly Trace: zombie.debug.LogSeverity;
      static readonly Warning: zombie.debug.LogSeverity;

      /* FIELDS */

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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.debug.LogSeverity>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.debug.LogSeverity>;
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
       *  - (Empty): java.util.ArrayList<zombie.debug.LogSeverity>
       */
      static getValueList(): java.util.ArrayList<zombie.debug.LogSeverity>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.debug.LogSeverity
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.debug.LogSeverity | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.debug.LogSeverity[]
       */
      static values(): zombie.debug.LogSeverity[];
    }
    /**
     * @customConstructor StackTraceContainer.new
     * @
     * [CLASS] zombie.debug.StackTraceContainer
     */
    export class StackTraceContainer {
      /**
       * Constructors: 
       *  - (StackTraceElement[] arg0, String arg1, int arg2, int arg3)
       */
      constructor(arg0: java.lang.StackTraceElement[], arg1: string, arg2: number, arg3: number);
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (StringBuilder arg0, StackTraceElement[] arg1, String arg2, String arg3, Throwable arg4, int arg5, int arg6, Set arg7): java.lang.StringBuilder
       */
      static getEnclosedStackTraceString(arg0: java.lang.StringBuilder, arg1: java.lang.StackTraceElement[], arg2: string, arg3: string, arg4: java.lang.Throwable, arg5: number, arg6: number, arg7: java.util.Set<java.lang.Throwable>): java.lang.StringBuilder;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (StackTraceElement[] arg0, String arg1, int arg2, int arg3): string
       *  - (StringBuilder arg0, Throwable arg1, String arg2, int arg3, int arg4): java.lang.StringBuilder
       *  - (StringBuilder arg0, Throwable arg1, String arg2, String arg3, int arg4, int arg5): java.lang.StringBuilder
       */
      static getStackTraceString(arg0: java.lang.StackTraceElement[] | java.lang.StringBuilder, arg1: string | java.lang.Throwable, arg2: number | string, arg3: number | string, arg4?: number, arg5?: number): string | java.lang.StringBuilder;
    }
  }
}
