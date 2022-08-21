/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorMode:new */
    export class WorldMapEditorMode extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      mapAPI: any;

      mapUI: any;

      styleAPI: any;

      symbolsAPI: any;

      constructor(editor: any);

      display: (() => any) | any;

      generateLuaScript: (() => any) | any;

      isKeyConsumed: ((key: any) => any) | any;

      loadSettingsFromMap: (() => any) | any;

      onKeyPress: ((key: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      undisplay: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorMode {}
}
