/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      onClickServer: ((item: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onGainJoypadFocus_RightPanel: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onJoypadDirLeft_RightPanel: ((joypadData: any) => any) | any;

      onJoypadDirRight_ListBox: ((joypadData: any) => any) | any;

      onJoypadDown_ListBox: ((button: any, joypadData: any) => any) | any;

      onJoypadDown_RightPanel: ((button: any, joypadData: any) => any) | any;

      onLoseJoypadFocus_RightPanel: ((joypadData: any) => any) | any;

      onMouseDown_Tabs: ((x: any, y: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      pingServers: ((init: any) => any) | any;

      refreshList: (() => any) | any;

      setServerDescription: ((item: any) => any) | any;

      setServerMods: ((item: any) => any) | any;

      trimFields: ((item: any) => any) | any;

      writeServerOnFile: ((server: any, append: any) => any) | any;

      /** @noSelf */
      static onResetLua: (reason: any) => any;

      /** @noSelf */
      static OnSteamRulesRefreshComplete: (host: any, port: any, rules: any) => any;

      /** @noSelf */
      static OnSteamServerFailedToRespond2: (host: any, port: any) => any;

      /** @noSelf */
      static OnSteamServerResponded2: (host: any, port: any, server2: any) => any;

      /** @noSelf */
      static ServerPinged: (ip: any, users: any) => any;
    }
  }
  export namespace lua.client.OptionScreens.ServerList {}
}
