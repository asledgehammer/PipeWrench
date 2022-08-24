/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBBQInsertPropaneTank:new */
    export class ISBBQInsertPropaneTank extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bbq: any;

      sound: any;

      tank: any;

      constructor(character: any, bbq: any, tank: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISBBQInsertPropaneTank {}
}
