/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Entity {
    /** @customConstructor ISEntityScriptsPanel:new */
    export class ISEntityScriptsPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buildButton: any;

      entryBox: any;

      list: any;

      listLabel: any;

      player: any;

      playerNum: any;

      scriptLabel: any;

      scriptPanel: any;

      searchText: any;

      selectedCanBuild: any;

      selectedEntityItem: any;

      subLabel: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      createChildren(...__args: never[]): any;

      drawEntityListItem(y: any, item: any, alt: any, ...__args: never[]): any;

      incY(_y: any, _obj: any, _margin: any, ...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onEntityListSelected(_item: any, ...__args: never[]): any;

      onResize(_width: any, _height: any, ...__args: never[]): any;

      populate(...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static onTextChange: (box: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Entity.ISEntityScriptsPanel {}
}
