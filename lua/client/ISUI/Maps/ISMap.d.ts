/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      canErase: (() => any) | any;

      canWrite: (() => any) | any;

      createChildren: (() => any) | any;

      destroy: (() => any) | any;

      initMapData: (() => any) | any;

      instantiate: (() => any) | any;

      onButtonClick: ((button: any) => any) | any;

      onConfirmRemove: ((button: any, note: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      render: (() => any) | any;

      renderJoypadIcons: (() => any) | any;

      update: (() => any) | any;

      updateButtons: (() => any) | any;

      updateJoypad: (() => any) | any;
    }

    /** @customConstructor ISMapWrapper:new */
    export class ISMapWrapper extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      isKeyConsumed: ((key: any) => any) | any;

      onKeyPress: ((key: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      setVisible: ((bVisible: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISMap {}
}
