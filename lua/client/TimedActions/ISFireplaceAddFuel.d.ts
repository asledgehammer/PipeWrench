/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFireplaceAddFuel:new */
    export class ISFireplaceAddFuel extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fireplace: any;

      fuelAmt: any;

      item: any;

      sound: any;

      constructor(character: any, fireplace: any, item: any, fuelAmt: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISFireplaceAddFuel {}
}
