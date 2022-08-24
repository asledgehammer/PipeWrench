/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.GlobalModData {
    /** @customConstructor GlobalModDataDebug:new */
    export class GlobalModDataDebug extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      buttonBorderColor: any;

      firstTableName: any;

      infoList: any;

      panelTitle: any;

      tableNamesList: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, title: any);

      createChildren: (() => any) | any;

      drawInfoList: ((y: any, item: any, alt: any) => any) | any;

      drawTableNameList: ((y: any, item: any, alt: any) => any) | any;

      formatVal: ((_value: any, _func: any, _func2: any) => any) | any;

      onClickClose: (() => any) | any;

      onClickRefresh: (() => any) | any;

      OnTableNamesListMouseDown: ((item: any) => any) | any;

      parseTable: ((_t: any, _ident: any) => any) | any;

      populateInfoList: ((_name: any) => any) | any;

      populateList: (() => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.GlobalModData.GlobalModData {}
}
