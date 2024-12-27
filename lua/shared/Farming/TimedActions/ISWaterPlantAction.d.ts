/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Farming.TimedActions {
    /** @customConstructor ISWaterPlantAction:new */
    export class ISWaterPlantAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      deltaPerUse: any;

      item: any;

      sound: any;

      sq: any;

      uses: any;

      usesUsed: any;

      constructor(character: any, item: any, uses: any, sq: any, maxTime: any);

      complete(...__args: never[]): any;

      useItemOneUnit(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Farming.TimedActions.ISWaterPlantAction {}
}
