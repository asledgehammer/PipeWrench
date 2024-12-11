/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISBBQInfoWindow:new */
    export class ISBBQInfoWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      drawJoypadFocus: any;

      fuelAmount: any;

      isLit: any;

      object: any;

      panel: any;

      playerNum: any;

      spriteName: any;

      constructor(x: any, y: any, character: any, bbq: any);

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      setObject(bbq: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISBBQInfoWindow {}
}
