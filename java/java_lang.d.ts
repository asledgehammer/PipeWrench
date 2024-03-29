/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace java.lang {
    export type Appendable = any;
    export type CharSequence = any;
    export type Class<T> = any;
    export type Enum<E> = any;
    export type Enum$EnumDesc<E> = any;
    export type Exception = any;
    export type Iterable<T> = any;
    /**
     * @customConstructor Math.new
     * @
     * [CLASS] java.lang.Math
     */
    export class Math {
      /** double */
      static readonly E: number;
      /** double */
      static readonly PI: number;


      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, double arg1): number
       */
      static IEEEremainder(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       *  - (float arg0): number
       *  - (int arg0): number
       *  - (long arg0): number
       */
      static abs(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       *  - (long arg0): number
       */
      static absExact(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static acos(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       *  - (long arg0, long arg1): number
       */
      static addExact(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static asin(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static atan(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, double arg1): number
       */
      static atan2(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static cbrt(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static ceil(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, double arg1): number
       *  - (float arg0, float arg1): number
       */
      static copySign(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static cos(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static cosh(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       *  - (long arg0): number
       */
      static decrementExact(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static exp(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static expm1(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static floor(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       *  - (long arg0, int arg1): number
       *  - (long arg0, long arg1): number
       */
      static floorDiv(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       *  - (long arg0, int arg1): number
       *  - (long arg0, long arg1): number
       */
      static floorMod(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2): number
       *  - (float arg0, float arg1, float arg2): number
       */
      static fma(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       *  - (float arg0): number
       */
      static getExponent(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, double arg1): number
       */
      static hypot(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       *  - (long arg0): number
       */
      static incrementExact(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static log(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static log10(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static log1p(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, double arg1): number
       *  - (float arg0, float arg1): number
       *  - (int arg0, int arg1): number
       *  - (long arg0, long arg1): number
       */
      static max(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, double arg1): number
       *  - (float arg0, float arg1): number
       *  - (int arg0, int arg1): number
       *  - (long arg0, long arg1): number
       */
      static min(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       *  - (long arg0, int arg1): number
       *  - (long arg0, long arg1): number
       */
      static multiplyExact(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      static multiplyFull(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0, long arg1): number
       */
      static multiplyHigh(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       *  - (long arg0): number
       */
      static negateExact(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, double arg1): number
       *  - (float arg0, double arg1): number
       */
      static nextAfter(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       *  - (float arg0): number
       */
      static nextDown(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       *  - (float arg0): number
       */
      static nextUp(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, double arg1): number
       */
      static pow(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static random(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static rint(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       *  - (float arg0): number
       */
      static round(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, int arg1): number
       *  - (float arg0, int arg1): number
       */
      static scalb(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       *  - (float arg0): number
       */
      static signum(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static sin(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static sinh(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static sqrt(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       *  - (long arg0, long arg1): number
       */
      static subtractExact(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static tan(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static tanh(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static toDegrees(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (long arg0): number
       */
      static toIntExact(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static toRadians(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       *  - (float arg0): number
       */
      static ulp(arg0: number): number;
    }
    export type Runnable = any;
    export type StackTraceElement = any;
    export type StringBuffer = any;
    export type Thread = any;
    export type ThreadLocal<T> = any;
    export type Throwable = any;
  }
}
