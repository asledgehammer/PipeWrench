/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor LoadGameScreen:new */
    export class LoadGameScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      backButton: any;

      configButton: any;

      configPanel: any;

      deadTexture: any;

      deleteButton: any;

      infoPanel: any;

      itemheightoverride: any;

      javaObject: any;

      joyfocus: any;

      joypadFocused: any;

      listbox: any;

      listCache: any;

      mapGroups: any;

      modal: any;

      playButton: any;

      richText: any;

      searchEntry: any;

      searchLabel: any;

      selected: any;

      startY: any;

      title: any;

      constructor(x: any, y: any, width: any, height: any);

      checkChallenge(item: any, ...__args: never[]): any;

      checkMapsAvailable(item: any, ...__args: never[]): any;

      clickPlay(...__args: never[]): any;

      create(...__args: never[]): any;

      disableBtn(...__args: never[]): any;

      drawMap(y: any, item: any, alt: any, ...__args: never[]): any;

      getChallenge(item: any, ...__args: never[]): any;

      hasChoices(...__args: never[]): any;

      hideConfigPanel(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      onDblClickWorld(...__args: never[]): any;

      onDeleteModalClick(button: any, ...__args: never[]): any;

      onErrorLoadingClick(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onGainJoypadFocus_child(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate_child(joypadData: any, ...__args: never[]): any;

      onJoypadDirLeft_child(joypadData: any, ...__args: never[]): any;

      onJoypadDirRight_child(joypadData: any, ...__args: never[]): any;

      onJoypadDown_listbox(button: any, joypadData: any, ...__args: never[]): any;

      onJoypadDownSearchEntry(button: any, joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus_child(joypadData: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      onSavefileModsChanged(folder: any, ...__args: never[]): any;

      onSearchTextChange(...__args: never[]): any;

      render(...__args: never[]): any;

      searchSetText(str: any, ...__args: never[]): any;

      setSaveGamesList(...__args: never[]): any;

      showConfigPanel(...__args: never[]): any;

      /** @noSelf */
      static onClickWorld: (...__args: never[]) => any;

      /** @noSelf */
      static OnKeyPressed: (key: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.LoadGameScreen {
    /** @noSelf */
    export const LoadGameScreen_onModsModified: () => any;
  }
}
