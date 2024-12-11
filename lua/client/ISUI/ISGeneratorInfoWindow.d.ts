/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISGeneratorInfoWindow:new */
    export class ISGeneratorInfoWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      condition: any;

      drawJoypadFocus: any;

      fuel: any;

      object: any;

      panel: any;

      playerNum: any;

      constructor(x: any, y: any, character: any, object: any);

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      setObject(object: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static getRichText: (object: any, displayStats: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISGeneratorInfoWindow {}
}
