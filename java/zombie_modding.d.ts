/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.modding {
    /**
     * @customConstructor ActiveMods.new
     * @
     * [CLASS] zombie.modding.ActiveMods
     */
    export class ActiveMods {
      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkMissingMaps(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      checkMissingMods(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (ActiveMods arg0): void
       */
      copyFrom(arg0: zombie.modding.ActiveMods): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMapOrder(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getMods(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isModActive(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      removeMapOrder(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      removeMod(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setModActive(arg0: string, arg1: boolean): void;
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
       *  - (String arg0): zombie.modding.ActiveMods
       */
      static getById(arg0: string): zombie.modding.ActiveMods;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.modding.ActiveMods
       */
      static getByIndex(arg0: number): zombie.modding.ActiveMods;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static indexOf(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static renderUI(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ActiveMods arg0): boolean
       */
      static requiresResetLua(arg0: zombie.modding.ActiveMods): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ActiveMods arg0): void
       */
      static setLoadedMods(arg0: zombie.modding.ActiveMods): void;
    }
  }
}
