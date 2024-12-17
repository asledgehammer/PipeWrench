/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.VBO {
    /**
     * @customConstructor IGLBufferObject.new
     * @
     * [INTERFACE] zombie.core.VBO.IGLBufferObject
     */
    export class IGLBufferObject {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_ARRAY_BUFFER(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_BUFFER_SIZE(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_ELEMENT_ARRAY_BUFFER(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_STATIC_DRAW(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_STREAM_DRAW(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GL_WRITE_ONLY(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      glBindBuffer(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, ByteBuffer arg1, int arg2): void
       *  - (int arg0, long arg1, int arg2): void
       */
      glBufferData(arg0: number, arg1: java.nio.ByteBuffer | number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      glDeleteBuffers(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      glGenBuffers(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, IntBuffer arg2): void
       */
      glGetBufferParameter(arg0: number, arg1: number, arg2: java.nio.IntBuffer): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, long arg2, ByteBuffer arg3): java.nio.ByteBuffer
       */
      glMapBuffer(arg0: number, arg1: number, arg2: number, arg3: java.nio.ByteBuffer): java.nio.ByteBuffer;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      glUnmapBuffer(arg0: number): boolean;
    }
  }
}
