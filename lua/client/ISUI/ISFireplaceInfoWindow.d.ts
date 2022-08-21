/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISFireplaceInfoWindow:new */
    export class ISFireplaceInfoWindow extends lua.client.ISUI.ISCollapsableWindow {
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

      constructor(x: any, y: any, character: any, fireplace: any);

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      setObject: ((fireplace: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISFireplaceInfoWindow {}
}
