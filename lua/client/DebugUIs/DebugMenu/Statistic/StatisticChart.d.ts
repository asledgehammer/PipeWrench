/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Statistic {
    /** @customConstructor StatisticChart:new */
    export class StatisticChart extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static shiftDown: any;

      clearOnNextRun: any;

      colTable: any;

      currentStage: any;

      currentTile: any;

      data: any;

      dayStamp: any;

      greyCol: any;

      historyM1: any;

      hotKeyPanels: any;

      hourStamp: any;

      isJoypadWindow: any;

      labels: any;

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

      addColor: ((_r: any, _g: any, _b: any) => any) | any;

      addLabel: ((_curX: any, _curY: any, _labelID: any, _title: any) => any) | any;

      addLabelValue:
        | ((_curX: any, _curY: any, _width: any, _type: any, _labelID: any, _title: any, _defaultVal: any) => any)
        | any;

      addVarInfo: ((_name: any, _desc: any, _min: any, _max: any, _func: any) => any) | any;

      clear: (() => any) | any;

      getTitleLabel: ((_labelID: any) => any) | any;

      getValueLabel: ((_labelID: any) => any) | any;

      initVariables: (() => any) | any;

      onButtonToggle: ((_btn: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onResize: (() => any) | any;

      stayOnSplitScreen: (() => any) | any;

      update: (() => any) | any;

      updateValues: (() => any) | any;

      /** @noSelf */
      static OnServerStatisticReceived: () => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Statistic.StatisticChart {}
}
