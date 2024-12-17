/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.math {
    /**
     * @customConstructor PZMath.new
     * @
     * [CLASS] zombie.core.math.PZMath
     */
    export class PZMath {
      /** float */
      static readonly PI: number;
      /** float */
      static readonly PI2: number;
      /** float */
      static readonly degToRads: number;
      /** long */
      static readonly microsToNanos: number;
      /** long */
      static readonly millisToMicros: number;
      /** float */
      static readonly radToDegs: number;
      /** long */
      static readonly secondsToMillis: number;
      /** long */
      static secondsToNanos: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static abs(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static acosf(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static almostIdentity(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static almostUnitIdentity(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector2 arg0, Vector2 arg1): number
       *  - (float arg0, float arg1, float arg2, float arg3): number
       */
      static angleBetween(arg0: zombie.iso.Vector2 | number, arg1: zombie.iso.Vector2 | number, arg2?: number, arg3?: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): number
       */
      static angleBetweenNormalized(arg0: number, arg1: number, arg2: number, arg3: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static c_lerp(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector3 arg0, Vector2 arg1, Vector3 arg2): number
       */
      static calculateBearing(arg0: zombie.iso.Vector3, arg1: zombie.iso.Vector2, arg2: zombie.iso.Vector3): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static canParseFloat(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static ceil(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0, double arg1, double arg2): number
       *  - (float arg0, float arg1, float arg2): number
       *  - (int arg0, int arg1, int arg2): number
       *  - (long arg0, long arg1, long arg2): number
       */
      static clamp(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       */
      static clampDouble_01(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static clampFloat(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static clamp_01(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8): zombie.iso.Vector3
       */
      static closestVector3(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): zombie.iso.Vector3;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Matrix4f arg0, Matrix4f arg1): org.lwjgl.util.vector.Matrix4f
       *  - (Matrix4f arg0, Matrix4f arg1): org.joml.Matrix4f
       */
      static convertMatrix(arg0: org.joml.Matrix4f | org.lwjgl.util.vector.Matrix4f, arg1: org.lwjgl.util.vector.Matrix4f | org.joml.Matrix4f): org.lwjgl.util.vector.Matrix4f | org.joml.Matrix4f;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      static coorddivision(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      static coordmodulo(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, int arg1): number
       */
      static coordmodulof(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static degToRad(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): boolean
       *  - (float arg0, float arg1, float arg2): boolean
       */
      static equal(arg0: number, arg1: number, arg2?: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       *  - (float arg0): number
       */
      static fastfloor(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (double arg0): number
       *  - (float arg0): number
       */
      static floor(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static frac(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      static gain(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      static getClosestAngle(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      static getClosestAngleDegrees(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       *  - (Vector3f arg0, Vector3f arg1, Vector3f arg2, float arg3): org.lwjgl.util.vector.Vector3f
       *  - (Vector2 arg0, Vector2 arg1, Vector2 arg2, float arg3): zombie.iso.Vector2
       *  - (Vector3 arg0, Vector3 arg1, Vector3 arg2, float arg3): zombie.iso.Vector3
       */
      static lerp(arg0: number | org.lwjgl.util.vector.Vector3f | zombie.iso.Vector2 | zombie.iso.Vector3, arg1: number | org.lwjgl.util.vector.Vector3f | zombie.iso.Vector2 | zombie.iso.Vector3, arg2: number | org.lwjgl.util.vector.Vector3f | zombie.iso.Vector2 | zombie.iso.Vector3, arg3?: number): number | org.lwjgl.util.vector.Vector3f | zombie.iso.Vector2 | zombie.iso.Vector3;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static lerpAngle(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static lerpFunc_EaseInQuad(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static lerpFunc_EaseOutInQuad(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static lerpFunc_EaseOutQuad(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       *  - (int arg0, int arg1): number
       *  - (float arg0, float arg1, float arg2): number
       *  - (float arg0, float arg1, float arg2, float arg3): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): number
       */
      static max(arg0: number, arg1: number, arg2?: number, arg3?: number, arg4?: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       *  - (int arg0, int arg1): number
       *  - (float arg0, float arg1, float arg2): number
       *  - (float arg0, float arg1, float arg2, float arg3): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): number
       */
      static min(arg0: number, arg1: number, arg2?: number, arg3?: number, arg4?: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): number
       */
      static nextPowerOfTwo(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float[] arg0): number[]
       *  - (ArrayList arg0): java.util.ArrayList<number>
       *  - (Object[] arg0, FloatGet arg1, FloatSet arg2): void
       *  - (List arg0, FloatGet arg1, FloatSet arg2): void
       */
      static normalize<E>(arg0: number[] | java.util.ArrayList<number> | any | java.util.List<E>, arg1?: zombie.core.math.PZMath$FloatGet<E>, arg2?: zombie.core.math.PZMath$FloatSet<E>): number[] | java.util.ArrayList<number> | void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       */
      static pow(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static radToDeg(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, int arg1): number
       */
      static roundFloat(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, int arg1): number
       */
      static roundFloatPos(arg0: number, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static roundFromEdges(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static roundToInt(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static roundToIntPlus05(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static roundToNearest(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, Quaternion arg4): org.lwjgl.util.vector.Quaternion
       */
      static setFromAxisAngle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: org.lwjgl.util.vector.Quaternion): org.lwjgl.util.vector.Quaternion;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static sign(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Quaternion arg0, Quaternion arg1, Quaternion arg2, float arg3): org.lwjgl.util.vector.Quaternion
       */
      static slerp(arg0: org.lwjgl.util.vector.Quaternion, arg1: org.lwjgl.util.vector.Quaternion, arg2: org.lwjgl.util.vector.Quaternion, arg3: number): org.lwjgl.util.vector.Quaternion;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static sqrt(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static step(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): zombie.core.math.PZMath$SideOfLine
       */
      static testSideOfLine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): zombie.core.math.PZMath$SideOfLine;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, double arg1): number
       */
      static tryParseDouble(arg0: string, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, float arg1): number
       */
      static tryParseFloat(arg0: string, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1): number
       */
      static tryParseInt(arg0: string, arg1: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1): number
       *  - (float arg0, float arg1, float arg2): number
       */
      static wrap(arg0: number, arg1: number, arg2?: number): number;
    }
    /**
     * @customConstructor FloatGet.new
     * @
     * [INTERFACE] zombie.core.math.PZMath$FloatGet
     */
    export class PZMath$FloatGet<E> {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      get(arg0: any): number;
    }
    /**
     * @customConstructor FloatSet.new
     * @
     * [INTERFACE] zombie.core.math.PZMath$FloatSet
     */
    export class PZMath$FloatSet<E> {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0, float arg1): void
       */
      set(arg0: any, arg1: number): void;
    }
    /** [ENUM] zombie.core.math.PZMath$SideOfLine */
    export class PZMath$SideOfLine {
      protected constructor();
      static readonly Left: zombie.core.math.PZMath$SideOfLine;
      static readonly OnLine: zombie.core.math.PZMath$SideOfLine;
      static readonly Right: zombie.core.math.PZMath$SideOfLine;
      name(): string;
      ordinal(): number;
      /**
       * Method Parameters: 
       *  - (Enum arg0): number
       *  - (Object arg0): number
       */
      compareTo(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Optional<java.lang.Enum$EnumDesc<E>>
       */
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.math.PZMath$SideOfLine>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.math.PZMath$SideOfLine>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      name(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      ordinal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.math.PZMath$SideOfLine
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.math.PZMath$SideOfLine | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.math.PZMath$SideOfLine[]
       */
      static values(): zombie.core.math.PZMath$SideOfLine[];
    }
    /**
     * @customConstructor vector2.new
     * @
     * [CLASS] zombie.core.math.PZMath$UnitTests$vector2
     */
    export class PZMath$UnitTests$vector2 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static run(): void;
    }
    /**
     * @customConstructor Vector3.new
     * @
     * [CLASS] zombie.core.math.Vector3 extends org.joml.Vector3f
     */
    export class Vector3 {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Vector3f arg0)
       *  - (Vector3 arg0)
       *  - (float arg0, float arg1, float arg2)
       */
      constructor(arg0?: org.lwjgl.util.vector.Vector3f | zombie.core.math.Vector3 | number, arg1?: number, arg2?: number);
      /**
       * Method Parameters: 
       *  - (Empty): org.lwjgl.util.vector.Vector3f
       */
      Get(): org.lwjgl.util.vector.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0): void
       */
      Set(arg0: org.lwjgl.util.vector.Vector3f): void;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       *  - (Vector3f arg0): org.joml.Vector3f
       */
      absolute(arg0?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      add(arg0: org.joml.Vector3fc | number, arg1?: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): number
       */
      angle(arg0: org.joml.Vector3fc): number;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): number
       */
      angleCos(arg0: org.joml.Vector3fc): number;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0, Vector3fc arg1): number
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): number
       */
      angleSigned(arg0: org.joml.Vector3fc | number, arg1: org.joml.Vector3fc | number, arg2?: number, arg3?: number, arg4?: number, arg5?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       *  - (Vector3f arg0): org.joml.Vector3f
       */
      ceil(arg0?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3 arg0): zombie.core.math.Vector3
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      cross(arg0: org.joml.Vector3fc | zombie.core.math.Vector3 | number, arg1?: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f | zombie.core.math.Vector3;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): number
       *  - (float arg0, float arg1, float arg2): number
       */
      distance(arg0: org.joml.Vector3fc | number, arg1?: number, arg2?: number): number;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): number
       *  - (float arg0, float arg1, float arg2): number
       */
      distanceSquared(arg0: org.joml.Vector3fc | number, arg1?: number, arg2?: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): org.joml.Vector3f
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (float arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      div(arg0: number | org.joml.Vector3fc, arg1?: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): number
       *  - (Vector3 arg0): number
       *  - (float arg0, float arg1, float arg2): number
       */
      dot(arg0: org.joml.Vector3fc | zombie.core.math.Vector3 | number, arg1?: number, arg2?: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (Vector3fc arg0, float arg1): boolean
       *  - (float arg0, float arg1, float arg2): boolean
       */
      equals(arg0: any, arg1?: number, arg2?: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       *  - (Vector3f arg0): org.joml.Vector3f
       */
      floor(arg0?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (float arg0, Vector3fc arg1): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3fc arg1): org.joml.Vector3f
       *  - (float arg0, Vector3fc arg1, Vector3f arg2): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3fc arg1, Vector3f arg2): org.joml.Vector3f
       */
      fma(arg0: number | org.joml.Vector3fc, arg1: org.joml.Vector3fc, arg2?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       *  - (ByteBuffer arg0): java.nio.ByteBuffer
       *  - (FloatBuffer arg0): java.nio.FloatBuffer
       *  - (Vector3d arg0): org.joml.Vector3d
       *  - (Vector3f arg0): org.joml.Vector3f
       *  - (int arg0, ByteBuffer arg1): java.nio.ByteBuffer
       *  - (int arg0, FloatBuffer arg1): java.nio.FloatBuffer
       *  - (int arg0, Vector3i arg1): org.joml.Vector3i
       */
      get(arg0: number | java.nio.ByteBuffer | java.nio.FloatBuffer | org.joml.Vector3d | org.joml.Vector3f, arg1?: java.nio.ByteBuffer | java.nio.FloatBuffer | org.joml.Vector3i): number | java.nio.ByteBuffer | java.nio.FloatBuffer | org.joml.Vector3d | org.joml.Vector3f | org.joml.Vector3i;
      /**
       * Method Parameters: 
       *  - (long arg0): org.joml.Vector3fc
       */
      getToAddress(arg0: number): org.joml.Vector3fc;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      half(arg0: org.joml.Vector3fc | number, arg1?: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0, Vector3fc arg1, Vector3fc arg2, float arg3, Vector3f arg4): org.joml.Vector3f
       */
      hermite(arg0: org.joml.Vector3fc, arg1: org.joml.Vector3fc, arg2: org.joml.Vector3fc, arg3: number, arg4: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFinite(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      length(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      lengthSquared(): number;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0, float arg1): org.joml.Vector3f
       *  - (Vector3fc arg0, float arg1, Vector3f arg2): org.joml.Vector3f
       */
      lerp(arg0: org.joml.Vector3fc, arg1: number, arg2?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      max(arg0: org.joml.Vector3fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      maxComponent(): number;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      min(arg0: org.joml.Vector3fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      minComponent(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): org.joml.Vector3f
       *  - (Matrix3dc arg0): org.joml.Vector3f
       *  - (Matrix3fc arg0): org.joml.Vector3f
       *  - (Matrix3x2fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (float arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Matrix3dc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Matrix3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Matrix3x2fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      mul(arg0: number | org.joml.Matrix3dc | org.joml.Matrix3fc | org.joml.Matrix3x2fc | org.joml.Vector3fc, arg1?: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (float arg0, Vector3fc arg1): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3fc arg1): org.joml.Vector3f
       *  - (float arg0, Vector3fc arg1, Vector3f arg2): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3fc arg1, Vector3f arg2): org.joml.Vector3f
       */
      mulAdd(arg0: number | org.joml.Vector3fc, arg1: org.joml.Vector3fc, arg2?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Matrix4dc arg0): org.joml.Vector3f
       *  - (Matrix4fc arg0): org.joml.Vector3f
       *  - (Matrix4x3fc arg0): org.joml.Vector3f
       *  - (Matrix4dc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Matrix4fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Matrix4x3fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      mulDirection(arg0: org.joml.Matrix4dc | org.joml.Matrix4fc | org.joml.Matrix4x3fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Matrix4fc arg0): org.joml.Vector3f
       *  - (Matrix4x3fc arg0): org.joml.Vector3f
       *  - (Matrix4fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Matrix4x3fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      mulPosition(arg0: org.joml.Matrix4fc | org.joml.Matrix4x3fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Matrix4fc arg0): number
       *  - (Matrix4fc arg0, Vector3f arg1): number
       */
      mulPositionW(arg0: org.joml.Matrix4fc, arg1?: org.joml.Vector3f): number;
      /**
       * Method Parameters: 
       *  - (Matrix4fc arg0): org.joml.Vector3f
       *  - (Matrix4fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (Matrix4fc arg0, float arg1, Vector3f arg2): org.joml.Vector3f
       */
      mulProject(arg0: org.joml.Matrix4fc, arg1?: org.joml.Vector3f | number, arg2?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Matrix3fc arg0): org.joml.Vector3f
       *  - (Matrix3fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      mulTranspose(arg0: org.joml.Matrix3fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Matrix4fc arg0): org.joml.Vector3f
       *  - (Matrix4fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      mulTransposeDirection(arg0: org.joml.Matrix4fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Matrix4fc arg0): org.joml.Vector3f
       *  - (Matrix4fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      mulTransposePosition(arg0: org.joml.Matrix4fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       *  - (Vector3f arg0): org.joml.Vector3f
       */
      negate(arg0?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       *  - (float arg0): org.joml.Vector3f
       *  - (Vector3f arg0): org.joml.Vector3f
       *  - (float arg0, Vector3f arg1): org.joml.Vector3f
       */
      normalize(arg0?: number | org.joml.Vector3f, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      orthogonalize(arg0: org.joml.Vector3fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       */
      orthogonalizeUnit(arg0: org.joml.Vector3fc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (ObjectInput arg0): void
       */
      readExternal(arg0: java.io.ObjectInput): void;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      reflect(arg0: org.joml.Vector3fc | number, arg1?: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.math.Vector3
       */
      reset(): zombie.core.math.Vector3;
      /**
       * Method Parameters: 
       *  - (Quaternionfc arg0): org.joml.Vector3f
       *  - (Quaternionfc arg0, Vector3f arg1): org.joml.Vector3f
       */
      rotate(arg0: org.joml.Quaternionfc, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, float arg3, Vector3f arg4): org.joml.Vector3f
       */
      rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (float arg0): org.joml.Vector3f
       *  - (float arg0, Vector3f arg1): org.joml.Vector3f
       */
      rotateX(arg0: number, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (float arg0): org.joml.Vector3f
       *  - (float arg0, Vector3f arg1): org.joml.Vector3f
       */
      rotateY(arg0: number, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (float arg0): org.joml.Vector3f
       *  - (float arg0, Vector3f arg1): org.joml.Vector3f
       */
      rotateZ(arg0: number, arg1?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0, Quaternionf arg1): org.joml.Quaternionf
       *  - (float arg0, float arg1, float arg2, Quaternionf arg3): org.joml.Quaternionf
       */
      rotationTo(arg0: org.joml.Vector3fc | number, arg1: org.joml.Quaternionf | number, arg2?: number, arg3?: org.joml.Quaternionf): org.joml.Quaternionf;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       *  - (Vector3f arg0): org.joml.Vector3f
       */
      round(arg0?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (double arg0): org.joml.Vector3f
       *  - (float arg0): org.joml.Vector3f
       *  - (float[] arg0): org.joml.Vector3f
       *  - (ByteBuffer arg0): org.joml.Vector3f
       *  - (FloatBuffer arg0): org.joml.Vector3f
       *  - (Vector3dc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3ic arg0): org.joml.Vector3f
       *  - (int arg0, ByteBuffer arg1): org.joml.Vector3f
       *  - (int arg0, FloatBuffer arg1): org.joml.Vector3f
       *  - (Vector2dc arg0, float arg1): org.joml.Vector3f
       *  - (Vector2fc arg0, float arg1): org.joml.Vector3f
       *  - (Vector2ic arg0, float arg1): org.joml.Vector3f
       *  - (double arg0, double arg1, double arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       */
      set(arg0: number | number[] | java.nio.ByteBuffer | java.nio.FloatBuffer | org.joml.Vector3dc | org.joml.Vector3fc | org.joml.Vector3ic | org.joml.Vector2dc | org.joml.Vector2fc | org.joml.Vector2ic, arg1?: java.nio.ByteBuffer | java.nio.FloatBuffer | number, arg2?: number): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1): org.joml.Vector3f
       */
      setComponent(arg0: number, arg1: number): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (long arg0): org.joml.Vector3f
       */
      setFromAddress(arg0: number): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0, float arg1, Vector3f arg2): org.joml.Vector3f
       */
      smoothStep(arg0: org.joml.Vector3fc, arg1: number, arg2: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Vector3fc arg0): org.joml.Vector3f
       *  - (Vector3fc arg0, Vector3f arg1): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2): org.joml.Vector3f
       *  - (float arg0, float arg1, float arg2, Vector3f arg3): org.joml.Vector3f
       */
      sub(arg0: org.joml.Vector3fc | number, arg1?: org.joml.Vector3f | number, arg2?: number, arg3?: org.joml.Vector3f): org.joml.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): string
       *  - (NumberFormat arg0): string
       */
      toString(arg0?: java.text.NumberFormat): string;
      /**
       * Method Parameters: 
       *  - (ObjectOutput arg0): void
       */
      writeExternal(arg0: java.io.ObjectOutput): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      x(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      y(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      z(): number;
      /**
       * Method Parameters: 
       *  - (Empty): org.joml.Vector3f
       */
      zero(): org.joml.Vector3f;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector3f arg0, Vector3f arg1, float arg2, Vector3f arg3): org.lwjgl.util.vector.Vector3f
       */
      static addScaled(arg0: org.lwjgl.util.vector.Vector3f, arg1: org.lwjgl.util.vector.Vector3f, arg2: number, arg3: org.lwjgl.util.vector.Vector3f): org.lwjgl.util.vector.Vector3f;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): number
       */
      static distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5): number
       */
      static distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static length(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static lengthSquared(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Vector3f arg0, float arg1, Vector3f arg2): org.lwjgl.util.vector.Vector3f
       */
      static setScaled(arg0: org.lwjgl.util.vector.Vector3f, arg1: number, arg2: org.lwjgl.util.vector.Vector3f): org.lwjgl.util.vector.Vector3f;
    }
  }
}
