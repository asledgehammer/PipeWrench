/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Fishing.TimedActions {
    /** @customConstructor CreateChumFromGroundSandAction:new */
    export class CreateChumFromGroundSandAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      square: any;

      constructor(character: any, square: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Fishing.TimedActions.CreateChumFromGroundSandAction {}
}
