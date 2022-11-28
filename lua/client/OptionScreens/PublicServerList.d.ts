/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor PublicServerList:new */
    export class PublicServerList extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static refreshTime: any;

      addBtn: any;

      backButton: any;

      connecting: any;

      connectTypeEntry: any;

      connectTypeLabel: any;

      descEntry: any;

      descLabel: any;

      emptyServer: any;

      eraseBtn: any;

      failMessage: any;

      filterBottomPad: any;

      filterEntry: any;

      filterLabel: any;

      filterPadX: any;

      filterUI: any;

      filterX: any;

      hasVisibleItem: any;

      itemheightoverride: any;

      javaObject: any;

      largeServer: any;

      listbox: any;

      NoLabel: any;

      passwordEntry: any;

      passwordLabel: any;

      playButton: any;

      portEntry: any;

      portLabel: any;

      pwdProtected: any;

      refreshBtn: any;

      savedBtn: any;

      scrollPanel: any;

      serverEntry: any;

      serverLabel: any;

      serverNameEntry: any;

      serverNameLabel: any;

      serverPasswordEntry: any;

      showCountdownForJoin: any;

      tabs: any;

      usernameEntry: any;

      usernameLabel: any;

      versionCheckBox: any;

      whitelistServer: any;

      constructor(x: any, y: any, width: any, height: any);

      addServer: (() => any) | any;

      addServerToList: ((server: any) => any) | any;

      canConnect: (() => any) | any;

      checkFields: (() => any) | any;

      clickNext: (() => any) | any;

      countMods: ((modString: any) => any) | any;

      create: (() => any) | any;

      drawMap: ((y: any, item: any, alt: any) => any) | any;

      emptyServerFile: ((server: any, append: any) => any) | any;

      erase: (() => any) | any;

      fillFields: ((item: any) => any) | any;

      instantiate: (() => any) | any;

      layoutFilterUI: (() => any) | any;

      onCheckLargeServerOption: (() => any) | any;

      onClickServer: ((item: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onGainJoypadFocus_RightPanel: ((joypadData: any) => any) | any;

      onJoypadDirLeft_RightPanel: ((joypadData: any) => any) | any;

      onJoypadDirRight_ListBox: ((joypadData: any) => any) | any;

      onJoypadDown_ListBox: ((button: any, joypadData: any) => any) | any;

      onJoypadDown_RightPanel: ((button: any, joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus_RightPanel: ((joypadData: any) => any) | any;

      onMouseDown_Tabs: ((x: any, y: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      refreshList: (() => any) | any;

      setServerDescription: ((item: any) => any) | any;

      setServerMods: ((item: any) => any) | any;

      sortList: (() => any) | any;

      trimFields: ((item: any) => any) | any;

      writeServerOnFile: ((server: any, append: any) => any) | any;

      /** @noSelf */
      static OnSteamRefreshInternetServers: () => any;

      /** @noSelf */
      static OnSteamRulesRefreshComplete: (host: any, port: any, rules: any) => any;

      /** @noSelf */
      static OnSteamServerResponded: (serverIndex: any) => any;
    }
  }
  export namespace lua.client.OptionScreens.PublicServerList {}
}
