/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor WindDebug:new */
    export class WindDebug extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static shiftDown: any;

      buttonM1: any;

      chartLabelsLeft: any;

      chartLabelsLeftTxt: any;

      chartLabelsRight: any;

      chartLabelsRightTxt: any;

      charts: any;

      colTable: any;

      currentTile: any;

      dayStamp: any;

      greyCol: any;

      historyM1: any;

      hotKeyPanels: any;

      hourStamp: any;

      isJoypadWindow: any;

      monthStamp: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      richtext: any;

      subFocus: any;

      varInfo: any;

      year: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addColor(_r: any, _g: any, _b: any, ...__args: never[]): any;

      addVarInfo(_name: any, _desc: any, _min: any, _max: any, _func: any, ...__args: never[]): any;

      clear(...__args: never[]): any;

      initVariables(...__args: never[]): any;

      onButton(_btn: any, ...__args: never[]): any;

      onButtonToggle(_btn: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      stayOnSplitScreen(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.WindDebug {}
}
