/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISAddFuel:new */
    export class ISAddFuel extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fluidCont: any;

      generator: any;

      petrol: any;

      sound: any;

      constructor(character: any, generator: any, petrol: any, maxTime: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISAddFuel {}
}
