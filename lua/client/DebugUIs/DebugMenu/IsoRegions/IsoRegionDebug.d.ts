/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.IsoRegions {
    /** @customConstructor IsoRegionDebug:new */
    export class IsoRegionDebug extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static shiftDown: any;

      buttonReset: any;

      buttonToggleGrid: any;

      buttonToggleInvalidRegions: any;

      buttonToggleLoadAllChunks: any;

      buttonToggleRegions: any;

      cam: any;

      canvasY: any;

      currentTile: any;

      dayStamp: any;

      greyCol: any;

      hotKeyPanels: any;

      hourStamp: any;

      isJoypadWindow: any;

      monthStamp: any;

      mouseInfo: any;

      overrideBPrompt: any;

      palpha: any;

      palphaUp: any;

      pin: any;

      player: any;

      playerNum: any;

      poi: any;

      regionMode: any;

      richtext: any;

      showGrid: any;

      showInvalidRegions: any;

      strikes: any;

      subFocus: any;

      year: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      clear: (() => any) | any;

      convertCoords: ((_x: any, _y: any) => any) | any;

      onButton: ((_btn: any) => any) | any;

      onResize: (() => any) | any;

      stayOnSplitScreen: (() => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionDebug {}
}
