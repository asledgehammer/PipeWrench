/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Entity.TimedActions {
    /** @customConstructor ISCraftAnimAction:new */
    export class ISCraftAnimAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      constructor(character: any, entity: any, component: any, craftProcessor: any, recipe: any);

      getCustomDelta(...__args: never[]): any;
    }
  }
  export namespace lua.shared.Entity.TimedActions.ISCraftAnimAction {}
}
