/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISWashClothing:new */
    export class ISWashClothing extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      forceProgressBar: any;

      item: any;

      noSoap: any;

      sink: any;

      soaps: any;

      sound: any;

      constructor(character: any, sink: any, soapList: any, item: any, bloodAmount: any, dirtAmount: any, noSoap: any);

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
  export namespace lua.client.TimedActions.ISWashClothing {}
}
