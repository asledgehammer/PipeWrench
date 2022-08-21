/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISPutOutFire:new */
    export class ISPutOutFire extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      squares: any;

      usesPerSquare: any;

      constructor(character: any, squares: any, item: any, usesPerSquare: any, time: any);

      useItem: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISPutOutFire {}
}
