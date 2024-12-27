/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Entity.TimedActions {
    /** @customConstructor ISGenericCraftStart:new */
    export class ISGenericCraftStart extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      component: any;

      entity: any;

      funcCanStart: any;

      funcStart: any;

      constructor(character: any, entity: any, component: any, funcCanStart: any, funcStart: any);
    }
  }
  export namespace lua.shared.Entity.TimedActions.ISGenericCraftStart {}
}
