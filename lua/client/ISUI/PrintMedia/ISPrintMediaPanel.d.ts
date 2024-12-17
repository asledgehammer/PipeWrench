/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.PrintMedia {
    /** @customConstructor ISPrintMediaListBox:new */
    export class ISPrintMediaListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;
    }

    /** @customConstructor ISPrintMediaPanel:new */
    export class ISPrintMediaPanel extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      chapterList: any;

      content: any;

      panel: any;

      tutorialSetInfo: any;

      visibleFunction: any;

      visibleTarget: any;

      constructor(x: any, y: any, width: any, height: any);

      close(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      fillChapterList(...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      onToggleVisible(...__args: never[]): any;

      prerender(...__args: never[]): any;

      reload(...__args: never[]): any;

      render(...__args: never[]): any;

      setPage(pageNum: any, ...__args: never[]): any;

      setUseJoypad(useJoypad: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.PrintMedia.ISPrintMediaPanel {}
}
