/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISTransferWaterAction:new */
    export class ISTransferWaterAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      itemFrom: any;

      itemFromBeginDelta: any;

      itemFromEndingDelta: any;

      itemTo: any;

      itemToBeginDelta: any;

      itemToEndingDelta: any;

      constructor(character: any, itemFrom: any, itemTo: any, itemFromEndingDelta: any, itemToEndingDelta: any);
    }
  }
  export namespace lua.client.TimedActions.ISTransferWaterAction {}
}
