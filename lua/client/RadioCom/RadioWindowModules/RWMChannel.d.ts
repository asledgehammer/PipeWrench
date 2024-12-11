/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addComboOption(_freq: any, _name: any, ...__args: never[]): any;

      comboChange(...__args: never[]): any;

      doAddPresetButton(...__args: never[]): any;

      doDeletePresetButton(...__args: never[]): any;

      doEditPresetButton(...__args: never[]): any;

      doTuneInButton(...__args: never[]): any;

      getParent(...__args: never[]): any;

      getRBPrompt(...__args: never[]): any;

      isValidPresets(...__args: never[]): any;

      onChildSave(_freq: any, _name: any, ...__args: never[]): any;

      readPresets(_selected: any, ...__args: never[]): any;

      round(num: any, idp: any, ...__args: never[]): any;

      setPanelMode(_edit: any, _ignoreParent: any, ...__args: never[]): any;

      setParent(_parent: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMChannel {}
}
