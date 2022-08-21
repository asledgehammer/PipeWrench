/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Camping.ISUI {
    /** @customConstructor ISCampingInfoWindow:new */
    export class ISCampingInfoWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      campfireTable: any;

      character: any;

      drawJoypadFocus: any;

      fuelAmount: any;

      isLit: any;

      object: any;

      panel: any;

      playerNum: any;

      spriteName: any;

      constructor(x: any, y: any, character: any, campfireObject: any, campfireTable: any);

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      setObject: ((campfireObject: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.Camping.ISUI.ISCampingInfoWindow {}
}
