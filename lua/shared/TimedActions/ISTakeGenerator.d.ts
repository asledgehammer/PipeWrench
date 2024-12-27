/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISTakeGenerator:new */
    export class ISTakeGenerator extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      generator: any;

      constructor(character: any, generator: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISTakeGenerator {}
}
