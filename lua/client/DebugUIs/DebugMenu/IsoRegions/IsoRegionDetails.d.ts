/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addLine(_prefix: any, _line: any, ...__args: never[]): any;

      addLineEnd(...__args: never[]): any;

      addTitle(_title: any, ...__args: never[]): any;

      clear(...__args: never[]): any;

      onButton(_btn: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      readRegion(_x: any, _y: any, _z: any, _o: any, ...__args: never[]): any;

      stayOnSplitScreen(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionDetails {}
}
