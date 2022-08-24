/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISCollapsableWindow:new */
    export class ISCollapsableWindow extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      clearStentil: any;

      closeButton: any;

      closeButtonTexture: any;

      collapseButton: any;

      collapseButtonTexture: any;

      collapseCounter: any;

      drawFrame: any;

      infoBtn: any;

      infoButton: any;

      infoRichText: any;

      infoText: any;

      invbasic: any;

      isCollapsed: any;

      pinButton: any;

      pinButtonTexture: any;

      resizable: any;

      resizeimage: any;

      resizeWidget: any;

      resizeWidget2: any;

      statusbarbkg: any;

      title: any;

      titlebarbkg: any;

      titleFont: any;

      titleFontHgt: any;

      viewList: any;

      widgetTextureColor: any;

      constructor(x: any, y: any, width: any, height: any);

      addView: ((view: any) => any) | any;

      collapse: (() => any) | any;

      createChildren: (() => any) | any;

      getTitle: (() => any) | any;

      getViews: (() => any) | any;

      onInfo: (() => any) | any;

      pin: (() => any) | any;

      render: (() => any) | any;

      resizeWidgetHeight: (() => any) | any;

      RestoreLayout: ((name: any, layout: any) => any) | any;

      SaveLayout: ((name: any, layout: any) => any) | any;

      setDrawFrame: ((visible: any) => any) | any;

      setInfo: ((text: any) => any) | any;

      setResizable: ((resizable: any) => any) | any;

      setTitle: ((title: any) => any) | any;

      titleBarHeight: (() => any) | any;

      uncollapse: (() => any) | any;

      /** @noSelf */
      static TitleBarHeight: () => any;
    }
  }
  export namespace lua.client.ISUI.ISCollapsableWindow {}
}
