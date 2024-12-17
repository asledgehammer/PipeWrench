/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISDryMyself:new */
    export class ISDryMyself extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      serverStartTime: any;

      started: any;

      tick: any;

      timer: any;

      constructor(character: any, item: any);

      complete(...__args: never[]): any;

      serverStart(...__args: never[]): any;

      serverStop(...__args: never[]): any;

      syncItemUses(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISDryMyself {}
}
