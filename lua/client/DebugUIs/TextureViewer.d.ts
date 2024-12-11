/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor TextureWindow:new */
    export class TextureWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      renderPanel: any;

      tex: any;

      constructor(x: any, y: any, width: any, height: any, tex: any);

      renderTex(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.TextureViewer {}
}
