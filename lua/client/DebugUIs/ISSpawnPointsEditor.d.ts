/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor ISSpawnPointsEditor:new */
    export class ISSpawnPointsEditor extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      mapList: any;

      pointList: any;

      professionList: any;

      constructor();

      doDrawPointListItem: ((y: any, item: any, alt: any) => any) | any;

      fillMapList: (() => any) | any;

      isSamePoint: ((point1: any, point2: any) => any) | any;

      onCopyToClipboard: (() => any) | any;

      onMapSelected: ((directory: any) => any) | any;

      onPointDoubleClick: ((item: any) => any) | any;

      onPointSelected: (() => any) | any;

      onProfessionSelected: (() => any) | any;

      onRemovePoint: ((allProfessions: any) => any) | any;

      onSetPointToPlayerPosition: ((allProfessions: any) => any) | any;

      PointList_onRightMouseUp: ((x: any, y: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.ISSpawnPointsEditor {}
}
