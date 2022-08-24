/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.skinnedmodel.runtime {
    /**
     * @customConstructor RuntimeAnimationScript.new
     * @
     * [CLASS] zombie.core.skinnedmodel.runtime.RuntimeAnimationScript extends zombie.scripting.objects.BaseScriptObject
     */
    export class RuntimeAnimationScript {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String[] arg1): void
       */
      Load(arg0: string, arg1: string | string[]): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exec(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ScriptModule
       */
      getModule(): zombie.scripting.objects.ScriptModule;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
    }
  }
}
