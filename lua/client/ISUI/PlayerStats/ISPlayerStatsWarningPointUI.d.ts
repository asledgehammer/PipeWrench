/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.PlayerStats {
    /** @customConstructor ISPlayerStatsWarningPointUI:new */
    export class ISPlayerStatsWarningPointUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      amount: any;

      cancel: any;

      ok: any;

      onclick: any;

      reason: any;

      target: any;

      variableColor: any;

      constructor(x: any, y: any, width: any, height: any, target: any, onclick: any);

      create(...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setVisible(visible: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.PlayerStats.ISPlayerStatsWarningPointUI {}
}
