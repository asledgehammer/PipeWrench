/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISTradingUIHistorical:new */
    export class ISTradingUIHistorical extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      list: any;

      msgList: any;

      no: any;

      otherPlayer: any;

      constructor(x: any, y: any, width: any, height: any, list: any, otherPlayer: any);

      drawList: ((y: any, item: any, alt: any) => any) | any;

      onClick: ((button: any) => any) | any;

      populateList: ((list: any) => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISTradingUIHistorial {}
}
