/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Recipes {
    /** @customConstructor ISCraftRecipeTagsDebugPanel:new */
    export class ISCraftRecipeTagsDebugPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      listView: any;

      player: any;

      playerNum: any;

      searchText: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      createChildren(...__args: never[]): any;

      incY(_y: any, _obj: any, _margin: any, ...__args: never[]): any;

      onResize(_width: any, _height: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeTagsDebugPanel {}
}
