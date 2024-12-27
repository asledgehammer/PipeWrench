/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addAdminPowerOptions(...__args: never[]): any;

      addOption(text: any, selected: any, setFunction: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onTicked(index: any, selected: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static EnableCheats: (...__args: never[]) => any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.General.ISCheatPanelUI {}
}
