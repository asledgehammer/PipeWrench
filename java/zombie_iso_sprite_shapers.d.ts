/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.sprite.shapers {
    /**
     * @customConstructor WallShaperWhole.new
     * @
     * [CLASS] zombie.iso.sprite.shapers.WallShaperWhole extends zombie.iso.sprite.shapers.WallShaper
     */
    export class WallShaperWhole {
      /** zombie.iso.sprite.shapers.WallShaperWhole */
      static readonly instance?: zombie.iso.sprite.shapers.WallShaperWhole;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters:
       *  - (TextureDraw arg0): void
       *  - (Object arg0): void
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
