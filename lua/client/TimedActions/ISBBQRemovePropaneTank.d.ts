/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBBQRemovePropaneTank:new */
    export class ISBBQRemovePropaneTank extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bbq: any;

      sound: any;

      constructor(character: any, bbq: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISBBQRemovePropaneTank {}
}
