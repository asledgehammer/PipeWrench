/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens.ModSelector {
    /** @customConstructor ModListPresets:new */
    export class ModListPresets extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      addPresetButton: any;

      childrenIndex: any;

      childrenLine: any;

      delPresetButton: any;

      joypadIndex: any;

      missedModsPanel: any;

      model: any;

      presetCombo: any;

      savePresetButton: any;

      sharePresetButton: any;

      constructor(x: any, y: any, width: any, height: any, model: any);

      addSharedPreset(button: any, ...__args: never[]): any;

      choosePreset(combo: any, ...__args: never[]): any;

      onPresetButton(button: any, ...__args: never[]): any;

      onSavePreset(button: any, ...__args: never[]): any;

      onValidateSavePreset(text: any, ...__args: never[]): any;

      updateView(...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.ModSelector.ModListPresets {}
}
