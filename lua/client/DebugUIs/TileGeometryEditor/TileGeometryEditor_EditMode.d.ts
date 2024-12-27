/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.TileGeometryEditor {
    /** @customConstructor TileGeometryEditor_BoxPanel:new */
    export class TileGeometryEditor_BoxPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      extentBoxes: any;

      movingFace: any;

      scene: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      configGizmo(...__args: never[]): any;

      configGizmoAux(face: any, extentX: any, extentY: any, extentZ: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createEntry(x: any, y: any, w: any, h: any, id: any, ...__args: never[]): any;

      onTextEntered(entry: any, id: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      toUI(...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_CylinderPanel:new */
    export class TileGeometryEditor_CylinderPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      movingFace: any;

      radiusEntry: any;

      scene: any;

      zMaxEntry: any;

      zMinEntry: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      configGizmo(...__args: never[]): any;

      configGizmoAux(face: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createEntry(x: any, y: any, w: any, h: any, id: any, ...__args: never[]): any;

      onTextEntered(entry: any, id: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      toUI(...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_DepthTexturePanel:new */
    export class TileGeometryEditor_DepthTexturePanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      tilePicker: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      render(...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_EditMode:new */
    export class TileGeometryEditor_EditMode extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      height: any;

      scene: any;

      tilePicker: any;

      tilePicker2: any;

      width: any;

      constructor(editor: any);

      activate(...__args: never[]): any;

      configGizmo(...__args: never[]): any;

      deactivate(...__args: never[]): any;

      getValidGizmos(...__args: never[]): any;

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

      onKeyPress(key: any, ...__args: never[]): any;

      onMouseDown(x: any, y: any, ...__args: never[]): any;

      onMouseDownScene(x: any, y: any, ...__args: never[]): any;

      onMouseUp(x: any, y: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      onSave(...__args: never[]): any;

      prerenderEditor(...__args: never[]): any;

      renderSceneTiles(...__args: never[]): any;

      renderTileName(...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_EditMode_Geometry:new */
    export class TileGeometryEditor_EditMode_Geometry extends lua.client.DebugUIs.TileGeometryEditor
      .TileGeometryEditor_EditMode {
      [id: string]: any;
      static [id: string]: any;

      animation: any;

      belowList: any;

      boxPanel: any;

      button1: any;

      button2: any;

      button3: any;

      button4: any;

      button5: any;

      button5_1: any;

      button5_2: any;

      button6: any;

      button7: any;

      cylinderPanel: any;

      depthTexturePanel: any;

      listBox: any;

      propertiesPanel: any;

      tempExtentsMax: any;

      tempExtentsMin: any;

      tempTranslate: any;

      constructor(x: any, y: any, w: any, h: any, editor: any);

      createChildren(...__args: never[]): any;

      onAddBox(...__args: never[]): any;

      onAddCylinder(...__args: never[]): any;

      onAddPolygon(plane: any, ...__args: never[]): any;

      onAddPolygonXY(...__args: never[]): any;

      onAddPolygonXZ(...__args: never[]): any;

      onAddPolygonYZ(...__args: never[]): any;

      onDuplicateObject(objectName: any, ...__args: never[]): any;

      onEditPoints(...__args: never[]): any;

      onGeometryToPixels(objectName: any, ...__args: never[]): any;

      onPolygonToPixels(objectName: any, ...__args: never[]): any;

      onRemoveGeometry(...__args: never[]): any;

      onToggleGeometryVisible(...__args: never[]): any;

      onToggleGizmo(...__args: never[]): any;

      pickUniqueName(prefix: any, ...__args: never[]): any;

      prerenderBox(...__args: never[]): any;

      prerenderCylinder(...__args: never[]): any;

      prerenderDepthTexturePanel(...__args: never[]): any;

      prerenderGeometry(...__args: never[]): any;

      prerenderProperties(...__args: never[]): any;

      setGeometryList(...__args: never[]): any;

      updateGeometryFile(...__args: never[]): any;

      zeroRotation(objectName: any, axis: any, ...__args: never[]): any;

      zeroTranslation(objectName: any, axis: any, ...__args: never[]): any;

      /** @noSelf */
      static RasterizePolygonCallback: (args: any, x: any, y: any, ...__args: never[]) => any;
    }

    /** @customConstructor TileGeometryEditor_EditMode_SceneTiles:new */
    export class TileGeometryEditor_EditMode_SceneTiles extends lua.client.DebugUIs.TileGeometryEditor
      .TileGeometryEditor_EditMode {
      [id: string]: any;
      static [id: string]: any;

      button1: any;

      button2: any;

      button4: any;

      buttonPanel: any;

      previousGeometryVisible: any;

      previousTool: any;

      textColorDisabled: any;

      textColorEnabled: any;

      tilePicker3: any;

      constructor(editor: any);

      createChildren(...__args: never[]): any;

      onButtonMove(...__args: never[]): any;

      onButtonPlace(...__args: never[]): any;

      onButtonRemove(...__args: never[]): any;

      onButtonSelect(...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_EditMode_Seating:new */
    export class TileGeometryEditor_EditMode_Seating extends lua.client.DebugUIs.TileGeometryEditor
      .TileGeometryEditor_EditMode {
      [id: string]: any;
      static [id: string]: any;

      button1: any;

      button2: any;

      button3: any;

      button4: any;

      button5: any;

      button6: any;

      button7: any;

      buttonPanel: any;

      listBox: any;

      previousAnimation: any;

      previousTool: any;

      propertiesPanel: any;

      selectedPositionIndex: any;

      selectedTile: any;

      textColorDisabled: any;

      textColorEnabled: any;

      tilePicker3: any;

      constructor(editor: any);

      canApplyChange(...__args: never[]): any;

      checkSelectedPosition(...__args: never[]): any;

      checkSelectedTile(tilesetName: any, col: any, row: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      getSelectedPositionIndex(...__args: never[]): any;

      hasPositionID(positionID: any, ...__args: never[]): any;

      onButtonAddPosition(positionID: any, ...__args: never[]): any;

      onButtonApply(...__args: never[]): any;

      onButtonRemovePosition(...__args: never[]): any;

      onButtonToggleGeometry(...__args: never[]): any;

      populateListBox(...__args: never[]): any;

      prerenderProperties(...__args: never[]): any;

      renderItemBackground(
        tilesetName: any,
        col: any,
        row: any,
        x: any,
        y: any,
        w: any,
        h: any,
        ...__args: never[]
      ): any;

      setGeometryModeSelection(...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_GeometryListBox:new */
    export class TileGeometryEditor_GeometryListBox extends lua.client.DebugUIs.AnimationClipViewer_ListBox {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      scene: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_ListBox:new */
    export class TileGeometryEditor_ListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      indexOf(text: any, ...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_PropertiesPanel:new */
    export class TileGeometryEditor_PropertiesPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      itemHeightEntry: any;

      movingFace: any;

      scene: any;

      surfaceEntry: any;

      tickBox: any;

      vector3: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      configGizmo(...__args: never[]): any;

      configGizmoAux(face: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      createEntry(x: any, y: any, w: any, h: any, id: any, ...__args: never[]): any;

      onTickBox(index: any, selected: any, tickBox: any, ...__args: never[]): any;

      shouldShowInScene(...__args: never[]): any;

      toUI(...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_SeatingListBox:new */
    export class TileGeometryEditor_SeatingListBox extends lua.client.DebugUIs.AnimationClipViewer_ListBox {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      scene: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_SeatingPropertiesPanel:new */
    export class TileGeometryEditor_SeatingPropertiesPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      scene: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      createChildren(...__args: never[]): any;

      onTickBox(index: any, selected: any, tickBox: any, ...__args: never[]): any;

      toUI(...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_TilePicker3:new */
    export class TileGeometryEditor_TilePicker3 extends lua.client.ISUI.ISPanel {
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
  export namespace lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_EditMode {}
}
