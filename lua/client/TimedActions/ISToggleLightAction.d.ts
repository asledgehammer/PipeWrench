/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISToggleLightAction:new */
    export class ISToggleLightAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      object: any;

      constructor(character: any, object: any);
    }
  }
  export namespace lua.client.TimedActions.ISToggleLightAction {}
}
