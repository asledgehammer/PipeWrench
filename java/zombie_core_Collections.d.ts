/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.Collections {
    /**
     * @customConstructor NonBlockingHashMap.new
     * @
     * [CLASS] zombie.core.Collections.NonBlockingHashMap extends java.util.AbstractMap<TypeK, TypeV>
     */
    export class NonBlockingHashMap<TypeK, TypeV> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0)
       */
      constructor(arg0?: number);
      /**
       * Method Parameters:
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters:
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters:
       *  - (Object arg0, BiFunction arg1): V
       */
      compute(arg0: any, arg1: java.util._function_.BiFunction<any, any, any>): any;
      /**
       * Method Parameters:
       *  - (Object arg0, Function arg1): V
       */
      computeIfAbsent(arg0: any, arg1: java.util._function_.Function<any, any>): any;
      /**
       * Method Parameters:
       *  - (Object arg0, BiFunction arg1): V
       */
      computeIfPresent(arg0: any, arg1: java.util._function_.BiFunction<any, any, any>): any;
      /**
       * Method Parameters:
       *  - (Object arg0): boolean
       */
      contains(arg0: any): boolean;
      /**
       * Method Parameters:
       *  - (Object arg0): boolean
       */
      containsKey(arg0: any): boolean;
      /**
       * Method Parameters:
       *  - (Object arg0): boolean
       */
      containsValue(arg0: any): boolean;
      /**
       * Method Parameters:
       *  - (Empty): java.util.Enumeration<TypeV>
       */
      elements(): java.util.Enumeration<TypeV>;
      /**
       * Method Parameters:
       *  - (Empty): java.util.Set<java.util.Map$Entry<TypeK, TypeV>>
       */
      entrySet(): java.util.Set<java.util.Map$Entry<TypeK, TypeV>>;
      /**
       * Method Parameters:
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters:
       *  - (BiConsumer arg0): void
       */
      forEach(arg0: java.util._function_.BiConsumer<any, any>): void;
      /**
       * Method Parameters:
       *  - (Object arg0): TypeV
       */
      get(arg0: any): any;
      /**
       * Method Parameters:
       *  - (Object arg0, Object arg1): V
       */
      getOrDefault(arg0: any, arg1: any): any;
      /**
       * Method Parameters:
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters:
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters:
       *  - (Empty): java.util.Set<TypeK>
       */
      keySet(): java.util.Set<TypeK>;
      /**
       * Method Parameters:
       *  - (Empty): java.util.Enumeration<TypeK>
       */
      keys(): java.util.Enumeration<TypeK>;
      /**
       * Method Parameters:
       *  - (Object arg0, Object arg1, BiFunction arg2): V
       */
      merge(arg0: any, arg1: any, arg2: java.util._function_.BiFunction<any, any, any>): any;
      /**
       * Method Parameters:
       *  - (Empty): void
       */
      print(): void;
      /**
       * Method Parameters:
       *  - (Object arg0, Object arg1): TypeV
       */
      put(arg0: any, arg1: any): any;
      /**
       * Method Parameters:
       *  - (Map arg0): void
       */
      putAll(arg0: java.util.Map<TypeK, TypeV>): void;
      /**
       * Method Parameters:
       *  - (Object arg0, Object arg1): TypeV
       */
      putIfAbsent(arg0: any, arg1: any): any;
      /**
       * Method Parameters:
       *  - (Object arg0): TypeV
       *  - (Object arg0, Object arg1): boolean
       */
      remove(arg0: any, arg1?: any): any;
      /**
       * Method Parameters:
       *  - (Object arg0, Object arg1): TypeV
       *  - (Object arg0, Object arg1, Object arg2): boolean
       */
      replace(arg0: any, arg1: any, arg2?: any): any;
      /**
       * Method Parameters:
       *  - (BiFunction arg0): void
       */
      replaceAll(arg0: java.util._function_.BiFunction<any, any, any>): void;
      /**
       * Method Parameters:
       *  - (Empty): number
       */
      reprobes(): number;
      /**
       * Method Parameters:
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters:
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters:
       *  - (Empty): java.util.Collection<TypeV>
       */
      values(): java.util.Collection<TypeV>;
    }
  }
}
