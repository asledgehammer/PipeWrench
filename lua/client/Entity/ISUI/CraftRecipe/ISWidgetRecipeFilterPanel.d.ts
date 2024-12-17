/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISWidgetRecipeFilterPanel:new */
    export class ISWidgetRecipeFilterPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autoFillContents: any;

      buttonGrid: any;

      buttonList: any;

      callbackTarget: any;

      entryBox: any;

      filterTypeCombo: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      margin: any;

      marginBottom: any;

      marginLeft: any;

      marginRight: any;

      marginTop: any;

      paddingBottom: any;

      paddingLeft: any;

      paddingRight: any;

      paddingTop: any;

      searchHackLabel: any;

      tickbox: any;

      constructor(x: any, y: any, width: any, height: any, callbackTarget: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      OnClickFilterType(box: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      OnShowAllClick(clickedOption: any, enabled: any, ...__args: never[]): any;

      populateComboList(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static onTextChange: (box: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISWidgetRecipeFilterPanel {}
}
