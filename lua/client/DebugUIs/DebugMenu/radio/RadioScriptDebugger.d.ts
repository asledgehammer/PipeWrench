/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      createChildren: (() => any) | any;

      drawBroadcastList: ((y: any, item: any, alt: any) => any) | any;

      drawChannelList: ((y: any, item: any, alt: any) => any) | any;

      drawInfoList: ((y: any, item: any, alt: any) => any) | any;

      onClickClose: (() => any) | any;

      OnDaysListMouseDown: ((item: any) => any) | any;

      populateBroadcastList: ((_bc: any) => any) | any;

      populateInfoList: ((_radioChannel: any) => any) | any;

      populateList: ((_force: any) => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: (_radioChannel: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.radio.RadioScriptDebugger {}
}
