/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    export abstract class ISXuiSkin {
      static [id: string]: any;

      /** @noSelf */
      static autoApplyTableKeys: (_xuiScript: any, _o: any, _autoApplyOverride: any, ...__args: never[]) => any;

      static build: (_skin: any, _styleName: any, _luaClass: any, undefined: any, ...__args: never[]) => any;

      /** @noSelf */
      static RegisterXuiSkinFunctions: (_o: any, _force: any, ...__args: never[]) => any;
    }

    export abstract class ISXuiSkinFunctions {
      static [id: string]: any;

      /** @noSelf */
      static xuiRecalculateLayout: (
        _self: any,
        _preferredWidth: any,
        _preferredHeight: any,
        _force: any,
        _anchorRight: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static xuiRootElement: (_self: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISXuiSkin {}
}
