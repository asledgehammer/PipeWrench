/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.popman {
    /**
     * @customConstructor ObjectPool.new
     * @
     * [CLASS] zombie.popman.ObjectPool
     */
    export class ObjectPool<T> {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (Allocator arg0)
       */
      constructor(arg0?: zombie.popman.ObjectPool$Allocator<T>);
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      alloc(): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): void
       */
      forEach(arg0: java.util._function_.Consumer<T>): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (Object[] arg0): void
       *  - (Iterable arg0): void
       *  - (List arg0): void
       */
      release(arg0: any | any | java.lang.Iterable<T> | java.util.List<T>): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      releaseAll(arg0: java.util.List<T>): void;
    }
    /**
     * @customConstructor Allocator.new
     * @
     * [INTERFACE] zombie.popman.ObjectPool$Allocator
     */
    export class ObjectPool$Allocator<T> {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      allocate(): any;
    }
    /**
     * @customConstructor Ownership.new
     * @
     * [CLASS] zombie.popman.Ownership
     */
    export class Ownership {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.raknet.UdpConnection
       */
      getConnection(): zombie.core.raknet.UdpConnection;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isBlocked(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      setOwnership(arg0: zombie.core.raknet.UdpConnection): void;
    }
    /**
     * @customConstructor ZombiePopulationRenderer.new
     * @
     * [CLASS] zombie.popman.ZombiePopulationRenderer
     */
    export class ZombiePopulationRenderer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      getBoolean(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.config.ConfigOption
       */
      getOptionByIndex(arg0: number): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.config.ConfigOption
       */
      getOptionByName(arg0: string): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOptionCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      outlineRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (UIElement arg0, float arg1, float arg2, float arg3): void
       */
      render(arg0: zombie.ui.UIElement, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1, int arg2, int arg3, float arg4): void
       */
      renderCellInfo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6): void
       */
      renderCircle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      renderLine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7): void
       */
      renderRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, String arg2, double arg3, double arg4, double arg5, double arg6): void
       */
      renderString(arg0: number, arg1: number, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1, float arg2, float arg3, float arg4, float arg5): void
       */
      renderVehicle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      renderZombie(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, boolean arg1): void
       */
      setBoolean(arg0: string, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      setWallFollowerEnd(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      setWallFollowerStart(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      uiToWorldX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      uiToWorldY(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      wallFollowerMouseMove(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      worldToScreenX(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (float arg0): number
       */
      worldToScreenY(arg0: number): number;
    }
    /**
     * @customConstructor BooleanDebugOption.new
     * @
     * [CLASS] zombie.popman.ZombiePopulationRenderer$BooleanDebugOption extends zombie.config.BooleanConfigOption
     */
    export class ZombiePopulationRenderer$BooleanDebugOption {
      /**
       * Constructors: 
       *  - (ZombiePopulationRenderer arg0, String arg1, boolean arg2)
       */
      constructor(arg0: zombie.popman.ZombiePopulationRenderer, arg1: string, arg2: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getDefaultValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getValue(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsLuaString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getValueAsObject(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueAsString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      isValidString(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.config.ConfigOption
       */
      makeCopy(): zombie.config.ConfigOption;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      parse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      resetToDefault(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setDefaultToCurrentValue(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setValue(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValueFromObject(arg0: any): void;
    }
  }
}
