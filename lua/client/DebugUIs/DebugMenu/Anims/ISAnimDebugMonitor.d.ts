/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Anims {
    /** @customConstructor ISAnimDebugMonitor:new */
    export class ISAnimDebugMonitor extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      addVarAddButton: any;

      addVarComboType: any;

      addVarKey: any;

      addVarKeyLabel: any;

      addVarValue: any;

      addVarValueLabel: any;

      buttonActiveNodes: any;

      buttonAnimTracks: any;

      buttonClearVar: any;

      buttonLayers: any;

      buttonSetVar: any;

      buttonStamps: any;

      buttonToggleMonitor: any;

      buttonVariables: any;

      cGreen: any;

      clearText: any;

      comboFloats: any;

      comboVars: any;

      cRed: any;

      currentTile: any;

      editEnabled: any;

      entryBoxValue: any;

      floatPlotter: any;

      greyCol: any;

      hotKeyPanels: any;

      init: any;

      isJoypadWindow: any;

      labelFloat: any;

      labelFloatInfo: any;

      labelVars: any;

      monitor: any;

      oldNodesVal: any;

      oldTracksVal: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      richtext: any;

      selectedVar: any;

      subFocus: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      clear(...__args: never[]): any;

      clearLog(...__args: never[]): any;

      colorButtons(...__args: never[]): any;

      onClick(_button: any, ...__args: never[]): any;

      onCombo(_combo: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      scrollToBottom(...__args: never[]): any;

      stayOnSplitScreen(...__args: never[]): any;

      toggleEditEnabled(_b: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Anims.ISAnimDebugMonitor {}
}
