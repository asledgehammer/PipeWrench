/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMSubEditPreset:new */
    export class RWMSubEditPreset extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      entryName: any;

      frequencySlider: any;

      joypadStepIndex: any;

      joypadSteps: any;

      lineHeight: any;

      linePadding: any;

      linePairs: any;

      lineSplit: any;

      onSave: any;

      saveButton: any;

      target: any;

      constructor(x: any, y: any, width: any, height: any, target: any, onSave: any);

      addLinePair: ((_text: any, _UIelement: any) => any) | any;

      calcLinePairs: (() => any) | any;

      clearJoypadFocus: ((joypadData: any) => any) | any;

      createChildren: (() => any) | any;

      doSaveButton: (() => any) | any;

      getAPrompt: (() => any) | any;

      getBPrompt: (() => any) | any;

      getXPrompt: (() => any) | any;

      getYPrompt: (() => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onSliderChange: ((value: any) => any) | any;

      render: (() => any) | any;

      setValues: ((name: any, freq: any, min: any, max: any, step: any, shift: any) => any) | any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMSubEditPreset {}
}
