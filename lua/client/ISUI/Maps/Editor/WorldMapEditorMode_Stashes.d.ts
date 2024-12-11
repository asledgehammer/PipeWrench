/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorMode_Stashes:new */
    export class WorldMapEditorMode_Stashes extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode {
      [id: string]: any;
      static [id: string]: any;

      buildingXEntry: any;

      buildingYEntry: any;

      listbox: any;

      loadedStash: any;

      locationControl: any;

      mode: any;

      constructor(editor: any);

      cancelMode(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onBuildingClear(...__args: never[]): any;

      onBuildingSet(...__args: never[]): any;

      onBuildingXEntered(...__args: never[]): any;

      onBuildingYEntered(...__args: never[]): any;

      onLoadStash(...__args: never[]): any;

      onMouseUpOutside(x: any, y: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      prerender(...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Stashes {}
}
