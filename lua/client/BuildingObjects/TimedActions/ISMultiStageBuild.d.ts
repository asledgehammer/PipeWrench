/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.BuildingObjects.TimedActions {
    /** @customConstructor ISMultiStageBuild:new */
    export class ISMultiStageBuild extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      sound: any;

      stage: any;

      constructor(character: any, stage: any, item: any, time: any);

      consumeMaterial: (() => any) | any;
    }
  }
  export namespace lua.client.BuildingObjects.TimedActions.ISMultiStageBuild {}
}
