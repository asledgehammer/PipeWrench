/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      createChildren(...__args: never[]): any;

      drawInfoList(y: any, item: any, alt: any, ...__args: never[]): any;

      drawTableNameList(y: any, item: any, alt: any, ...__args: never[]): any;

      formatVal(_value: any, _func: any, _func2: any, ...__args: never[]): any;

      onClickClose(...__args: never[]): any;

      onClickRefresh(...__args: never[]): any;

      OnTableNamesListMouseDown(item: any, ...__args: never[]): any;

      parseTable(_t: any, _ident: any, ...__args: never[]): any;

      populateInfoList(_name: any, ...__args: never[]): any;

      populateList(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.GlobalModData.GlobalModData {}
}
