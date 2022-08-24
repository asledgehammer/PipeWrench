/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISCleanBandage:new */
    export class ISCleanBandage extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      recipe: any;

      result: any;

      waterObject: any;

      constructor(character: any, item: any, waterObject: any, recipe: any);
    }
  }
  export namespace lua.client.TimedActions.ISCleanBandage {}
}
