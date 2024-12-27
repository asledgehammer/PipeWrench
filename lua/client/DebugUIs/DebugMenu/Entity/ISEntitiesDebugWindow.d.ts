/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Entity {
    /** @customConstructor ISEntitiesDebugWindow:new */
    export class ISEntitiesDebugWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static coords: any;

      static instance: any;

      heightMod: any;

      instancesScreen: any;

      minimumHeight: any;

      minimumWidth: any;

      panel: any;

      player: any;

      playerNum: any;

      rh: any;

      scriptScreen: any;

      searchText: any;

      th: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      incY(_y: any, _obj: any, _margin: any, ...__args: never[]): any;

      onReloadEntities(...__args: never[]): any;

      onResize(_width: any, _height: any, ...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (_player: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Entity.ISEntitiesDebugWindow {}
}
