/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISToggleLightAction:new */
    export class ISToggleLightAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      object: any;

      useProgressBar: any;

      constructor(character: any, object: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISToggleLightAction {}
}
