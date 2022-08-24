/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISOpenMechanicsUIAction:new */
    export class ISOpenMechanicsUIAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      usedHood: any;

      vehicle: any;

      constructor(character: any, vehicle: any, usedHood: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISOpenMechanicsUIAction {}
}
