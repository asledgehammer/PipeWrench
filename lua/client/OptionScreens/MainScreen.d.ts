/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor MainScreen:new */
    export class MainScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static latestSaveGameMode: any;

      static latestSaveWorld: any;

      abutton: any;

      animPopup: any;

      bootstrapConnectPopup: any;

      bottomPanel: any;

      charCreationHeader: any;

      charCreationMain: any;

      charCreationProfession: any;

      connectToServer: any;

      controllerLabel: any;

      controllerLabel2: any;

      credits: any;

      creditsIndex: any;

      creditTime: any;

      creditTimeMax: any;

      debOption: any;

      defaultJoypadOption: any;

      delay: any;

      demoMessagePanel: any;

      desc: any;

      exitOption: any;

      firstFrame: any;

      infoModList: any;

      infoRichText: any;

      inGame: any;

      inviteFriends: any;

      inviteOption: any;

      javaObject: any;

      joinPublicServer: any;

      joinServer: any;

      lastStandPlayerSelect: any;

      latestSaveOption: any;

      loadOption: any;

      loadScreen: any;

      logoTexture: any;

      mainOptions: any;

      mapSpawnSelect: any;

      maxMenuItemWidth: any;

      modListDetail: any;

      modSelect: any;

      modsOption: any;

      MouseEnterMainMenuItem: any;

      onlineCoopOption: any;

      onlineCoopScreen: any;

      onlineOption: any;

      optionsOption: any;

      overBottomPanelButton: any;

      quitToDesktop: any;

      quitToDesktopDialog: any;

      resetLua: any;

      returnOption: any;

      sandOptions: any;

      scoreboard: any;

      scoreOption: any;

      serverConnectPopup: any;

      serverSettingsScreen: any;

      serverWorkshopItem: any;

      soloScreen: any;

      survivalOption: any;

      termsOfService: any;

      termsOfServiceDialog: any;

      threeD: any;

      time: any;

      tutorialOption: any;

      versionDetail: any;

      versionLabel: any;

      warningFade: any;

      warningFadeMax: any;

      workshopOption: any;

      workshopSubmit: any;

      worldSelect: any;

      constructor(inGame: any);

      addCredit(title: any, name: any, ...__args: never[]): any;

      calcLogoHeight(...__args: never[]): any;

      doArtCredits(...__args: never[]): any;

      doCodeCredits(...__args: never[]): any;

      doCredits(...__args: never[]): any;

      doScriptingCredits(...__args: never[]): any;

      doWritingCredits(...__args: never[]): any;

      getAllUIs(...__args: never[]): any;

      getCurrentFocusForController(...__args: never[]): any;

      getLatestSave(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      onClickModList(...__args: never[]): any;

      OnClickNews(...__args: never[]): any;

      onClickTermsOfService(button: any, ...__args: never[]): any;

      onClickVersionDetail(...__args: never[]): any;

      onConfirmQuitToDesktop(button: any, ...__args: never[]): any;

      onEnterFromGame(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onInviteFailDialogButton(button: any, focus: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onReturnToGame(...__args: never[]): any;

      onTermsOfServiceOK(...__args: never[]): any;

      onTutorialControllerWarn2(button: any, ...__args: never[]): any;

      onTutorialModalClick(button: any, ...__args: never[]): any;

      prerenderBottomPanelLabel(...__args: never[]): any;

      presentServerConnectPopup(...__args: never[]): any;

      quitToDesktopFunc(...__args: never[]): any;

      render(...__args: never[]): any;

      setBeginnerPreset(...__args: never[]): any;

      setBottomPanelVisible(visible: any, ...__args: never[]): any;

      setDefaultSandboxVars(...__args: never[]): any;

      setEasyPreset(...__args: never[]): any;

      setHardcorePreset(...__args: never[]): any;

      setHardPreset(...__args: never[]): any;

      setNormalPreset(...__args: never[]): any;

      setSandboxPreset(preset: any, ...__args: never[]): any;

      showInviteFailDialog(message: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateBottomPanelButtons(...__args: never[]): any;

      /** @noSelf */
      static checkMapsAvailable: (mapName: any, activeMods: any, mapAvailable: any, ...__args: never[]) => any;

      /** @noSelf */
      static checkSaveFile: (...__args: never[]) => any;

      /** @noSelf */
      static checkTutorial: (button: any, ...__args: never[]) => any;

      /** @noSelf */
      static continueLatestSave: (gameMode: any, saveName: any, ...__args: never[]) => any;

      /** @noSelf */
      static continueLatestSaveAux: (fromResetLua: any, ...__args: never[]) => any;

      /** @noSelf */
      static displayCheckSavefileModal: (text: any, ...__args: never[]) => any;

      /** @noSelf */
      static onAcceptInvite: (connectionString: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCheckSavefileModalClick: (button: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnJoypadBeforeDeactivate: (index: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMenuItemMouseDownMainMenu: (item: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static onResetLua: (reason: any, ...__args: never[]) => any;

      /** @noSelf */
      static onResolutionChange: (oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnTick: (totalTicks: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTutorialControllerWarn: (...__args: never[]) => any;

      /** @noSelf */
      static resetLuaIfNeeded: (...__args: never[]) => any;

      /** @noSelf */
      static startTutorial: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.MainScreen {}
}
