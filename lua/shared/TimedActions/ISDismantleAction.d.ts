/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISDismantleAction:new */
    export class ISDismantleAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      thumpable: any;

      constructor(character: any, thumpable: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISDismantleAction {}
}
