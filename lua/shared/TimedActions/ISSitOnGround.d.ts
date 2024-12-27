/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISSitOnGround:new */
    export class ISSitOnGround extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      useProgressBar: any;

      constructor(character: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISSitOnGround {}
}
