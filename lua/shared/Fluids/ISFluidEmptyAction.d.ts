/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Fluids {
    /** @customConstructor ISFluidEmptyAction:new */
    export class ISFluidEmptyAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      amount: any;

      container: any;

      containerObject: any;

      sound: any;

      constructor(character: any, containerObject: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Fluids.ISFluidEmptyAction {}
}
