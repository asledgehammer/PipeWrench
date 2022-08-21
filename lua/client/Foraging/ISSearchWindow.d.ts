/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Foraging {
    /** @customConstructor ISSearchWindow:new */
    export class ISSearchWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static showDebug: any;

      character: any;

      climateManager: any;

      drawJoypadFocus: any;

      gameTime: any;

      joypadMoveSpeed: any;

      manager: any;

      overrideBPrompt: any;

      player: any;

      searchFocus: any;

      searchFocusCategory: any;

      showBackground: any;

      showBorder: any;

      toggleSearchMode: any;

      tooltipForced: any;

      visibleFunction: any;

      visibleTarget: any;

      zoneDisplay: any;

      constructor(_manager: any);

      checkShowFirstTimeSearchTutorial: (() => any) | any;

      getAPrompt: (() => any) | any;

      getBPrompt: (() => any) | any;

      getLBPrompt: (() => any) | any;

      getRBPrompt: (() => any) | any;

      getXPrompt: (() => any) | any;

      getYPrompt: (() => any) | any;

      isValidPrompt: (() => any) | any;

      nextSearchFocus: (() => any) | any;

      onChangeSearchFocusCategory: ((_option: any) => any) | any;

      onGainJoypadFocus: (() => any) | any;

      onJoypadDirDown: (() => any) | any;

      onJoypadDirLeft: (() => any) | any;

      onJoypadDirRight: (() => any) | any;

      onJoypadDirUp: (() => any) | any;

      onJoypadDown: ((_button: any) => any) | any;

      onLoseJoypadFocus: (() => any) | any;

      onToggleVisible: (() => any) | any;

      toggleForceAreaTooltip: (() => any) | any;

      toggleForceVisionTooltip: (() => any) | any;

      update: (() => any) | any;

      updateSearchFocusCategories: (() => any) | any;

      /** @noSelf */
      static createUI: (_player: any) => any;

      /** @noSelf */
      static destroyUI: (_character: any) => any;

      /** @noSelf */
      static onEnableSearchMode: (_character: any, _isSearchMode: any) => any;

      /** @noSelf */
      static OnFillWorldObjectContextMenu: (_player: any, _context: any) => any;

      /** @noSelf */
      static showWindow: (_character: any) => any;

      /** @noSelf */
      static toggleWindow: (_character: any) => any;
    }
  }
  export namespace lua.client.Foraging.ISSearchWindow {}
}
