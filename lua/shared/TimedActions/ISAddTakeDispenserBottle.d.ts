/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISAddTakeDispenserBottle:new */
    export class ISAddTakeDispenserBottle extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      bottle: any;

      square: any;

      waterdispenser: any;

      constructor(character: any, waterdispenser: any, bottle: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISAddTakeDispenserBottle {}
}
