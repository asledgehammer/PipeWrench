/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISAddWaterFromItemAction:new */
    export class ISAddWaterFromItemAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      addUnits: any;

      itemFrom: any;

      itemFromEndingDelta: any;

      itemFromStartDelta: any;

      objectTo: any;

      sound: any;

      constructor(character: any, itemFrom: any, objectTo: any);

      complete(...__args: never[]): any;

      serverStop(...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISAddWaterFromItemAction {}
}
