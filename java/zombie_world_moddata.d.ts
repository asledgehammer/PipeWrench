/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.world.moddata {
    /**
     * @customConstructor ModData.new
     * @
     * [CLASS] zombie.world.moddata.ModData
     */
    export class ModData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (String arg0, KahluaTable arg1): void
       */
      static add(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Empty): string
       *  - (String arg0): se.krka.kahlua.vm.KahluaTable
       */
      static create(arg0?: string): string | se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (String arg0): boolean
       */
      static exists(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (String arg0): se.krka.kahlua.vm.KahluaTable
       */
      static get(arg0: string): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (String arg0): se.krka.kahlua.vm.KahluaTable
       */
      static getOrCreate(arg0: string): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Empty): java.util.ArrayList<string>
       */
      static getTableNames(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (String arg0): se.krka.kahlua.vm.KahluaTable
       */
      static remove(arg0: string): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (String arg0): void
       */
      static request(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (String arg0): void
       */
      static transmit(arg0: string): void;
    }
  }
}
