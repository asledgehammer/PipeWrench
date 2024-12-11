/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Puddles {
    /** @customConstructor PuddlesPeriodDebug:new */
    export class PuddlesPeriodDebug extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static eventsAdded: any;

      static instance: any;

      static shiftDown: any;

      buttonD1: any;

      buttonH1: any;

      buttonM1: any;

      chartLabelsLeft: any;

      chartLabelsLeftTxt: any;

      chartLabelsRight: any;

      chartLabelsRightTxt: any;

      charts: any;

      clearOnNextRun: any;

      colTable: any;

      currentStage: any;

      currentTile: any;

      dayStamp: any;

      greyCol: any;

      historyD1: any;

      historyH1: any;

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

      weatherPeriod: any;

      weatherRunning: any;

      year: any;

      yearStamp: any;

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

      updateValues(_mgr: any, ...__args: never[]): any;

      /** @noSelf */
      static OnClimateTickDebug: (mgr: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Puddles.PuddlesPeriodDebug {}
}
