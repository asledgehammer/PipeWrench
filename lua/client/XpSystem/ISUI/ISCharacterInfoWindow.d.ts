/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      isActive(viewName: any, ...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      onTabTornOff(view: any, window: any, ...__args: never[]): any;

      toggleView(viewName: any, ...__args: never[]): any;

      /** @noSelf */
      static OnClothingUpdated: (chr: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.XpSystem.ISUI.ISCharacterInfoWindow {}
}
