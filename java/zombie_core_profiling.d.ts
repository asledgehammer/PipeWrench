/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.profiling {
    /**
     * @customConstructor PerformanceProfileProbe.new
     * @
     * [CLASS] zombie.core.profiling.PerformanceProfileProbe extends zombie.core.profiling.AbstractPerformanceProfileProbe
     */
    export class PerformanceProfileProbe {
      /**
       * Constructors: 
       *  - (String arg0)
       *  - (String arg0, boolean arg1)
       */
      constructor(arg0: string, arg1?: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      end(): void;
      /**
       * Method Parameters: 
       *  - (ICallback arg0): boolean
       *  - (ICallback arg0): void
       *  - (Object arg0, ICallback arg1): boolean
       *  - (Object arg0, ICallback arg1): void
       *  - (Object arg0, Object arg1, ICallback arg2): boolean
       *  - (Object arg0, Object arg1, ICallback arg2): void
       *  - (Object arg0, Object arg1, Object arg2, ICallback arg3): void
       *  - (Object arg0, Object arg1, Object arg2, Object arg3, ICallback arg4): void
       *  - (Object arg0, Object arg1, Object arg2, Object arg3, Object arg4, ICallback arg5): void
       */
      invokeAndMeasure<T1, T2, T3, T4, T5>(arg0: zombie.util.lambda.Invokers$Params0$Boolean$ICallback | zombie.util.lambda.Invokers$Params0$ICallback | any, arg1?: zombie.util.lambda.Invokers$Params1$Boolean$ICallback<T1> | zombie.util.lambda.Invokers$Params1$ICallback<T1> | any, arg2?: zombie.util.lambda.Invokers$Params2$Boolean$ICallback<T1, T2> | zombie.util.lambda.Invokers$Params2$ICallback<T1, T2> | any, arg3?: zombie.util.lambda.Invokers$Params3$ICallback<T1, T2, T3> | any, arg4?: zombie.util.lambda.Invokers$Params4$ICallback<T1, T2, T3, T4> | any, arg5?: zombie.util.lambda.Invokers$Params5$ICallback<T1, T2, T3, T4, T5>): boolean | void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isProbeEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      start(): void;
    }
  }
}
