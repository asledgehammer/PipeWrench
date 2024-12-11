/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Blacksmith.ISUI {
    /** @customConstructor ISFurnaceInfoWindow:new */
    export class ISFurnaceInfoWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      drawJoypadFocus: any;

      fireStarted: any;

      fireStartedBool: any;

      fuel: any;

      heat: any;

      object: any;

      panel: any;

      playerNum: any;

      constructor(x: any, y: any, character: any, object: any);

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      setObject(object: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Blacksmith.ISUI.ISFurnaceInfoWindow {}
}
