/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISRemoveGrass:new */
    export class ISRemoveGrass extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      spriteFrame: any;

      square: any;

      constructor(character: any, square: any);
    }
  }
  export namespace lua.client.TimedActions.ISRemoveGrass {}
}
