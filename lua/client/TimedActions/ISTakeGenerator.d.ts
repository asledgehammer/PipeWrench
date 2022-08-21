/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISTakeGenerator:new */
    export class ISTakeGenerator extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      generator: any;

      constructor(character: any, generator: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISTakeGenerator {}
}
