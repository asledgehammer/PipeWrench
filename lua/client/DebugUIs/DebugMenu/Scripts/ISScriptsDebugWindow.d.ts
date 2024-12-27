/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Scripts {
    /** @customConstructor ISScriptsDebugWindow:new */
    export class ISScriptsDebugWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static coords: any;

      static instance: any;

      comboBox: any;

      entryBox: any;

      hackPane: any;

      heightMod: any;

      labelWidth: any;

      list: any;

      listLabel: any;

      minimumHeight: any;

      minimumWidth: any;

      player: any;

      playerNum: any;

      reloadButton: any;

      rh: any;

      scriptLabel: any;

      scriptPanel: any;

      searchText: any;

      selectedScriptItem: any;

      subLabel: any;

      th: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      comboChange(_combo: any, _arg1: any, _arg2: any, ...__args: never[]): any;

      drawScriptListItem(y: any, item: any, alt: any, ...__args: never[]): any;

      incY(_y: any, _obj: any, _margin: any, ...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onResize(_width: any, _height: any, ...__args: never[]): any;

      onScriptListSelected(_item: any, ...__args: never[]): any;

      populate(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (_player: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTextChange: (box: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Scripts.ISScriptsDebugWindow {}
}
