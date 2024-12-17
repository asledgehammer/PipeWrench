/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Camping.TimedActions {
    /** @customConstructor ISPutOutCampfireAction:new */
    export class ISPutOutCampfireAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      campfire: any;

      constructor(character: any, campfire: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Camping.TimedActions.ISPutOutCampfireAction {}
}
