/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFireplaceLightFromLiterature:new */
    export class ISFireplaceLightFromLiterature extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fireplace: any;

      fuelAmt: any;

      item: any;

      lighter: any;

      sound: any;

      constructor(character: any, item: any, lighter: any, fireplace: any, fuelAmt: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISFireplaceLightFromLiterature {}
}
