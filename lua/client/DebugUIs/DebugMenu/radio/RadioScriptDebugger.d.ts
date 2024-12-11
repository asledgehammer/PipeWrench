/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.radio {
    /** @customConstructor RadioScriptDebugger:new */
    export class RadioScriptDebugger extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      broadcastList: any;

      buttonBorderColor: any;

      channelsList: any;

      infoList: any;

      panelTitle: any;

      radio: any;

      scriptManager: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, title: any);

      createChildren(...__args: never[]): any;

      drawBroadcastList(y: any, item: any, alt: any, ...__args: never[]): any;

      drawChannelList(y: any, item: any, alt: any, ...__args: never[]): any;

      drawInfoList(y: any, item: any, alt: any, ...__args: never[]): any;

      onClickClose(...__args: never[]): any;

      OnDaysListMouseDown(item: any, ...__args: never[]): any;

      populateBroadcastList(_bc: any, ...__args: never[]): any;

      populateInfoList(_radioChannel: any, ...__args: never[]): any;

      populateList(_force: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (_radioChannel: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.radio.RadioScriptDebugger {}
}
