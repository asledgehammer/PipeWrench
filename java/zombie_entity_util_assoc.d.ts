/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.entity.util.assoc {
    /**
     * @customConstructor AssocArray.new
     * @
     * [CLASS] zombie.entity.util.assoc.AssocArray
     */
    export class AssocArray<K, V> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0)
       */
      constructor(arg0?: number);
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): boolean
       *  - (int arg0, Object arg1, Object arg2): void
       */
      add(arg0: any | number, arg1: any | any, arg2?: any): boolean | void;
      /**
       * Method Parameters: 
       *  - (AssocArray arg0): void
       */
      addAll(arg0: zombie.entity.util.assoc.AssocArray<K, V>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
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
       *  - (int arg0): void
       */
      ensureCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (BiConsumer arg0): void
       */
      forEach(arg0: java.util._function_.BiConsumer<K, V>): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): V
       */
      get(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (int arg0): K
       */
      getKey(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (int arg0): V
       */
      getValue(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      indexOfKey(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      indexOfValue(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      lastIndexOfKey(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      lastIndexOfValue(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      put(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (AssocArray arg0): void
       */
      putAll(arg0: zombie.entity.util.assoc.AssocArray<K, V>): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): V
       */
      remove(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (int arg0): V
       */
      removeIndex(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      set(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (AssocArray arg0): void
       */
      setAll(arg0: zombie.entity.util.assoc.AssocArray<K, V>): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize(): void;
    }
    /**
     * @customConstructor AssocEnumArray.new
     * @
     * [CLASS] zombie.entity.util.assoc.AssocEnumArray extends zombie.entity.util.assoc.AssocArray<K, V>
     */
    export class AssocEnumArray<K, V> {
      /**
       * Constructors: 
       *  - (Class arg0)
       *  - (Class arg0, int arg1)
       */
      constructor(arg0: java.lang.Class<K>, arg1?: number);
      /**
       * Method Parameters: 
       *  - (Enum arg0, Object arg1): boolean
       *  - (Object arg0, Object arg1): boolean
       *  - (int arg0, Enum arg1, Object arg2): void
       *  - (int arg0, Object arg1, Object arg2): void
       */
      add(arg0: any, arg1: any, arg2?: any): boolean | void;
      /**
       * Method Parameters: 
       *  - (AssocArray arg0): void
       */
      addAll(arg0: zombie.entity.util.assoc.AssocArray<any, any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Enum arg0): boolean
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
       *  - (int arg0): void
       */
      ensureCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (AssocEnumArray arg0): boolean
       */
      equalsKeys(arg0: zombie.entity.util.assoc.AssocEnumArray<K, V>): boolean;
      /**
       * Method Parameters: 
       *  - (BiConsumer arg0): void
       */
      forEach(arg0: java.util._function_.BiConsumer<any, any>): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): V
       */
      get(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (int arg0): K
       */
      getKey(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (int arg0): V
       */
      getValue(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      indexOfKey(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      indexOfValue(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<K>
       */
      keys(): java.util.Iterator<K>;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      lastIndexOfKey(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      lastIndexOfValue(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Enum arg0, Object arg1): V
       *  - (Object arg0, Object arg1): any
       */
      put(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (AssocArray arg0): void
       */
      putAll(arg0: zombie.entity.util.assoc.AssocArray<any, any>): void;
      /**
       * Method Parameters: 
       *  - (Enum arg0): V
       *  - (Object arg0): any
       */
      remove(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (int arg0): V
       */
      removeIndex(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      set(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (AssocArray arg0): void
       */
      setAll(arg0: zombie.entity.util.assoc.AssocArray<any, any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize(): void;
    }
  }
}
