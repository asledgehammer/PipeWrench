/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
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

      drink: ((food: any, percentage: any) => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISDrinkFromBottle {}
}
