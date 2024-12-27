/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISPickupDung:new */
    export class ISPickupDung extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      radius: any;

      sq: any;

      constructor(character: any, item: any, sq: any, radius: any);

      complete(...__args: never[]): any;

      pickUpDung(sq: any, ...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISPickupDung {}
}
