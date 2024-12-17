/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISDrinkFromBottle:new */
    export class ISDrinkFromBottle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      eatAudio: any;

      eatSound: any;

      ignoreHandsWounds: any;

      item: any;

      tick: any;

      uses: any;

      constructor(character: any, item: any, uses: any);

      complete(...__args: never[]): any;

      drink(food: any, percentage: any, ...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISDrinkFromBottle {}
}
