/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.utils {
    /**
     * @customConstructor BooleanGrid.new
     * @
     * [CLASS] zombie.core.utils.BooleanGrid
     */
    export class BooleanGrid {
      /**
       * Constructors: 
       *  - (int arg0, int arg1)
       */
      constructor(arg0: number, arg1: number);
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      LoadFromByteBuffer(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      PutToByteBuffer(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       *  - (Empty): zombie.core.utils.BooleanGrid
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (BooleanGrid arg0): void
       */
      copy(arg0: zombie.core.utils.BooleanGrid): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      fill(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      getValue(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, boolean arg2): void
       */
      setValue(arg0: number, arg1: number, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /**
     * @customConstructor OnceEvery.new
     * @
     * [CLASS] zombie.core.utils.OnceEvery
     */
    export class OnceEvery {
      /**
       * Constructors: 
       *  - (float arg0)
       *  - (float arg0, boolean arg1)
       */
      constructor(arg0: number, arg1?: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      Check(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getElapsedMillis(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static update(): void;
    }
    /**
     * @customConstructor TransitionNodeProxy.new
     * @
     * [CLASS] zombie.core.utils.TransitionNodeProxy
     */
    export class TransitionNodeProxy {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasAnyPossibleTransitions(): boolean;
    }
    /**
     * @customConstructor NodeLayerPair.new
     * @
     * [CLASS] zombie.core.utils.TransitionNodeProxy$NodeLayerPair
     */
    export class TransitionNodeProxy$NodeLayerPair {
      /**
       * Constructors: 
       *  - (LiveAnimNode arg0, AnimLayer arg1)
       */
      constructor(arg0: zombie.core.skinnedmodel.advancedanimation.LiveAnimNode, arg1: zombie.core.skinnedmodel.advancedanimation.AnimLayer);
    }
    /**
     * @customConstructor TransitionNodeProxyData.new
     * @
     * [CLASS] zombie.core.utils.TransitionNodeProxy$TransitionNodeProxyData
     */
    export class TransitionNodeProxy$TransitionNodeProxyData {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasValidAnimNodes(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      HasValidTransitions(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.animation.BoneAxis
       */
      getDeferredBoneAxis(): zombie.core.skinnedmodel.animation.BoneAxis;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDeferredBoneName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDeferredRotationScale(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getUseDeferredMovement(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getUseDeferredRotation(): boolean;
    }
    /**
     * @customConstructor WrappedBuffer.new
     * @
     * [CLASS] zombie.core.utils.WrappedBuffer
     */
    export class WrappedBuffer {
      /**
       * Constructors: 
       *  - (int arg0)
       */
      constructor(arg0: number);
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      capacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      dispose(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.nio.ByteBuffer
       */
      getBuffer(): java.nio.ByteBuffer;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisposed(): boolean;
    }
  }
}
