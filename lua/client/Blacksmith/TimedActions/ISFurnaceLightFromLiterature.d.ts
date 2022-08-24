/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISFurnaceLightFromLiterature:new */
    export class ISFurnaceLightFromLiterature extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fuelAmt: any;

      furnace: any;

      item: any;

      lighter: any;

      constructor(character: any, item: any, lighter: any, furnace: any, fuelAmt: any, time: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISFurnaceLightFromLiterature {}
}
