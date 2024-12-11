/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISMakeUpUI:new */
    export class ISMakeUpUI extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      add: any;

      addMakeupLbl: any;

      avatarBackgroundTexture: any;

      avatarHeight: any;

      avatarPanel: any;

      avatarWidth: any;

      avatarX: any;

      avatarY: any;

      character: any;

      comboMakeup: any;

      desc: any;

      drawJoypadFocus: any;

      item: any;

      joypadButtons: any;

      joypadIndex: any;

      joypadIndexY: any;

      leftPanel: any;

      location: any;

      makeUpSelected: any;

      needsUpdateAvatar: any;

      needsUpdateLayout: any;

      playerNum: any;

      previousMakeUp: any;

      remove: any;

      removeMakeupCombo: any;

      removeMakeupLbl: any;

      rightPanel: any;

      constructor(x: any, y: any, item: any, character: any);

      close(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      displayBodyPart(cat: any, ...__args: never[]): any;

      initLocationCombo(...__args: never[]): any;

      initRemoveMakeUpCombo(...__args: never[]): any;

      onApplyMakeUp(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      onRemoveMakeUp(...__args: never[]): any;

      onSelectLocation(...__args: never[]): any;

      onSelectMakeUp(...__args: never[]): any;

      onSelectRemoveMakeUp(...__args: never[]): any;

      prerender(...__args: never[]): any;

      reinit(...__args: never[]): any;

      reinitCombos(...__args: never[]): any;

      setWidthToChildren(panel: any, minWidth: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateAvatar(...__args: never[]): any;

      updateLayout(...__args: never[]): any;

      /** @noSelf */
      static OnPlayerDeath: (playerObj: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISMakeUpUI {}
}
