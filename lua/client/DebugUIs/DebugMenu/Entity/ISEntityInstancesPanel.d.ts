/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Entity {
    /** @customConstructor ISEntityInstancesPanel:new */
    export class ISEntityInstancesPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      entityPanel: any;

      entryBox: any;

      list: any;

      listLabel: any;

      player: any;

      playerNum: any;

      reloadButton: any;

      reloadScriptsButton: any;

      searchText: any;

      selectedEntityItem: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      createChildren(...__args: never[]): any;

      drawEntityListItem(y: any, item: any, alt: any, ...__args: never[]): any;

      incY(_y: any, _obj: any, _margin: any, ...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onEntityDebugUI(_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any, ...__args: never[]): any;

      onEntityListSelected(_item: any, ...__args: never[]): any;

      onReloadEntities(...__args: never[]): any;

      onResize(_width: any, _height: any, ...__args: never[]): any;

      populate(...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static onTextChange: (box: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Entity.ISEntityInstancesPanel {}
}
