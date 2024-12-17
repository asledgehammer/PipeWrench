/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISComponentsTabPanel:new */
    export class ISComponentsTabPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      disableHeaders: any;

      doIcons: any;

      doText: any;

      entity: any;

      entityConfig: any;

      entityDebug: any;

      layoutParent: any;

      margin: any;

      maximumHeight: any;

      maximumWidth: any;

      menuLayout: any;

      minimumHeight: any;

      minimumPanelWidth: any;

      minimumWidth: any;

      multiPanels: any;

      originalColor: any;

      padding: any;

      panelColumn: any;

      panels: any;

      player: any;

      selectedColor: any;

      selectedIndex: any;

      tableLayout: any;

      constructor(x: any, y: any, width: any, height: any, player: any, entity: any, entityConfig: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      selectPanel(_index: any, _recalc: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISComponentsTabPanel {}
}
