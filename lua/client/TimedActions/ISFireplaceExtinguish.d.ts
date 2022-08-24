/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.TimedActions {
    /** @customConstructor ISFireplaceExtinguish:new */
    export class ISFireplaceExtinguish extends lua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      fireplace: any;

      constructor(character: any, fireplace: any, time: any);
    }
  }
  export namespace lua.client.TimedActions.ISFireplaceExtinguish {}
}
