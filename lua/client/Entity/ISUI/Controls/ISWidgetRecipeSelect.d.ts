/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISWidgetRecipeSelect:new */
    export class ISWidgetRecipeSelect extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autoFillContents: any;

      comboBox: any;

      component: any;

      craftProcessor: any;

      entity: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      margin: any;

      minimumHeight: any;

      minimumWidth: any;

      originalComboBoxHeight: any;

      originalComboBoxWidth: any;

      player: any;

      styleComboBox: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        player: any,
        entity: any,
        component: any,
        craftProcessor: any,
        _styleComboBox: any,
      );

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      comboChange(_combo: any, _arg1: any, _arg2: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onResize(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISWidgetRecipeSelect {}
}
