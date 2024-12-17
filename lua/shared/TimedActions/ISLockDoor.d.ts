/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISLockDoor:new */
    export class ISLockDoor extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      door: any;

      lock: any;

      constructor(character: any, door: any, lock: any);

      complete(...__args: never[]): any;

      getSoundPrefix(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISLockDoor {}
}
