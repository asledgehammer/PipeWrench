/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISToggleClothingWasher:new */
    export class ISToggleClothingWasher extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      object: any;

      constructor(character: any, object: any);
    }
  }
  export namespace lua.client.TimedActions.ISToggleClothingWasher {}
}
