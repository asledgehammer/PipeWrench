/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWM:new */
    export class RWM extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      device: any;

      fontheight: any;

      player: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      readFromObject(_player: any, _deviceObject: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWM {}
}
