/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISHutchGrabEgg:new */
    export class ISHutchGrabEgg extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      hutch: any;

      lastTimer: any;

      timePerEgg: any;

      timer: any;

      constructor(character: any, nestbox: any, hutch: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      serverStart(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISHutchGrabEgg {}
}
