/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Camping.TimedActions {
    /** @customConstructor ISRemoveTentAction:new */
    export class ISRemoveTentAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      tent: any;

      constructor(character: any, tent: any, time: any);
    }
  }
  export namespace lua.client.Camping.TimedActions.ISRemoveTentAction {}
}
