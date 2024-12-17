/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor ISSpawnPointsEditor:new */
    export class ISSpawnPointsEditor extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      mapList: any;

      pointList: any;

      professionList: any;

      constructor();

      doDrawPointListItem(y: any, item: any, alt: any, ...__args: never[]): any;

      fillMapList(...__args: never[]): any;

      isSamePoint(point1: any, point2: any, ...__args: never[]): any;

      normalizePoint(point: any, ...__args: never[]): any;

      onCopyToClipboard(...__args: never[]): any;

      onMapSelected(directory: any, ...__args: never[]): any;

      onPointDoubleClick(item: any, ...__args: never[]): any;

      onPointSelected(...__args: never[]): any;

      onProfessionSelected(...__args: never[]): any;

      onRemovePoint(allProfessions: any, ...__args: never[]): any;

      onSetPointToPlayerPosition(allProfessions: any, ...__args: never[]): any;

      PointList_onRightMouseUp(x: any, y: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.ISSpawnPointsEditor {}
}
