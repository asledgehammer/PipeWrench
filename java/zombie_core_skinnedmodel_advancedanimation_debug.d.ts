/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.skinnedmodel.advancedanimation.debug {
    /**
     * @customConstructor AnimatorDebugMonitor.new
     * @
     * [CLASS] zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor
     */
    export class AnimatorDebugMonitor {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter);
      /**
       * Method Parameters:
       *  - (Empty): boolean
       */
      IsDirty(): boolean;
      /**
       * Method Parameters:
       *  - (Empty): boolean
       */
      IsDirtyFloatList(): boolean;
      /**
       * Method Parameters:
       *  - (String arg0): void
       */
      addCustomVariable(arg0: string): void;
      /**
       * Method Parameters:
       *  - (int arg0): boolean
       */
      getFilter(arg0: number): boolean;
      /**
       * Method Parameters:
       *  - (Empty): java.util.ArrayList<string>
       */
      getFloatNames(): java.util.ArrayList<string>;
      /**
       * Method Parameters:
       *  - (Empty): string
       */
      getLogString(): string;
      /**
       * Method Parameters:
       *  - (Empty): java.util.ArrayList<number>
       */
      getSelectedVarFloatList(): java.util.ArrayList<number>;
      /**
       * Method Parameters:
       *  - (Empty): string
       */
      getSelectedVarMaxFloat(): string;
      /**
       * Method Parameters:
       *  - (Empty): string
       */
      getSelectedVarMinFloat(): string;
      /**
       * Method Parameters:
       *  - (Empty): string
       */
      getSelectedVariable(): string;
      /**
       * Method Parameters:
       *  - (Empty): number
       */
      getSelectedVariableFloat(): number;
      /**
       * Method Parameters:
       *  - (Empty): boolean
       */
      isDoTickStamps(): boolean;
      /**
       * Method Parameters:
       *  - (String arg0): void
       */
      removeCustomVariable(arg0: string): void;
      /**
       * Method Parameters:
       *  - (boolean arg0): void
       */
      setDoTickStamps(arg0: boolean): void;
      /**
       * Method Parameters:
       *  - (int arg0, boolean arg1): void
       */
      setFilter(arg0: number, arg1: boolean): void;
      /**
       * Method Parameters:
       *  - (String arg0): void
       */
      setSelectedVariable(arg0: string): void;
      /**
       * Method Parameters:
       *  - (IsoGameCharacter arg0, AnimLayer[] arg1): void
       */
      update(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.core.skinnedmodel.advancedanimation.AnimLayer[]): void;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Empty): java.util.List<string>
       */
      static getKnownVariables(): java.util.List<string>;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Empty): boolean
       */
      static isKnownVarsDirty(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (String arg0): void
       */
      static registerVariable(arg0: string): void;
    }
  }
}
