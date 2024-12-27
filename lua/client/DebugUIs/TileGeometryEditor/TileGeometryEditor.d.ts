/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.TileGeometryEditor {
    /** @customConstructor TileGeometryEditor:new */
    export class TileGeometryEditor extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      animate: any;

      bottomPanel: any;

      buttonOptions: any;

      comboMode: any;

      comboModID: any;

      editMode: any;

      modID: any;

      optionsPanel: any;

      polygonPoint2D: any;

      scene: any;

      sceneTiles: any;

      switchViewPanel: any;

      tilePicker: any;

      tilePicker2: any;

      toolBar: any;

      uiPoint: any;

      views: any;

      zeroVector: any;

      constructor(x: any, y: any, width: any, height: any);

      configGizmo(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createToolbar(...__args: never[]): any;

      getValidGizmos(...__args: never[]): any;

      indexOf(tbl: any, element: any, ...__args: never[]): any;

      onExit(button: any, x: any, y: any, ...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onOptions(...__args: never[]): any;

      onReloadTexture(button: any, x: any, y: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      onSave(button: any, x: any, y: any, ...__args: never[]): any;

      onSelectMode(...__args: never[]): any;

      onSelectModID(...__args: never[]): any;

      render(...__args: never[]): any;

      resetView(...__args: never[]): any;

      setEditMode(mode: any, ...__args: never[]): any;

      setGeometryList(...__args: never[]): any;

      showUI(...__args: never[]): any;

      update(...__args: never[]): any;

      updateGeometryFile(...__args: never[]): any;

      updateGeometryFile2(selectedTile: any, ...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_OptionsPanel:new */
    export class TileGeometryEditor_OptionsPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onTickBox(index: any, selected: any, ...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_Scene:new */
    export class TileGeometryEditor_Scene extends lua.client.Vehicles.ISUI.ISUI3DScene {
      [id: string]: any;
      static [id: string]: any;

      animation: any;

      dragPointIndex: any;

      editor: any;

      gizmo: any;

      gizmoAxis: any;

      mouseAction: any;

      selectedTileName: any;

      tempExtentsMax: any;

      tempExtentsMin: any;

      tempRotate: any;

      tempTranslate: any;

      zeroVector: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      getSelectedTile(...__args: never[]): any;

      getSelectedTileName(...__args: never[]): any;

      getTileBounds2(dx: any, dy: any, dz: any, ...__args: never[]): any;

      getTileBoundsEtc(...__args: never[]): any;

      isPolygonObject(objectId: any, ...__args: never[]): any;

      isViewUserDefined(...__args: never[]): any;

      java0(func: any, ...__args: never[]): any;

      java1(func: any, arg0: any, ...__args: never[]): any;

      java2(func: any, arg0: any, arg1: any, ...__args: never[]): any;

      java3(func: any, arg0: any, arg1: any, arg2: any, ...__args: never[]): any;

      java4(func: any, arg0: any, arg1: any, arg2: any, arg3: any, ...__args: never[]): any;

      java5(func: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, ...__args: never[]): any;

      java6(func: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, ...__args: never[]): any;

      java7(
        func: any,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        arg6: any,
        ...__args: never[]
      ): any;

      java9(
        func: any,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        arg6: any,
        arg7: any,
        arg8: any,
        ...__args: never[]
      ): any;

      onGizmoChanged(delta: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      prerenderEditor(...__args: never[]): any;

      removeAllGeometryObjects(...__args: never[]): any;

      render(...__args: never[]): any;

      renderBox3D(
        tx: any,
        ty: any,
        tz: any,
        rx: any,
        ry: any,
        rz: any,
        minX: any,
        minY: any,
        minZ: any,
        maxX: any,
        maxY: any,
        maxZ: any,
        r: any,
        g: any,
        b: any,
        ...__args: never[]
      ): any;

      renderNorthWall(...__args: never[]): any;

      renderPixelGrid(tileName: any, ...__args: never[]): any;

      renderPixelGrid2(sx: any, sy: any, sx2: any, sy2: any, pixelSize: any, ...__args: never[]): any;

      renderSelectedTile(tileName: any, texture: any, ...__args: never[]): any;

      renderSolidBox3D(
        tx: any,
        ty: any,
        tz: any,
        rx: any,
        ry: any,
        rz: any,
        minX: any,
        minY: any,
        minZ: any,
        maxX: any,
        maxY: any,
        maxZ: any,
        r: any,
        g: any,
        b: any,
        a: any,
        ...__args: never[]
      ): any;

      renderSolidSquareBox(...__args: never[]): any;

      renderSpriteGridTextureMask(
        sx: any,
        sy: any,
        sx2: any,
        sy2: any,
        pixelSize: any,
        tileName: any,
        ...__args: never[]
      ): any;

      renderSpriteGridTile(sprite: any, dx: any, dy: any, dz: any, ...__args: never[]): any;

      renderSquareBox(...__args: never[]): any;

      renderSurfaceOffset(...__args: never[]): any;

      renderSurfaceOffsetAux(value: any, r: any, g: any, b: any, ...__args: never[]): any;

      renderTextureMask(sx: any, sy: any, sx2: any, sy2: any, pixelSize: any, texture: any, ...__args: never[]): any;

      renderTextureOutline(sx: any, sy: any, sx2: any, sy2: any, pixelSize: any, texture: any, ...__args: never[]): any;

      renderTileName(...__args: never[]): any;

      renderUnderlyingTile(overlayName: any, ...__args: never[]): any;

      renderWestWall(...__args: never[]): any;

      snapToTilePixel(x: any, y: any, ...__args: never[]): any;

      uiToPixel(x: any, y: any, ...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_SwitchView:new */
    export class TileGeometryEditor_SwitchView extends lua.client.Vehicles.ISUI.ISUI3DScene {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      constructor(editor: any, x: any, y: any, width: any, height: any);

      onMouseMoveOutside(dx: any, dy: any, ...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_TilePicker:new */
    export class TileGeometryEditor_TilePicker extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      comboTileset: any;

      editor: any;

      listBox: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      createChildren(...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onSelectTileset(...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_TilePicker2:new */
    export class TileGeometryEditor_TilePicker2 extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      comboTileset: any;

      editor: any;

      listBox: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      createChildren(...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onSelectTileset(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor {
    /** @noSelf */
    export const TileGeometryEditor_InitUI: () => any;
  }
}
