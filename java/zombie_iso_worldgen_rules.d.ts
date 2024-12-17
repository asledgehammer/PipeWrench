/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.worldgen.rules {
    /**
     * @customConstructor Alias.new
     * @
     * [CLASS] zombie.iso.worldgen.rules.Alias extends java.lang.Record
     */
    export class Alias {
      /**
       * Constructors: 
       *  - (String name, List tiles)
       */
      constructor(arg0: string, arg1: java.util.List<string>);
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
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      name(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<string>
       */
      tiles(): java.util.List<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BufferedReader arg0, String[] arg1): zombie.iso.worldgen.rules.Alias
       */
      static load(arg0: java.io.BufferedReader, arg1: string[]): zombie.iso.worldgen.rules.Alias;
    }
    /**
     * @customConstructor Rule.new
     * @
     * [CLASS] zombie.iso.worldgen.rules.Rule extends java.lang.Record
     */
    export class Rule {
      /**
       * Constructors: 
       *  - (String label, int bitmap, int[] color, List tiles, String layer, int[] condition)
       */
      constructor(arg0: string, arg1: number, arg2: number[], arg3: java.util.List<string>, arg4: string, arg5: number[]);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      bitmap(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      color(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      condition(): number[];
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
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      label(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      layer(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<string>
       */
      tiles(): java.util.List<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (BufferedReader arg0, String[] arg1): zombie.iso.worldgen.rules.Rule
       */
      static load(arg0: java.io.BufferedReader, arg1: string[]): zombie.iso.worldgen.rules.Rule;
    }
    /**
     * @customConstructor Rules.new
     * @
     * [CLASS] zombie.iso.worldgen.rules.Rules
     */
    export class Rules {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Map<string, zombie.iso.worldgen.rules.Alias>
       */
      getAliases(): java.util.Map<string, zombie.iso.worldgen.rules.Alias>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Map<string, number[]>
       */
      getColors(): java.util.Map<string, number[]>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Map<string, number>
       */
      getColorsInt(): java.util.Map<string, number>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Map<string, zombie.iso.worldgen.rules.Rule>
       */
      getRules(): java.util.Map<string, zombie.iso.worldgen.rules.Rule>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVersion(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.iso.worldgen.rules.Rules
       */
      static load(arg0: string): zombie.iso.worldgen.rules.Rules;
    }
  }
}
