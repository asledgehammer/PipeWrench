/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISButcherAnimal:new */
    export class ISButcherAnimal extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      body: any;

      perkLevel: any;

      constructor(character: any, body: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISButcherAnimal {}
}
