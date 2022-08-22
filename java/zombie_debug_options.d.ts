/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.debug.options {
    /**
     * @customConstructor IDebugOption.new
     * @
     * [INTERFACE] zombie.debug.options.IDebugOption
     */
    export class IDebugOption {
      protected constructor();
      /**
       * Method Parameters:
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters:
       *  - (Empty): zombie.debug.options.IDebugOptionGroup
       */
      getParent(): zombie.debug.options.IDebugOptionGroup;
      /**
       * Method Parameters:
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
    }
    /**
     * @customConstructor IDebugOptionGroup.new
     * @
     * [INTERFACE] zombie.debug.options.IDebugOptionGroup
     */
    export class IDebugOptionGroup {
      protected constructor();
      /**
       * Method Parameters:
       *  - (IDebugOption arg0): void
       */
      addChild(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters:
       *  - (Empty): java.lang.Iterable<zombie.debug.options.IDebugOption>
       */
      getChildren(): java.lang.Iterable<zombie.debug.options.IDebugOption>;
      /**
       * Method Parameters:
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters:
       *  - (Empty): zombie.debug.options.IDebugOptionGroup
       */
      getParent(): zombie.debug.options.IDebugOptionGroup;
      /**
       * Method Parameters:
       *  - (IDebugOption arg0): void
       */
      onChildAdded(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters:
       *  - (IDebugOption arg0): void
       */
      onDescendantAdded(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters:
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
    }
  }
}
