/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.BuildingObjects.TimedActions {
    /** @customConstructor ISMultiStageBuild:new */
    export class ISMultiStageBuild extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      sound: any;

      stage: any;

      constructor(character: any, stage: any, item: any);

      complete(...__args: never[]): any;

      consumeMaterial(...__args: never[]): any;
    }
  }
  export namespace lua.shared.BuildingObjects.TimedActions.ISMultiStageBuild {}
}
