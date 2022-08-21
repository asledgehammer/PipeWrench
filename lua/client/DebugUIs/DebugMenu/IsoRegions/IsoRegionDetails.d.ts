/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.IsoRegions {
    /** @customConstructor IsoRegionDetails:new */
    export class IsoRegionDetails extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static lastX: any;

      static lastY: any;

      canvasY: any;

      currentTile: any;

      greyCol: any;

      hotKeyPanels: any;

      isJoypadWindow: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      richtext: any;

      subFocus: any;

      tmpTxt: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addLine: ((_prefix: any, _line: any) => any) | any;

      addLineEnd: (() => any) | any;

      addTitle: ((_title: any) => any) | any;

      clear: (() => any) | any;

      onButton: ((_btn: any) => any) | any;

      onResize: (() => any) | any;

      readRegion: ((_x: any, _y: any, _z: any, _o: any) => any) | any;

      stayOnSplitScreen: (() => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionDetails {}
}
