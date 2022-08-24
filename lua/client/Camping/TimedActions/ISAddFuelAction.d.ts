/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Camping.TimedActions {
    /** @customConstructor ISAddFuelAction:new */
    export class ISAddFuelAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      campfire: any;

      fuelAmt: any;

      item: any;

      sound: any;

      constructor(character: any, campfire: any, item: any, fuelAmt: any, time: any);
    }
  }
  export namespace lua.client.Camping.TimedActions.ISAddFuelAction {}
}
