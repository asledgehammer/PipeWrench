/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Farming.TimedActions {
    /** @customConstructor ISPlowAction:new */
    export class ISPlowAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      gridSquare: any;

      item: any;

      sound: any;

      constructor(character: any, square: any, item: any, time: any);
    }
  }
  export namespace lua.client.Farming.TimedActions.ISPlowAction {}
}
