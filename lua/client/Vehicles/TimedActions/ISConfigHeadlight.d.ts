/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISConfigHeadlight:new */
    export class ISConfigHeadlight extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      dir: any;

      part: any;

      vehicle: any;

      constructor(character: any, part: any, dir: any, time: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISConfigHeadlight {}
}
