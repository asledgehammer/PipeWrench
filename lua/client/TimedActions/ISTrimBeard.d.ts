/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISTrimBeard:new */
    export class ISTrimBeard extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      beardStyle: any;

      item: any;

      constructor(character: any, beardStyle: any, item: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISTrimBeard {}
}
