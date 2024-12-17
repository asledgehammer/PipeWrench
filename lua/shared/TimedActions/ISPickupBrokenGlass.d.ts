/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISPickupBrokenGlass:new */
    export class ISPickupBrokenGlass extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      glass: any;

      square: any;

      constructor(character: any, glass: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISPickupBrokenGlass {}
}
