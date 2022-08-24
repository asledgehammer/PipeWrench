/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      picked: ((hide: any) => any) | any;

      picked2: ((hide: any) => any) | any;

      removeSelf: (() => any) | any;

      render: (() => any) | any;

      setColors: ((colors: any, columns: any, rows: any) => any) | any;

      setInitialColor: ((initial: any) => any) | any;

      setPickedFunc: ((func: any, arg1: any, arg2: any, arg3: any, arg4: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISColorPicker {}
}
