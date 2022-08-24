/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFixGenerator:new */
    export class ISFixGenerator extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      generator: any;

      sound: any;

      constructor(character: any, generator: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISFixGenerator {}
}
