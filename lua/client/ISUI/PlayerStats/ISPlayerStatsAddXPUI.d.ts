/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      create(...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onSelectPerk(...__args: never[]): any;

      render(...__args: never[]): any;

      setVisible(visible: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.PlayerStats.ISPlayerStatsAddXPUI {}
}
