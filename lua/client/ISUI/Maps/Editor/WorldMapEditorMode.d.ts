/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      display(...__args: never[]): any;

      generateLuaScript(...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      loadSettingsFromMap(...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      undisplay(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorMode {}
}
