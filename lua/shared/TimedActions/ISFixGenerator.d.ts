/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISFixGenerator:new */
    export class ISFixGenerator extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      generator: any;

      sound: any;

      constructor(character: any, generator: any);

      complete(...__args: never[]): any;

      continueFixing(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISFixGenerator {}
}
