/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      initDataAndStyle: (() => any) | any;

      instantiate: (() => any) | any;

      isKeyConsumed: ((key: any) => any) | any;

      onCenterOnPlayer: (() => any) | any;

      onChangeOptions: ((button: any) => any) | any;

      onChangePerspective: (() => any) | any;

      onConfirmForget: ((button: any) => any) | any;

      onForget: (() => any) | any;

      onKeyPress: ((key: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      onTeleport: ((worldX: any, worldY: any) => any) | any;

      onTogglePyramid: (() => any) | any;

      onToggleSymbols: (() => any) | any;

      render: (() => any) | any;

      renderJoypadPrompt: ((texture: any, text: any, x: any, y: any) => any) | any;

      restoreSettings: (() => any) | any;

      saveSettings: (() => any) | any;

      setHideUnvisitedAreas: ((hide: any) => any) | any;

      setIsometric: ((iso: any) => any) | any;

      setShowCellGrid: ((show: any) => any) | any;

      setShowPlayerNames: ((show: any) => any) | any;

      setShowPlayers: ((show: any) => any) | any;

      setShowRemotePlayers: ((show: any) => any) | any;

      setShowTileGrid: ((show: any) => any) | any;

      updateJoypad: (() => any) | any;

      /** @noSelf */
      static checkKey: (key: any) => any;

      /** @noSelf */
      static HideWorldMap: (playerNum: any) => any;

      /** @noSelf */
      static IsAllowed: () => any;

      /** @noSelf */
      static onKeyKeepPressed: (key: any) => any;

      /** @noSelf */
      static onKeyReleased: (key: any) => any;

      /** @noSelf */
      static onKeyStartPressed: (key: any) => any;

      /** @noSelf */
      static OnPlayerDeath: (playerObj: any) => any;

      /** @noSelf */
      static ShowWorldMap: (playerNum: any) => any;

      /** @noSelf */
      static ToggleWorldMap: (playerNum: any) => any;
    }

    /** @customConstructor ISWorldMapButtonPanel:new */
    export class ISWorldMapButtonPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;
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

      createChildren: (() => any) | any;

      getVisibleOptions: (() => any) | any;

      isMultiplayerOption: ((optionName: any) => any) | any;

      onCommandEntered: ((entry: any, option: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any, joypadData: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      onTickBox: ((index: any, selected: any, option: any) => any) | any;

      synchUI: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISWorldMap {}
}
