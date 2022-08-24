/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISLockDoors:new */
    export class ISLockDoors extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      locked: any;

      vehicle: any;

      constructor(character: any, vehicle: any, locked: any, time: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISLockDoors {}
}
