/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.SeamEditor {
    /** @customConstructor SeamEditorUI_SeamTileList:new */
    export class SeamEditorUI_SeamTileList extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      seamTile: any;

      selection: any;

      constructor(x: any, y: any, width: any, height: any, editor: any, seamTile: any);

      getRowAt(x: any, y: any, ...__args: never[]): any;

      getTileNameList(...__args: never[]): any;

      onRemoveTile(tiles: any, index: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      renderMouseOverTile(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.SeamEditor.SeamEditorUI_SeamTileList {}
}
