/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.SeamEditor {
    /** @customConstructor SeamEditorUI:new */
    export class SeamEditorUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      animate: any;

      bottomPanel: any;

      buttonOptions: any;

      comboModID: any;

      currentSeamTile: any;

      modID: any;

      optionsPanel: any;

      scene: any;

      seamTileList: any;

      tilePicker: any;

      tilePicker2: any;

      toolBar: any;

      constructor(x: any, y: any, width: any, height: any);

      assignBelowEastTile(tileName: any, ...__args: never[]): any;

      assignBelowSouthTile(tileName: any, ...__args: never[]): any;

      assignEastTile(tileName: any, ...__args: never[]): any;

      assignSouthTile(tileName: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createToolbar(...__args: never[]): any;

      indexOf(tbl: any, element: any, ...__args: never[]): any;

      onExit(button: any, x: any, y: any, ...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onOptions(...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      onSave(button: any, x: any, y: any, ...__args: never[]): any;

      onSelectModID(...__args: never[]): any;

      render(...__args: never[]): any;

      showUI(...__args: never[]): any;

      update(...__args: never[]): any;
    }

    /** @customConstructor SeamEditorUI_OptionsPanel:new */
    export class SeamEditorUI_OptionsPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onTickBox(index: any, selected: any, ...__args: never[]): any;
    }

    /** @customConstructor SeamEditorUI_Scene:new */
    export class SeamEditorUI_Scene extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      selectedTileName: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      getSelectedTile(...__args: never[]): any;

      getSelectedTileName(...__args: never[]): any;

      getTileBoundsEtc(...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      prerenderEditor(...__args: never[]): any;

      render(...__args: never[]): any;

      renderDraggedTile(...__args: never[]): any;

      renderFloorBounds(x: any, y: any, z: any, r: any, g: any, b: any, ...__args: never[]): any;

      renderPixelGrid(tileName: any, ...__args: never[]): any;

      renderSelectedTile(tileName: any, texture: any, ...__args: never[]): any;

      renderTextureOutline(sx: any, sy: any, sx2: any, sy2: any, pixelSize: any, texture: any, ...__args: never[]): any;

      renderTileAt(texture: any, x: any, y: any, z: any, ...__args: never[]): any;

      renderTileBelowEast(...__args: never[]): any;

      renderTileBelowSouth(...__args: never[]): any;

      renderTileEast(...__args: never[]): any;

      renderTileName(...__args: never[]): any;

      renderTileSouth(...__args: never[]): any;

      snapToTilePixel(x: any, y: any, ...__args: never[]): any;

      uiToPixel(x: any, y: any, ...__args: never[]): any;

      uiToWorld(screenX: any, screenY: any, z: any, ...__args: never[]): any;
    }

    /** @customConstructor SeamEditorUI_TilePicker:new */
    export class SeamEditorUI_TilePicker extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      comboTileset: any;

      editor: any;

      listBox: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      createChildren(...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onSelectTileset(...__args: never[]): any;

      parseTileName(tileName: any, ...__args: never[]): any;

      selectTileByName(tileName: any, ...__args: never[]): any;
    }

    /** @customConstructor SeamEditorUI_TilePicker2:new */
    export class SeamEditorUI_TilePicker2 extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      comboTileset: any;

      editor: any;

      listBox: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      createChildren(...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onSelectTileset(...__args: never[]): any;

      parseTileName(tileName: any, ...__args: never[]): any;

      selectTileByName(tileName: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.SeamEditor.SeamEditorUI {
    /** @noSelf */
    export const SeamEditorUI_InitUI: () => any;
  }
}
