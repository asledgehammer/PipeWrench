/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Farming.TimedActions {
    /** @customConstructor ISFertilizeAction:new */
    export class ISFertilizeAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      plant: any;

      sound: any;

      constructor(character: any, item: any, plant: any, maxTime: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Farming.TimedActions.ISFertilizeAction {}
}
