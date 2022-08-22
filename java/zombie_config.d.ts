/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.config {
    /**
     * @customConstructor BooleanConfigOption.new
     * @
     * [CLASS] zombie.config.BooleanConfigOption extends zombie.config.ConfigOption
     */
    export class BooleanConfigOption {
      /**
       * Constructors: 
       *  - (String arg0, boolean arg1)
       */
      constructor(arg0: string, arg1: boolean);
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
     * @customConstructor ConfigOption.new
     * @
     * [ABSTRACT CLASS] zombie.config.ConfigOption
     */
    export class ConfigOption {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      protected constructor(arg0: string);
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
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
    /**
     * @customConstructor DoubleConfigOption.new
     * @
     * [CLASS] zombie.config.DoubleConfigOption extends zombie.config.ConfigOption
     */
    export class DoubleConfigOption {
      /**
       * Constructors: 
       *  - (String arg0, double arg1, double arg2, double arg3)
       */
      constructor(arg0: string, arg1: number, arg2: number, arg3: number);
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
     * @customConstructor EnumConfigOption.new
     * @
     * [CLASS] zombie.config.EnumConfigOption extends zombie.config.IntegerConfigOption
     */
    export class EnumConfigOption {
      /**
       * Constructors: 
       *  - (String arg0, int arg1, int arg2)
       */
      constructor(arg0: string, arg1: number, arg2: number);
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
       *  - (Empty): number
       */
      getNumValues(): number;
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
     * @customConstructor IntegerConfigOption.new
     * @
     * [CLASS] zombie.config.IntegerConfigOption extends zombie.config.ConfigOption
     */
    export class IntegerConfigOption {
      /**
       * Constructors: 
       *  - (String arg0, int arg1, int arg2, int arg3)
       */
      constructor(arg0: string, arg1: number, arg2: number, arg3: number);
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
     * @customConstructor StringConfigOption.new
     * @
     * [CLASS] zombie.config.StringConfigOption extends zombie.config.ConfigOption
     */
    export class StringConfigOption {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, int arg2)
       */
      constructor(arg0: string, arg1: string, arg2: number);
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
  }
}
