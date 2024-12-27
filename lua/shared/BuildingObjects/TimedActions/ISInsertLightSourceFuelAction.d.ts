/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.BuildingObjects.TimedActions {
    /** @customConstructor ISInsertLightSourceFuelAction:new */
    export class ISInsertLightSourceFuelAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fuel: any;

      lightSource: any;

      constructor(character: any, lightSource: any, fuel: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.BuildingObjects.TimedActions.ISInsertLightSourceFuelAction {}
}
