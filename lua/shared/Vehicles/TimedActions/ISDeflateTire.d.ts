/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Vehicles.TimedActions {
    /** @customConstructor ISDeflateTire:new */
    export class ISDeflateTire extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      jobType: any;

      part: any;

      psiSent: any;

      psiStart: any;

      psiTarget: any;

      vehicle: any;

      constructor(character: any, part: any, psiTarget: any);

      complete(...__args: never[]): any;

      serverStop(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Vehicles.TimedActions.ISDeflateTire {}
}
