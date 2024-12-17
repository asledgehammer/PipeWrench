/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor MainOptions:new */
    export class MainOptions extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static keyBindingLength: any;

      static keys: any;

      static keyText: any;

      static setKeybindDialog: any;

      static translatorPane: any;

      acceptButton: any;

      addY: any;

      backButton: any;

      badHighColor: any;

      btnJoypadSensitivityM: any;

      btnJoypadSensitivityP: any;

      colorPicker: any;

      colorPicker2: any;

      colorPicker3: any;

      colorPicker4: any;

      colorPicker5: any;

      colorPicker6: any;

      controllerTestPanel: any;

      cover: any;

      gameOptions: any;

      gameSounds: any;

      goodHighColor: any;

      javaObject: any;

      joyfocus: any;

      keyButtonWidth: any;

      keyTickBoxes: any;

      labelJoypadSensitivity: any;

      mainPanel: any;

      modal: any;

      monitorSettings: any;

      mpColor: any;

      noTargetColor: any;

      objHighColor: any;

      resetLua: any;

      restartRequired: any;

      saveButton: any;

      sprintBtn: any;

      stuffBelowControllerTickbox: any;

      tabs: any;

      targetColor: any;

      workstationHighColor: any;

      constructor(x: any, y: any, width: any, height: any);

      addAccessibilityPanel(...__args: never[]): any;

      addButton(x: any, y: any, name: any, ...__args: never[]): any;

      addColorButton(x: any, y: any, name: any, color: any, onClick: any, ...__args: never[]): any;

      addCombo(
        x: any,
        y: any,
        w: any,
        h: any,
        name: any,
        options: any,
        selected: any,
        target: any,
        onchange: any,
        ...__args: never[]
      ): any;

      addControllerPanel(...__args: never[]): any;

      addDescription(x: any, y: any, text: any, ...__args: never[]): any;

      addDisplayPanel(...__args: never[]): any;

      addHorizontalLine(y: any, text: any, ...__args: never[]): any;

      addHorizontalLineSmall(y: any, ...__args: never[]): any;

      addKeybindingPanel(...__args: never[]): any;

      addMegaVolumeControl(
        x: any,
        y: any,
        w: any,
        h: any,
        name: any,
        volume: any,
        target: any,
        onchange: any,
        ...__args: never[]
      ): any;

      addModOptionsPanel(...__args: never[]): any;

      addMultiplayerPanel(...__args: never[]): any;

      addPage(name: any, ...__args: never[]): any;

      addSlider(
        x: any,
        y: any,
        width: any,
        name: any,
        min: any,
        max: any,
        step: any,
        value: any,
        ...__args: never[]
      ): any;

      addSoundPanel(...__args: never[]): any;

      addTextEntry(x: any, y: any, name: any, _text: any, ...__args: never[]): any;

      addTextPane(x: any, y: any, w: any, h: any, ...__args: never[]): any;

      addTickBox(x: any, y: any, w: any, h: any, ...__args: never[]): any;

      addTitle(x: any, y: any, name: any, ...__args: never[]): any;

      addUIPanel(...__args: never[]): any;

      addVolumeControl(
        x: any,
        y: any,
        w: any,
        h: any,
        name: any,
        volume: any,
        target: any,
        onchange: any,
        ...__args: never[]
      ): any;

      addVolumeIndicator(
        x: any,
        y: any,
        w: any,
        h: any,
        name: any,
        volume: any,
        target: any,
        onchange: any,
        ...__args: never[]
      ): any;

      addYesNo(x: any, y: any, w: any, h: any, name: any, ...__args: never[]): any;

      apply(closeAfter: any, ...__args: never[]): any;

      centerChildrenX(panel: any, ...__args: never[]): any;

      centerKeybindings(...__args: never[]): any;

      centerTabChildrenX(tabTitle: any, ...__args: never[]): any;

      ControllerReload(button: any, ...__args: never[]): any;

      create(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      joypadSensitivityM(button: any, ...__args: never[]): any;

      joypadSensitivityP(button: any, ...__args: never[]): any;

      onBadHighlightColor(button: any, ...__args: never[]): any;

      onConfirmModalClick(button: any, ...__args: never[]): any;

      onConfirmMonitorSettingsClick(button: any, closeAfter: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onGainJoypadFocusCurrentTab(joypadData: any, ...__args: never[]): any;

      onGameSounds(...__args: never[]): any;

      onGoodHighlightColor(button: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivateCurrentTab(joypadData: any, ...__args: never[]): any;

      onJoypadDownCurrentTab(button: any, joypadData: any, ...__args: never[]): any;

      onKeybindChanged(name: any, key: any, ...__args: never[]): any;

      onKeyBindingBtnPress(button: any, x: any, y: any, ...__args: never[]): any;

      onKeyboardLayoutChanged(...__args: never[]): any;

      onLoseJoypadFocusCurrentTab(joypadData: any, ...__args: never[]): any;

      onModColorPick(button: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onMouseWheelCurrentTab(del: any, ...__args: never[]): any;

      onMPColor(button: any, ...__args: never[]): any;

      onNoTargetColor(button: any, ...__args: never[]): any;

      onObjHighlightColor(button: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onReloadGameSounds(...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      onRestartRequiredClick(button: any, closeAfter: any, ...__args: never[]): any;

      onTabsActivateView(tabs: any, ...__args: never[]): any;

      onTargetColor(button: any, ...__args: never[]): any;

      onWorkstationHighlightColor(button: any, ...__args: never[]): any;

      pickedBadHighlightColor(color: any, mouseUp: any, ...__args: never[]): any;

      pickedGoodHighlightColor(color: any, mouseUp: any, ...__args: never[]): any;

      pickedModColor(color: any, mouseUp: any, ...__args: never[]): any;

      pickedMPTextColor(color: any, mouseUp: any, ...__args: never[]): any;

      pickedNoTargetColor(color: any, mouseUp: any, ...__args: never[]): any;

      pickedObjHighlightColor(color: any, mouseUp: any, ...__args: never[]): any;

      pickedTargetColor(color: any, mouseUp: any, ...__args: never[]): any;

      pickedWorkstationHighlightColor(color: any, mouseUp: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setResolutionAndFullScreen(...__args: never[]): any;

      showConfirmDialog(...__args: never[]): any;

      showConfirmMonitorSettingsDialog(closeAfter: any, ...__args: never[]): any;

      showRestartRequiredDialog(closeAfter: any, ...__args: never[]): any;

      subPanelPreRender(...__args: never[]): any;

      subPanelRender(...__args: never[]): any;

      tableContains(tbl: any, x: any, ...__args: never[]): any;

      toUI(...__args: never[]): any;

      /** @noSelf */
      static doLanguageToolTip: (languages: any, ...__args: never[]) => any;

      /** @noSelf */
      static getAvailableLanguage: (...__args: never[]) => any;

      /** @noSelf */
      static getGeneralTranslators: (_language: any, ...__args: never[]) => any;

      /** @noSelf */
      static keyPressHandler: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static loadKeys: (...__args: never[]) => any;

      /** @noSelf */
      static OnGamepadConnect: (index: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnGamepadDisconnect: (index: any, ...__args: never[]) => any;

      /** @noSelf */
      static saveKeys: (...__args: never[]) => any;

      /** @noSelf */
      static sortModes: (a: any, b: any, ...__args: never[]) => any;

      /** @noSelf */
      static upgradeKeysIni: (name: any, key: any, defaultKey: any, version: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.MainOptions {}
}
