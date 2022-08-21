/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISWashClothing:new */
    export class ISWashClothing extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      forceProgressBar: any;

      item: any;

      noSoap: any;

      sink: any;

      soaps: any;

      sound: any;

      constructor(character: any, sink: any, soapList: any, item: any, bloodAmount: any, dirtAmount: any, noSoap: any);

      stopSound: (() => any) | any;

      useSoap: ((item: any, part: any) => any) | any;

      /** @noSelf */
      static GetRequiredSoap: (item: any) => any;

      /** @noSelf */
      static GetRequiredWater: (item: any) => any;

      /** @noSelf */
      static GetSoapRemaining: (soaps: any) => any;
    }
  }
  export namespace lua.client.TimedActions.ISWashClothing {}
}
