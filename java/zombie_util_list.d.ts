/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.util.list {
    /**
     * @customConstructor PZArrayList.new
     * @
     * [CLASS] zombie.util.list.PZArrayList extends java.util.AbstractList<E>
     */
    export class PZArrayList<E> {
      /**
       * Constructors: 
       *  - (Class arg0, int arg1)
       */
      constructor(arg0: java.lang.Class<E>, arg1: number);
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
      addAll(arg0: java.util.Collection<any> | number, arg1?: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
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
       *  - (Empty): E[]
       */
      getElements(): any;
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
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.AbstractList<E>
       */
      static emptyList<E>(): java.util.AbstractList<E>;
    }
  }
}
