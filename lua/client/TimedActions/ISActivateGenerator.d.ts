/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISActivateGenerator:new */
    export class ISActivateGenerator extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      activate: any;

      generator: any;

      constructor(character: any, generator: any, activate: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISActivateGenerator {}
}
