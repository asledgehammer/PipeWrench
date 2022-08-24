/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISSitOnChairAction:new */
    export class ISSitOnChairAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      item: any;

      constructor(character: any, item: any);
    }
  }
  export namespace lua.client.TimedActions.ISSitOnChairAction {}
}
