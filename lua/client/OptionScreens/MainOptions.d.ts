/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      objHighColor: any;

      resetLua: any;

      restartRequired: any;

      saveButton: any;

      sprintBtn: any;

      stuffBelowControllerTickbox: any;

      tabs: any;

      constructor(x: any, y: any, width: any, height: any);

      addColorButton: ((x: any, y: any, name: any, color: any, onClick: any) => any) | any;

      addCombo:
        | ((x: any, y: any, w: any, h: any, name: any, options: any, selected: any, target: any, onchange: any) => any)
        | any;

      addHorizontalLine: ((y: any, text: any) => any) | any;

      addMegaVolumeControl:
        | ((x: any, y: any, w: any, h: any, name: any, volume: any, target: any, onchange: any) => any)
        | any;

      addPage: ((name: any) => any) | any;

      addSpinBox:
        | ((x: any, y: any, w: any, h: any, name: any, options: any, selected: any, target: any, onchange: any) => any)
        | any;

      addTextPane: ((x: any, y: any, w: any, h: any) => any) | any;

      addTickBox: ((x: any, y: any, w: any, h: any) => any) | any;

      addVolumeControl:
        | ((x: any, y: any, w: any, h: any, name: any, volume: any, target: any, onchange: any) => any)
        | any;

      addVolumeIndicator:
        | ((x: any, y: any, w: any, h: any, name: any, volume: any, target: any, onchange: any) => any)
        | any;

      addYesNo: ((x: any, y: any, w: any, h: any, name: any) => any) | any;

      apply: ((closeAfter: any) => any) | any;

      centerChildrenX: ((panel: any) => any) | any;

      centerKeybindings: (() => any) | any;

      centerTabChildrenX: ((tabTitle: any) => any) | any;

      ControllerReload: ((button: any) => any) | any;

      create: (() => any) | any;

      instantiate: (() => any) | any;

      joypadSensitivityM: ((button: any) => any) | any;

      joypadSensitivityP: ((button: any) => any) | any;

      onBadHighlightColor: ((button: any) => any) | any;

      onConfirmModalClick: ((button: any) => any) | any;

      onConfirmMonitorSettingsClick: ((button: any, closeAfter: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onGainJoypadFocusCurrentTab: ((joypadData: any) => any) | any;

      onGameSounds: (() => any) | any;

      onGoodHighlightColor: ((button: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivateCurrentTab: ((joypadData: any) => any) | any;

      onJoypadDownCurrentTab: ((button: any, joypadData: any) => any) | any;

      onKeybindChanged: ((name: any, key: any) => any) | any;

      onKeyBindingBtnPress: ((button: any, x: any, y: any) => any) | any;

      onKeyboardLayoutChanged: (() => any) | any;

      onLoseJoypadFocusCurrentTab: ((joypadData: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onMPColor: ((button: any) => any) | any;

      onObjHighlightColor: ((button: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onReloadGameSounds: (() => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onRestartRequiredClick: ((button: any, closeAfter: any) => any) | any;

      onTabsActivateView: ((tabs: any) => any) | any;

      pickedBadHighlightColor: ((color: any, mouseUp: any) => any) | any;

      pickedGoodHighlightColor: ((color: any, mouseUp: any) => any) | any;

      pickedMPTextColor: ((color: any, mouseUp: any) => any) | any;

      pickedObjHighlightColor: ((color: any, mouseUp: any) => any) | any;

      render: (() => any) | any;

      setResolutionAndFullScreen: (() => any) | any;

      showConfirmDialog: (() => any) | any;

      showConfirmMonitorSettingsDialog: ((closeAfter: any) => any) | any;

      showRestartRequiredDialog: ((closeAfter: any) => any) | any;

      subPanelPreRender: (() => any) | any;

      subPanelRender: (() => any) | any;

      toUI: (() => any) | any;

      /** @noSelf */
      static doLanguageToolTip: (languages: any) => any;

      /** @noSelf */
      static getAvailableLanguage: () => any;

      /** @noSelf */
      static getGeneralTranslators: (_language: any) => any;

      /** @noSelf */
      static keyPressHandler: (key: any) => any;

      /** @noSelf */
      static loadKeys: () => any;

      /** @noSelf */
      static OnGamepadConnect: (index: any) => any;

      /** @noSelf */
      static OnGamepadDisconnect: (index: any) => any;

      /** @noSelf */
      static saveKeys: () => any;

      /** @noSelf */
      static sortModes: (a: any, b: any) => any;

      /** @noSelf */
      static upgradeKeysIni: (name: any, key: any, defaultKey: any, version: any) => any;
    }
  }
  export namespace lua.client.OptionScreens.MainOptions {}
}
