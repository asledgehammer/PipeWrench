/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.TileGeometryEditor {
    /** @customConstructor TileGeometryEditor_AddTileTool:new */
    export class TileGeometryEditor_AddTileTool extends lua.client.DebugUIs.DebugChunkState.DebugChunkStateUI_Tool {
      [id: string]: any;
      static [id: string]: any;

      bRemoveTile: any;

      mouseDown: any;

      mouseDownX: any;

      mouseDownY: any;

      vector3f_1: any;

      constructor(editor: any);

      getFirstSelectedTile(...__args: never[]): any;

      mouseToTileLocation(...__args: never[]): any;

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

      renderScene(...__args: never[]): any;

      renderSceneTiles(...__args: never[]): any;

      uiToTileLocation(x: any, y: any, ...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_DepthRectTool:new */
    export class TileGeometryEditor_DepthRectTool extends lua.client.DebugUIs.DebugChunkState.DebugChunkStateUI_Tool {
      [id: string]: any;
      static [id: string]: any;

      clickPixelX: any;

      constructor(editor: any);

      addDefaultFloorPlane(...__args: never[]): any;

      getMarqueeBounds(x: any, y: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      removeDefaultFloorPlane(...__args: never[]): any;

      renderScene(...__args: never[]): any;

      /** @noSelf */
      static RasterizePolygonCallback: (args: any, x: any, y: any, ...__args: never[]) => any;
    }

    /** @customConstructor TileGeometryEditor_EditPolygonTool:new */
    export class TileGeometryEditor_EditPolygonTool extends lua.client.DebugUIs.DebugChunkState.DebugChunkStateUI_Tool {
      [id: string]: any;
      static [id: string]: any;

      dragPointIndex: any;

      dragPointOriginalPos: any;

      polygonPoint2D: any;

      constructor(editor: any);

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_GizmoTool:new */
    export class TileGeometryEditor_GizmoTool extends lua.client.DebugUIs.DebugChunkState.DebugChunkStateUI_Tool {
      [id: string]: any;
      static [id: string]: any;

      gizmoAxis: any;

      gizmoStartScenePos: any;

      constructor(editor: any);

      onGizmoAccept(...__args: never[]): any;

      onGizmoCancel(...__args: never[]): any;

      onGizmoChanged(delta: any, ...__args: never[]): any;

      onGizmoStart(...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_GizmoTool_ResizeBox:new */
    export class TileGeometryEditor_GizmoTool_ResizeBox extends lua.client.DebugUIs.TileGeometryEditor
      .TileGeometryEditor_GizmoTool {
      [id: string]: any;
      static [id: string]: any;

      originalMax: any;

      originalMin: any;

      constructor(editor: any);
    }

    /** @customConstructor TileGeometryEditor_GizmoTool_ResizeCylinder:new */
    export class TileGeometryEditor_GizmoTool_ResizeCylinder extends lua.client.DebugUIs.TileGeometryEditor
      .TileGeometryEditor_GizmoTool {
      [id: string]: any;
      static [id: string]: any;

      originalHeight: any;

      originalRadius: any;

      originalTranslation: any;

      constructor(editor: any);
    }

    /** @customConstructor TileGeometryEditor_GizmoTool_Rotate:new */
    export class TileGeometryEditor_GizmoTool_Rotate extends lua.client.DebugUIs.TileGeometryEditor
      .TileGeometryEditor_GizmoTool {
      [id: string]: any;
      static [id: string]: any;

      originalRotate: any;

      constructor(editor: any);

      clampAngle(degrees: any, ...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_GizmoTool_Scale:new */
    export class TileGeometryEditor_GizmoTool_Scale extends lua.client.DebugUIs.TileGeometryEditor
      .TileGeometryEditor_GizmoTool {
      [id: string]: any;
      static [id: string]: any;

      originalScale: any;

      constructor(editor: any);
    }

    /** @customConstructor TileGeometryEditor_GizmoTool_SetSurface:new */
    export class TileGeometryEditor_GizmoTool_SetSurface extends lua.client.DebugUIs.TileGeometryEditor
      .TileGeometryEditor_GizmoTool {
      [id: string]: any;
      static [id: string]: any;

      selection: any;

      constructor(editor: any);
    }

    /** @customConstructor TileGeometryEditor_GizmoTool_Translate:new */
    export class TileGeometryEditor_GizmoTool_Translate extends lua.client.DebugUIs.TileGeometryEditor
      .TileGeometryEditor_GizmoTool {
      [id: string]: any;
      static [id: string]: any;

      originalOffset: any;

      constructor(editor: any);
    }

    /** @customConstructor TileGeometryEditor_MoveTileTool:new */
    export class TileGeometryEditor_MoveTileTool extends lua.client.DebugUIs.DebugChunkState.DebugChunkStateUI_Tool {
      [id: string]: any;
      static [id: string]: any;

      draggedTile: any;

      mouseDownX: any;

      mouseDownY: any;

      vector3f_1: any;

      constructor(editor: any);

      mouseToTileLocation(...__args: never[]): any;

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

      renderScene(...__args: never[]): any;

      renderSceneTiles(...__args: never[]): any;

      uiToTileLocation(x: any, y: any, ...__args: never[]): any;
    }

    /** @customConstructor TileGeometryEditor_Tool:new */
    export class TileGeometryEditor_Tool extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      javaObject: any;

      scene: any;

      constructor(editor: any);

      getMouseX(...__args: never[]): any;

      getMouseY(...__args: never[]): any;

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

      onGizmoChanged(delta: any, ...__args: never[]): any;

      onMouseDown(x: any, y: any, ...__args: never[]): any;

      onMouseMove(dx: any, dy: any, ...__args: never[]): any;

      onMouseUp(x: any, y: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      renderScene(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_Tools {}
}
