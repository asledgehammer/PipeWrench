/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.sprite.shapers {
    /**
     * @customConstructor WallShaper.new
     * @
     * [CLASS] zombie.iso.sprite.shapers.WallShaper
     */
    export class WallShaper {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (TextureDraw arg0): void
       */
      accept(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Consumer arg0): java.util._function_.Consumer<T>
       */
      andThen(arg0: java.util._function_.Consumer<any>): java.util._function_.Consumer<any>;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTintColor(arg0: number): void;
    }
  }
}
