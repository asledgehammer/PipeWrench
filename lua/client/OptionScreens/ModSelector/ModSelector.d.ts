/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens.ModSelector {
    /** @customConstructor ModSelector:new */
    export class ModSelector extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      acceptButton: any;

      backButton: any;

      helpButton: any;

      mapOrderbtn: any;

      model: any;

      modInfoPanel: any;

      modListPanel: any;

      modOrderbtn: any;

      presetPanel: any;

      constructor(x: any, y: any, width: any, height: any);

      acceptChanges(button: any, ...__args: never[]): any;

      create(...__args: never[]): any;

      onAccept(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onResolutionChange(...__args: never[]): any;

      reloadMods(...__args: never[]): any;

      setExistingSavefile(folder: any, ...__args: never[]): any;

      setNewGame(...__args: never[]): any;

      setServerSettingsMods(data: any, finishFunc: any, ...__args: never[]): any;

      updateView(...__args: never[]): any;

      /** @noSelf */
      static showNagPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.ModSelector.ModSelector {
    /** @noSelf */
    export const ModSelector_onModsModified: () => any;
  }
}
