/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
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

      constructor(character: any, part: any, psi: any, time: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISDeflateTire {}
}
