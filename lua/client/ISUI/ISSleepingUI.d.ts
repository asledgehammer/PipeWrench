/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISSleepingUI:new */
    export class ISSleepingUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      hourOfDay: any;

      playerIndex: any;

      constructor(playerIndex: any);

      createChildren(...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onResolutionChange(...__args: never[]): any;

      onSleepingTick(hourOfDay: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnSleepingTick: (playerIndex: any, hourOfDay: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISSleepingUI {}
}
