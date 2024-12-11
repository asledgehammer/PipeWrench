/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISColorPicker:new */
    export class ISColorPicker extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      borderSize: any;

      buttonSize: any;

      colors: any;

      columns: any;

      index: any;

      mouseDown: any;

      pickedArgs: any;

      pickedFunc: any;

      rows: any;

      constructor(x: any, y: any, HSBFactor: any);

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      picked(hide: any, ...__args: never[]): any;

      picked2(hide: any, ...__args: never[]): any;

      removeSelf(...__args: never[]): any;

      render(...__args: never[]): any;

      setColors(colors: any, columns: any, rows: any, ...__args: never[]): any;

      setInitialColor(initial: any, ...__args: never[]): any;

      setPickedFunc(func: any, arg1: any, arg2: any, arg3: any, arg4: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISColorPicker {}
}
