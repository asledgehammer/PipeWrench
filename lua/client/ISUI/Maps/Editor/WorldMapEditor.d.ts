/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      close(...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      loadSettingsFromMap(...__args: never[]): any;

      onExit(button: any, x: any, y: any, ...__args: never[]): any;

      onGenerateLuaScript(...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      onMouseDown(x: any, y: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      onSwitchMode(button: any, ...__args: never[]): any;

      setDataFiles(fileNames: any, ...__args: never[]): any;

      showUI(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditor {}
}
