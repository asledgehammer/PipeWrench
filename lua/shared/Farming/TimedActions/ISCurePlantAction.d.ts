/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Farming.TimedActions {
    /** @customConstructor ISCurePlantAction:new */
    export class ISCurePlantAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      cure: any;

      item: any;

      plant: any;

      sound: any;

      uses: any;

      constructor(character: any, item: any, uses: any, plant: any, maxTime: any, cure: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Farming.TimedActions.ISCurePlantAction {}
}
