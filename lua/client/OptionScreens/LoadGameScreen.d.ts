/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      mapGroups: any;

      modal: any;

      playButton: any;

      richText: any;

      selected: any;

      startY: any;

      constructor(x: any, y: any, width: any, height: any);

      checkChallenge: ((item: any) => any) | any;

      checkMapsAvailable: ((item: any) => any) | any;

      clickPlay: (() => any) | any;

      create: (() => any) | any;

      disableBtn: (() => any) | any;

      drawMap: ((y: any, item: any, alt: any) => any) | any;

      getChallenge: ((item: any) => any) | any;

      hasChoices: (() => any) | any;

      hideConfigPanel: (() => any) | any;

      instantiate: (() => any) | any;

      onDblClickWorld: (() => any) | any;

      onDeleteModalClick: ((button: any) => any) | any;

      onErrorLoadingClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onGainJoypadFocus_child: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate_child: ((joypadData: any) => any) | any;

      onJoypadDirLeft_child: ((joypadData: any) => any) | any;

      onJoypadDirRight_child: ((joypadData: any) => any) | any;

      onLoseJoypadFocus_child: ((joypadData: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onSavefileModsChanged: ((folder: any) => any) | any;

      render: (() => any) | any;

      setSaveGamesList: (() => any) | any;

      showConfigPanel: (() => any) | any;

      /** @noSelf */
      static onClickWorld: () => any;

      /** @noSelf */
      static OnKeyPressed: (key: any) => any;
    }
  }
  export namespace lua.client.OptionScreens.LoadGameScreen {
    /** @noSelf */
    export const LoadGameScreen_onModsModified: () => any;
  }
}
