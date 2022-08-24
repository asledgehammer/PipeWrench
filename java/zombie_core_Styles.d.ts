/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.Styles {
    /**
     * @customConstructor AbstractStyle.new
     * @
     * [ABSTRACT CLASS] zombie.core.Styles.AbstractStyle
     */
    export class AbstractStyle {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Styles.GeometryData
       */
      build(): zombie.core.Styles.GeometryData;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Styles.AlphaOp
       */
      getAlphaOp(): zombie.core.Styles.AlphaOp;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getRenderSprite(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStyleID(): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      render(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetState(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setupState(): void;
    }
    /** [ENUM] zombie.core.Styles.AlphaOp */
    export class AlphaOp {
      protected constructor();
      static readonly KEEP: zombie.core.Styles.AlphaOp;
      static readonly PREMULTIPLY: zombie.core.Styles.AlphaOp;
      static readonly ZERO: zombie.core.Styles.AlphaOp;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.Styles.AlphaOp>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.Styles.AlphaOp>;
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
       *  - (int arg0, int arg1, FloatBuffer arg2): void
       *  - (ReadableColor arg0, int arg1, FloatBuffer arg2): void
       */
      op(arg0: number | org.lwjgl.util.ReadableColor, arg1: number, arg2: java.nio.FloatBuffer): void;
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
       *  - (String arg0): zombie.core.Styles.AlphaOp
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.Styles.AlphaOp | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.Styles.AlphaOp[]
       */
      static values(): zombie.core.Styles.AlphaOp[];
    }
    /**
     * @customConstructor FloatList.new
     * @
     * [CLASS] zombie.core.Styles.FloatList
     */
    export class FloatList {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0)
       *  - (boolean arg0, int arg1)
       */
      constructor(arg0?: number | boolean, arg1?: number);
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      add(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float[] arg0): void
       *  - (FloatList arg0): void
       */
      addAll(arg0: number[] | zombie.core.Styles.FloatList): void;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      array(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      capacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      ensureCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      get(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      remove(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Object[] arg0): void
       */
      toArray(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize(): void;
    }
    /**
     * @customConstructor GeometryData.new
     * @
     * [CLASS] zombie.core.Styles.GeometryData
     */
    export class GeometryData {
      /**
       * Constructors: 
       *  - (FloatList arg0, ShortList arg1)
       */
      constructor(arg0: zombie.core.Styles.FloatList, arg1: zombie.core.Styles.ShortList);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Styles.ShortList
       */
      getIndexData(): zombie.core.Styles.ShortList;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Styles.FloatList
       */
      getVertexData(): zombie.core.Styles.FloatList;
    }
    /**
     * @customConstructor ShortList.new
     * @
     * [CLASS] zombie.core.Styles.ShortList
     */
    export class ShortList {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0)
       *  - (boolean arg0, int arg1)
       */
      constructor(arg0?: number | boolean, arg1?: number);
      /**
       * Method Parameters: 
       *  - (short arg0): number
       */
      add(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (short[] arg0): void
       *  - (ShortList arg0): void
       */
      addAll(arg0: number[] | zombie.core.Styles.ShortList): void;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      array(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      capacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      ensureCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      get(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      remove(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (short[] arg0): number[]
       */
      toArray(arg0: number[]): number[];
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize(): void;
    }
  }
}
