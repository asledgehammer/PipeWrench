/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Blacksmith.TimedActions {
    /** @customConstructor ISFurnaceLightFromPetrol:new */
    export class ISFurnaceLightFromPetrol extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      furnace: any;

      lighter: any;

      petrol: any;

      constructor(character: any, furnace: any, lighter: any, petrol: any, time: any);
    }
  }
  export namespace lua.client.Blacksmith.TimedActions.ISFurnaceLightFromPetrol {}
}
