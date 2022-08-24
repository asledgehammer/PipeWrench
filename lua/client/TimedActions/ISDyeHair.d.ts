/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISDyeHair:new */
    export class ISDyeHair extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      beard: any;

      hairDye: any;

      constructor(character: any, hairDye: any, beard: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISDyeHair {}
}
