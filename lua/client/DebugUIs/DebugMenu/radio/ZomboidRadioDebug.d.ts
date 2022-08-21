/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.radio {
    /** @customConstructor ZomboidRadioDebug:new */
    export class ZomboidRadioDebug extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      broadcastList: any;

      buttonBorderColor: any;

      channelsList: any;

      channelsSize: any;

      currentChannel: any;

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

      onClickRefresh: (() => any) | any;

      OnDaysListMouseDown: ((item: any) => any) | any;

      onViewScript: (() => any) | any;

      populateBroadcastList: ((_radioChannel: any) => any) | any;

      populateInfoList: ((_radioChannel: any) => any) | any;

      populateList: ((_force: any) => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.radio.ZomboidRadioDebug {}
}
