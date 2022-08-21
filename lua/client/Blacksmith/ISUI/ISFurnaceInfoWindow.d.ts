/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      setObject: ((object: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.Blacksmith.ISUI.ISFurnaceInfoWindow {}
}
