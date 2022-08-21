/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.BuildingObjects.TimedActions {
    /** @customConstructor ISRemoveLightSourceFuelAction:new */
    export class ISRemoveLightSourceFuelAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      lightSource: any;

      constructor(character: any, lightSource: any, time: any);
    }
  }
  export namespace lua.client.BuildingObjects.TimedActions.ISRemoveLightSourceFuelAction {}
}
