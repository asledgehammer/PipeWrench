/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISBBQLightFromPetrol:new */
    export class ISBBQLightFromPetrol extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bbq: any;

      lighter: any;

      petrol: any;

      sound: any;

      constructor(character: any, bbq: any, lighter: any, petrol: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISBBQLightFromPetrol {}
}
