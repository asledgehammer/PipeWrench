/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISTakeEngineParts:new */
    export class ISTakeEngineParts extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      jobType: any;

      part: any;

      vehicle: any;

      constructor(character: any, part: any, item: any, time: any);

      getExtraLogData: (() => any) | any;
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISTakeEngineParts {}
}
