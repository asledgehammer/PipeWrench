/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor NewGameScreen:new */
    export class NewGameScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      backButton: any;

      buttonMods: any;

      fadeIn: any;

      fadeOut: any;

      itemheightoverride: any;

      javaObject: any;

      joypadFocused: any;

      mainPanel: any;

      mainPanelReqWidth: any;

      modal: any;

      MouseEnterMainMenuItem: any;

      newButton: any;

      overBottomPanelButton: any;

      richText: any;

      selected: any;

      selectedItem: any;

      startY: any;

      survival: any;

      constructor(x: any, y: any, width: any, height: any);

      clickPlay: (() => any) | any;

      create: (() => any) | any;

      disableBtn: (() => any) | any;

      instantiate: (() => any) | any;

      Label_setJoypadFocused: ((focused: any, joypadData: any) => any) | any;

      needDifficulty: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onResetLua: ((reason: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      prerenderBottomPanelLabel: (() => any) | any;

      render: (() => any) | any;

      update: (() => any) | any;

      updateBottomPanelButtons: (() => any) | any;

      /** @noSelf */
      static dblClickChallenge: (item: any, x: any, y: any) => any;

      /** @noSelf */
      static dblClickDifficulty: (item: any, x: any, y: any) => any;

      /** @noSelf */
      static dblClickPlaystyle: (item: any, x: any, y: any) => any;

      /** @noSelf */
      static dblClickSurvival: (item: any, x: any, y: any) => any;

      /** @noSelf */
      static dblClickTutorial: (item: any, x: any, y: any) => any;

      /** @noSelf */
      static onChooseDifficulty: (item: any, x: any, y: any) => any;

      /** @noSelf */
      static onMenuItemMouseDown: (item: any, x: any, y: any) => any;
    }
  }
  export namespace lua.client.OptionScreens.NewGameScreen {}
}
