/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMGridPower:new */
    export class RWMGridPower extends lua.client.RadioCom.RadioWindowModules.RWMPanel {
      [id: string]: any;
      static [id: string]: any;

      led: any;

      toggleOnOffButton: any;

      constructor(x: any, y: any, width: any, height: any);

      toggleOnOff(...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMGridPower {}
}
