/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWM:new */
    export class RWM extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      device: any;

      fontheight: any;

      player: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      readFromObject: ((_player: any, _deviceObject: any) => any) | any;

      render: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWM {}
}
