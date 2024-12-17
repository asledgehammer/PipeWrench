/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Recipes {
    /** @customConstructor ISRecipeMonitor:new */
    export class ISRecipeMonitor extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      btnRecipe: any;

      currentTile: any;

      greyCol: any;

      hotKeyPanels: any;

      infoList: any;

      infoListY: any;

      isJoypadWindow: any;

      monitorID: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      richtext: any;

      subFocus: any;

      constructor(x: any, y: any, width: any, height: any, title: any);

      drawInfoList(y: any, item: any, alt: any, ...__args: never[]): any;

      onBtnClick(_button: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      onSaveFile(...__args: never[]): any;

      onTicked(_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any, ...__args: never[]): any;

      onTickedTooltip(_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Recipes.ISRecipeMonitor {}
}
