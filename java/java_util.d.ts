/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace java.util {
    export type AbstractList<E> = any;
    export type ArrayDeque<E> = any;
    /**
     * @customConstructor ArrayList.new
     * @
     * [CLASS] java.util.ArrayList extends java.util.AbstractList<E>
     */
    export class ArrayList<E> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0)
       *  - (Collection arg0)
       */
      constructor(arg0?: number | java.util.Collection<E>);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (int arg0, Object arg1): void
       */
      add(arg0: any | number, arg1?: any): boolean | void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       *  - (int arg0, Collection arg1): boolean
       */
      addAll(arg0: java.util.Collection<E> | number, arg1?: java.util.Collection<E>): boolean;
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
       *  - (Object arg0): boolean
       */
      contains(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      containsAll(arg0: java.util.Collection<any>): boolean;
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
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<E>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      get(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      indexOf(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<E>
       */
      iterator(): java.util.Iterator<E>;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      lastIndexOf(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ListIterator<E>
       *  - (int arg0): java.util.ListIterator<E>
       */
      listIterator(arg0?: number): java.util.ListIterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      parallelStream(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       *  - (Object arg0): boolean
       */
      remove(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      removeAll(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): boolean
       */
      removeIf(arg0: java.util._function_.Predicate<E>): boolean;
      /**
       * Method Parameters: 
       *  - (UnaryOperator arg0): void
       */
      replaceAll(arg0: java.util._function_.UnaryOperator<E>): void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      retainAll(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, Object arg1): E
       */
      set(arg0: number, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): void
       */
      sort(arg0: java.util.Comparator<E>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<E>
       */
      spliterator(): java.util.Spliterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      stream(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.List<E>
       */
      subList(arg0: number, arg1: number): java.util.List<E>;
      /**
       * Method Parameters: 
       *  - (Empty): any[]
       *  - (Object[] arg0): T[]
       *  - (IntFunction arg0): T[]
       */
      toArray<T>(arg0?: any | java.util._function_.IntFunction<T[]>): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize(): void;
    }
    export type BitSet = any;
    export type Calendar = any;
    export type Collection<E> = any;
    export type Comparator<T> = any;
    export type Date = any;
    /**
     * @customConstructor EnumMap.new
     * @
     * [CLASS] java.util.EnumMap extends java.util.AbstractMap<K, V>
     */
    export class EnumMap<K, V> {
      /**
       * Constructors: 
       *  - (Class arg0)
       *  - (EnumMap arg0)
       *  - (Map arg0)
       */
      constructor(arg0: java.lang.Class<K> | java.util.EnumMap<K, V> | java.util.Map<K, V>);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       *  - (Empty): java.util.EnumMap<K, V>
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
      containsKey(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      containsValue(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Set<java.util.Map$Entry<K, V>>
       */
      entrySet(): java.util.Set<java.util.Map$Entry<K, V>>;
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
       *  - (Object arg0): V
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
       *  - (Empty): java.util.Set<K>
       */
      keySet(): java.util.Set<K>;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1, BiFunction arg2): V
       */
      merge(arg0: any, arg1: any, arg2: java.util._function_.BiFunction<any, any, any>): any;
      /**
       * Method Parameters: 
       *  - (Enum arg0, Object arg1): V
       *  - (Object arg0, Object arg1): any
       */
      put(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Map arg0): void
       */
      putAll(arg0: java.util.Map<K, V>): void;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      putIfAbsent(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): V
       *  - (Object arg0, Object arg1): boolean
       */
      remove(arg0: any, arg1?: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
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
      size(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Collection<V>
       */
      values(): java.util.Collection<V>;
    }
    export type Enumeration<E> = any;
    export type GregorianCalendar = any;
    /**
     * @customConstructor HashMap.new
     * @
     * [CLASS] java.util.HashMap extends java.util.AbstractMap<K, V>
     */
    export class HashMap<K, V> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0)
       *  - (Map arg0)
       *  - (int arg0, float arg1)
       */
      constructor(arg0?: number | java.util.Map<K, V>, arg1?: number);
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
      compute(arg0: any, arg1: java.util._function_.BiFunction<K, V, V>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Function arg1): V
       */
      computeIfAbsent(arg0: any, arg1: java.util._function_.Function<K, V>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, BiFunction arg1): V
       */
      computeIfPresent(arg0: any, arg1: java.util._function_.BiFunction<K, V, V>): any;
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
       *  - (Empty): java.util.Set<java.util.Map$Entry<K, V>>
       */
      entrySet(): java.util.Set<java.util.Map$Entry<K, V>>;
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
       *  - (Empty): java.util.Set<K>
       */
      keySet(): java.util.Set<K>;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1, BiFunction arg2): V
       */
      merge(arg0: any, arg1: any, arg2: java.util._function_.BiFunction<V, V, V>): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      put(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Map arg0): void
       */
      putAll(arg0: java.util.Map<K, V>): void;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       */
      putIfAbsent(arg0: any, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): V
       *  - (Object arg0, Object arg1): boolean
       */
      remove(arg0: any, arg1?: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, Object arg1): V
       *  - (Object arg0, Object arg1, Object arg2): boolean
       */
      replace(arg0: any, arg1: any, arg2?: any): any;
      /**
       * Method Parameters: 
       *  - (BiFunction arg0): void
       */
      replaceAll(arg0: java.util._function_.BiFunction<K, V, V>): void;
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
       *  - (Empty): java.util.Collection<V>
       */
      values(): java.util.Collection<V>;
    }
    export type HashSet<E> = any;
    /**
     * @customConstructor Iterator.new
     * @
     * [INTERFACE] java.util.Iterator
     */
    export class Iterator<E> {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEachRemaining(arg0: java.util._function_.Consumer<E>): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasNext(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      next(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      remove(): void;
    }
    export type LinkedHashMap<K, V> = any;
    /**
     * @customConstructor LinkedList.new
     * @
     * [CLASS] java.util.LinkedList extends java.util.AbstractSequentialList<E>
     */
    export class LinkedList<E> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Collection arg0)
       */
      constructor(arg0?: java.util.Collection<E>);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (int arg0, Object arg1): void
       */
      add(arg0: any | number, arg1?: any): boolean | void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       *  - (int arg0, Collection arg1): boolean
       */
      addAll(arg0: java.util.Collection<E> | number, arg1?: java.util.Collection<E>): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      addFirst(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      addLast(arg0: any): void;
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
       *  - (Object arg0): boolean
       */
      contains(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      containsAll(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<E>
       */
      descendingIterator(): java.util.Iterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      element(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<any>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      get(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      getFirst(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      getLast(): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      indexOf(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<E>
       */
      iterator(): java.util.Iterator<any>;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      lastIndexOf(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ListIterator<E>
       *  - (int arg0): java.util.ListIterator<E>
       */
      listIterator(arg0?: number): java.util.ListIterator<any> | java.util.ListIterator<E>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      offer(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      offerFirst(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      offerLast(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      parallelStream(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      peek(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      peekFirst(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      peekLast(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      poll(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      pollFirst(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      pollLast(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      pop(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      push(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): E
       *  - (int arg0): E
       *  - (Object arg0): boolean
       */
      remove(arg0?: any): any;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      removeAll(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      removeFirst(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      removeFirstOccurrence(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): boolean
       */
      removeIf(arg0: java.util._function_.Predicate<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      removeLast(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      removeLastOccurrence(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (UnaryOperator arg0): void
       */
      replaceAll(arg0: java.util._function_.UnaryOperator<any>): void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      retainAll(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, Object arg1): E
       */
      set(arg0: number, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): void
       */
      sort(arg0: java.util.Comparator<any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<E>
       */
      spliterator(): java.util.Spliterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      stream(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.List<E>
       */
      subList(arg0: number, arg1: number): java.util.List<any>;
      /**
       * Method Parameters: 
       *  - (Empty): any[]
       *  - (Object[] arg0): T[]
       *  - (IntFunction arg0): T[]
       */
      toArray<T>(arg0?: any | java.util._function_.IntFunction<T[]>): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    export type List<E> = any;
    export type ListIterator<E> = any;
    export type Locale = any;
    export type Map<K, V> = any;
    export type Map$Entry<K, V> = any;
    export type Optional<T> = any;
    export type Set<E> = any;
    export type Spliterator<T> = any;
    /**
     * @customConstructor Stack.new
     * @
     * [CLASS] java.util.Stack extends java.util.Vector<E>
     */
    export class Stack<E> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (int arg0, Object arg1): void
       */
      add(arg0: any, arg1?: any): boolean | void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       *  - (int arg0, Collection arg1): boolean
       */
      addAll(arg0: java.util.Collection<any> | number, arg1?: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      addElement(arg0: any): void;
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
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      contains(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      containsAll(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Object[] arg0): void
       */
      copyInto(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      elementAt(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Enumeration<E>
       */
      elements(): java.util.Enumeration<any>;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      empty(): boolean;
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
       *  - (Empty): E
       */
      firstElement(): any;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<any>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      get(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       *  - (Object arg0, int arg1): number
       */
      indexOf(arg0: any, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0, int arg1): void
       */
      insertElementAt(arg0: any, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<E>
       */
      iterator(): java.util.Iterator<any>;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      lastElement(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       *  - (Object arg0, int arg1): number
       */
      lastIndexOf(arg0: any, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ListIterator<E>
       *  - (int arg0): java.util.ListIterator<E>
       */
      listIterator(arg0?: number): java.util.ListIterator<any>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      parallelStream(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      peek(): any;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      pop(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): E
       */
      push(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       *  - (Object arg0): boolean
       */
      remove(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      removeAll(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllElements(): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      removeElement(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeElementAt(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): boolean
       */
      removeIf(arg0: java.util._function_.Predicate<any>): boolean;
      /**
       * Method Parameters: 
       *  - (UnaryOperator arg0): void
       */
      replaceAll(arg0: java.util._function_.UnaryOperator<any>): void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      retainAll(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      search(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (int arg0, Object arg1): E
       */
      set(arg0: number, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, int arg1): void
       */
      setElementAt(arg0: any, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSize(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): void
       */
      sort(arg0: java.util.Comparator<any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<E>
       */
      spliterator(): java.util.Spliterator<any>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      stream(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.List<E>
       */
      subList(arg0: number, arg1: number): java.util.List<any>;
      /**
       * Method Parameters: 
       *  - (Empty): any[]
       *  - (Object[] arg0): T[]
       *  - (IntFunction arg0): T[]
       */
      toArray<T>(arg0?: any | java.util._function_.IntFunction<T[]>): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize(): void;
    }
    export type TimeZone = any;
    /**
     * @customConstructor Vector.new
     * @
     * [CLASS] java.util.Vector extends java.util.AbstractList<E>
     */
    export class Vector<E> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0)
       *  - (Collection arg0)
       *  - (int arg0, int arg1)
       */
      constructor(arg0?: number | java.util.Collection<E>, arg1?: number);
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (int arg0, Object arg1): void
       */
      add(arg0: any | number, arg1?: any): boolean | void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       *  - (int arg0, Collection arg1): boolean
       */
      addAll(arg0: java.util.Collection<E> | number, arg1?: java.util.Collection<E>): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      addElement(arg0: any): void;
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
       *  - (Empty): any
       */
      clone(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      contains(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      containsAll(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Object[] arg0): void
       */
      copyInto(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      elementAt(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Enumeration<E>
       */
      elements(): java.util.Enumeration<E>;
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
       *  - (Empty): E
       */
      firstElement(): any;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<E>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      get(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       *  - (Object arg0, int arg1): number
       */
      indexOf(arg0: any, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0, int arg1): void
       */
      insertElementAt(arg0: any, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<E>
       */
      iterator(): java.util.Iterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): E
       */
      lastElement(): any;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       *  - (Object arg0, int arg1): number
       */
      lastIndexOf(arg0: any, arg1?: number): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ListIterator<E>
       *  - (int arg0): java.util.ListIterator<E>
       */
      listIterator(arg0?: number): java.util.ListIterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      parallelStream(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       *  - (Object arg0): boolean
       */
      remove(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      removeAll(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllElements(): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      removeElement(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      removeElementAt(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): boolean
       */
      removeIf(arg0: java.util._function_.Predicate<E>): boolean;
      /**
       * Method Parameters: 
       *  - (UnaryOperator arg0): void
       */
      replaceAll(arg0: java.util._function_.UnaryOperator<E>): void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      retainAll(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, Object arg1): E
       */
      set(arg0: number, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Object arg0, int arg1): void
       */
      setElementAt(arg0: any, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setSize(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size(): number;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): void
       */
      sort(arg0: java.util.Comparator<E>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<E>
       */
      spliterator(): java.util.Spliterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      stream(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.List<E>
       */
      subList(arg0: number, arg1: number): java.util.List<E>;
      /**
       * Method Parameters: 
       *  - (Empty): any[]
       *  - (Object[] arg0): T[]
       *  - (IntFunction arg0): T[]
       */
      toArray<T>(arg0?: any | java.util._function_.IntFunction<T[]>): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      trimToSize(): void;
    }
  }
}
