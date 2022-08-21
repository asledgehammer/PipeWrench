/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu {
    export abstract class ISDebugUtils {
      static [id: string]: any;

      /** @noSelf */
      static addButton: (_self: any, _data: any, _x: any, _y: any, _w: any, _h: any, _title: any, _func: any) => any;

      /** @noSelf */
      static addComboBox: (_self: any, _data: any, _x: any, _y: any, _w: any, _font: any, _func: any) => any;

      /** @noSelf */
      static addHorzBar: (_self: any, _y: any) => any;

      /** @noSelf */
      static addLabel: (_self: any, _data: any, _x: any, _y: any, _title: any, _font: any, _bLeft: any) => any;

      /** @noSelf */
      static addSlider: (_self: any, _data: any, _x: any, _y: any, _w: any, _h: any, _func: any) => any;

      /** @noSelf */
      static addTextEntryBox: (_self: any, _data: any, _title: any, _x: any, _y: any, _w: any, _h: any) => any;

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
        _func: any
      ) => any;

      /** @noSelf */
      static clamp01: (_n: any) => any;

      /** @noSelf */
      static initHorzBars: (_self: any, _x: any, _width: any) => any;

      /** @noSelf */
      static onMouseWheel: (self: any, del: any) => any;

      /** @noSelf */
      static printval: (_v: any, _d: any) => any;

      /** @noSelf */
      static renderHorzBars: (_self: any) => any;

      /** @noSelf */
      static roundNum: (num: any, numDecimalPlaces: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.ISDebugUtils {}
}
