/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditor:new */
    export class WorldMapEditor extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      bounds: any;

      currentMode: any;

      dragging: any;

      dragMoved: any;

      dragStartCX: any;

      dragStartCY: any;

      dragStartWorldX: any;

      dragStartWorldY: any;

      dragStartX: any;

      dragStartY: any;

      dragStartZoomF: any;

      mapAPI: any;

      mapItem: any;

      mode: any;

      modeButton: any;

      state: any;

      styleAPI: any;

      symbolsAPI: any;

      constructor(x: any, y: any, width: any, height: any, javaObject: any);

      close: (() => any) | any;

      isKeyConsumed: ((key: any) => any) | any;

      loadSettingsFromMap: (() => any) | any;

      onExit: ((button: any, x: any, y: any) => any) | any;

      onGenerateLuaScript: (() => any) | any;

      onKeyPress: ((key: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      onMouseDown: ((x: any, y: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onSwitchMode: ((button: any) => any) | any;

      setDataFiles: ((fileNames: any) => any) | any;

      showUI: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditor {}
}
