/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.network {
    /**
     * @customConstructor ByteBufferWriter.new
     * @
     * [CLASS] zombie.core.network.ByteBufferWriter
     */
    export class ByteBufferWriter {
      /**
       * Constructors: 
       *  - (ByteBuffer arg0)
       */
      constructor(arg0: java.nio.ByteBuffer);
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      putBoolean(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (byte arg0): void
       */
      putByte(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (char arg0): void
       */
      putChar(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (double arg0): void
       */
      putDouble(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      putFloat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      putInt(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (long arg0): void
       */
      putLong(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (short arg0): void
       */
      putShort(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      putUTF(arg0: string): void;
    }
  }
}
