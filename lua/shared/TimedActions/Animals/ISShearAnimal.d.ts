/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISShearAnimal:new */
    export class ISShearAnimal extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      animal: any;

      lastTimer: any;

      shear: any;

      timePerLiter: any;

      timer: any;

      constructor(character: any, animal: any, shear: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      serverStart(...__args: never[]): any;

      stress(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISShearAnimal {}
}
