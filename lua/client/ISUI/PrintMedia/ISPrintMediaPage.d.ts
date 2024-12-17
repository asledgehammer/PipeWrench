/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.PrintMedia {
    /** @customConstructor ISPrintMediaPage:new */
    export class ISPrintMediaPage extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      centerText: any;

      content: any;

      index: any;

      item: any;

      player: any;

      visibleFunction: any;

      visibleTarget: any;

      constructor(x: any, y: any, index: any, player: any, item: any);

      close(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      onToggleVisible(...__args: never[]): any;

      prerender(...__args: never[]): any;

      render(...__args: never[]): any;
    }

    /** @customConstructor ISPrintMediaRichText:new */
    export class ISPrintMediaRichText extends lua.client.ISUI.ISPrintMediaTextPanel {
      [id: string]: any;
      static [id: string]: any;

      printMedia: any;

      smoothScrollTargetY: any;

      smoothScrollY: any;

      yScrollDelta: any;

      constructor(x: any, y: any, width: any, height: any);

      onJoypadDirDown(joypadData: any, ...__args: never[]): any;

      onJoypadDirLeft(joypadData: any, ...__args: never[]): any;

      onJoypadDirRight(joypadData: any, ...__args: never[]): any;

      onJoypadDirUp(joypadData: any, ...__args: never[]): any;

      onJoypadDown(button: any, joypadData: any, ...__args: never[]): any;

      prerender(...__args: never[]): any;

      updateSmoothScrolling(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.PrintMedia.ISPrintMediaPage {}
}
