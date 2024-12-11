/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addPoi(_name: any, _x: any, _y: any, ...__args: never[]): any;

      addThunderEvent(_x: any, _y: any, strike: any, light: any, rumble: any, ...__args: never[]): any;

      clear(...__args: never[]): any;

      convertCoords(_x: any, _y: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      stayOnSplitScreen(...__args: never[]): any;

      update(...__args: never[]): any;

      updateValues(_mgr: any, ...__args: never[]): any;

      /** @noSelf */
      static OnClimateTickDebug: (mgr: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;

      /** @noSelf */
      static OnThunderEvent: (x: any, y: any, strike: any, light: any, rumble: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.ThunderDebug {}
}
