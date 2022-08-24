/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Camping.TimedActions {
    /** @customConstructor ISSleepInTentAction:new */
    export class ISSleepInTentAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      tent: any;

      constructor(character: any, tent: any, time: any);
    }
  }
  export namespace lua.client.Camping.TimedActions.ISSleepInTentAction {}
}
