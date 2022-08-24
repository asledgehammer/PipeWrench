/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      cancelMode: (() => any) | any;

      createChildren: (() => any) | any;

      onBuildingClear: (() => any) | any;

      onBuildingSet: (() => any) | any;

      onBuildingXEntered: (() => any) | any;

      onBuildingYEntered: (() => any) | any;

      onLoadStash: (() => any) | any;

      onMouseUpOutside: ((x: any, y: any) => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      prerender: (() => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Stashes {}
}
