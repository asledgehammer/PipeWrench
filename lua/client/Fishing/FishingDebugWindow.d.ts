/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Fishing {
    /** @customConstructor FishingDebugWindow:new */
    export class FishingDebugWindow extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      name: any;

      player: any;

      titlebarbkg: any;

      constructor(player: any);

      destroy(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      titleBarHeight(...__args: never[]): any;
    }
  }
  export namespace lua.client.Fishing.FishingDebugWindow {}
}
