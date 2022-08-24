/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
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

      playerNum: any;

      constructor(character: any, drainable: any, intoItem: any, time: any, otherItems: any);

      nextItem: (() => any) | any;

      runAgain: ((drainable: any, intoItem: any) => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISConsolidateDrainable {}
}
