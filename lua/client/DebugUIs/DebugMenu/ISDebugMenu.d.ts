/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu {
    /** @customConstructor ISDebugMenu:new */
    export class ISDebugMenu extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static tab: any;

      buttonBorderColor: any;

      buttons: any;

      devButton: any;

      devTab: any;

      mainButton: any;

      mainTab: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any);

      addButtonInfo(_title: any, _func: any, _tab: any, _marginTop: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onClick(_button: any, ...__args: never[]): any;

      onClick_Dev(...__args: never[]): any;

      onClick_Main(...__args: never[]): any;

      setupButtons(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;

      /** @noSelf */
      static OnPlayerDeath: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static RegisterClass: (_class: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.ISDebugMenu {}
}
