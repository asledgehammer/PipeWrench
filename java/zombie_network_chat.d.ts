/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.network.chat {
    /** [ENUM] zombie.network.chat.ChatType */
    export class ChatType {
      protected constructor();
      static readonly admin: zombie.network.chat.ChatType;
      static readonly faction: zombie.network.chat.ChatType;
      static readonly general: zombie.network.chat.ChatType;
      static readonly notDefined: zombie.network.chat.ChatType;
      static readonly radio: zombie.network.chat.ChatType;
      static readonly safehouse: zombie.network.chat.ChatType;
      static readonly say: zombie.network.chat.ChatType;
      static readonly server: zombie.network.chat.ChatType;
      static readonly shout: zombie.network.chat.ChatType;
      static readonly whisper: zombie.network.chat.ChatType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.network.chat.ChatType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.network.chat.ChatType>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTitleID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getValue(): number;
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
       *  - (Integer arg0): zombie.network.chat.ChatType
       *  - (String arg0): zombie.network.chat.ChatType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: number | string | java.lang.Class<T>, arg1?: string): zombie.network.chat.ChatType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.network.chat.ChatType[]
       */
      static values(): zombie.network.chat.ChatType[];
    }
  }
}
