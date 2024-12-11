/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu {
    export abstract class ISDebugUtils {
      static [id: string]: any;

      /** @noSelf */
      static addButton: (
        _self: any,
        _data: any,
        _x: any,
        _y: any,
        _w: any,
        _h: any,
        _title: any,
        _func: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static addComboBox: (
        _self: any,
        _data: any,
        _x: any,
        _y: any,
        _w: any,
        _font: any,
        _func: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static addHorzBar: (_self: any, _y: any, ...__args: never[]) => any;

      /** @noSelf */
      static addLabel: (
        _self: any,
        _data: any,
        _x: any,
        _y: any,
        _title: any,
        _font: any,
        _bLeft: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static addSlider: (
        _self: any,
        _data: any,
        _x: any,
        _y: any,
        _w: any,
        _h: any,
        _func: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static addTextEntryBox: (
        _self: any,
        _data: any,
        _title: any,
        _x: any,
        _y: any,
        _w: any,
        _h: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static addTickBox: (
        _self: any,
        _data: any,
        _x: any,
        _y: any,
        _w: any,
        _h: any,
        _title: any,
        options: any,
        _func: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static clamp01: (_n: any, ...__args: never[]) => any;

      /** @noSelf */
      static initHorzBars: (_self: any, _x: any, _width: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMouseWheel: (self: any, del: any, ...__args: never[]) => any;

      /** @noSelf */
      static printval: (_v: any, _d: any, ...__args: never[]) => any;

      /** @noSelf */
      static renderHorzBars: (_self: any, ...__args: never[]) => any;

      /** @noSelf */
      static roundNum: (num: any, numDecimalPlaces: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.ISDebugUtils {}
}
