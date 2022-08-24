/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISOpenContainerTimedAction:new */
    export class ISOpenContainerTimedAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      container: any;

      x: any;

      y: any;

      constructor(character: any, container: any, time: any, x: any, y: any);
    }
  }
  export namespace lua.client.TimedActions.ISOpenContainerTimedAction {}
}
