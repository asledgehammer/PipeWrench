/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    export abstract class ISXuiBuilder {
      static [id: string]: any;

      /** @noSelf */
      static applySizing: (_xuiScript: any, _o: any, _parent: any, ...__args: never[]) => any;

      /** @noSelf */
      static applySpacing: (
        _spacing: any,
        _origX: any,
        _origY: any,
        _origW: any,
        _origH: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static applyXuiTable: (_xuiScript: any, _o: any, _parent: any, _noChildTable: any, ...__args: never[]) => any;

      /** @noSelf */
      static autoApplyTableKeys: (
        _xuiScript: any,
        _o: any,
        _parent: any,
        _ignoreKeys: any,
        _autoApplyOverride: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static build: (_xuiScript: any, _parent: any, _buildInfo: any, ...__args: never[]) => any;

      static buildSingle: (_xuiScript: any, _parent: any, _buildInfo: any, undefined: any, ...__args: never[]) => any;

      /** @noSelf */
      static colorTable: (_xuiColor: any, ...__args: never[]) => any;

      /** @noSelf */
      static colorTableFromColor: (_color: any, ...__args: never[]) => any;

      /** @noSelf */
      static ensureXuiTable: (_o: any, ...__args: never[]) => any;

      /** @noSelf */
      static initialiseObject: (_xuiScript: any, _o: any, _parent: any, ...__args: never[]) => any;

      /** @noSelf */
      static RegisterXuiFunctions: (_o: any, _force: any, ...__args: never[]) => any;

      /** @noSelf */
      static setCellRectangle: (_o: any, _x: any, _y: any, _width: any, _height: any, ...__args: never[]) => any;

      /** @noSelf */
      static setDrawRectangle: (_o: any, _x: any, _y: any, _width: any, _height: any, ...__args: never[]) => any;

      /** @noSelf */
      static texture: (_texName: any, ...__args: never[]) => any;
    }

    export abstract class ISXuiFunctions {
      static [id: string]: any;

      /** @noSelf */
      static xuiFind: (_self: any, _xuiKey: any, ...__args: never[]) => any;

      /** @noSelf */
      static xuiFindAll: (_self: any, _xuiKey: any, _list: any, ...__args: never[]) => any;

      /** @noSelf */
      static xuiFindAllUUID: (_self: any, _uuid: any, _list: any, ...__args: never[]) => any;

      /** @noSelf */
      static xuiFindClass: (_self: any, _luaClass: any, ...__args: never[]) => any;

      /** @noSelf */
      static xuiFindClassAll: (_self: any, _luaClass: any, _list: any, ...__args: never[]) => any;

      /** @noSelf */
      static xuiGet: (_self: any, _xuiKey: any, ...__args: never[]) => any;

      /** @noSelf */
      static xuiGetAll: (_self: any, _xuiKey: any, _list: any, ...__args: never[]) => any;

      /** @noSelf */
      static xuiGetClass: (_self: any, _luaClass: any, ...__args: never[]) => any;

      /** @noSelf */
      static xuiGetClassAll: (_self: any, _luaClass: any, _list: any, ...__args: never[]) => any;

      /** @noSelf */
      static xuiGetUUID: (_self: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISXuiBuilder {}
}
