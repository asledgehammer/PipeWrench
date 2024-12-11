/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addView(view: any, ...__args: never[]): any;

      collapse(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      getTitle(...__args: never[]): any;

      getViews(...__args: never[]): any;

      onInfo(...__args: never[]): any;

      pin(...__args: never[]): any;

      render(...__args: never[]): any;

      resizeWidgetHeight(...__args: never[]): any;

      RestoreLayout(name: any, layout: any, ...__args: never[]): any;

      SaveLayout(name: any, layout: any, ...__args: never[]): any;

      setDrawFrame(visible: any, ...__args: never[]): any;

      setInfo(text: any, ...__args: never[]): any;

      setResizable(resizable: any, ...__args: never[]): any;

      setTitle(title: any, ...__args: never[]): any;

      titleBarHeight(...__args: never[]): any;

      uncollapse(...__args: never[]): any;

      /** @noSelf */
      static TitleBarHeight: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISCollapsableWindow {}
}
