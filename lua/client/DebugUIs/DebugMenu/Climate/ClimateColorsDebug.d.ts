/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor ClimateColorsDebug:new */
    export class ClimateColorsDebug extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      clim: any;

      colorInfo: any;

      colors: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      addColorInfo(
        _x: any,
        _y: any,
        _w: any,
        _col: any,
        _name: any,
        _daySegment: any,
        _temp: any,
        _season: any,
        ...__args: never[]
      ): any;

      addColorOption(_info: any, _x: any, _y: any, _w: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      initialise(...__args: never[]): any;

      onApplyColorChange(_colorInfo: any, ...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onButtonWriteConfig(_button: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.ClimateColorsDebug {}
}
