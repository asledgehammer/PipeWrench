/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor DeviceInspector:new */
    export class DeviceInspector extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      currentTile: any;

      hotKeyPanels: any;

      isJoypadWindow: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      richtext: any;

      subFocus: any;

      tmpTxt: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addLine: ((_prefix: any, _line: any) => any) | any;

      addLineEnd: (() => any) | any;

      addTitle: ((_title: any) => any) | any;

      clear: (() => any) | any;

      onResize: (() => any) | any;

      readObject: ((_object: any) => any) | any;

      stayOnSplitScreen: (() => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static onMouseButtonUp: (_object: any, _x: any, _y: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.DeviceInspector {}
}
