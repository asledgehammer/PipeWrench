/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.PlayerStats {
    /** @customConstructor ISPlayerStatsAddXPUI:new */
    export class ISPlayerStatsAddXPUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      cancel: any;

      combo: any;

      entry: any;

      ok: any;

      onclick: any;

      perkList: any;

      target: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, target: any, onclick: any);

      create: (() => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onSelectPerk: (() => any) | any;

      render: (() => any) | any;

      setVisible: ((visible: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.PlayerStats.ISPlayerStatsAddXPUI {}
}
