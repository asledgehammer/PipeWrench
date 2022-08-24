/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor PopupColorEdit:new */
    export class PopupColorEdit extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      buttonBorderColor: any;

      firstRun: any;

      floats: any;

      optionControls: any;

      panelTitle: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, title: any);

      addColorOption: ((_id: any, _color: any, _x: any, _y: any, _w: any) => any) | any;

      addFloatOption: ((_id: any, _float: any, _x: any, _y: any, _w: any) => any) | any;

      addSlider: ((_id: any, _x: any, _y: any, _w: any, _title: any) => any) | any;

      createChildren: (() => any) | any;

      onClick: ((_button: any) => any) | any;

      onFloatSliderChange: ((_newval: any, _slider: any) => any) | any;

      onSliderChange: ((_newval: any, _slider: any) => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: (_colorInfo: any, _parent: any, _ambient: any, _desat: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.PopupColorEdit {}
}
