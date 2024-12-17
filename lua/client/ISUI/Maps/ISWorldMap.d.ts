/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Maps {
    /** @customConstructor ISWorldMap:new */
    export class ISWorldMap extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      buttonPanel: any;

      centerBtn: any;

      character: any;

      closeBtn: any;

      cross: any;

      dragging: any;

      dragMoved: any;

      dragStartCX: any;

      dragStartCY: any;

      dragStartWorldX: any;

      dragStartWorldY: any;

      dragStartX: any;

      dragStartY: any;

      dragStartZoomF: any;

      forgetBtn: any;

      forgetUI: any;

      getJoypadFocus: any;

      hideUnvisitedAreas: any;

      isometric: any;

      javaObject: any;

      joypadPromptHgt: any;

      keyUI: any;

      LBumperZoom: any;

      mapAPI: any;

      optionBtn: any;

      optionsUI: any;

      perspectiveBtn: any;

      playerNum: any;

      povXms: any;

      povYms: any;

      pyramidBtn: any;

      RBumperZoom: any;

      showCellGrid: any;

      showPlayerNames: any;

      showPlayers: any;

      showRemotePlayers: any;

      showTileGrid: any;

      symbolsBtn: any;

      symbolsUI: any;

      texViewIsometric: any;

      texViewOrthographic: any;

      texViewPyramid: any;

      updateMS: any;

      zoomInButton: any;

      zoomOutButton: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      initDataAndStyle(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      onCenterOnPlayer(...__args: never[]): any;

      onChangeOptions(button: any, ...__args: never[]): any;

      onChangePerspective(...__args: never[]): any;

      onConfirmForget(button: any, ...__args: never[]): any;

      onForget(...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      onTeleport(worldX: any, worldY: any, ...__args: never[]): any;

      onToggleLegend(...__args: never[]): any;

      onTogglePyramid(...__args: never[]): any;

      onToggleSymbols(...__args: never[]): any;

      onZoomInButton(...__args: never[]): any;

      onZoomOutButton(...__args: never[]): any;

      render(...__args: never[]): any;

      renderJoypadPrompt(texture: any, text: any, x: any, y: any, ...__args: never[]): any;

      restoreSettings(...__args: never[]): any;

      saveSettings(...__args: never[]): any;

      setHideUnvisitedAreas(hide: any, ...__args: never[]): any;

      setIsometric(iso: any, ...__args: never[]): any;

      setShowCellGrid(show: any, ...__args: never[]): any;

      setShowPlayerNames(show: any, ...__args: never[]): any;

      setShowPlayers(show: any, ...__args: never[]): any;

      setShowRemotePlayers(show: any, ...__args: never[]): any;

      setShowTileGrid(show: any, ...__args: never[]): any;

      updateJoypad(...__args: never[]): any;

      /** @noSelf */
      static checkKey: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static HideWorldMap: (playerNum: any, ...__args: never[]) => any;

      /** @noSelf */
      static IsAllowed: (...__args: never[]) => any;

      /** @noSelf */
      static NeedsLight: (...__args: never[]) => any;

      /** @noSelf */
      static onKeyKeepPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyReleased: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyStartPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnPlayerDeath: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static ShowWorldMap: (playerNum: any, centerX: any, centerY: any, zoom: any, ...__args: never[]) => any;

      /** @noSelf */
      static ToggleWorldMap: (playerNum: any, ...__args: never[]) => any;
    }

    /** @customConstructor ISWorldMapButtonPanel:new */
    export class ISWorldMapButtonPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }

    /** @customConstructor WorldMapOptions:new */
    export class WorldMapOptions extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      doubleBoxes: any;

      joypadButtonsY: any;

      joypadIndex: any;

      joypadIndexY: any;

      map: any;

      screenHeight: any;

      showAllOptions: any;

      tickBoxes: any;

      constructor(x: any, y: any, width: any, height: any, map: any);

      createChildren(...__args: never[]): any;

      getVisibleOptions(...__args: never[]): any;

      isMultiplayerOption(optionName: any, ...__args: never[]): any;

      onCommandEntered(entry: any, option: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDown(button: any, joypadData: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onTickBox(index: any, selected: any, option: any, ...__args: never[]): any;

      synchUI(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISWorldMap {}
}
