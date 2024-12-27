/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Windows {
    /** @customConstructor ISEntityTabWindow:new */
    export class ISEntityTabWindow extends lua.client.Entity.ISUI.ISBaseEntityWindow {
      [id: string]: any;
      static [id: string]: any;

      componentsPanel: any;

      constructor(x: any, y: any, width: any, height: any, player: any, entity: any, entityConfig: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      onCraftButtonClick(_button: any, ...__args: never[]): any;

      onResize(_width: any, _height: any, ...__args: never[]): any;

      refresh(...__args: never[]): any;

      /** @noSelf */
      static CanOpenWindowFor: (_player: any, _entity: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Entity.ISUI.Windows.ISEntityTabWindow {}
}
