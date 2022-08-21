/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISRemoveBush:new */
    export class ISRemoveBush extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      spriteFrame: any;

      square: any;

      wallVine: any;

      weapon: any;

      constructor(character: any, square: any, wallVine: any);

      animEvent: ((event: any, parameter: any) => any) | any;

      getBushObject: ((square: any) => any) | any;

      getWallVineObject: ((square: any) => any) | any;

      useEndurance: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISRemoveBush {}
}
