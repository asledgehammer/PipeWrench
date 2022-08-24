/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISLockDoor:new */
    export class ISLockDoor extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      door: any;

      lock: any;

      constructor(character: any, door: any, lock: any);

      getSoundPrefix: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISLockDoor {}
}
