/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISAttachAnimalToPlayer:new */
    export class ISAttachAnimalToPlayer extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      animal: any;

      remove: any;

      sound: any;

      constructor(character: any, animal: any, remove: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISAttachAnimalToPlayer {}
}
