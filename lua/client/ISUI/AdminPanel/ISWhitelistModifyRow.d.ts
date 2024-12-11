/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISWhitelistModifyRow:new */
    export class ISWhitelistModifyRow extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonBorderColor: any;

      buttonDatas: any;

      close: any;

      columns: any;

      columnSize: any;

      combo: any;

      data: any;

      entriesPerPages: any;

      entry: any;

      listHeaderColor: any;

      schema: any;

      tableName: any;

      Update: any;

      view: any;

      constructor(x: any, y: any, width: any, height: any, view: any);

      createChildren(...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISWhitelistModifyRow {}
}
