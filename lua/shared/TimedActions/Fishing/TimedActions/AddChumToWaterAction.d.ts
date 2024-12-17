/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Fishing.TimedActions {
    /** @customConstructor AddChumToWaterAction:new */
    export class AddChumToWaterAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      chum: any;

      square: any;

      constructor(character: any, chum: any, square: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Fishing.TimedActions.AddChumToWaterAction {}
}
