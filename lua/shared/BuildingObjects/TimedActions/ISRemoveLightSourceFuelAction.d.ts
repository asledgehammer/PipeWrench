/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.BuildingObjects.TimedActions {
    /** @customConstructor ISRemoveLightSourceFuelAction:new */
    export class ISRemoveLightSourceFuelAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      lightSource: any;

      constructor(character: any, lightSource: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.BuildingObjects.TimedActions.ISRemoveLightSourceFuelAction {}
}
