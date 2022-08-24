/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFireplaceInfoAction:new */
    export class ISFireplaceInfoAction extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fireplace: any;

      playerNum: any;

      constructor(character: any, fireplace: any);
    }
  }
  export namespace lua.client.TimedActions.ISFireplaceInfoAction {}
}
