/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Animal {
    /** @customConstructor ISButcheringDebugUI:new */
    export class ISButcheringDebugUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      butcherBtn: any;

      butcherText: any;

      carcass: any;

      chr: any;

      playerNum: any;

      refreshNeeded: any;

      constructor(x: any, y: any, width: any, height: any, carcass: any, player: any);

      butcher(...__args: never[]): any;

      create(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Animal.ISButcheringDebugUI {}
}
