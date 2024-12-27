/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Camping.TimedActions {
    /** @customConstructor ISLightFromPetrol:new */
    export class ISLightFromPetrol extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      campfire: any;

      lighter: any;

      petrol: any;

      constructor(character: any, campfire: any, lighter: any, petrol: any, maxTime: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Camping.TimedActions.ISLightFromPetrol {}
}
