/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.CraftRecipe {
    /** @customConstructor ISWidgetHandCraftControl:new */
    export class ISWidgetHandCraftControl extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      allowBatchCraft: any;

      autoFillContents: any;

      boxHeight: any;

      buttonCraft: any;

      buttonForceCraft: any;

      colProgress: any;

      craftTimes: any;

      entryBox: any;

      interactiveMode: any;

      isAutoFill: any;

      isAutoFillX: any;

      isAutoFillY: any;

      logic: any;

      margin: any;

      minimumHeight: any;

      minimumWidth: any;

      origButtonHeight: any;

      player: any;

      returnToContainer: any;

      slider: any;

      constructor(x: any, y: any, width: any, height: any, player: any, logic: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onAutoToggled(_newState: any, ...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onHandcraftActionCancelled(...__args: never[]): any;

      onHandcraftActionComplete(...__args: never[]): any;

      onHandcraftActionStart(action: any, ...__args: never[]): any;

      onInputsChanged(...__args: never[]): any;

      onResize(...__args: never[]): any;

      onSliderChange(_newval: any, _slider: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      startHandcraft(force: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static onTextChange: (box: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Entity.ISUI.CraftRecipe.ISWidgetHandCraftControl {}
}
