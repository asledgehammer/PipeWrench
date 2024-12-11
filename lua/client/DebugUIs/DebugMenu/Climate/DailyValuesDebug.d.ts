/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor DailyValuesDebug:new */
    export class DailyValuesDebug extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static cm: any;

      static fx: any;

      static instance: any;

      static shiftDown: any;

      currentTile: any;

      hotKeyPanels: any;

      isJoypadWindow: any;

      labels: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      richtext: any;

      subFocus: any;

      tempColor: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addLabel(_curY: any, _labelID: any, _title: any, ...__args: never[]): any;

      addLabelValue(_curY: any, _type: any, _labelID: any, _title: any, _defaultVal: any, ...__args: never[]): any;

      clear(...__args: never[]): any;

      getTitleLabel(_labelID: any, ...__args: never[]): any;

      getValueLabel(_labelID: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      stayOnSplitScreen(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.DailyValuesDebug {}
}
