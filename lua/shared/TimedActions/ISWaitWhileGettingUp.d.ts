/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISWaitWhileGettingUp:new */
    export class ISWaitWhileGettingUp extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      onCompleteArgs: any;

      onCompleteFunc: any;

      useProgressBar: any;

      constructor(character: any);

      complete(...__args: never[]): any;

      setOnComplete(
        func: any,
        p1: any,
        p2: any,
        p3: any,
        p4: any,
        p5: any,
        p6: any,
        p7: any,
        p8: any,
        p9: any,
        p10: any,
        undefined: any,
        ...__args: never[]
      ): any;
    }
  }
  export namespace lua.shared.TimedActions.ISWaitWhileGettingUp {}
}
