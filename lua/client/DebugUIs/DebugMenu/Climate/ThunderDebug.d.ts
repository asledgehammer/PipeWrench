/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor ThunderDebug:new */
    export class ThunderDebug extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static eventsAdded: any;

      static instance: any;

      static shiftDown: any;

      currentTile: any;

      dayStamp: any;

      greyCol: any;

      hotKeyPanels: any;

      hourStamp: any;

      isJoypadWindow: any;

      labels: any;

      monthStamp: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      poi: any;

      richtext: any;

      strikes: any;

      subFocus: any;

      thunderStorm: any;

      year: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addPoi: ((_name: any, _x: any, _y: any) => any) | any;

      addThunderEvent: ((_x: any, _y: any, strike: any, light: any, rumble: any) => any) | any;

      clear: (() => any) | any;

      convertCoords: ((_x: any, _y: any) => any) | any;

      onResize: (() => any) | any;

      stayOnSplitScreen: (() => any) | any;

      update: (() => any) | any;

      updateValues: ((_mgr: any) => any) | any;

      /** @noSelf */
      static OnClimateTickDebug: (mgr: any) => any;

      /** @noSelf */
      static OnOpenPanel: () => any;

      /** @noSelf */
      static OnThunderEvent: (x: any, y: any, strike: any, light: any, rumble: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.ThunderDebug {}
}
