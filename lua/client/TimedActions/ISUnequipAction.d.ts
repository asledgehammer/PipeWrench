/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISUnequipAction:new */
    export class ISUnequipAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      hotbar: any;

      ignoreHandsWounds: any;

      item: any;

      sound: any;

      useProgressBar: any;

      constructor(character: any, item: any, time: any);

      animEvent: ((event: any, parameter: any) => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISUnequipAction {}
}
