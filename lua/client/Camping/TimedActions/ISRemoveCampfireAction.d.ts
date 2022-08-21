/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Camping.TimedActions {
    /** @customConstructor ISRemoveCampfireAction:new */
    export class ISRemoveCampfireAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      campfire: any;

      constructor(character: any, campfire: any, time: any);
    }
  }
  export namespace lua.client.Camping.TimedActions.ISRemoveCampfireAction {}
}
