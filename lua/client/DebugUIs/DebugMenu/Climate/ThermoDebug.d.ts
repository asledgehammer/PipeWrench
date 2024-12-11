/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor ThermoDebug:new */
    export class ThermoDebug extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      currentTile: any;

      hotKeyPanels: any;

      isJoypadWindow: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      richtext: any;

      setY: any;

      subFocus: any;

      tmpTxt: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addLine(_prefix: any, _line: any, ...__args: never[]): any;

      addLineEnd(...__args: never[]): any;

      addTitle(_title: any, ...__args: never[]): any;

      onButton(_btn: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      readThermos(...__args: never[]): any;

      stayOnSplitScreen(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.ThermoDebug {}
}
