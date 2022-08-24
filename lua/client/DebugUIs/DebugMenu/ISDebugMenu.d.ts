/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      addButtonInfo: ((_title: any, _func: any, _tab: any, _marginTop: any) => any) | any;

      createChildren: (() => any) | any;

      onClick: ((_button: any) => any) | any;

      onClick_Dev: (() => any) | any;

      onClick_Main: (() => any) | any;

      setupButtons: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: () => any;

      /** @noSelf */
      static OnPlayerDeath: (playerObj: any) => any;

      /** @noSelf */
      static RegisterClass: (_class: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.ISDebugMenu {}
}
