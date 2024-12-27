/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Camping.TimedActions {
    /** @customConstructor ISLightFromLiterature:new */
    export class ISLightFromLiterature extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      campfire: any;

      fuelAmt: any;

      item: any;

      lighter: any;

      sound: any;

      constructor(character: any, item: any, lighter: any, campfire: any, fuelAmt: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Camping.TimedActions.ISLightFromLiterature {}
}
