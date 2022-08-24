/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISConsolidateDrainableAll:new */
    export class ISConsolidateDrainableAll extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      consolidateList: any;

      drainable: any;

      constructor(character: any, drainable: any, consolidateList: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISConsolidateDrainableAll {}
}
