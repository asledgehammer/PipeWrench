/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISTakePillAction:new */
    export class ISTakePillAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      constructor(character: any, item: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISTakePillAction {}
}
