/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addLinePair(_text: any, _UIelement: any, ...__args: never[]): any;

      calcLinePairs(...__args: never[]): any;

      clearJoypadFocus(joypadData: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      doSaveButton(...__args: never[]): any;

      getAPrompt(...__args: never[]): any;

      getBPrompt(...__args: never[]): any;

      getXPrompt(...__args: never[]): any;

      getYPrompt(...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      onSliderChange(value: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setValues(name: any, freq: any, min: any, max: any, step: any, shift: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMSubEditPreset {}
}
