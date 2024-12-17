/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Vehicles.TimedActions {
    /** @customConstructor ISTakeEngineParts:new */
    export class ISTakeEngineParts extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      jobType: any;

      part: any;

      vehicle: any;

      constructor(character: any, part: any, item: any, maxTime: any);

      complete(...__args: never[]): any;

      getExtraLogData(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Vehicles.TimedActions.ISTakeEngineParts {}
}
