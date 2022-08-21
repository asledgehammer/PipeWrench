/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISBBQExtinguish:new */
    export class ISBBQExtinguish extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bbq: any;

      constructor(character: any, bbq: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISBBQExtinguish {}
}
