/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISMilkAnimal:new */
    export class ISMilkAnimal extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      all: any;

      animal: any;

      bucket: any;

      lastTimer: any;

      milkAnim: any;

      timePerLiter: any;

      timer: any;

      constructor(character: any, animal: any, bucket: any, right: any, all: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      milk(...__args: never[]): any;

      serverStart(...__args: never[]): any;

      stress(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISMilkAnimal {}
}
