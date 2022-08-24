/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISChopTreeAction:new */
    export class ISChopTreeAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      axe: any;

      forceProgressBar: any;

      spriteFrame: any;

      tree: any;

      constructor(character: any, tree: any);

      animEvent: ((event: any, parameter: any) => any) | any;

      useEndurance: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISChopTreeAction {}
}
