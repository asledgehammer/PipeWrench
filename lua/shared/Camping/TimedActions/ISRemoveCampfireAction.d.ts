/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Camping.TimedActions {
    /** @customConstructor ISRemoveCampfireAction:new */
    export class ISRemoveCampfireAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      campfire: any;

      constructor(character: any, campfire: any, maxTime: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Camping.TimedActions.ISRemoveCampfireAction {}
}
