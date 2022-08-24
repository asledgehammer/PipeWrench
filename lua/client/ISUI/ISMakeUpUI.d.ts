/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      close: (() => any) | any;

      createChildren: (() => any) | any;

      displayBodyPart: ((cat: any) => any) | any;

      initLocationCombo: (() => any) | any;

      initRemoveMakeUpCombo: (() => any) | any;

      onApplyMakeUp: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onRemoveMakeUp: (() => any) | any;

      onSelectLocation: (() => any) | any;

      onSelectMakeUp: (() => any) | any;

      onSelectRemoveMakeUp: (() => any) | any;

      prerender: (() => any) | any;

      reinit: (() => any) | any;

      reinitCombos: (() => any) | any;

      setWidthToChildren: ((panel: any, minWidth: any) => any) | any;

      update: (() => any) | any;

      updateAvatar: (() => any) | any;

      updateLayout: (() => any) | any;

      /** @noSelf */
      static OnPlayerDeath: (playerObj: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISMakeUpUI {}
}
