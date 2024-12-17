/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Farming.TimedActions {
    /** @customConstructor ISPlowAction:new */
    export class ISPlowAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      gridSquare: any;

      item: any;

      sound: any;

      constructor(character: any, gridSquare: any, item: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Farming.TimedActions.ISPlowAction {}
}
