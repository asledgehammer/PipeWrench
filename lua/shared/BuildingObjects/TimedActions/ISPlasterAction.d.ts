/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.BuildingObjects.TimedActions {
    /** @customConstructor ISPlasterAction:new */
    export class ISPlasterAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      plasterBucket: any;

      sound: any;

      thumpable: any;

      constructor(character: any, thumpable: any, plasterBucket: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.BuildingObjects.TimedActions.ISPlasterAction {}
}
