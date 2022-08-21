/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.XpSystem.ISUI {
    /** @customConstructor ISCharacterInfoWindow:new */
    export class ISCharacterInfoWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      characterView: any;

      charScreen: any;

      clothingView: any;

      healthView: any;

      panel: any;

      playerNum: any;

      protectionView: any;

      visibleOnStartup: any;

      constructor(x: any, y: any, width: any, height: any, playerNum: any);

      isActive: ((viewName: any) => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onTabTornOff: ((view: any, window: any) => any) | any;

      toggleView: ((viewName: any) => any) | any;

      /** @noSelf */
      static OnClothingUpdated: (chr: any) => any;
    }
  }
  export namespace lua.client.XpSystem.ISUI.ISCharacterInfoWindow {}
}
