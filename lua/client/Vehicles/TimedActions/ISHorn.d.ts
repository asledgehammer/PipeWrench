/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.TimedActions {
    /** @customConstructor ISHorn:new */
    export class ISHorn extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      t: any;

      constructor(character: any);
    }
  }
  export namespace lua.client.Vehicles.TimedActions.ISHorn {}
}
