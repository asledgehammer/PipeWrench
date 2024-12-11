/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISRadialMenu:new */
    export class ISRadialMenu extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      hideWhenButtonReleased: any;

      innerRadius: any;

      javaObject: any;

      outerRadius: any;

      playerNum: any;

      slices: any;

      constructor(x: any, y: any, innerRadius: any, outerRadius: any, playerNum: any);

      addSlice(
        text: any,
        texture: any,
        command: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        arg6: any,
        ...__args: never[]
      ): any;

      center(...__args: never[]): any;

      clear(...__args: never[]): any;

      getSliceCommand(sliceIndex: any, ...__args: never[]): any;

      instantiate(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadButtonReleased(button: any, joypadData: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      setHideWhenButtonReleased(button: any, ...__args: never[]): any;

      setSliceText(sliceIndex: any, text: any, ...__args: never[]): any;

      setSliceTexture(sliceIndex: any, texture: any, ...__args: never[]): any;

      undisplay(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISRadialMenu {}
}
