/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISFixAction:new */
    export class ISFixAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fixer: any;

      fixerNum: any;

      fixing: any;

      fixingNum: any;

      item: any;

      jobType: any;

      constructor(character: any, item: any, fixingNum: any, fixerNum: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISFixAction {}
}
