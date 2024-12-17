/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.util.lambda {
    /**
     * @customConstructor Invokers.new
     * @
     * [CLASS] zombie.util.lambda.Invokers
     */
    export class Invokers {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Params0.new
     * @
     * [CLASS] zombie.util.lambda.Invokers$Params0
     */
    export class Invokers$Params0 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Boolean.new
     * @
     * [CLASS] zombie.util.lambda.Invokers$Params0$Boolean
     */
    export class Invokers$Params0$Boolean {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ICallback.new
     * @
     * [INTERFACE] zombie.util.lambda.Invokers$Params0$Boolean$ICallback
     */
    export class Invokers$Params0$Boolean$ICallback {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      accept(): boolean;
    }
    /**
     * @customConstructor ICallback.new
     * @
     * [INTERFACE] zombie.util.lambda.Invokers$Params0$ICallback
     */
    export class Invokers$Params0$ICallback {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      accept(): void;
    }
    /**
     * @customConstructor Params1.new
     * @
     * [CLASS] zombie.util.lambda.Invokers$Params1
     */
    export class Invokers$Params1 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Boolean.new
     * @
     * [CLASS] zombie.util.lambda.Invokers$Params1$Boolean
     */
    export class Invokers$Params1$Boolean {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ICallback.new
     * @
     * [INTERFACE] zombie.util.lambda.Invokers$Params1$Boolean$ICallback
     */
    export class Invokers$Params1$Boolean$ICallback<T1> {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      accept(arg0: any): boolean;
    }
    /**
     * @customConstructor CallbackStackItem.new
     * @
     * [CLASS] zombie.util.lambda.Invokers$Params1$CallbackStackItem extends zombie.util.lambda.Invokers$Params1$StackItem<T1>
     */
    export class Invokers$Params1$CallbackStackItem<T1> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool$PoolReference
       */
      getPoolReference(): zombie.util.Pool$PoolReference;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      run(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0, ICallback arg1): zombie.util.lambda.Invokers$Params1$CallbackStackItem<T1>
       */
      static alloc<T1>(arg0: any, arg1: zombie.util.lambda.Invokers$Params1$ICallback<T1>): zombie.util.lambda.Invokers$Params1$CallbackStackItem<T1>;
    }
    /**
     * @customConstructor ICallback.new
     * @
     * [INTERFACE] zombie.util.lambda.Invokers$Params1$ICallback
     */
    export class Invokers$Params1$ICallback<T1> {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      accept(arg0: any): void;
    }
    /**
     * @customConstructor Params2.new
     * @
     * [CLASS] zombie.util.lambda.Invokers$Params2
     */
    export class Invokers$Params2 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor Boolean.new
     * @
     * [CLASS] zombie.util.lambda.Invokers$Params2$Boolean
     */
    export class Invokers$Params2$Boolean {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ICallback.new
     * @
     * [INTERFACE] zombie.util.lambda.Invokers$Params2$Boolean$ICallback
     */
    export class Invokers$Params2$Boolean$ICallback<T1, T2> {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): boolean
       */
      accept(arg0: any, arg1: any): boolean;
    }
    /**
     * @customConstructor CallbackStackItem.new
     * @
     * [CLASS] zombie.util.lambda.Invokers$Params2$CallbackStackItem extends zombie.util.lambda.Invokers$Params2$StackItem<T1, T2>
     */
    export class Invokers$Params2$CallbackStackItem<T1, T2> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool$PoolReference
       */
      getPoolReference(): zombie.util.Pool$PoolReference;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      run(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0, Object arg1, ICallback arg2): zombie.util.lambda.Invokers$Params2$CallbackStackItem<T1, T2>
       */
      static alloc<T1, T2>(arg0: any, arg1: any, arg2: zombie.util.lambda.Invokers$Params2$ICallback<T1, T2>): zombie.util.lambda.Invokers$Params2$CallbackStackItem<T1, T2>;
    }
    /**
     * @customConstructor ICallback.new
     * @
     * [INTERFACE] zombie.util.lambda.Invokers$Params2$ICallback
     */
    export class Invokers$Params2$ICallback<T1, T2> {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): void
       */
      accept(arg0: any, arg1: any): void;
    }
    /**
     * @customConstructor Params3.new
     * @
     * [CLASS] zombie.util.lambda.Invokers$Params3
     */
    export class Invokers$Params3 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor CallbackStackItem.new
     * @
     * [CLASS] zombie.util.lambda.Invokers$Params3$CallbackStackItem extends zombie.util.lambda.Invokers$Params3$StackItem<T1, T2, T3>
     */
    export class Invokers$Params3$CallbackStackItem<T1, T2, T3> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool$PoolReference
       */
      getPoolReference(): zombie.util.Pool$PoolReference;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      run(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0, Object arg1, Object arg2, ICallback arg3): zombie.util.lambda.Invokers$Params3$CallbackStackItem<T1, T2, T3>
       */
      static alloc<T1, T2, T3>(arg0: any, arg1: any, arg2: any, arg3: zombie.util.lambda.Invokers$Params3$ICallback<T1, T2, T3>): zombie.util.lambda.Invokers$Params3$CallbackStackItem<T1, T2, T3>;
    }
    /**
     * @customConstructor ICallback.new
     * @
     * [INTERFACE] zombie.util.lambda.Invokers$Params3$ICallback
     */
    export class Invokers$Params3$ICallback<T1, T2, T3> {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1, Object arg2): void
       */
      accept(arg0: any, arg1: any, arg2: any): void;
    }
    /**
     * @customConstructor Params4.new
     * @
     * [CLASS] zombie.util.lambda.Invokers$Params4
     */
    export class Invokers$Params4 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor CallbackStackItem.new
     * @
     * [CLASS] zombie.util.lambda.Invokers$Params4$CallbackStackItem extends zombie.util.lambda.Invokers$Params4$StackItem<T1, T2, T3, T4>
     */
    export class Invokers$Params4$CallbackStackItem<T1, T2, T3, T4> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool$PoolReference
       */
      getPoolReference(): zombie.util.Pool$PoolReference;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      run(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0, Object arg1, Object arg2, Object arg3, ICallback arg4): zombie.util.lambda.Invokers$Params4$CallbackStackItem<T1, T2, T3, T4>
       */
      static alloc<T1, T2, T3, T4>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: zombie.util.lambda.Invokers$Params4$ICallback<T1, T2, T3, T4>): zombie.util.lambda.Invokers$Params4$CallbackStackItem<T1, T2, T3, T4>;
    }
    /**
     * @customConstructor ICallback.new
     * @
     * [INTERFACE] zombie.util.lambda.Invokers$Params4$ICallback
     */
    export class Invokers$Params4$ICallback<T1, T2, T3, T4> {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1, Object arg2, Object arg3): void
       */
      accept(arg0: any, arg1: any, arg2: any, arg3: any): void;
    }
    /**
     * @customConstructor Params5.new
     * @
     * [CLASS] zombie.util.lambda.Invokers$Params5
     */
    export class Invokers$Params5 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor CallbackStackItem.new
     * @
     * [CLASS] zombie.util.lambda.Invokers$Params5$CallbackStackItem extends zombie.util.lambda.Invokers$Params5$StackItem<T1, T2, T3, T4, T5>
     */
    export class Invokers$Params5$CallbackStackItem<T1, T2, T3, T4, T5> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.util.Pool$PoolReference
       */
      getPoolReference(): zombie.util.Pool$PoolReference;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFree(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onReleased(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      run(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFree(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (PoolReference arg0): void
       */
      setPool(arg0: zombie.util.Pool$PoolReference): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object arg0, Object arg1, Object arg2, Object arg3, Object arg4, ICallback arg5): zombie.util.lambda.Invokers$Params5$CallbackStackItem<T1, T2, T3, T4, T5>
       */
      static alloc<T1, T2, T3, T4, T5>(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: zombie.util.lambda.Invokers$Params5$ICallback<T1, T2, T3, T4, T5>): zombie.util.lambda.Invokers$Params5$CallbackStackItem<T1, T2, T3, T4, T5>;
    }
    /**
     * @customConstructor ICallback.new
     * @
     * [INTERFACE] zombie.util.lambda.Invokers$Params5$ICallback
     */
    export class Invokers$Params5$ICallback<T1, T2, T3, T4, T5> {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1, Object arg2, Object arg3, Object arg4): void
       */
      accept(arg0: any, arg1: any, arg2: any, arg3: any, arg4: any): void;
    }
    /**
     * @customConstructor QuadConsumer.new
     * @
     * [INTERFACE] zombie.util.lambda.QuadConsumer
     */
    export class QuadConsumer<T, U, V, W> {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1, Object arg2, Object arg3): void
       */
      accept(arg0: any, arg1: any, arg2: any, arg3: any): void;
      /**
       * Method Parameters: 
       *  - (QuadConsumer arg0): zombie.util.lambda.QuadConsumer<T, U, V, W>
       */
      andThen(arg0: zombie.util.lambda.QuadConsumer<T, U, V, W>): zombie.util.lambda.QuadConsumer<T, U, V, W>;
    }
  }
}
