/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.logger {
    /**
     * @customConstructor ZLogger.new
     * @
     * [CLASS] zombie.core.logger.ZLogger
     */
    export class ZLogger {
      /**
       * Constructors: 
       *  - (String arg0, boolean arg1)
       */
      constructor(arg0: string, arg1: boolean);
      /**
       * Method Parameters: 
       *  - (Exception arg0): void
       *  - (String arg0): void
       *  - (String arg0, String arg1): void
       *  - (String arg0, String arg1, boolean arg2): void
       */
      write(arg0: java.lang.Exception | string, arg1?: string, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2): void
       */
      writeUnsafe(arg0: string, arg1: string, arg2: boolean): void;
    }
  }
}
