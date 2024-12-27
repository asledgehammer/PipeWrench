/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI {
    /** @customConstructor ISBaseEntityWindow:new */
    export class ISBaseEntityWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      dirtyLayout: any;

      enableHeader: any;

      entity: any;

      entityHeader: any;

      entityUiStyle: any;

      hasClosedWindowInstance: any;

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

      xuiPreferredResizeHeight: any;

      xuiPreferredResizeWidth: any;

      xuiResizeAnchorRight: any;

      constructor(x: any, y: any, width: any, height: any, player: any, entity: any, entityUiStyle: any);

      createEntityHeader(
        _xuiSkin: any,
        _styleName: any,
        _force: any,
        _styleIcon: any,
        _styleLabel: any,
        _styleButton: any,
        ...__args: never[]
      ): any;

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
  export namespace lua.client.Entity.ISUI.ISBaseEntityWindow {}
}
