/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Farming.TimedActions {
    /** @customConstructor ISHarvestPlantAction:new */
    export class ISHarvestPlantAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      plant: any;

      sound: any;

      constructor(character: any, plant: any, maxTime: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Farming.TimedActions.ISHarvestPlantAction {}
}
