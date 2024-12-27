/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.scripting.entity.components.fluids {
    /**
     * @customConstructor FluidContainerScript.new
     * @
     * [CLASS] zombie.scripting.entity.components.fluids.FluidContainerScript extends zombie.scripting.entity.ComponentScript
     */
    export class FluidContainerScript {

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
       *  - (Empty): zombie.entity.components.fluids.FluidFilter
       */
      getBlacklistCopy(): zombie.entity.components.fluids.FluidFilter;
      /**
       * Method Parameters: 
       *  - (int arg0, ArrayList arg1): java.util.ArrayList<string>
       */
      getBodyScriptLines(arg0: number, arg1: java.util.ArrayList<string>): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getCanEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getContainerName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCustomDrinkSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInitialAmount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.entity.components.fluids.FluidContainerScript$FluidScript>
       */
      getInitialFluids(): java.util.ArrayList<zombie.scripting.entity.components.fluids.FluidContainerScript$FluidScript>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getInputLocked(): boolean;
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
       *  - (Empty): number
       */
      getRainCatcher(): number;
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
       *  - (Empty): zombie.entity.components.fluids.FluidFilter
       */
      getWhitelistCopy(): zombie.entity.components.fluids.FluidFilter;
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
      isHiddenAmount(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInitialFluidsIsRandom(): boolean;
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
     * @customConstructor FluidScript.new
     * @
     * [CLASS] zombie.scripting.entity.components.fluids.FluidContainerScript$FluidScript
     */
    export class FluidContainerScript$FluidScript {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getCustomColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.Fluid
       */
      getFluid(): zombie.entity.components.fluids.Fluid;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFluidType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPercentage(): number;
    }
  }
}
