/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISRemoveMeatFromAnimal:new */
    export class ISRemoveMeatFromAnimal extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      body: any;

      hook: any;

      luaHook: any;

      perkLevel: any;

      constructor(character: any, body: any, hook: any, luaHook: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISRemoveMeatFromAnimal {}
}
