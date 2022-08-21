/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor WeatherPeriodDebug:new */
    export class WeatherPeriodDebug extends lua.client.ISUI.ISCollapsableWindow {
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

      addColor: ((_r: any, _g: any, _b: any) => any) | any;

      addVarInfo: ((_name: any, _desc: any, _min: any, _max: any, _func: any) => any) | any;

      clear: (() => any) | any;

      initVariables: (() => any) | any;

      onButton: ((_btn: any) => any) | any;

      onButtonToggle: ((_btn: any) => any) | any;

      onResize: (() => any) | any;

      stayOnSplitScreen: (() => any) | any;

      update: (() => any) | any;

      updateValues: ((_mgr: any) => any) | any;

      /** @noSelf */
      static OnClimateTickDebug: (mgr: any) => any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.WeatherPeriodDebug {}
}
