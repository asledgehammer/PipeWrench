/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISColorPickerHSB:new */
    export class ISColorPickerHSB extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      b: any;

      borderSize: any;

      buttonSize: any;

      colorBlockX: any;

      colorBlockY: any;

      currentColor: any;

      h: any;

      HueImage: any;

      hueSlider: any;

      index: any;

      initialColor: any;

      mouseDown: any;

      mouseDownInColorBox: any;

      pickedArgs: any;

      pickedFunc: any;

      pickedRGB: any;

      s: any;

      SatImage: any;

      satSlider: any;

      valSlider: any;

      constructor(x: any, y: any, initial: any);

      createChildren(...__args: never[]): any;

      onMouseDownColorBox(x: any, y: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onSave(...__args: never[]): any;

      onSliderChange(value: any, slider: any, ...__args: never[]): any;

      picked(hide: any, ...__args: never[]): any;

      picked2(hide: any, ...__args: never[]): any;

      removeSelf(...__args: never[]): any;

      render(...__args: never[]): any;

      setCurrentColor(h: any, s: any, b: any, ...__args: never[]): any;

      setInitialColor(initial: any, ...__args: never[]): any;

      setPickedFunc(func: any, arg1: any, arg2: any, arg3: any, arg4: any, ...__args: never[]): any;

      toHSB(Color: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISColorPickerHSB {}
}
