/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISRestAction:new */
    export class ISRestAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bed: any;

      delayStart: any;

      forceProgressBar: any;

      mul: any;

      sideStr: any;

      useAnimations: any;

      constructor(character: any, bed: any, useAnimations: any);

      calculateSitOnFurnitureDirection(character: any, bed: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      furnitureHasSittingData(bed: any, ...__args: never[]): any;

      setBeforeSitDirection(...__args: never[]): any;

      setWhileSittingDirection(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISRestAction {}
}
