/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISToggleStoveAction:new */
    export class ISToggleStoveAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      object: any;

      constructor(character: any, object: any);
    }
  }
  export namespace lua.client.TimedActions.ISToggleStoveAction {}
}
