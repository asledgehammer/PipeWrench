/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMMicrophone:new */
    export class RWMMicrophone extends lua.client.RadioCom.RadioWindowModules.RWMPanel {
      [id: string]: any;
      static [id: string]: any;

      fontheight: any;

      muteButton: any;

      muteState: any;

      constructor(x: any, y: any, width: any, height: any);

      onMuteButton(...__args: never[]): any;

      setMuteButtonText(...__args: never[]): any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMMicrophone {}
}
