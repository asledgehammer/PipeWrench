/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISConsolidateDrainable:new */
    export class ISConsolidateDrainable extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      drainable: any;

      fromStart: any;

      fromTarget: any;

      intoItem: any;

      intoStart: any;

      intoTarget: any;

      otherItems: any;

      constructor(character: any, drainable: any, intoItem: any, otherItems: any);

      complete(...__args: never[]): any;

      nextItem(...__args: never[]): any;

      runAgain(drainable: any, intoItem: any, ...__args: never[]): any;

      serverStop(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISConsolidateDrainable {}
}
