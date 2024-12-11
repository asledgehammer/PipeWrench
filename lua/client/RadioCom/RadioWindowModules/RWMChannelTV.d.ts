/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMChannelTV:new */
    export class RWMChannelTV extends lua.client.RadioCom.RadioWindowModules.RWMPanel {
      [id: string]: any;
      static [id: string]: any;

      comboBox: any;

      fontheight: any;

      lastModeExpanded: any;

      parent: any;

      presets: any;

      selectedPreset: any;

      tuneInButton: any;

      constructor(x: any, y: any, width: any, height: any);

      addComboOption(_freq: any, _name: any, ...__args: never[]): any;

      comboChange(...__args: never[]): any;

      doTuneInButton(...__args: never[]): any;

      getParent(...__args: never[]): any;

      getRBPrompt(...__args: never[]): any;

      isValidPresets(...__args: never[]): any;

      readPresets(_selected: any, ...__args: never[]): any;

      setParent(_parent: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMChannelTV {}
}
