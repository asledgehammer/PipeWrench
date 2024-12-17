/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.TimedActions {
    /** @customConstructor ISChopTreeAction:new */
    export class ISChopTreeAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      axe: any;

      forceProgressBar: any;

      spriteFrame: any;

      tree: any;

      constructor(character: any, tree: any);

      animEvent(event: any, parameter: any, ...__args: never[]): any;

      complete(...__args: never[]): any;

      serverStart(...__args: never[]): any;

      useEndurance(...__args: never[]): any;
    }
  }
  export namespace lua.shared.TimedActions.ISChopTreeAction {}
}
