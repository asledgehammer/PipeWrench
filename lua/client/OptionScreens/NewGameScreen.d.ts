/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      clickPlay(...__args: never[]): any;

      create(...__args: never[]): any;

      disableBtn(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      Label_setJoypadFocused(focused: any, joypadData: any, ...__args: never[]): any;

      needDifficulty(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      onResetLua(reason: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      prerenderBottomPanelLabel(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;

      updateBottomPanelButtons(...__args: never[]): any;

      /** @noSelf */
      static dblClickChallenge: (item: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static dblClickDifficulty: (item: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static dblClickPlaystyle: (item: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static dblClickSurvival: (item: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static dblClickTutorial: (item: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static onChooseDifficulty: (item: any, x: any, y: any, ...__args: never[]) => any;

      /** @noSelf */
      static onMenuItemMouseDown: (item: any, x: any, y: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.NewGameScreen {}
}
