/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Layouts {
    /** @customConstructor ISSodaVendingLayout:new */
    export class ISSodaVendingLayout extends lua.client.Entity.ISUI.Layouts.ISBaseVendingLayout {
      [id: string]: any;
      static [id: string]: any;

      btnNames: any;

      constructor(x: any, y: any, _parentPanel: any, _blueprintLogic: any);
    }
  }
  export namespace lua.client.Entity.ISUI.Layouts.ISSodaVendingLayout {}
}
