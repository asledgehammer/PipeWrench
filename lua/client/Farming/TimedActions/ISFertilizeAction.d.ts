/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Farming.TimedActions {
    /** @customConstructor ISFertilizeAction:new */
    export class ISFertilizeAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      plant: any;

      constructor(character: any, item: any, plant: any, time: any);
    }
  }
  export namespace lua.client.Farming.TimedActions.ISFertilizeAction {}
}
