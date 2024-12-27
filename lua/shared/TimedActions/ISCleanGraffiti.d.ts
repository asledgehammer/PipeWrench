/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISCleanGraffiti:new */
    export class ISCleanGraffiti extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      cleaner: any;

      object: any;

      sound: any;

      square: any;

      constructor(character: any, square: any, cleaner: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISCleanGraffiti {}
}
