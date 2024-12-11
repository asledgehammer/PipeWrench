/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISConsolidateDrainable:new */
    export class ISConsolidateDrainable extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      drainable: any;

      fromStart: any;

      fromTarget: any;

      intoItem: any;

      intoStart: any;

      intoTarget: any;

      otherItems: any;

      playerNum: any;

      constructor(character: any, drainable: any, intoItem: any, time: any, otherItems: any);

      nextItem(...__args: never[]): any;

      runAgain(drainable: any, intoItem: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.TimedActions.ISConsolidateDrainable {}
}
