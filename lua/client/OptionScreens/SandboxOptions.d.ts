/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor SandboxOptionsScreen:new */
    export class SandboxOptionsScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      addY: any;

      backButton: any;

      controls: any;

      currentPanel: any;

      defaultPreset: any;

      deletePresetButton: any;

      devPresetButton: any;

      groupBox: any;

      hadJoypadFocus: any;

      javaObject: any;

      listbox: any;

      nonDefaultOptions: any;

      playButton: any;

      presetList: any;

      presetPanel: any;

      presets: any;

      savePresetButton: any;

      selectedMonth: any;

      selectedYear: any;

      constructor(x: any, y: any, width: any, height: any);

      create: (() => any) | any;

      createPanel: ((page: any) => any) | any;

      deletePresetStep1: ((preset: any) => any) | any;

      deletePresetStep2: ((button: any, joypadData: any) => any) | any;

      getApocalypsePreset: (() => any) | any;

      getBeginnerPreset: (() => any) | any;

      getBuilderPreset: (() => any) | any;

      getDefaultPreset: (() => any) | any;

      getHardPreset: (() => any) | any;

      getNormalPreset: (() => any) | any;

      getSurvivalPreset: (() => any) | any;

      getSurvivorPreset: (() => any) | any;

      instantiate: (() => any) | any;

      loadPresets: (() => any) | any;

      onComboBoxSelected: ((combo: any, optionName: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onGroupBox: ((index: any, selected: any, groupBoxName: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onMouseDownListbox: ((item: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onPresetChange: (() => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onSaveDeveloperPreset: ((button: any, joypadData: any) => any) | any;

      onSavePreset: ((button: any, joypadData: any) => any) | any;

      onValidateSavePreset: ((text: any) => any) | any;

      render: (() => any) | any;

      setSandboxVars: (() => any) | any;

      settingsFromUI: ((options: any) => any) | any;

      settingsToUI: ((options: any) => any) | any;

      subPanelPreRender: (() => any) | any;

      subPanelRender: (() => any) | any;

      syncStartDay: (() => any) | any;

      /** @noSelf */
      static load: () => any;
    }
  }
  export namespace lua.client.OptionScreens.SandboxOptions {}
}
