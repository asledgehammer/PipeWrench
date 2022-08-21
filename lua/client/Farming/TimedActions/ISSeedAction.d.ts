/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Farming.TimedActions {
    /** @customConstructor ISSeedAction:new */
    export class ISSeedAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      nbOfSeed: any;

      plant: any;

      seeds: any;

      sound: any;

      typeOfSeed: any;

      constructor(character: any, seeds: any, nbOfSeed: any, typeOfSeed: any, plant: any, time: any);
    }
  }
  export namespace lua.client.Farming.TimedActions.ISSeedAction {}
}
