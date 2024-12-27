/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Entity.TimedActions {
    /** @customConstructor ISStartCraftProcessorAction:new */
    export class ISStartCraftProcessorAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      component: any;

      craftProcessor: any;

      entity: any;

      constructor(character: any, entity: any, component: any, craftProcessor: any);
    }
  }
  export namespace lua.shared.Entity.TimedActions.ISStartCraftProcessorAction {}
}
