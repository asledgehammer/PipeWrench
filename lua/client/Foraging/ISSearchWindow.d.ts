/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      checkShowFirstTimeSearchTutorial(...__args: never[]): any;

      getAPrompt(...__args: never[]): any;

      getBPrompt(...__args: never[]): any;

      getLBPrompt(...__args: never[]): any;

      getRBPrompt(...__args: never[]): any;

      getXPrompt(...__args: never[]): any;

      getYPrompt(...__args: never[]): any;

      isValidPrompt(...__args: never[]): any;

      nextSearchFocus(...__args: never[]): any;

      onChangeSearchFocusCategory(_option: any, ...__args: never[]): any;

      onGainJoypadFocus(...__args: never[]): any;

      onJoypadDirDown(...__args: never[]): any;

      onJoypadDirLeft(...__args: never[]): any;

      onJoypadDirRight(...__args: never[]): any;

      onJoypadDirUp(...__args: never[]): any;

      onJoypadDown(_button: any, ...__args: never[]): any;

      onLoseJoypadFocus(...__args: never[]): any;

      onToggleVisible(...__args: never[]): any;

      toggleForceAreaTooltip(...__args: never[]): any;

      toggleForceVisionTooltip(...__args: never[]): any;

      update(...__args: never[]): any;

      updateSearchFocusCategories(...__args: never[]): any;

      /** @noSelf */
      static createUI: (_player: any, ...__args: never[]) => any;

      /** @noSelf */
      static destroyUI: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static onEnableSearchMode: (_character: any, _isSearchMode: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnFillWorldObjectContextMenu: (_player: any, _context: any, ...__args: never[]) => any;

      /** @noSelf */
      static showWindow: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static toggleWindow: (_character: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Foraging.ISSearchWindow {}
}
