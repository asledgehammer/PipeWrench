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
      add<E, T>(arg0: any | number, arg1?: any): boolean | void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       *  - (int arg0, Collection arg1): boolean
       */
      addAll<E, T>(arg0: number | java.util.Collection<any>, arg1?: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear<E, T>(): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      contains<E, T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      containsAll<E, T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals<E, T>(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach<E, T>(arg0: java.util._function_.Consumer<any>): void;
      /**
       * Method Parameters: 
       *  - (int arg0): E
       */
      get<E, T>(arg0: number): any;
      /**
       * Method Parameters: 
       *  - (Empty): E[]
       */
      getElements<E, T>(): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode<E, T>(): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      indexOf<E, T>(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty<E, T>(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Iterator<E>
       */
      iterator<E, T>(): java.util.Iterator<E>;
      /**
       * Method Parameters: 
       *  - (Object arg0): number
       */
      lastIndexOf<E, T>(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ListIterator<E>
       *  - (int arg0): java.util.ListIterator<E>
       */
      listIterator<E, T>(arg0?: number): java.util.ListIterator<E>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      parallelStream<E, T>(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       *  - (int arg0): E
       */
      remove<E, T>(arg0: any): any;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      removeAll<E, T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): boolean
       */
      removeIf<E, T>(arg0: java.util._function_.Predicate<any>): boolean;
      /**
       * Method Parameters: 
       *  - (UnaryOperator arg0): void
       */
      replaceAll<E, T>(arg0: java.util._function_.UnaryOperator<any>): void;
      /**
       * Method Parameters: 
       *  - (Collection arg0): boolean
       */
      retainAll<E, T>(arg0: java.util.Collection<any>): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, Object arg1): E
       */
      set<E, T>(arg0: number, arg1: any): any;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      size<E, T>(): number;
      /**
       * Method Parameters: 
       *  - (Comparator arg0): void
       */
      sort<E, T>(arg0: java.util.Comparator<any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Spliterator<E>
       */
      spliterator<E, T>(): java.util.Spliterator<any>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.stream.Stream<E>
       */
      stream<E, T>(): java.util.stream.Stream<any>;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): java.util.List<E>
       */
      subList<E, T>(arg0: number, arg1: number): java.util.List<any>;
      /**
       * Method Parameters: 
       *  - (Empty): any[]
       *  - (Object[] arg0): T[]
       *  - (IntFunction arg0): T[]
       */
      toArray<E, T>(arg0?: any | java.util._function_.IntFunction<T[]>): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString<E, T>(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.AbstractList<E>
       */
      static emptyList<E, T>(): java.util.AbstractList<E>;
    }
  }
}
