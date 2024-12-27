/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISPlumbItem:new */
    export class ISPlumbItem extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      itemToPipe: any;

      sound: any;

      wrench: any;

      constructor(character: any, itemToPipe: any, wrench: any);

      complete(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISPlumbItem {}
}
