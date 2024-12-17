/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Farming.TimedActions {
    /** @customConstructor ISSeedActionNew:new */
    export class ISSeedActionNew extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      plant: any;

      seed: any;

      sound: any;

      typeOfSeed: any;

      constructor(character: any, seed: any, typeOfSeed: any, plant: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Farming.TimedActions.ISSeedActionNew {}
}
