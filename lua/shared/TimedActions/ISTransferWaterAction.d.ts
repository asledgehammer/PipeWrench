/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISTransferWaterAction:new */
    export class ISTransferWaterAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      itemFrom: any;

      itemFromBeginDelta: any;

      itemFromEndingDelta: any;

      itemTo: any;

      itemToEndingDelta: any;

      constructor(character: any, itemFrom: any, itemTo: any, itemFromEndingDelta: any, itemToEndingDelta: any);

      complete(...__args: never[]): any;

      serverStart(...__args: never[]): any;

      serverStop(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISTransferWaterAction {}
}
