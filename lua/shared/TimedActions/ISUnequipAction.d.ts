/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISUnequipAction:new */
    export class ISUnequipAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ignoreHandsWounds: any;

      item: any;

      sound: any;

      constructor(character: any, item: any, maxTime: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISUnequipAction {}
}
