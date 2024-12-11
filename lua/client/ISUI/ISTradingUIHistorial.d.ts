/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      drawList(y: any, item: any, alt: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      populateList(list: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISTradingUIHistorial {}
}
