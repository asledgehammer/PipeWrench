/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor ClimateColorsDebug:new */
    export class ClimateColorsDebug extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      clim: any;

      colorInfo: any;

      colors: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      addColorInfo:
        | ((_x: any, _y: any, _w: any, _col: any, _name: any, _daySegment: any, _temp: any, _season: any) => any)
        | any;

      addColorOption: ((_info: any, _x: any, _y: any, _w: any) => any) | any;

      createChildren: (() => any) | any;

      initialise: (() => any) | any;

      onApplyColorChange: ((_colorInfo: any) => any) | any;

      onButtonClick: ((_button: any) => any) | any;

      onButtonWriteConfig: ((_button: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.ClimateColorsDebug {}
}
