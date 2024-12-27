/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel.ZoneEditor {
    /** @customConstructor ISMultiplayerZoneEditor:new */
    export class ISMultiplayerZoneEditor extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      buttonPanel: any;

      character: any;

      cross: any;

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

      hideUnvisitedAreas: any;

      isometric: any;

      javaObject: any;

      mapAPI: any;

      mode: any;

      modeCombo: any;

      playerNum: any;

      showCellGrid: any;

      showPlayerNames: any;

      showPlayers: any;

      showRemotePlayers: any;

      showTileGrid: any;

      texViewIsometric: any;

      texViewOrthographic: any;

      texViewPyramid: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      initDataAndStyle(...__args: never[]): any;

      initDefaultMapData(...__args: never[]): any;

      initDefaultStyle(...__args: never[]): any;

      initDirectoryMapData(directory: any, ...__args: never[]): any;

      instantiate(...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      onCenterOnPlayer(...__args: never[]): any;

      onChangeOptions(button: any, ...__args: never[]): any;

      onChangePerspective(...__args: never[]): any;

      onComboChangeMode(...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onSwitchMode(mode: any, ...__args: never[]): any;

      onTogglePyramid(...__args: never[]): any;

      onZoomInButton(...__args: never[]): any;

      onZoomOutButton(...__args: never[]): any;

      render(...__args: never[]): any;

      setHideUnvisitedAreas(hide: any, ...__args: never[]): any;

      setIsometric(iso: any, ...__args: never[]): any;

      setShowCellGrid(show: any, ...__args: never[]): any;

      setShowPlayerNames(show: any, ...__args: never[]): any;

      setShowPlayers(show: any, ...__args: never[]): any;

      setShowRemotePlayers(show: any, ...__args: never[]): any;

      setShowTileGrid(show: any, ...__args: never[]): any;

      /** @noSelf */
      static ShowEditor: (...__args: never[]) => any;

      /** @noSelf */
      static ToggleEditor: (...__args: never[]) => any;
    }

    /** @customConstructor ISMultiplayerZoneEditor_ButtonPanel:new */
    export class ISMultiplayerZoneEditor_ButtonPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      closeBtn: any;

      editor: any;

      pyramidBtn: any;

      zoomInButton: any;

      zoomOutButton: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      createChildren(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ZoneEditor.ISMultiplayerZoneEditor {}
}
