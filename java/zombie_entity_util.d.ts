/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.entity.util {
    /**
     * @customConstructor Array.new
     * @
     * [CLASS] zombie.entity.util.Array
     */
    export class Array<T> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Object[] arg0)
       *  - (int arg0)
       *  - (Class arg0)
       *  - (Array arg0)
       *  - (boolean arg0, int arg1)
       *  - (boolean arg0, int arg1, Class arg2)
       *  - (boolean arg0, Object[] arg1, int arg2, int arg3)
       */
      constructor(arg0?: T[] | number | java.lang.Class<any> | zombie.entity.util.Array<T> | boolean, arg1?: number | T[], arg2?: java.lang.Class<any> | number, arg3?: number);
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (Object arg0, Object arg1): void
       *  - (Object arg0, Object arg1, Object arg2): void
       *  - (Object arg0, Object arg1, Object arg2, Object arg3): void
       */
      add(arg0: any, arg1?: any, arg2?: any, arg3?: any): void;
      /**
       * Method Parameters: 
       *  - (Object... arg0): void
       *  - (Array arg0): void
       *  - (Object[] arg0, int arg1, int arg2): void
       *  - (Array arg0, int arg1, int arg2): void
       */
      addAll(arg0: any | zombie.entity.util.Array<T>, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Object arg0, boolean arg1): boolean
       */
      contains(arg0: any, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Array arg0, boolean arg1): boolean
       */
      containsAll(arg0: zombie.entity.util.Array<T>, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Array arg0, boolean arg1): boolean
       */
      containsAny(arg0: zombie.entity.util.Array<T>, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): T[]
       */
      ensureCapacity(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equalsIdentity(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      first(): any;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<any>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): T
       */
      get(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0, boolean arg1): number
       */
      indexOf(arg0: any, arg1: boolean): number;
      /**
       * Method Parameters: 
       *  - (int arg0, Object arg1): void
       */
      insert(arg0: number, arg1: any): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      insertRange(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator
       *  - (Empty): zombie.entity.util.Array$ArrayIterator<T>
       */
      iterator(): java.util.Iterator<any> | zombie.entity.util.Array$ArrayIterator<T>;
      /**
       * Method Parameters: 
       *  - (Object arg0, boolean arg1): number
       */
      lastIndexOf(arg0: any, arg1: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      notEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      peek(): any;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      pop(): any;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      random(): any;
      /**
       * Method Parameters: 
       *  - (Array arg0, boolean arg1): boolean
       */
      removeAll(arg0: zombie.entity.util.Array<T>, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): T
       */
      removeIndex(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      removeRange(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Object arg0, boolean arg1): boolean
       */
      removeValue(arg0: any, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reverse(): void;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): java.lang.Iterable<T>
       */
      select(arg0: zombie.entity.util.Predicate<T>): java.lang.Iterable<T>;
      /**
       * Method Parameters: 
       *  - (Comparator arg0, int arg1): T
       */
      selectRanked(arg0: java.util.Comparator<T>, arg1: number): any;
      /**
       * Method Parameters: 
       *  - (Comparator arg0, int arg1): number
       */
      selectRankedIndex(arg0: java.util.Comparator<T>, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, Object arg1): void
       */
      set(arg0: number, arg1: any): void;
      /**
       * Method Parameters: 
       *  - (int arg0): T[]
       */
      setSize(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): T[]
       */
      shrink(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      shuffle(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (Comparator arg0): void
       */
      sort(arg0?: java.util.Comparator<T>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<T>
       */
      spliterator(): java.util.Spliterator<any>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      swap(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): T[]
       *  - (Class arg0): V[]
       */
      toArray<V>(arg0?: java.lang.Class<V>): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       *  - (String arg0): string
       */
      toString(arg0?: string): string;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      truncate(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Class arg0): zombie.entity.util.Array<T>
       *  - (boolean arg0, int arg1, Class arg2): zombie.entity.util.Array<T>
       */
      static of<T>(arg0: java.lang.Class<T> | boolean, arg1?: number, arg2?: java.lang.Class<T>): zombie.entity.util.Array<T>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Object... arg0): zombie.entity.util.Array<T>
       */
      static with<T>(arg0: any): zombie.entity.util.Array<T>;
    }
    /**
     * @customConstructor ArrayIterable.new
     * @
     * [CLASS] zombie.entity.util.Array$ArrayIterable
     */
    export class Array$ArrayIterable<T> {
      /**
       * Constructors: 
       *  - (Array arg0)
       *  - (Array arg0, boolean arg1)
       */
      constructor(arg0: zombie.entity.util.Array<T>, arg1?: boolean);
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator
       *  - (Empty): zombie.entity.util.Array$ArrayIterator<T>
       */
      iterator(): java.util.Iterator<any> | zombie.entity.util.Array$ArrayIterator<T>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<T>
       */
      spliterator(): java.util.Spliterator<any>;
    }
    /**
     * @customConstructor ArrayIterator.new
     * @
     * [CLASS] zombie.entity.util.Array$ArrayIterator
     */
    export class Array$ArrayIterator<T> {
      /**
       * Constructors: 
       *  - (Array arg0)
       *  - (Array arg0, boolean arg1)
       */
      constructor(arg0: zombie.entity.util.Array<T>, arg1?: boolean);
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<any>): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEachRemaining(arg0: java.util._function_.Consumer<any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasNext(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator
       *  - (Empty): zombie.entity.util.Array$ArrayIterator<T>
       */
      iterator(): java.util.Iterator<any> | zombie.entity.util.Array$ArrayIterator<T>;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      next(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      remove(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<T>
       */
      spliterator(): java.util.Spliterator<any>;
    }
    /**
     * @customConstructor BitSet.new
     * @
     * [CLASS] zombie.entity.util.BitSet
     */
    export class BitSet {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0)
       *  - (BitSet arg0)
       */
      constructor(arg0?: number | zombie.entity.util.BitSet);
      /**
       * Method Parameters: 
       *  - (BitSet arg0): void
       */
      and(arg0: zombie.entity.util.BitSet): void;
      /**
       * Method Parameters: 
       *  - (BitSet arg0): void
       */
      andNot(arg0: zombie.entity.util.BitSet): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (int arg0): void
       */
      clear(arg0?: number): void;
      /**
       * Method Parameters: 
       *  - (BitSet arg0): boolean
       */
      containsAll(arg0: zombie.entity.util.BitSet): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      flip(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      get(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      getAndClear(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      getAndSet(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (BitSet arg0): boolean
       */
      intersects(arg0: zombie.entity.util.BitSet): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      length(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      nextClearBit(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      nextSetBit(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      notEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      numBits(): number;
      /**
       * Method Parameters: 
       *  - (BitSet arg0): void
       */
      or(arg0: zombie.entity.util.BitSet): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      set(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (BitSet arg0): void
       */
      xor(arg0: zombie.entity.util.BitSet): void;
    }
    /**
     * @customConstructor GameEntityUtil.new
     * @
     * [CLASS] zombie.entity.util.GameEntityUtil
     */
    export class GameEntityUtil {
      /** int */
      static readonly CloseWindowDistance: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getCloseWindowDistance(): number;
    }
    /**
     * @customConstructor ImmutableArray.new
     * @
     * [CLASS] zombie.entity.util.ImmutableArray
     */
    export class ImmutableArray<T> {
      /**
       * Constructors: 
       *  - (Array arg0)
       */
      constructor(arg0: zombie.entity.util.Array<T>);
      /**
       * Method Parameters: 
       *  - (Object arg0, boolean arg1): boolean
       */
      contains(arg0: any, arg1: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      first(): any;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<any>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): T
       */
      get(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0, boolean arg1): number
       */
      indexOf(arg0: any, arg1: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<T>
       */
      iterator(): java.util.Iterator<T>;
      /**
       * Method Parameters: 
       *  - (Object arg0, boolean arg1): number
       */
      lastIndexOf(arg0: any, arg1: boolean): number;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      peek(): any;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      random(): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<T>
       */
      spliterator(): java.util.Spliterator<any>;
      /**
       * Method Parameters: 
       *  - (Empty): T[]
       *  - (Class arg0): V[]
       */
      toArray<V>(arg0?: java.lang.Class<V>): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       *  - (String arg0): string
       */
      toString(arg0?: string): string;
    }
    /**
     * @customConstructor Predicate.new
     * @
     * [INTERFACE] zombie.entity.util.Predicate
     */
    export class Predicate<T> {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      evaluate(arg0: any): boolean;
    }
    /**
     * @customConstructor PredicateIterable.new
     * @
     * [CLASS] zombie.entity.util.Predicate$PredicateIterable
     */
    export class Predicate$PredicateIterable<T> {
      /**
       * Constructors: 
       *  - (Iterable arg0, Predicate arg1)
       */
      constructor(arg0: java.lang.Iterable<T>, arg1: zombie.entity.util.Predicate<T>);
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<T>
       */
      iterator(): java.util.Iterator<T>;
      /**
       * Method Parameters: 
       *  - (Iterable arg0, Predicate arg1): void
       */
      set(arg0: java.lang.Iterable<T>, arg1: zombie.entity.util.Predicate<T>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<T>
       */
      spliterator(): java.util.Spliterator<any>;
    }
    /**
     * @customConstructor PredicateIterator.new
     * @
     * [CLASS] zombie.entity.util.Predicate$PredicateIterator
     */
    export class Predicate$PredicateIterator<T> {
      /**
       * Constructors: 
       *  - (Iterable arg0, Predicate arg1)
       *  - (Iterator arg0, Predicate arg1)
       */
      constructor(arg0: java.lang.Iterable<T> | java.util.Iterator<T>, arg1: zombie.entity.util.Predicate<T>);
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEachRemaining(arg0: java.util._function_.Consumer<any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasNext(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      next(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      remove(): void;
      /**
       * Method Parameters: 
       *  - (Iterable arg0, Predicate arg1): void
       *  - (Iterator arg0, Predicate arg1): void
       */
      set(arg0: java.lang.Iterable<T> | java.util.Iterator<T>, arg1: zombie.entity.util.Predicate<T>): void;
    }
  }
}
