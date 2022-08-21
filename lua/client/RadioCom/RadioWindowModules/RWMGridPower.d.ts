/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMGridPower:new */
    export class RWMGridPower extends lua.client.RadioCom.RadioWindowModules.RWMPanel {
      [id: string]: any;
      static [id: string]: any;

      led: any;

      toggleOnOffButton: any;

      constructor(x: any, y: any, width: any, height: any);

      toggleOnOff: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMGridPower {}
}
