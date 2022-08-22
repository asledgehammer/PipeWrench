/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace se.krka.kahlua.vm {
    export type Coroutine = any;
    export type KahluaTable = any;
    export type KahluaThread = any;
    /**
     * @customConstructor KahluaUtil.new
     * @
     * [CLASS] se.krka.kahlua.vm.KahluaUtil
     */
    export class KahluaUtil {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Object arg0, int arg1, String arg2, String arg3): void
       */
      static assertArgNotNull(arg0: any, arg1: number, arg2: string, arg3: string): void;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Object arg0): boolean
       */
      static boolEval(arg0: any): boolean;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (String arg0): void
       */
      static fail(arg0: string): void;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Object arg0): number
       */
      static fromDouble(arg0: any): number;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (LuaCallFrame arg0, int arg1, String arg2): any
       */
      static getArg(arg0: se.krka.kahlua.vm.LuaCallFrame, arg1: number, arg2: string): any;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Platform arg0, KahluaTable arg1): se.krka.kahlua.vm.KahluaTable
       */
      static getClassMetatables(arg0: se.krka.kahlua.vm.Platform, arg1: se.krka.kahlua.vm.KahluaTable): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (LuaCallFrame arg0, int arg1, String arg2): number
       */
      static getDoubleArg(arg0: se.krka.kahlua.vm.LuaCallFrame, arg1: number, arg2: string): number;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (LuaCallFrame arg0, int arg1, String arg2): number
       */
      static getNumberArg(arg0: se.krka.kahlua.vm.LuaCallFrame, arg1: number, arg2: string): number;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (LuaCallFrame arg0, int arg1): any
       */
      static getOptionalArg(arg0: se.krka.kahlua.vm.LuaCallFrame, arg1: number): any;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (LuaCallFrame arg0, int arg1): number
       */
      static getOptionalNumberArg(arg0: se.krka.kahlua.vm.LuaCallFrame, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (LuaCallFrame arg0, int arg1): string
       */
      static getOptionalStringArg(arg0: se.krka.kahlua.vm.LuaCallFrame, arg1: number): string;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Platform arg0, KahluaTable arg1, String arg2): se.krka.kahlua.vm.KahluaTable
       */
      static getOrCreateTable(arg0: se.krka.kahlua.vm.Platform, arg1: se.krka.kahlua.vm.KahluaTable, arg2: string): se.krka.kahlua.vm.KahluaTable;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (LuaCallFrame arg0, int arg1, String arg2): string
       */
      static getStringArg(arg0: se.krka.kahlua.vm.LuaCallFrame, arg1: number, arg2: string): string;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Platform arg0, KahluaTable arg1): se.krka.kahlua.vm.KahluaThread
       */
      static getWorkerThread(arg0: se.krka.kahlua.vm.Platform, arg1: se.krka.kahlua.vm.KahluaTable): se.krka.kahlua.vm.KahluaThread;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (long arg0, int arg1): number
       */
      static ipow(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (double arg0): boolean
       */
      static isNegative(arg0: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (KahluaTable arg0, int arg1, int arg2): number
       */
      static len(arg0: se.krka.kahlua.vm.KahluaTable, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (String arg0, KahluaTable arg1): se.krka.kahlua.vm.LuaClosure
       */
      static loadByteCodeFromResource(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable): se.krka.kahlua.vm.LuaClosure;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (boolean arg0, String arg1): void
       */
      static luaAssert(arg0: boolean, arg1: string): void;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Double arg0): string
       */
      static numberToString(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Object arg0): number
       */
      static rawTonumber(arg0: any): number;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Object arg0): string
       */
      static rawTostring(arg0: any): string;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Object arg0): string
       */
      static rawTostring2(arg0: any): string;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (double arg0): number
       */
      static round(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (KahluaTable arg0, KahluaThread arg1): void
       */
      static setWorkerThread(arg0: se.krka.kahlua.vm.KahluaTable, arg1: se.krka.kahlua.vm.KahluaThread): void;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (KahluaTable arg0, KahluaThread arg1, String arg2): void
       */
      static setupLibrary(arg0: se.krka.kahlua.vm.KahluaTable, arg1: se.krka.kahlua.vm.KahluaThread, arg2: string): void;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (boolean arg0): boolean
       */
      static toBoolean(arg0: boolean): boolean;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (double arg0): number
       *  - (long arg0): number
       */
      static toDouble(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (String arg0): number
       *  - (String arg0, int arg1): number
       */
      static tonumber(arg0: string, arg1?: number): number;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Object arg0, KahluaThread arg1): string
       */
      static tostring(arg0: any, arg1: se.krka.kahlua.vm.KahluaThread): string;
      /**
       * @noSelf
       *
       * Method Parameters:
       *  - (Object arg0): string
       */
      static type(arg0: any): string;
    }
    export type LuaCallFrame = any;
    export type LuaClosure = any;
    export type Platform = any;
    export type Prototype = any;
  }
}
