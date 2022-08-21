/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Farming.TimedActions {
    /** @customConstructor ISHarvestPlantAction:new */
    export class ISHarvestPlantAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      plant: any;

      sound: any;

      constructor(character: any, plant: any, time: any);
    }
  }
  export namespace lua.client.Farming.TimedActions.ISHarvestPlantAction {}
}
