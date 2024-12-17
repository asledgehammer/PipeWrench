/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISGetOnBedAction:new */
    export class ISGetOnBedAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bed: any;

      forceProgressBar: any;

      constructor(character: any, bed: any);

      setBeforeSitDirection(...__args: never[]): any;

      setWhileSittingDirection(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISGetOnBedAction {}
}
