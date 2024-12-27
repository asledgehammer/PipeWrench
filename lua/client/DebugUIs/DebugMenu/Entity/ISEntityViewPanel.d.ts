/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Entity {
    /** @customConstructor ISEntityViewPanel:new */
    export class ISEntityViewPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      entity: any;

      entityScriptButton: any;

      greyCol: any;

      list: any;

      listView: any;

      objectRuntimeButton: any;

      reloadButton: any;

      reloadScriptButton: any;

      scriptLabel: any;

      scriptRuntimeButton: any;

      searchText: any;

      selectedEntityItem: any;

      subLabel: any;

      viewButtons: any;

      viewMode: any;

      constructor(x: any, y: any, width: any, height: any, entity: any);

      createChildren(...__args: never[]): any;

      drawEntityListItem(y: any, item: any, alt: any, ...__args: never[]): any;

      incY(_y: any, _obj: any, _margin: any, ...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onEntityListSelected(_item: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      populate(...__args: never[]): any;

      populateListView(...__args: never[]): any;

      render(...__args: never[]): any;

      setEntity(_entity: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Entity.ISEntityViewPanel {}
}
