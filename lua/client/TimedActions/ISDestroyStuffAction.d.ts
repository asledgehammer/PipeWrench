/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISDestroyStuffAction:new */
    export class ISDestroyStuffAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      sledge: any;

      spriteFrame: any;

      constructor(character: any, item: any);

      animEvent: ((event: any, parameter: any) => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISDestroyStuffAction {}
}
