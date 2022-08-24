/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISTimedActionQueue:new */
    export class ISTimedActionQueue extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      current: any;

      queue: any;

      constructor(character: any);

      addToQueue: ((action: any) => any) | any;

      clearQueue: (() => any) | any;

      indexOf: ((action: any) => any) | any;

      onCompleted: ((action: any) => any) | any;

      removeFromQueue: ((action: any) => any) | any;

      resetQueue: (() => any) | any;

      tick: (() => any) | any;

      /** @noSelf */
      static add: (action: any) => any;

      /** @noSelf */
      static addAfter: (previousAction: any, action: any) => any;

      /** @noSelf */
      static clear: (character: any) => any;

      /** @noSelf */
      static getTimedActionQueue: (character: any) => any;

      /** @noSelf */
      static hasAction: (action: any) => any;

      /** @noSelf */
      static isPlayerDoingAction: (playerObj: any) => any;

      /** @noSelf */
      static onTick: () => any;

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
        arg10: any
      ) => any;
    }
  }
  export namespace lua.client.TimedActions.ISTimedActionQueue {}
}
