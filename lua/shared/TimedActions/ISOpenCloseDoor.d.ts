/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISOpenCloseDoor:new */
    export class ISOpenCloseDoor extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      ignoreHandsWounds: any;

      item: any;

      constructor(character: any, item: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISOpenCloseDoor {}
}
