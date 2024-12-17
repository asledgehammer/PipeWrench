/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Scripts {
    /** @customConstructor ISScriptViewWindow:new */
    export class ISScriptViewWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static coords: any;

      static instance: any;

      currentTile: any;

      greyCol: any;

      hotKeyPanels: any;

      isJoypadWindow: any;

      minimumHeight: any;

      minimumWidth: any;

      monitorID: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      richtext: any;

      scriptPanel: any;

      scriptPanelY: any;

      subFocus: any;

      constructor(x: any, y: any, width: any, height: any);

      onResize(...__args: never[]): any;

      setScript(_script: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (_script: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Scripts.ISScriptViewWindow {}
}
