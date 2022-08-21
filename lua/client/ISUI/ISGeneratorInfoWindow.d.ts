/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      setObject: ((object: any) => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static getRichText: (object: any, displayStats: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISGeneratorInfoWindow {}
}
