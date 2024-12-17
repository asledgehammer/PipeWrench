/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Building {
    /** @customConstructor ISBuildWindow:new */
    export class ISBuildWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      BuildPanel: any;

      dirtyLayout: any;

      enableHeader: any;

      hasClosedWindowInstance: any;

      isoObject: any;

      maximumHeight: any;

      maximumHeightPercent: any;

      maximumWidth: any;

      minimumHeight: any;

      minimumWidth: any;

      overrideBPrompt: any;

      panelCloseDistance: any;

      pin: any;

      player: any;

      playerNum: any;

      queryOverride: any;

      windowHeader: any;

      xuiPreferredResizeHeight: any;

      xuiPreferredResizeWidth: any;

      xuiResizeAnchorRight: any;

      constructor(x: any, y: any, width: any, height: any, player: any, isoObject: any, queryOverride: any);

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      stayOnSplitScreen(...__args: never[]): any;

      update(...__args: never[]): any;

      validateSizeBounds(...__args: never[]): any;

      xuiRecalculateLayout(
        _preferredWidth: any,
        _preferredHeight: any,
        _force: any,
        _anchorRight: any,
        ...__args: never[]
      ): any;
    }
  }
  export namespace lua.client.ISUI.Building.ISBuildWindow {}
}
