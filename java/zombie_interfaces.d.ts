/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.interfaces {
    /**
     * @customConstructor ITexture.new
     * @
     * [INTERFACE] zombie.interfaces.ITexture
     */
    export class ITexture {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (int arg0): void
       */
      bind(arg0?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroy(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.utils.WrappedBuffer
       */
      getData(): zombie.core.utils.WrappedBuffer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeightHW(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Mask
       */
      getMask(): zombie.core.textures.Mask;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidthHW(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXEnd(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXStart(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYEnd(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYStart(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDestroyed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isSolid(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2): void
       */
      makeTransp(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setAlphaForeach(arg0: number, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      setData(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Mask arg0): void
       */
      setMask(arg0: zombie.core.textures.Mask): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3): void
       */
      setRegion(arg0: number, arg1: number, arg2: number, arg3: number): void;
    }
  }
}
