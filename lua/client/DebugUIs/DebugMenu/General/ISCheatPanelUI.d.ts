/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.General {
    /** @customConstructor ISCheatPanelUI:new */
    export class ISCheatPanelUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      ok: any;

      player: any;

      setFunction: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addAdminPowerOptions: (() => any) | any;

      addOption: ((text: any, selected: any, setFunction: any) => any) | any;

      onClick: ((button: any) => any) | any;

      onTicked: ((index: any, selected: any) => any) | any;

      render: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.General.ISCheatPanelUI {}
}
