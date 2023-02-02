/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.text.templating {
    /**
     * @customConstructor IReplace.new
     * @
     * [INTERFACE] zombie.text.templating.IReplace
     */
    export class IReplace {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getString(): string;
    }
    /**
     * @customConstructor IReplaceProvider.new
     * @
     * [INTERFACE] zombie.text.templating.IReplaceProvider
     */
    export class IReplaceProvider {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.text.templating.IReplace
       */
      getReplacer(arg0: string): zombie.text.templating.IReplace;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasReplacer(arg0: string): boolean;
    }
    /**
     * @customConstructor ReplaceProviderCharacter.new
     * @
     * [CLASS] zombie.text.templating.ReplaceProviderCharacter extends zombie.text.templating.ReplaceProvider
     */
    export class ReplaceProviderCharacter {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, KahluaTableImpl arg1): void
       */
      addKey(arg0: string, arg1: string | se.krka.kahlua.j2se.KahluaTableImpl): void;
      /**
       * Method Parameters: 
       *  - (String arg0, IReplace arg1): void
       */
      addReplacer(arg0: string, arg1: zombie.text.templating.IReplace): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.text.templating.IReplace
       */
      getReplacer(arg0: string): zombie.text.templating.IReplace;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasReplacer(arg0: string): boolean;
    }
    /**
     * @customConstructor TemplateText.new
     * @
     * [CLASS] zombie.text.templating.TemplateText
     */
    export class TemplateText {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): string
       *  - (String arg0, KahluaTableImpl arg1): string
       *  - (String arg0, IReplaceProvider arg1): string
       */
      static Build(arg0: string, arg1?: se.krka.kahlua.j2se.KahluaTableImpl | zombie.text.templating.IReplaceProvider): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Initialize(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       *  - (int arg0): number
       *  - (float arg0, float arg1): number
       *  - (int arg0, int arg1): number
       */
      static RandNext(arg0: number, arg1?: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, KahluaTableImpl arg1): void
       *  - (String arg0, IReplace arg1): void
       */
      static RegisterKey(arg0: string, arg1: se.krka.kahlua.j2se.KahluaTableImpl | zombie.text.templating.IReplace): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
    }
  }
}
