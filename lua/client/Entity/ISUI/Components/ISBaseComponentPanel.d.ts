/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Components {
    /** @customConstructor ISBaseComponentPanel:new */
    export class ISBaseComponentPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      componentHeader: any;

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

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createComponentHeader(
        _xuiSkin: any,
        _styleName: any,
        _force: any,
        _styleIcon: any,
        _styleLabel: any,
        ...__args: never[]
      ): any;

      getUiDisplayName(...__args: never[]): any;

      getUiIcon(...__args: never[]): any;

      getUiOrderZ(...__args: never[]): any;

      onResize(...__args: never[]): any;

      removeComponentHeader(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static CanCreatePanelFor: (
        _player: any,
        _entity: any,
        _component: any,
        _componentUiStyle: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static table_constructor: (
        o: any,
        x: any,
        y: any,
        width: any,
        height: any,
        player: any,
        entity: any,
        component: any,
        componentUiStyle: any,
        ...__args: never[]
      ) => any;
    }
  }
  export namespace lua.client.Entity.ISUI.Components.ISBaseComponentPanel {}
}
