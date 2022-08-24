/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISAddWaterFromItemAction:new */
    export class ISAddWaterFromItemAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      addUnits: any;

      itemFrom: any;

      itemFromStartDelta: any;

      objectTo: any;

      sound: any;

      constructor(character: any, itemFrom: any, objectTo: any);

      stopSound: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISAddWaterFromItemAction {}
}
