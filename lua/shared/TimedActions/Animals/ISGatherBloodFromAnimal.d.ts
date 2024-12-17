/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISGatherBloodFromAnimal:new */
    export class ISGatherBloodFromAnimal extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      animalDef: any;

      body: any;

      bucket: any;

      hook: any;

      lastTimer: any;

      literPerTick: any;

      luaHook: any;

      perkLevel: any;

      timePerLiter: any;

      timer: any;

      xp: any;

      constructor(character: any, body: any, hook: any, luaHook: any, bucket: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISGatherBloodFromAnimal {}
}
