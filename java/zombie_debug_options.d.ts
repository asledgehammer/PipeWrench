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
       *  - (Empty): void
       */
      onFullPathChanged(): void;
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
       *  - (String arg0): string
       */
      getCombinedName(arg0: string): string;
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
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newDebugOnlyOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): E
       */
      newOptionGroup<E>(arg0: E): E;
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
       *  - (Empty): void
       */
      onFullPathChanged(): void;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      removeChild(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
    }
    /**
     * @customConstructor Multiplayer.new
     * @
     * [CLASS] zombie.debug.options.Multiplayer extends zombie.debug.options.OptionGroup
     */
    export class Multiplayer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (String arg0): string
       */
      getCombinedName(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getGroupName(arg0: string): string;
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
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newDebugOnlyOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): E
       */
      newOptionGroup<E>(arg0: E): E;
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
       *  - (Empty): void
       */
      onFullPathChanged(): void;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      removeChild(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0, String arg1): string
       */
      static getCombinedName(arg0: zombie.debug.options.IDebugOptionGroup, arg1: string): string;
    }
    /**
     * @customConstructor DebugFlagsOG.new
     * @
     * [CLASS] zombie.debug.options.Multiplayer$DebugFlagsOG extends zombie.debug.options.OptionGroup
     */
    export class Multiplayer$DebugFlagsOG {

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
       *  - (String arg0): string
       */
      getCombinedName(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getGroupName(arg0: string): string;
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
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newDebugOnlyOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): E
       */
      newOptionGroup<E>(arg0: E): E;
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
       *  - (Empty): void
       */
      onFullPathChanged(): void;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      removeChild(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0, String arg1): string
       */
      static getCombinedName(arg0: zombie.debug.options.IDebugOptionGroup, arg1: string): string;
    }
    /**
     * @customConstructor IsoDeadBodyOG.new
     * @
     * [CLASS] zombie.debug.options.Multiplayer$DebugFlagsOG$IsoDeadBodyOG extends zombie.debug.options.OptionGroup
     */
    export class Multiplayer$DebugFlagsOG$IsoDeadBodyOG {

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
       *  - (String arg0): string
       */
      getCombinedName(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getGroupName(arg0: string): string;
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
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newDebugOnlyOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): E
       */
      newOptionGroup<E>(arg0: E): E;
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
       *  - (Empty): void
       */
      onFullPathChanged(): void;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      removeChild(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0, String arg1): string
       */
      static getCombinedName(arg0: zombie.debug.options.IDebugOptionGroup, arg1: string): string;
    }
    /**
     * @customConstructor IsoGameCharacterOG.new
     * @
     * [CLASS] zombie.debug.options.Multiplayer$DebugFlagsOG$IsoGameCharacterOG extends zombie.debug.options.OptionGroup
     */
    export class Multiplayer$DebugFlagsOG$IsoGameCharacterOG {

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
       *  - (String arg0): string
       */
      getCombinedName(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getGroupName(arg0: string): string;
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
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newDebugOnlyOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): E
       */
      newOptionGroup<E>(arg0: E): E;
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
       *  - (Empty): void
       */
      onFullPathChanged(): void;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      removeChild(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0, String arg1): string
       */
      static getCombinedName(arg0: zombie.debug.options.IDebugOptionGroup, arg1: string): string;
    }
    /**
     * @customConstructor DebugOG.new
     * @
     * [CLASS] zombie.debug.options.Multiplayer$DebugOG extends zombie.debug.options.OptionGroup
     */
    export class Multiplayer$DebugOG {

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
       *  - (String arg0): string
       */
      getCombinedName(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getGroupName(arg0: string): string;
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
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newDebugOnlyOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): zombie.debug.BooleanDebugOption
       */
      newOption(arg0: string, arg1: boolean): zombie.debug.BooleanDebugOption;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): E
       */
      newOptionGroup<E>(arg0: E): E;
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
       *  - (Empty): void
       */
      onFullPathChanged(): void;
      /**
       * Method Parameters: 
       *  - (IDebugOption arg0): void
       */
      removeChild(arg0: zombie.debug.options.IDebugOption): void;
      /**
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0): void
       */
      setParent(arg0: zombie.debug.options.IDebugOptionGroup): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IDebugOptionGroup arg0, String arg1): string
       */
      static getCombinedName(arg0: zombie.debug.options.IDebugOptionGroup, arg1: string): string;
    }
  }
}
