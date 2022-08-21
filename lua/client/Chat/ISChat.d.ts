/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Chat {
    /** @customConstructor ISChat:new */
    export class ISChat extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static focused: any;

      static instance: any;

      static maxTextEntryOpaque: any;

      btnHeight: any;

      chatFont: any;

      chatLockedButtonTexture: any;

      chatText: any;

      chatUnLockedButtonTexture: any;

      closeBtnTxt: any;

      currentTabID: any;

      fade: any;

      fadeTime: any;

      fontHgt: any;

      gearButton: any;

      inset: any;

      lockButton: any;

      locked: any;

      maxOpaque: any;

      minimumHeight: any;

      minimumWidth: any;

      minOpaque: any;

      mutedUsers: any;

      nextBtnTxt: any;

      opaqueOnFocus: any;

      panel: any;

      prevBtnTxt: any;

      servermsg: any;

      servermsgTimer: any;

      showTimestamp: any;

      showTitle: any;

      tabCnt: any;

      tabs: any;

      textEntry: any;

      timerTextEntry: any;

      constructor(x: any, y: any, width: any, height: any);

      calcAlpha: ((defaultMin: any, defaultMax: any, fraction: any) => any) | any;

      calcTabPos: (() => any) | any;

      calcTabSize: (() => any) | any;

      createTab: (() => any) | any;

      focus: (() => any) | any;

      initFade: ((durationInS: any) => any) | any;

      isCursorOnTitlebar: ((x: any, y: any) => any) | any;

      isMuted: ((username: any) => any) | any;

      logChatCommand: ((command: any) => any) | any;

      makeFade: ((fraction: any) => any) | any;

      mute: ((username: any) => any) | any;

      onActivateView: (() => any) | any;

      onCommandEntered: (() => any) | any;

      onContextClear: (() => any) | any;

      onGearButtonClick: (() => any) | any;

      onOtherKey: ((key: any) => any) | any;

      onPressDown: (() => any) | any;

      onPressUp: (() => any) | any;

      onRightMouseDown: ((x: any, y: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      render_chatText: (() => any) | any;

      unfocus: (() => any) | any;

      updateChatPrefixSettings: (() => any) | any;

      /** @noSelf */
      static addLineInChat: (message: any, tabID: any) => any;

      /** @noSelf */
      static createChat: () => any;

      /** @noSelf */
      static initChat: () => any;

      /** @noSelf */
      static ISTabPanelOnMouseDown: (target: any, x: any, y: any) => any;

      /** @noSelf */
      static onFadeTimeChange: (target: any, value: any) => any;

      /** @noSelf */
      static onFocusOpaqueChange: (target: any, value: any) => any;

      /** @noSelf */
      static onFontSizeChange: (target: any, value: any) => any;

      /** @noSelf */
      static onKeyKeepPressed: (key: any) => any;

      /** @noSelf */
      static onMaxOpaqueChange: (target: any, value: any) => any;

      /** @noSelf */
      static onMinOpaqueChange: (target: any, value: any) => any;

      /** @noSelf */
      static onSetDefaultTab: (defaultTabTitle: any) => any;

      /** @noSelf */
      static onSwitchStream: () => any;

      /** @noSelf */
      static onTabAdded: (tabTitle: any, tabID: any) => any;

      /** @noSelf */
      static onTabRemoved: (tabTitle: any, tabID: any) => any;

      /** @noSelf */
      static onTextChange: () => any;

      /** @noSelf */
      static ontick: () => any;

      /** @noSelf */
      static onToggleChatBox: (key: any) => any;

      /** @noSelf */
      static onToggleTagPrefix: () => any;

      /** @noSelf */
      static onToggleTimestampPrefix: () => any;

      /** @noSelf */
      static unfocusEvent: () => any;
    }
  }
  export namespace lua.client.Chat.ISChat {}
}
