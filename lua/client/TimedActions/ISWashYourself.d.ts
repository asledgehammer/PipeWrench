/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISWashYourself:new */
    export class ISWashYourself extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      forceProgressBar: any;

      sink: any;

      soaps: any;

      sound: any;

      constructor(character: any, sink: any, soapList: any);

      removeAllMakeup(...__args: never[]): any;

      removeMakeup(item: any, ...__args: never[]): any;

      stopSound(...__args: never[]): any;

      washPart(visual: any, part: any, ...__args: never[]): any;

      /** @noSelf */
      static GetRequiredSoap: (character: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetRequiredWater: (character: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.TimedActions.ISWashYourself {}
}
