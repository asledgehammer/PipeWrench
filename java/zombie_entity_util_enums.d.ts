/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.entity.util.enums {
    /**
     * @customConstructor EnumBitStore.new
     * @
     * [CLASS] zombie.entity.util.enums.EnumBitStore
     */
    export class EnumBitStore<E> {

      /**
       * Method Parameters: 
       *  - (Enum arg0): void
       */
      add(arg0: E<any>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (EnumBitStore arg0): void
       */
      addAll(arg0?: zombie.entity.util.enums.EnumBitStore<E>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Enum arg0): boolean
       *  - (int arg0): boolean
       */
      contains(arg0: E<any> | number): boolean;
      /**
       * Method Parameters: 
       *  - (EnumBitStore arg0): void
       */
      copyFrom(arg0: zombie.entity.util.enums.EnumBitStore<E>): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBits(): number;
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
       *  - (ByteBuffer arg0): void
       */
      load(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (Enum arg0): void
       */
      remove(arg0: E<any>): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setBits(arg0: number): void;
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
       * @noSelf
       *
       * Method Parameters: 
       *  - (Class arg0): zombie.entity.util.enums.EnumBitStore<E>
       */
      static allOf<E>(arg0: java.lang.Class<E>): zombie.entity.util.enums.EnumBitStore<E>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (EnumBitStore arg0): zombie.entity.util.enums.EnumBitStore<E>
       */
      static copyOf<E>(arg0: zombie.entity.util.enums.EnumBitStore<E>): zombie.entity.util.enums.EnumBitStore<E>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Class arg0): zombie.entity.util.enums.EnumBitStore<E>
       */
      static noneOf<E>(arg0: java.lang.Class<E>): zombie.entity.util.enums.EnumBitStore<E>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Enum arg0): zombie.entity.util.enums.EnumBitStore<E>
       *  - (Enum arg0, Enum arg1): zombie.entity.util.enums.EnumBitStore<E>
       *  - (Enum arg0, Enum... arg1): zombie.entity.util.enums.EnumBitStore<E>
       *  - (Enum arg0, Enum arg1, Enum arg2): zombie.entity.util.enums.EnumBitStore<E>
       *  - (Enum arg0, Enum arg1, Enum arg2, Enum arg3): zombie.entity.util.enums.EnumBitStore<E>
       *  - (Enum arg0, Enum arg1, Enum arg2, Enum arg3, Enum arg4): zombie.entity.util.enums.EnumBitStore<E>
       */
      static of<E>(arg0: E<any>, arg1?: E<any> | E[], arg2?: E<any>, arg3?: E<any>, arg4?: E<any>): zombie.entity.util.enums.EnumBitStore<E>;
    }
  }
}
