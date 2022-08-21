/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISDumpContentsAction:new */
    export class ISDumpContentsAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      sound: any;

      constructor(character: any, item: any, time: any);

      finalItem: ((itemType: any) => any) | any;

      stopSound: (() => any) | any;
    }
  }
  export namespace lua.client.TimedActions.ISDumpContentsAction {}
}
