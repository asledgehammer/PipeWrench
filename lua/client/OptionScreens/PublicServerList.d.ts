/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addServer(...__args: never[]): any;

      addServerToList(server: any, ...__args: never[]): any;

      canConnect(...__args: never[]): any;

      checkFields(...__args: never[]): any;

      clickNext(...__args: never[]): any;

      countMods(modString: any, ...__args: never[]): any;

      create(...__args: never[]): any;

      drawMap(y: any, item: any, alt: any, ...__args: never[]): any;

      emptyServerFile(server: any, append: any, ...__args: never[]): any;

      erase(...__args: never[]): any;

      fillFields(item: any, ...__args: never[]): any;

      instantiate(...__args: never[]): any;

      layoutFilterUI(...__args: never[]): any;

      onCheckLargeServerOption(...__args: never[]): any;

      onClickServer(item: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onGainJoypadFocus_RightPanel(joypadData: any, ...__args: never[]): any;

      onJoypadDirLeft_RightPanel(joypadData: any, ...__args: never[]): any;

      onJoypadDirRight_ListBox(joypadData: any, ...__args: never[]): any;

      onJoypadDown_ListBox(button: any, joypadData: any, ...__args: never[]): any;

      onJoypadDown_RightPanel(button: any, joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus_RightPanel(joypadData: any, ...__args: never[]): any;

      onMouseDown_Tabs(x: any, y: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      refreshList(...__args: never[]): any;

      setServerDescription(item: any, ...__args: never[]): any;

      setServerMods(item: any, ...__args: never[]): any;

      sortList(...__args: never[]): any;

      trimFields(item: any, ...__args: never[]): any;

      writeServerOnFile(server: any, append: any, ...__args: never[]): any;

      /** @noSelf */
      static OnSteamRefreshInternetServers: (...__args: never[]) => any;

      /** @noSelf */
      static OnSteamRulesRefreshComplete: (host: any, port: any, rules: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSteamServerResponded: (serverIndex: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.PublicServerList {}
}
