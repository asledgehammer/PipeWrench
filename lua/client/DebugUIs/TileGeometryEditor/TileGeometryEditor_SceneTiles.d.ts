/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.TileGeometryEditor {
    /** @customConstructor TileGeometryEditor_SceneTiles:new */
    export class TileGeometryEditor_SceneTiles extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      javaObject: any;

      scene: any;

      tempExtentsMax: any;

      tempExtentsMin: any;

      tempRotate: any;

      tempTranslate: any;

      tiles: any;

      vector3f_1: any;

      constructor(editor: any);

      addTile(dx: any, dy: any, tileName: any, ...__args: never[]): any;

      getTile(dx: any, dy: any, ...__args: never[]): any;

      index(dx: any, dy: any, ...__args: never[]): any;

      removeTile(dx: any, dy: any, ...__args: never[]): any;

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

      renderTile(dx: any, dy: any, tileName: any, ...__args: never[]): any;

      uiToTileLocation(x: any, y: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_SceneTiles {}
}
