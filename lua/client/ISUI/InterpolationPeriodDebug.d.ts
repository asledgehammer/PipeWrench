/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor InterpolationPeriodDebug:new */
    export class InterpolationPeriodDebug extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static shiftDown: any;

      clearOnNextRun: any;

      colTable: any;

      currentStage: any;

      currentTile: any;

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

      zombie: any;

      zombieInfo: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addColor(_r: any, _g: any, _b: any, ...__args: never[]): any;

      addLabel(_curX: any, _curY: any, _labelID: any, _title: any, ...__args: never[]): any;

      addLabelValue(
        _curX: any,
        _curY: any,
        _width: any,
        _type: any,
        _labelID: any,
        _title: any,
        _defaultVal: any,
        ...__args: never[]
      ): any;

      addVarInfo(_name: any, _desc: any, _min: any, _max: any, _func: any, ...__args: never[]): any;

      clear(...__args: never[]): any;

      getTitleLabel(_labelID: any, ...__args: never[]): any;

      getValueLabel(_labelID: any, ...__args: never[]): any;

      initVariables(...__args: never[]): any;

      onButtonToggle(_btn: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      setZombie(zombie: any, ...__args: never[]): any;

      stayOnSplitScreen(...__args: never[]): any;

      update(...__args: never[]): any;

      updateValues(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (zombie: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.InterpolationPeriodDebug {}
}
