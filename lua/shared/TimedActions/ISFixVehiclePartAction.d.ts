/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISFixVehiclePartAction:new */
    export class ISFixVehiclePartAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fixer: any;

      fixerNum: any;

      fixing: any;

      fixingNum: any;

      item: any;

      jobType: any;

      vehiclePart: any;

      constructor(character: any, vehiclePart: any, fixingNum: any, fixerNum: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISFixVehiclePartAction {}
}
