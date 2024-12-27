/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISDrinkFluidAction:new */
    export class ISDrinkFluidAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      eatAudio: any;

      eatSound: any;

      ignoreHandsWounds: any;

      item: any;

      percentage: any;

      useUtensil: any;

      constructor(character: any, item: any, percentage: any);

      complete(...__args: never[]): any;

      eat(food: any, percentage: any, ...__args: never[]): any;

      serverStop(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISDrinkFluidAction {}
}
