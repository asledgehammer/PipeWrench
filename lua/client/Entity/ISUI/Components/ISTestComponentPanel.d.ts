/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Components {
    /** @customConstructor ISTestComponentPanel:new */
    export class ISTestComponentPanel extends lua.client.Entity.ISUI.Components.ISBaseComponentPanel {
      [id: string]: any;
      static [id: string]: any;

      margin: any;

      title: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        player: any,
        entity: any,
        component: any,
        componentUiStyle: any,
      );
    }
  }
  export namespace lua.client.Entity.ISUI.Components.ISTestComponentPanel {}
}
