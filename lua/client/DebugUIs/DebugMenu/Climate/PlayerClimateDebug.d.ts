/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor PlayerClimateDebug:new */
    export class PlayerClimateDebug extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static cm: any;

      static eventsAdded: any;

      static fx: any;

      static instance: any;

      static shiftDown: any;

      clrGold: any;

      clrGreen: any;

      clrGreenYellow: any;

      clrOrangeRed: any;

      clrRed: any;

      colWhite: any;

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

      vars: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addLabel(_curY: any, _labelID: any, _title: any, ...__args: never[]): any;

      addLabelValue(
        _curY: any,
        _type: any,
        _labelID: any,
        _title: any,
        _defaultVal: any,
        _col: any,
        _extension: any,
        ...__args: never[]
      ): any;

      clear(...__args: never[]): any;

      getTitleLabel(_labelID: any, ...__args: never[]): any;

      getValueLabel(_labelID: any, ...__args: never[]): any;

      initVariables(...__args: never[]): any;

      onResize(...__args: never[]): any;

      registerVariable(
        _variable: any,
        _title: any,
        _isValue: any,
        _javaInstance: any,
        _defaultVal: any,
        _color: any,
        _postfix: any,
        ...__args: never[]
      ): any;

      stayOnSplitScreen(...__args: never[]): any;

      update(...__args: never[]): any;

      updateOLD(...__args: never[]): any;

      /** @noSelf */
      static onClimateTickDebug: (...__args: never[]) => any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.PlayerClimateDebug {}
}
