/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISDismantleAction:new */
    export class ISDismantleAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      thumpable: any;

      constructor(character: any, thumpable: any);
    }
  }
  export namespace lua.client.TimedActions.ISDismantleAction {}
}
