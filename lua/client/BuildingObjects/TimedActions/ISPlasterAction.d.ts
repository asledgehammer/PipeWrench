/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.BuildingObjects.TimedActions {
    /** @customConstructor ISPlasterAction:new */
    export class ISPlasterAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      plasterBucket: any;

      sound: any;

      thumpable: any;

      constructor(character: any, thumpable: any, plasterBucket: any, time: any);
    }
  }
  export namespace lua.client.BuildingObjects.TimedActions.ISPlasterAction {}
}
