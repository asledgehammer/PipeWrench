/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    export abstract class ISInventoryItem {
      static [id: string]: any;

      /** @noSelf */
      static renderItemIcon: (
        self: any,
        _item: any,
        _x: any,
        _y: any,
        _alpha: any,
        _w: any,
        _h: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static renderScriptItemIcon: (
        self: any,
        _scriptItem: any,
        _x: any,
        _y: any,
        _alpha: any,
        _w: any,
        _h: any,
        ...__args: never[]
      ) => any;
    }
  }
  export namespace lua.client.ISUI.ISInventoryItem {}
}
