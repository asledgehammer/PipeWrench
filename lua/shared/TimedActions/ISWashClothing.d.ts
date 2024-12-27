/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISWashClothing:new */
    export class ISWashClothing extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bloodAmount: any;

      dirtAmount: any;

      forceProgressBar: any;

      item: any;

      noSoap: any;

      sink: any;

      soaps: any;

      sound: any;

      constructor(character: any, sink: any, soaps: any, item: any, bloodAmount: any, dirtAmount: any, noSoap: any);

      complete(...__args: never[]): any;

      stopSound(...__args: never[]): any;

      useSoap(item: any, part: any, ...__args: never[]): any;

      /** @noSelf */
      static GetRequiredSoap: (item: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetRequiredWater: (item: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetSoapRemaining: (soaps: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.TimedActions.ISWashClothing {}
}
