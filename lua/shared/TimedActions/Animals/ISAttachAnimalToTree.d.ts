/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions.Animals {
    /** @customConstructor ISAttachAnimalToTree:new */
    export class ISAttachAnimalToTree extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      animal: any;

      remove: any;

      sound: any;

      tree: any;

      constructor(character: any, animal: any, tree: any, remove: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.Animals.ISAttachAnimalToTree {}
}
