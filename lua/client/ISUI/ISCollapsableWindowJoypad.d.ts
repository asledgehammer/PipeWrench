/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISCollapsableWindowJoypad:new */
    export class ISCollapsableWindowJoypad extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      clearStentil: any;

      closeButtonTexture: any;

      collapseButtonTexture: any;

      collapseCounter: any;

      drawFrame: any;

      infoBtn: any;

      invbasic: any;

      isCollapsed: any;

      pin: any;

      pinButtonTexture: any;

      resizable: any;

      resizeimage: any;

      statusbarbkg: any;

      title: any;

      titlebarbkg: any;

      titleFont: any;

      titleFontHgt: any;

      viewList: any;

      widgetTextureColor: any;

      constructor(x: any, y: any, width: any, height: any);
    }
  }
  export namespace lua.client.ISUI.ISCollapsableWindowJoypad {}
}
