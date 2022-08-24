/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.input {
    /**
     * @customConstructor Input.new
     * @
     * [CLASS] zombie.core.input.Input
     */
    export class Input {
      /** int */
      static readonly ANY_CONTROLLER: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getAxisCount(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): string
       */
      getAxisName(arg0: number, arg1: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): number
       */
      getAxisValue(arg0: number, arg1: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getButtonCount(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): string
       */
      getButtonName(arg0: number, arg1: number): string;
      /**
       * Method Parameters: 
       *  - (int arg0): org.lwjglx.input.Controller
       */
      getController(arg0: number): org.lwjglx.input.Controller;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getControllerCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initControllers(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isButtonPressedD(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isButtonReleasePress(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      isButtonStartPress(arg0: number, arg1: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isControllerDownD(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isControllerLeftD(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isControllerRightD(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      isControllerUpD(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      poll(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      quit(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateGameThread(): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): boolean
       */
      wasButtonPressed(arg0: number, arg1: number): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static getKeyCode(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): string
       */
      static getKeyName(arg0: number): string;
    }
  }
}
