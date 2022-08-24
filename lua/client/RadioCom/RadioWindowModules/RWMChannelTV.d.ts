/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      addComboOption: ((_freq: any, _name: any) => any) | any;

      comboChange: (() => any) | any;

      doTuneInButton: (() => any) | any;

      getParent: (() => any) | any;

      getRBPrompt: (() => any) | any;

      isValidPresets: (() => any) | any;

      readPresets: ((_selected: any) => any) | any;

      setParent: ((_parent: any) => any) | any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMChannelTV {}
}
