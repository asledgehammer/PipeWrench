/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.debug.objects {
    /**
     * @customConstructor ObjectDebuggerLua.new
     * @
     * [CLASS] zombie.debug.objects.ObjectDebuggerLua
     */
    export class ObjectDebuggerLua {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static AllocList(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0, ArrayList arg1): void
       *  - (Object arg0, ArrayList arg1, int arg2): void
       *  - (Object arg0, ArrayList arg1, int arg2, int arg3): void
       */
      static GetLines(arg0: any, arg1: java.util.ArrayList<string>, arg2?: number, arg3?: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (Object arg0, int arg1): void
       *  - (Object arg0, int arg1, int arg2): void
       */
      static Log(arg0: any, arg1?: number, arg2?: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      static ReleaseList(arg0: java.util.ArrayList<string>): void;
    }
  }
}
