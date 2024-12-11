/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addColorOption(_id: any, _color: any, _x: any, _y: any, _w: any, ...__args: never[]): any;

      addFloatOption(_id: any, _float: any, _x: any, _y: any, _w: any, ...__args: never[]): any;

      addSlider(_id: any, _x: any, _y: any, _w: any, _title: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onClick(_button: any, ...__args: never[]): any;

      onFloatSliderChange(_newval: any, _slider: any, ...__args: never[]): any;

      onSliderChange(_newval: any, _slider: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (_colorInfo: any, _parent: any, _ambient: any, _desat: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.PopupColorEdit {}
}
