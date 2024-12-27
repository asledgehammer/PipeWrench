/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISPutOutFire:new */
    export class ISPutOutFire extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      squares: any;

      usesPerSquare: any;

      constructor(character: any, squares: any, item: any, usesPerSquare: any);

      complete(...__args: never[]): any;

      useItem(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISPutOutFire {}
}
