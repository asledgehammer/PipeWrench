/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.WorldFlares {
    /** @customConstructor WorldFlaresDebug:new */
    export class WorldFlaresDebug extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      buttonBorderColor: any;

      colBoxWidth: any;

      colExt: any;

      colExtBoxY: any;

      colInt: any;

      colIntBoxY: any;

      entryBoxLifeTime: any;

      entryBoxRange: any;

      entryBoxWindspeed: any;

      flareCount: any;

      flareID: any;

      flaresList: any;

      infoWidth: any;

      infoX: any;

      infoY: any;

      panelTitle: any;

      variableColor: any;

      windowY: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, title: any);

      createChildren: (() => any) | any;

      drawFlaresList: ((y: any, item: any, alt: any) => any) | any;

      onClickAddFlare: (() => any) | any;

      onClickClose: (() => any) | any;

      onClickDeleteFlares: (() => any) | any;

      OnFlaresListMouseDown: ((item: any) => any) | any;

      onSliderChange: ((_newVal: any, _slider: any) => any) | any;

      onTicked: ((_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any) => any) | any;

      populateList: (() => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.WorldFlares.WorldFlaresDebug {}
}
