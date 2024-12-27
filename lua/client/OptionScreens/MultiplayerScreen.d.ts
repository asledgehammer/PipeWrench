/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor MultiplayerScreen:new */
    export class MultiplayerScreen extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      authPanel: any;

      authType: any;

      backButton: any;

      choiceBackgroundNext: any;

      choiceBackgroundPrevious: any;

      javaObject: any;

      listbox: any;

      loginBackground: any;

      passwordEntry: any;

      passwordLabel: any;

      passwordWasFocused: any;

      playButton: any;

      registerButton: any;

      registerNewPlayer: any;

      rememberPasswordTickBox: any;

      selectedServer: any;

      serverIconTexture: any;

      serverLabel: any;

      serverName: any;

      serverPanel: any;

      serverStatus: any;

      usernameEntry: any;

      usernameLabel: any;

      constructor(x: any, y: any, width: any, height: any);

      addServerToList(server: any, ...__args: never[]): any;

      analyzeServerData(server: any, ...__args: never[]): any;

      checkFields(...__args: never[]): any;

      create(...__args: never[]): any;

      drawMap(y: any, item: any, alt: any, ...__args: never[]): any;

      fillFields(item: any, ...__args: never[]): any;

      formRefresh(authType: any, ...__args: never[]): any;

      getServer(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      onClickServer(item: any, ...__args: never[]): any;

      onComboAuthType(...__args: never[]): any;

      onGainJoypadFocus_RightPanel(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus_RightPanel(joypadData: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      refreshList(...__args: never[]): any;

      requestServerList(...__args: never[]): any;

      saveServer(server: any, ...__args: never[]): any;

      selectServerData(server: any, ...__args: never[]): any;

      setServerDescription(item: any, ...__args: never[]): any;

      setServerMods(item: any, ...__args: never[]): any;

      /** @noSelf */
      static OnServerCustomizationDataReceived: (...__args: never[]) => any;

      /** @noSelf */
      static OnSteamServerResponded: (serverIndex: any, ...__args: never[]) => any;

      /** @noSelf */
      static serverIconRender: (self: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.MultiplayerScreen {}
}
