/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor ServerList:new */
    export class ServerList extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static refreshTime: any;

      addBtn: any;

      backButton: any;

      connectTypeEntry: any;

      connectTypeLabel: any;

      deleteBtn: any;

      descEntry: any;

      descLabel: any;

      eraseBtn: any;

      getModBtn: any;

      itemheightoverride: any;

      javaObject: any;

      listbox: any;

      localIPEntry: any;

      localIPLabel: any;

      NoLabel: any;

      passwordEntry: any;

      passwordLabel: any;

      playButton: any;

      portEntry: any;

      portLabel: any;

      publicBtn: any;

      refreshBtn: any;

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

      constructor(x: any, y: any, width: any, height: any);

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

      onClickServer(item: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onGainJoypadFocus_RightPanel(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onJoypadDirLeft_RightPanel(joypadData: any, ...__args: never[]): any;

      onJoypadDirRight_ListBox(joypadData: any, ...__args: never[]): any;

      onJoypadDown_ListBox(button: any, joypadData: any, ...__args: never[]): any;

      onJoypadDown_RightPanel(button: any, joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus_RightPanel(joypadData: any, ...__args: never[]): any;

      onMouseDown_Tabs(x: any, y: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      pingServers(init: any, ...__args: never[]): any;

      refreshList(...__args: never[]): any;

      setServerDescription(item: any, ...__args: never[]): any;

      setServerMods(item: any, ...__args: never[]): any;

      trimFields(item: any, ...__args: never[]): any;

      writeServerOnFile(server: any, append: any, ...__args: never[]): any;

      /** @noSelf */
      static onResetLua: (reason: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSteamRulesRefreshComplete: (host: any, port: any, rules: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSteamServerFailedToRespond2: (host: any, port: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSteamServerResponded2: (host: any, port: any, server2: any, ...__args: never[]) => any;

      /** @noSelf */
      static ServerPinged: (ip: any, users: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.ServerList {}
}
