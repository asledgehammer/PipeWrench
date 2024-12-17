/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISCutAnimalOnHook:new */
    export class ISCutAnimalOnHook extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      animalDef: any;

      body: any;

      bucket: any;

      hook: any;

      luaHook: any;

      perkLevel: any;

      xp: any;

      constructor(character: any, body: any, hook: any, luaHook: any, bucket: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISCutAnimalOnHook {}
}
