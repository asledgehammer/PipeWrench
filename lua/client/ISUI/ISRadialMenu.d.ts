/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      addSlice:
        | ((
            text: any,
            texture: any,
            command: any,
            arg1: any,
            arg2: any,
            arg3: any,
            arg4: any,
            arg5: any,
            arg6: any
          ) => any)
        | any;

      center: (() => any) | any;

      clear: (() => any) | any;

      getSliceCommand: ((sliceIndex: any) => any) | any;

      instantiate: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadButtonReleased: ((button: any, joypadData: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      setHideWhenButtonReleased: ((button: any) => any) | any;

      setSliceText: ((sliceIndex: any, text: any) => any) | any;

      setSliceTexture: ((sliceIndex: any, texture: any) => any) | any;

      undisplay: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISRadialMenu {}
}
