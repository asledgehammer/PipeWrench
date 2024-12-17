/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      calcAlpha(defaultMin: any, defaultMax: any, fraction: any, ...__args: never[]): any;

      calcTabPos(...__args: never[]): any;

      calcTabSize(...__args: never[]): any;

      createTab(...__args: never[]): any;

      focus(...__args: never[]): any;

      initFade(durationInS: any, ...__args: never[]): any;

      isCursorOnTitlebar(x: any, y: any, ...__args: never[]): any;

      isMuted(username: any, ...__args: never[]): any;

      logChatCommand(command: any, ...__args: never[]): any;

      makeFade(fraction: any, ...__args: never[]): any;

      mute(username: any, ...__args: never[]): any;

      onActivateView(...__args: never[]): any;

      onCommandEntered(...__args: never[]): any;

      onContextClear(...__args: never[]): any;

      onGearButtonClick(...__args: never[]): any;

      onOtherKey(key: any, ...__args: never[]): any;

      onPressDown(...__args: never[]): any;

      onPressUp(...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      onRightMouseUp(x: any, y: any, ...__args: never[]): any;

      render_chatText(...__args: never[]): any;

      unfocus(...__args: never[]): any;

      updateChatPrefixSettings(...__args: never[]): any;

      /** @noSelf */
      static addLineInChat: (message: any, tabID: any, ...__args: never[]) => any;

      /** @noSelf */
      static createChat: (...__args: never[]) => any;

      /** @noSelf */
      static initChat: (...__args: never[]) => any;

      /** @noSelf */
      static ISTabPanelOnMouseDown: (target: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static onFadeTimeChange: (target: any, value: any, ...__args: never[]) => any;

      /** @noSelf */
      static onFocusOpaqueChange: (target: any, value: any, ...__args: never[]) => any;

      /** @noSelf */
      static onFontSizeChange: (target: any, value: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyKeepPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMaxOpaqueChange: (target: any, value: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMinOpaqueChange: (target: any, value: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSetDefaultTab: (defaultTabTitle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onSwitchStream: (...__args: never[]) => any;

      /** @noSelf */
      static onTabAdded: (tabTitle: any, tabID: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTabRemoved: (tabTitle: any, tabID: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTextChange: (...__args: never[]) => any;

      /** @noSelf */
      static ontick: (...__args: never[]) => any;

      /** @noSelf */
      static onToggleChatBox: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleTagPrefix: (...__args: never[]) => any;

      /** @noSelf */
      static onToggleTimestampPrefix: (...__args: never[]) => any;

      /** @noSelf */
      static unfocusEvent: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.Chat.ISChat {}
}
