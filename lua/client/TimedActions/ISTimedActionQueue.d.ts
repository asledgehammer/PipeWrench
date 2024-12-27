/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISTimedActionQueue:new */
    export class ISTimedActionQueue extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      current: any;

      queue: any;

      constructor(character: any);

      addToQueue(action: any, ...__args: never[]): any;

      cancelQueue(...__args: never[]): any;

      clearQueue(...__args: never[]): any;

      indexOf(action: any, ...__args: never[]): any;

      indexOfType(type: any, ...__args: never[]): any;

      isCurrentActionAddingOtherActions(...__args: never[]): any;

      onCompleted(action: any, ...__args: never[]): any;

      removeFromQueue(action: any, ...__args: never[]): any;

      resetQueue(...__args: never[]): any;

      tick(...__args: never[]): any;

      /** @noSelf */
      static add: (action: any, ...__args: never[]) => any;

      /** @noSelf */
      static addAfter: (previousAction: any, action: any, ...__args: never[]) => any;

      /** @noSelf */
      static addGetUpAndThen: (character: any, action: any, ...__args: never[]) => any;

      /** @noSelf */
      static clear: (character: any, ...__args: never[]) => any;

      /** @noSelf */
      static getTimedActionQueue: (character: any, ...__args: never[]) => any;

      /** @noSelf */
      static hasAction: (action: any, ...__args: never[]) => any;

      /** @noSelf */
      static hasActionType: (character: any, type: any, ...__args: never[]) => any;

      /** @noSelf */
      static isPlayerDoingAction: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTick: (...__args: never[]) => any;

      /** @noSelf */
      static queueActions: (
        character: any,
        addActionsFunction: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        arg6: any,
        arg7: any,
        arg8: any,
        arg9: any,
        arg10: any,
        ...__args: never[]
      ) => any;
    }
  }
  export namespace lua.client.TimedActions.ISTimedActionQueue {}
}
