/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, target: any, onclick: any);

      create: (() => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      render: (() => any) | any;

      setVisible: ((visible: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.PlayerStats.ISPlayerStatsWarningPointUI {}
}
