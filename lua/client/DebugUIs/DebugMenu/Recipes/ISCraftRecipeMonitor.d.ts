/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Recipes {
    /** @customConstructor ISCraftRecipeMonitor:new */
    export class ISCraftRecipeMonitor extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      btnRecipe: any;

      currentTile: any;

      greyCol: any;

      hotKeyPanels: any;

      infoListY: any;

      isJoypadWindow: any;

      listView: any;

      monitor: any;

      monitorID: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      richtext: any;

      subFocus: any;

      constructor(x: any, y: any, width: any, height: any, title: any);

      onBtnClick(_button: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      setMonitor(_monitor: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (_monitor: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeMonitor {}
}
