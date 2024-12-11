/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addLine(_prefix: any, _line: any, ...__args: never[]): any;

      addLineEnd(...__args: never[]): any;

      addTitle(_title: any, ...__args: never[]): any;

      clear(...__args: never[]): any;

      onResize(...__args: never[]): any;

      readObject(_object: any, ...__args: never[]): any;

      stayOnSplitScreen(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static onMouseButtonUp: (_object: any, _x: any, _y: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DeviceInspector {}
}
