/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISCutHair:new */
    export class ISCutHair extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      hairStyle: any;

      item: any;

      sound: any;

      constructor(character: any, hairStyle: any, item: any, maxTime: any);

      complete(...__args: never[]): any;

      stopSound(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISCutHair {}
}
