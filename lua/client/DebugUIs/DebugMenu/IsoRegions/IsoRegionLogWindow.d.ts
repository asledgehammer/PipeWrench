/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.IsoRegions {
    /** @customConstructor IsoRegionLogWindow:new */
    export class IsoRegionLogWindow extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      buttonBorderColor: any;

      firstTableName: any;

      panelTitle: any;

      tableNamesList: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, title: any);

      createChildren: (() => any) | any;

      drawTableNameList: ((y: any, item: any, alt: any) => any) | any;

      onClickClose: (() => any) | any;

      OnTableNamesListMouseDown: ((item: any) => any) | any;

      populateList: (() => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionLogWindow {}
}
