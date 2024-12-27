/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISComponentsListPanel:new */
    export class ISComponentsListPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      container: any;

      entity: any;

      entityConfig: any;

      margin: any;

      maximumHeight: any;

      maximumWidth: any;

      minimumHeight: any;

      minimumWidth: any;

      padding: any;

      panels: any;

      player: any;

      scrollBarWidth: any;

      constructor(x: any, y: any, width: any, height: any, player: any, entity: any, entityConfig: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISComponentsListPanel {}
}
