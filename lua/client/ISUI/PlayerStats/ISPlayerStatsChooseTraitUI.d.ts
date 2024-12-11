/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.PlayerStats {
    /** @customConstructor ISPlayerStatsChooseTraitUI:new */
    export class ISPlayerStatsChooseTraitUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      badTraits: any;

      cancel: any;

      chr: any;

      combo: any;

      comboList: any;

      goodTrait: any;

      goodTraits: any;

      ok: any;

      onclick: any;

      target: any;

      traitsSelector: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, target: any, onclick: any, player: any);

      create(...__args: never[]): any;

      onChangeList(...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      populateComboList(...__args: never[]): any;

      render(...__args: never[]): any;

      setVisible(visible: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.PlayerStats.ISPlayerStatsChooseTraitUI {}
}
