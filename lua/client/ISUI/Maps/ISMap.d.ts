/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Maps {
    /** @customConstructor ISMap:new */
    export class ISMap extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      cross: any;

      dragging: any;

      draggingStartingX: any;

      draggingStartingY: any;

      dragMoved: any;

      dragStartCX: any;

      dragStartCY: any;

      dragStartWorldX: any;

      dragStartWorldY: any;

      dragStartZoomF: any;

      editSymbolsBtn: any;

      getJoypadFocus: any;

      javaObject: any;

      LBumperZoom: any;

      mapAPI: any;

      mapObj: any;

      ok: any;

      placeSymbBtn: any;

      playerNum: any;

      povXms: any;

      povYms: any;

      RBumperZoom: any;

      scaleBtn: any;

      selectedColor: any;

      setMapData: any;

      symbolsUI: any;

      symbolTexList: any;

      textCursor: any;

      updateMS: any;

      constructor(x: any, y: any, width: any, height: any, map: any, player: any);

      canErase(...__args: never[]): any;

      canWrite(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      destroy(...__args: never[]): any;

      initMapData(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      onButtonClick(button: any, ...__args: never[]): any;

      onConfirmRemove(button: any, note: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      renderJoypadIcons(...__args: never[]): any;

      update(...__args: never[]): any;

      updateButtons(...__args: never[]): any;

      updateJoypad(...__args: never[]): any;
    }

    /** @customConstructor ISMapWrapper:new */
    export class ISMapWrapper extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      isKeyConsumed(key: any, ...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      setVisible(bVisible: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISMap {}
}
