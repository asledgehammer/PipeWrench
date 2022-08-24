/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.RadioCom.RadioWindowModules {
    /** @customConstructor RWMSignal:new */
    export class RWMSignal extends lua.client.RadioCom.RadioWindowModules.RWMPanel {
      [id: string]: any;
      static [id: string]: any;

      addTestButton: any;

      cacheHeight: any;

      distanceStrWidth: any;

      distanceText: any;

      drawDistance: any;

      fontheight: any;

      incomingSignal: any;

      sineWaveDisplay: any;

      testButton: any;

      updCntr: any;

      constructor(x: any, y: any, width: any, height: any);

      doSignal: ((_time: any) => any) | any;

      setDefaultWave: (() => any) | any;
    }
  }
  export namespace lua.client.RadioCom.RadioWindowModules.RWMSignal {}
}
