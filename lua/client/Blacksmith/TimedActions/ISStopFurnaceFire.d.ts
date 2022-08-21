/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISStopFurnaceFire:new */
    export class ISStopFurnaceFire extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      furnace: any;

      constructor(furnace: any, character: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISStopFurnaceFire {}
}
