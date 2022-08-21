/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISSetComboWasherDryerMode:new */
    export class ISSetComboWasherDryerMode extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      mode: any;

      object: any;

      constructor(character: any, object: any, mode: any);
    }
  }
  export namespace lua.client.TimedActions.ISSetComboWasherDryerMode {}
}
