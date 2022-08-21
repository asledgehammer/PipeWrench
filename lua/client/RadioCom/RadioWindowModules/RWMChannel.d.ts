/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMChannel:new */
    export class RWMChannel extends lua.client.RadioCom.RadioWindowModules.RWMPanel {
      [id: string]: any;
      static [id: string]: any;

      addPresetButton: any;

      comboBox: any;

      deletePresetButton: any;

      editMode: any;

      editPresetButton: any;

      editPresetPanel: any;

      fontheight: any;

      frequencyDivider: any;

      lastModeExpanded: any;

      parent: any;

      presetMode: any;

      presets: any;

      selectedPreset: any;

      tuneInButton: any;

      constructor(x: any, y: any, width: any, height: any);

      addComboOption: ((_freq: any, _name: any) => any) | any;

      comboChange: (() => any) | any;

      doAddPresetButton: (() => any) | any;

      doDeletePresetButton: (() => any) | any;

      doEditPresetButton: (() => any) | any;

      doTuneInButton: (() => any) | any;

      getParent: (() => any) | any;

      getRBPrompt: (() => any) | any;

      isValidPresets: (() => any) | any;

      onChildSave: ((_freq: any, _name: any) => any) | any;

      readPresets: ((_selected: any) => any) | any;

      round: ((num: any, idp: any) => any) | any;

      setPanelMode: ((_edit: any, _ignoreParent: any) => any) | any;

      setParent: ((_parent: any) => any) | any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMChannel {}
}
