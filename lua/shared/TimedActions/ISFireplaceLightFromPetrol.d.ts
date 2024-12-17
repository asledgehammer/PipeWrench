/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISFireplaceLightFromPetrol:new */
    export class ISFireplaceLightFromPetrol extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fireplace: any;

      lighter: any;

      petrol: any;

      sound: any;

      constructor(character: any, fireplace: any, lighter: any, petrol: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISFireplaceLightFromPetrol {}
}
