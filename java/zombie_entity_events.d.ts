/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.entity.events {
    /**
     * @customConstructor ComponentEvent.new
     * @
     * [CLASS] zombie.entity.events.ComponentEvent
     */
    export class ComponentEvent {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.events.ComponentEventType
       */
      getEventType(): zombie.entity.events.ComponentEventType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.Component
       */
      getSender(): zombie.entity.Component;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ComponentEventType arg0, Component arg1): zombie.entity.events.ComponentEvent
       */
      static Alloc(arg0: zombie.entity.events.ComponentEventType, arg1: zombie.entity.Component): zombie.entity.events.ComponentEvent;
    }
    /** [ENUM] zombie.entity.events.ComponentEventType */
    export class ComponentEventType {
      protected constructor();
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.events.ComponentEventType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.events.ComponentEventType>;
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
       *  - (String arg0): zombie.entity.events.ComponentEventType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.events.ComponentEventType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.events.ComponentEventType[]
       */
      static values(): zombie.entity.events.ComponentEventType[];
    }
    /**
     * @customConstructor EntityEvent.new
     * @
     * [CLASS] zombie.entity.events.EntityEvent
     */
    export class EntityEvent {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntity
       */
      getEntity(): zombie.entity.GameEntity;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.events.EntityEventType
       */
      getEventType(): zombie.entity.events.EntityEventType;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      release(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (EntityEventType arg0, GameEntity arg1): zombie.entity.events.EntityEvent
       */
      static Alloc(arg0: zombie.entity.events.EntityEventType, arg1: zombie.entity.GameEntity): zombie.entity.events.EntityEvent;
    }
    /** [ENUM] zombie.entity.events.EntityEventType */
    export class EntityEventType {
      protected constructor();
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.events.EntityEventType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.events.EntityEventType>;
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
       *  - (String arg0): zombie.entity.events.EntityEventType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.events.EntityEventType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.events.EntityEventType[]
       */
      static values(): zombie.entity.events.EntityEventType[];
    }
  }
}
