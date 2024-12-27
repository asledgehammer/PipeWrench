/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Layouts {
    /** @customConstructor ISSodaStockingLayout:new */
    export class ISSodaStockingLayout extends lua.client.Entity.ISUI.Layouts.ISBaseStockingLayout {
      [id: string]: any;
      static [id: string]: any;

      btnNames: any;

      buttonImg: any;

      constructor(x: any, y: any, _parentPanel: any, _blueprintLogic: any);
    }
  }
  export namespace lua.client.Entity.ISUI.Layouts.ISSodaStockingLayout {}
}
