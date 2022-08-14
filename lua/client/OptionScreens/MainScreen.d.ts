/*
 * MIT License
 *
 * Copyright (c) 2022 JabDoesThings
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**  @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
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

      addCredit: ((title: any, name: any) => any) | any;

      calcLogoHeight: (() => any) | any;

      doArtCredits: (() => any) | any;

      doCodeCredits: (() => any) | any;

      doCredits: (() => any) | any;

      doScriptingCredits: (() => any) | any;

      doWritingCredits: (() => any) | any;

      getAllUIs: (() => any) | any;

      getCurrentFocusForController: (() => any) | any;

      getLatestSave: (() => any) | any;

      instantiate: (() => any) | any;

      onClickModList: (() => any) | any;

      OnClickNews: (() => any) | any;

      onClickVersionDetail: (() => any) | any;

      onConfirmQuitToDesktop: ((button: any) => any) | any;

      onEnterFromGame: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onInviteFailDialogButton: ((button: any, focus: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onReturnToGame: (() => any) | any;

      onTutorialControllerWarn2: ((button: any) => any) | any;

      onTutorialModalClick: ((button: any) => any) | any;

      prerenderBottomPanelLabel: (() => any) | any;

      presentServerConnectPopup: (() => any) | any;

      quitToDesktopFunc: (() => any) | any;

      render: (() => any) | any;

      setBeginnerPreset: (() => any) | any;

      setBottomPanelVisible: ((visible: any) => any) | any;

      setDefaultSandboxVars: (() => any) | any;

      setEasyPreset: (() => any) | any;

      setHardcorePreset: (() => any) | any;

      setHardPreset: (() => any) | any;

      setNormalPreset: (() => any) | any;

      setSandboxPreset: ((preset: any) => any) | any;

      showInviteFailDialog: ((message: any) => any) | any;

      update: (() => any) | any;

      updateBottomPanelButtons: (() => any) | any;

      /** @noSelf */
      static checkMapsAvailable: (mapName: any, activeMods: any, mapAvailable: any) => any;

      /** @noSelf */
      static checkSaveFile: () => any;

      /** @noSelf */
      static checkTutorial: (button: any) => any;

      /** @noSelf */
      static continueLatestSave: (gameMode: any, saveName: any) => any;

      /** @noSelf */
      static continueLatestSaveAux: (fromResetLua: any) => any;

      /** @noSelf */
      static displayCheckSavefileModal: (text: any) => any;

      /** @noSelf */
      static onAcceptInvite: (connectionString: any) => any;

      /** @noSelf */
      static onCheckSavefileModalClick: (button: any) => any;

      /** @noSelf */
      static OnJoypadBeforeDeactivate: (index: any) => any;

      /** @noSelf */
      static onMenuItemMouseDownMainMenu: (item: any, x: any, y: any) => any;

      /** @noSelf */
      static onResetLua: (reason: any) => any;

      /** @noSelf */
      static onResolutionChange: (oldw: any, oldh: any, neww: any, newh: any) => any;

      /** @noSelf */
      static OnTick: (totalTicks: any) => any;

      /** @noSelf */
      static onTutorialControllerWarn: () => any;

      /** @noSelf */
      static resetLuaIfNeeded: () => any;

      /** @noSelf */
      static startTutorial: () => any;
    }
  }
  export namespace lua.client.OptionScreens.MainScreen {}
}
