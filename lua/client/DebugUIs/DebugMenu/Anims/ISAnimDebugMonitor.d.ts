/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Anims {
    /** @customConstructor ISAnimDebugMonitor:new */
    export class ISAnimDebugMonitor extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

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

      clear: (() => any) | any;

      clearLog: (() => any) | any;

      onClick: ((_button: any) => any) | any;

      onCombo: ((_combo: any) => any) | any;

      onResize: (() => any) | any;

      scrollToBottom: (() => any) | any;

      stayOnSplitScreen: (() => any) | any;

      toggleEditEnabled: ((_b: any) => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Anims.ISAnimDebugMonitor {}
}
